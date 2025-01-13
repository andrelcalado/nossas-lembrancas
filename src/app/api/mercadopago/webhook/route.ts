import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const SECRET_SIGNATURE = process.env.MERCADOPAGO_SECRET_SIGNATURE || '';
const ACCESS_TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN || '';

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();

    const hash = crypto
      .createHmac('sha256', SECRET_SIGNATURE)
      .update(body)
      .digest('hex');

    if (!hash) {
      return NextResponse.json({ message: 'Invalid signature' }, { status: 401 });
    }

    const event = JSON.parse(body);

    console.log('Evento recebido:', event.type);

    switch (event.type) {
      case 'payment':
        const paymentId = event.data.id;

        const response = await fetch(
          `https://api.mercadopago.com/v1/payments/${paymentId}`,
          {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
          }
        );

        const paymentData = await response.json();

        if (paymentData.status === 'approved' && paymentData.status_detail === 'accredited') {
          const { metadata } = paymentData;

          console.log('Pagamento aprovado:', paymentId);
          console.log('Dados personalizados:', metadata);
        }

        console.log('Status do pagamento:', paymentData.status);
        console.log('Dados do pagamento:', paymentData);
        break;
      default:
        console.log(`Evento não tratado: ${event.type}`);
    }

    return NextResponse.json({ message: 'Event processed successfully' });
  } catch (error) {
    console.error('Erro no Webhook:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
