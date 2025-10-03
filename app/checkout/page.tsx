"use client";

import { useSearchParams } from "next/navigation";

// app/checkout/page.tsx
// BUGGY: this version incorrectly expects 'params.product' (route param),
// but our Buy and Cart links send a query parameter (?product=)

export default function CheckoutPage() {
  const params = useSearchParams();
  const product = params.get("product");

  if (!product) {
    return <h1>Error: No product selected</h1>;
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Checkout</h1>
      <p>Confirm purchase for product #{product}</p>
    </main>
  );
}
