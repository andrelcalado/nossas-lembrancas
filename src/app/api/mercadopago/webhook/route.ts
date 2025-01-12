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

    switch (event.type) {
      case 'payment':
        if (event.action === 'payment.created') {
          console.log('Evento de pagamento recebido:', event.data.id);
          const paymentResponse = await fetch(
            `https://api.mercadopago.com/v1/payments/${event.data.id}`,
            {
              headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`,
              },
            }
          );

          const paymentData = await paymentResponse.json();

          console.log('Dados do pagamento:', paymentData);
        }
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
