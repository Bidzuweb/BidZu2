import React from "react";

export default function HomePage() {
  const handleBuyNow = async () => {
    const response = await fetch("https://your-backend-domain.com/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itemId: "example123",
        buyerId: "user456",
        amount: 100
      })
    });
    const data = await response.json();
    if (data.url) window.location.href = data.url;
  };

  return (
    <div className="p-6 space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Welcome to BidZu</h1>
        <p className="text-lg text-gray-600 mt-2">
          Buy, sell, or bid on items posted by real people in your community.
        </p>
      </header>

      <section className="mt-16 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Quick Checkout Example</h2>
        <div className="text-center">
          <p className="mb-2">Item: Sample Product</p>
          <p className="mb-4 font-semibold text-green-600">Price: $100</p>
          <button
            onClick={handleBuyNow}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Buy Now
          </button>
        </div>
      </section>
    </div>
  );
}
