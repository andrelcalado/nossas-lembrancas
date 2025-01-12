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

    if (event.type === 'payment' && event.action === 'payment.created') {
      // Processa o evento de pagamento
      console.log('Evento de pagamento recebido:', event.data.id);
      
      // Aqui você pode buscar os detalhes do pagamento na API do Mercado Pago
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

    // Responde com sucesso
    return NextResponse.json({ message: 'Event processed successfully' });
  } catch (error) {
    console.error('Erro no Webhook:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
