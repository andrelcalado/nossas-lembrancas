"use client";

// Core
import { useState } from "react";

// Libraries
import { loadStripe } from "@stripe/stripe-js";

// Hooks
import { useAppContext } from "../ProvidersWrapper";

// Types
import { PlanDataENUM } from "@/types/dataTypes";

export default function usePaymentMethodsModal() {
  const [isCreatingCheckout, setIsCreatingCheckout] = useState(false);

  const { planSelected } = useAppContext();

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

  async function handleBuyByPIX() {
    setIsCreatingCheckout(true);

    try {
      const response = await fetch("/api/create-checkout-pix", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          transaction_amount: planSelected.price,
          description: `Nossas Lembranças - Plano ${planSelected.plan}`,
          payment_method_id: "pix",
          email: "teste@gmail.com",
        }),
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log("Pagamento criado:", data);
        setIsCreatingCheckout(false);
      } else {
        console.error("Erro ao criar pagamento:", data.error);
        setIsCreatingCheckout(false);
      }
    } catch (error) {
      console.error("Erro ao chamar API de pagamento:", error);
      setIsCreatingCheckout(false);
    }
  }

  return {
    isCreatingCheckout,
    handleBuyByCard,
    handleBuyByPIX,
  };
}