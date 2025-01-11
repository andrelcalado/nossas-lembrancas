// Core
import { NextResponse } from "next/server";

// Libraries
import { headers } from "next/headers";
import { Payment, MercadoPagoConfig } from "mercadopago";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const body = await req.text(); // Captura o corpo da requisição como texto bruto.
    const h = headers();

    // Obter a assinatura secreta e o cabeçalho de assinatura
    const secret = process.env.MERCADOPAGO_WEBHOOK_SECRET;
    const mpSignature = h.get("x-mp-signature");

    if (!secret || !mpSignature) {
      console.error("Faltando assinatura ou chave secreta");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Validação da assinatura
    const hash = crypto
      .createHmac("sha256", secret)
      .update(body)
      .digest("hex");

    if (hash !== mpSignature) {
      console.error("Assinatura inválida");
      return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
    }

    // Parse do body (após validação)
    const parsedBody = JSON.parse(body);

    console.log("Webhook recebido e validado:", parsedBody);

    // Validar tipo de evento
    if (!parsedBody || !parsedBody.type || !parsedBody.data || !parsedBody.data.id) {
      console.error("Payload do webhook inválido");
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const { type, data } = parsedBody;

    if (type === "payment") {
      const client = new MercadoPagoConfig({
        accessToken: process.env.NEXT_PUBLIC_PUBLIC_KEY_MERCADOPAGO as string,
      });
      const payment = new Payment(client);

      // Buscar detalhes do pagamento
      const paymentDetails = await payment.get({ id: data.id });
      console.log("Detalhes do pagamento:", paymentDetails);

      // Processar status do pagamento
      switch (paymentDetails.status) {
        case "approved":
          console.log("Pagamento aprovado:", paymentDetails);
          // Atualize o status no banco de dados
          break;

        case "pending":
          console.log("Pagamento pendente:", paymentDetails);
          // Atualize o status no banco de dados
          break;

        case "rejected":
          console.log("Pagamento rejeitado:", paymentDetails);
          // Atualize o status no banco de dados
          break;

        default:
          console.warn("Status de pagamento não tratado:", paymentDetails.status);
      }
    } else {
      console.warn("Tipo de evento não tratado:", type);
    }

    // Retorna sucesso para o Mercado Pago
    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("Erro no Webhook:", error);
    return NextResponse.json(
      { error: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}
