"use client";

// Core
import { useState } from "react";

// Libraries
import { loadStripe } from "@stripe/stripe-js";

// Types
import { PlanDataENUM } from "@/types/dataTypes";

export default function usePaymentMethodsModal() {
  const [isCreatingCheckout, setIsCreatingCheckout] = useState(false);

  async function handleBuyByCard(couplePath: string | undefined, planName : PlanDataENUM) {
    if (couplePath) {
      try {
        setIsCreatingCheckout(true);
        const checkoutResponse = await fetch("/api/create-checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ couplePath, planName }),
        });
  
        if (!checkoutResponse.ok) {
          throw new Error("Failed to create checkout session");
        }

        const stripeClient = await loadStripe(
          process.env.NEXT_PUBLIC_STRIPE_PUB_KEY as string
        );
  
        if (!stripeClient) {
          throw new Error("Stripe failed to initialize.");
        }

        const { sessionId } = await checkoutResponse.json();
        await stripeClient.redirectToCheckout({ sessionId });
      } catch (error) {
        console.error(error);
      } finally {
        setIsCreatingCheckout(false);
      }
    }
  }

  return {
    isCreatingCheckout,
    handleBuyByCard,
  };
}