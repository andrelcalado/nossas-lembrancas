// Core
import { headers } from "next/headers";
import { NextResponse } from "next/server";

// Libraries
import stripe from "../../../../lib/stripe";
import Stripe from "stripe";
import { doc, updateDoc } from "firebase/firestore";

// Auth
import { timelinesDB } from "@/auth/firebase";

const secret: string | undefined = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: Request) {
  try {
    const rawBody = await req.arrayBuffer();
    const body = Buffer.from(rawBody);
    const signature: string | null = headers().get("stripe-signature");

    if (!secret || !signature) {
      throw new Error("Missing secret or signature");
    }

    const event: Stripe.Event = stripe.webhooks.constructEvent(body, signature, secret);

    switch (event.type) {
      case "checkout.session.completed":
        if (event.data.object.payment_status === "paid") {
          const couplePath = event.data.object.metadata?.couplePath;
          const planPaid = event.data.object.metadata?.planName;

          if (!couplePath) {
            console.error("Erro: `couplePath` não está definido.");
            return;
          }

          await updateDoc(doc(timelinesDB, "timelines", couplePath), {
            planPaid,
            planPaidAt: new Date(),
          }).then(() => {
            console.log('timeline updated');
          }).catch((error) => {
            console.error('Error saving timeline: ', error);
          });

          console.log("Payment success by card", couplePath);
        }

        if (
          event.data.object.payment_status === "unpaid" &&
          event.data.object.payment_intent
        ) {
          // Pagamento por boleto
          const paymentIntent = await stripe.paymentIntents.retrieve(
            event.data.object.payment_intent.toString()
          );

          const hostedVoucherUrl =
            paymentIntent.next_action?.boleto_display_details
              ?.hosted_voucher_url;

          if (hostedVoucherUrl) {
            // O cliente gerou um boleto, manda um email pra ele
            const userEmail = event.data.object.customer_details?.email;
            console.log("gerou o boleto e o link é", hostedVoucherUrl);
            console.log('userEmail', userEmail);
          }
        }
        break;

      case "checkout.session.expired":
        if (event.data.object.payment_status === "unpaid") {
          // O cliente saiu do checkout e expirou :(
          const coupleID = event.data.object.metadata?.coupleID;
          console.log("checkout expirado", coupleID);
        }
        break;

      case "checkout.session.async_payment_succeeded":
        if (event.data.object.payment_status === "paid") {
          // O cliente pagou o boleto e o pagamento foi confirmado
          const coupleID = event.data.object.metadata?.coupleID;
          console.log("pagamento boleto confirmado", coupleID);
        }
        break;

      case "checkout.session.async_payment_failed":
        if (event.data.object.payment_status === "unpaid") {
          // O cliente não pagou o boleto e ele venceu :(
          const coupleID = event.data.object.metadata?.coupleID;
          console.log("pagamento boleto falhou", coupleID);
        }
        break;

      case "customer.subscription.deleted":
        // O cliente cancelou o plano :(
        break;

      default:
        console.log(`Evento não tratado: ${event.type}`);
    }

    return NextResponse.json({ result: event, ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: `Webhook error: ${error}`,
        ok: false,
      },
      { status: 500 }
    );
  }
}