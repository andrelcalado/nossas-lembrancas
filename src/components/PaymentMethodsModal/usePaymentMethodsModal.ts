"use client";

// Core
import { useRef, useState, useEffect } from "react";

// Libraries
import { loadStripe } from "@stripe/stripe-js";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Hooks
import { useAppContext } from "../ProvidersWrapper";

// Types
import { PlanDataENUM } from "@/types/dataTypes";
import { useRouter } from "next/navigation";

export default function usePaymentMethodsModal(coupleNames? : string, couplePath? : string) {
  const [isCreatingCheckout, setIsCreatingCheckout] = useState(false);
  const [copyLinkTooltip, setCopyLinkTooltip] = useState(false);
  const [QRCodeUrl, setQRCodeUrl] = useState<string>();
  const qrCodeRef = useRef<HTMLDivElement | undefined>();
  const router = useRouter();

  const { planSelected } = useAppContext();

  useEffect(() => {
    if (couplePath) {
      setQRCodeUrl(`${window.location.origin}/${couplePath}`);
    }
  }, [couplePath])
  

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
        setIsCreatingCheckout(false);
      }
    }
  }

  async function handleBuyByPIX(couplePath: string | undefined, planName : PlanDataENUM) {
    setIsCreatingCheckout(true);    

    try {
      const response = await fetch("/api/mercadopago/create-checkout-pix", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          transaction_amount: planSelected.price,
          description: `Nossas Lembranças - Plano ${planSelected.plan}`,
          email: "teste@gmail.com",
          couplePath,
          planName
        }),
      });
  
      const data = await response.json();

      if (response.ok) {
        console.log("Pagamento criado:", data);
        router.push(data.initPoint);
      } else {
        console.error("Erro ao criar pagamento:", data.error);
        setIsCreatingCheckout(false);
      }
    } catch (error) {
      console.error("Erro ao chamar API de pagamento:", error);
      setIsCreatingCheckout(false);
    }
  }

  function handleCopyLink(couplePath : string) {
    const link = `${window.location.origin}/${couplePath}`;

    if (window.innerWidth <= 1024) {
      window.navigator.share({
        title: 'Presente',
        text: 'Tenho uma surpresa pra você!',
        url: link,
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      navigator.clipboard.writeText(link)
        .then(() => {
          setCopyLinkTooltip(true);
        })
        .catch((err) => {
          console.error('Erro ao copiar o link:', err);
        });
    }
  };

  function handleGoToSite(couplePath : string) {
    setIsCreatingCheckout(true);
    router.push(`/${couplePath}`);
  }

  async function handleGenerateQRCode() {
    setIsCreatingCheckout(true);

    const qrCodeElement = qrCodeRef.current;
    if (!qrCodeElement) {
      setIsCreatingCheckout(false);
      return;
    };

    const canvas = await html2canvas(qrCodeElement);
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pageWidth * 0.4;
    const imgHeight = (canvas.height / canvas.width) * imgWidth;

    const x = (pageWidth - imgWidth) / 2;
    const y = (pageHeight - imgHeight) / 2;

    pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
    pdf.save(`${coupleNames}.pdf`);

    setIsCreatingCheckout(false);
  }

  return {
    copyLinkTooltip,
    setCopyLinkTooltip,
    isCreatingCheckout,
    handleBuyByCard,
    handleBuyByPIX,
    handleCopyLink,
    handleGoToSite,
    handleGenerateQRCode,
    QRCodeUrl,
    qrCodeRef,
  };
}