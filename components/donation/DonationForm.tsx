"use client";

import { useState } from "react";

export default function DonationForm() {
  const [amount, setAmount] = useState<number>(10000);
  const [method, setMethod] = useState<string>("mpesa");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const presetAmounts = [5000, 10000, 20000, 50000];

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: "Guest User",
          email: "guest@email.com",
          phone: "0700000000",
          amount,
          paymentMethod: method,
          message: "Support donation",
        }),
      });

      // safer response handling
      const text = await res.text();

      let data;

      try {
        data = JSON.parse(text);
      } catch {
        throw new Error("Server returned invalid response");
      }

      if (!res.ok) {
        throw new Error(data.error || "Failed to create donation");
      }

      // Redirect to success page
      window.location.href = "/donate/success";
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/10">
      <h2 className="text-2xl font-bold mb-6 text-white">
        Make a Donation
      </h2>

      {/* Preset Amounts */}
      <div className="mb-5">
        <p className="text-sm text-white/80 mb-2">
          Select Amount (TZS)
        </p>

        <div className="grid grid-cols-2 gap-3">
          {presetAmounts.map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => setAmount(a)}
              className={`p-3 rounded-xl transition font-medium ${
                amount === a
                  ? "bg-[#98027F] text-white"
                  : "bg-white/20 hover:bg-white/30"
              }`}
            >
              {a.toLocaleString()}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Amount */}
      <div className="mb-5">
        <label className="block text-sm text-white/80 mb-2">
          Custom Amount
        </label>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Enter custom amount"
          className="w-full p-3 rounded-xl text-black outline-none"
        />
      </div>

      {/* Payment Method */}
      <div className="mb-5">
        <label className="block text-sm text-white/80 mb-2">
          Payment Method
        </label>

        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="w-full p-3 rounded-xl text-black outline-none"
        >
          <option value="mpesa">M-Pesa</option>
          <option value="airtel">Airtel Money</option>
          <option value="tigo">Tigo Pesa</option>
          <option value="bank">Bank Transfer</option>
        </select>
      </div>

      {/* Donation Instructions */}
      <div className="mb-5 p-4 rounded-xl bg-white/10 text-sm text-white/80">
        {method === "mpesa" && (
          <p>
            Send your donation to M-Pesa number:
            <br />
            <span className="font-bold text-white">
              0767 783 823
            </span>
          </p>
        )}

        {method === "airtel" && (
          <p>
            Send your donation via Airtel Money:
            <br />
            <span className="font-bold text-white">
              0600 000 000
            </span>
          </p>
        )}

        {method === "tigo" && (
          <p>
            Send your donation via Tigo Pesa:
            <br />
            <span className="font-bold text-white">
              0600 000 000
            </span>
          </p>
        )}

        {method === "bank" && (
          <div>
            <p className="mb-2">
              Bank Transfer Details:
            </p>

            <div className="space-y-1">
              <p>
                <span className="font-semibold">Bank:</span> CRDB Bank
              </p>

              <p>
                <span className="font-semibold">Account Name:</span> YAWE NGO
              </p>

              <p>
                <span className="font-semibold">Account Number:</span> 0123456789
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4 text-sm text-red-400 bg-red-500/10 p-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Donate Button */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-[#98027F] hover:bg-[#7a0165] py-3 rounded-full font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Processing..." : "Donate Now"}
      </button>
    </div>
  );
}