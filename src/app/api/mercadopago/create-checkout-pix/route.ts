// Core
import { NextResponse } from "next/server";

// Libraries
import { Payment, MercadoPagoConfig } from 'mercadopago';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const client = new MercadoPagoConfig({ accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN as string });
    const payment = new Payment(client);

    const {
      transaction_amount,
      description,
      payment_method_id,
      email,
      couplePath,
      planName,      
    } = body;

    const generateIdempotencyKey = () => `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;

    let result;
    await payment.create({
      body: { 
        transaction_amount: transaction_amount,
        description: description,
        payment_method_id: payment_method_id,
            payer: {
              email: email,
            },
            metadata: {
              couplePath: couplePath,
              planName: planName,
            }
          },
      requestOptions: { idempotencyKey: generateIdempotencyKey() }
    })
    .then((res) => {
      result = res?.point_of_interaction?.transaction_data?.ticket_url;
    })
    .catch((error) => {
      result = error;
    });

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error("Erro ao criar pagamento:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}
