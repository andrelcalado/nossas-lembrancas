// Core
import { NextResponse } from "next/server";

// Libraries
import { MercadoPagoConfig, Preference } from 'mercadopago';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const client = new MercadoPagoConfig({ accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN as string });
    const preference = new Preference(client);

    const {
      // transaction_amount,
      description,
      email,
      couplePath,
      planName,      
    } = body;

    const createdPreference = await preference.create({
      body: {
        external_reference: `${couplePath}-${planName}`,
        metadata: {
          couplePath: couplePath,
          planName: planName,
        },
        ...(email && {
          payer: {
            email: email,
          },
        }),
        items: [
          {
            id: planName,
            description: description,
            title: planName,
            quantity: 1,
            unit_price: .05,
            currency_id: "BRL",
          },
        ],
        payment_methods: {
          excluded_payment_methods: [
            {
              id: "bolbradesco",
            },
            {
              id: "pec",
            },
            {
              id: "debit_card",
            },
            {
              id: "credit_card",
            },
          ],
          default_payment_method_id: "pix",
        },
        auto_return: "approved",
        back_urls: {
          success: `${req.headers.get("origin")}/${encodeURIComponent(couplePath)}`,
          pending: `${req.headers.get("origin")}/${encodeURIComponent(couplePath)}`,
          failure: `${req.headers.get("origin")}/linha-do-tempo`,
        },
      },
    });        

    if (!createdPreference.id) {
      throw new Error("No preferenceID");
    }

    return NextResponse.json({
      preferenceId: createdPreference.id,
      initPoint: createdPreference.init_point,
    });
  } catch (error) {
    console.error("Erro ao criar pagamento:", error);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}
