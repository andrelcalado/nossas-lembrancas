import stripe from "../../../../lib/stripe";
import { NextRequest, NextResponse } from "next/server";

// Constants
import { pricesID } from "@/constants/dataArray";

// Types
import { PlanDataENUM } from "@/types/dataTypes";

export async function POST(req: NextRequest) {
  try {
    const { couplePath, planName } = await req.json();

    const price : string | undefined = pricesID[planName as PlanDataENUM];

    if (!price) {
      return NextResponse.json(
        { error: "Invalid plan selected" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: price,
          quantity: 1,
        },
      ],
      mode: "subscription",
      payment_method_types: ["card"],
      success_url: `${req.headers.get("origin")}/linha-do-tempo?verify=payment`,
      cancel_url: `${req.headers.get("origin")}/linha-do-tempo`,
      metadata: {
        couplePath,
        planName,
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
}