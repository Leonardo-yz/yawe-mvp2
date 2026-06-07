"use client";

import { useState } from "react";

export default function WhistleblowingPolicyPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const email = "confidelity@yawe.or.tz";

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#BFE8E3] via-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="backdrop-blur-xl bg-white/60 border border-white/40 shadow-xl rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-slate-800">
            Whistleblowing Policy
          </h1>
          <p className="mt-3 text-slate-600 leading-relaxed">
            If you suspect or are aware of any corrupt practices, irregularities,
            safeguarding issues, or wrongdoing related to{" "}
            <span className="font-semibold">YAWE</span>, you are encouraged to
            report it safely and responsibly.
          </p>
        </div>

        {/* Accordion Section */}
        <div className="mt-8 space-y-4">
          {/* What can be reported */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl shadow-lg">
            <button
              onClick={() => toggleSection("what")}
              className="w-full text-left p-6 font-semibold text-slate-800 flex justify-between items-center"
            >
              What can be reported?
              <span>{openSection === "what" ? "−" : "+"}</span>
            </button>

            {openSection === "what" && (
              <div className="px-6 pb-6 text-slate-600 space-y-2">
                <p>
                  Reports may include, but are not limited to:
                </p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Bribery and fraud</li>
                  <li>Embezzlement of funds</li>
                  <li>Conflict of interest</li>
                  <li>Nepotism and favoritism</li>
                  <li>Discrimination</li>
                  <li>Sexual exploitation or abuse</li>
                  <li>Sexual harassment and other forms of harassment</li>
                </ul>
              </div>
            )}
          </div>

          {/* Who can be reported */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl shadow-lg">
            <button
              onClick={() => toggleSection("who")}
              className="w-full text-left p-6 font-semibold text-slate-800 flex justify-between items-center"
            >
              Who can be reported?
              <span>{openSection === "who" ? "−" : "+"}</span>
            </button>

            {openSection === "who" && (
              <div className="px-6 pb-6 text-slate-600">
                <p>
                  You may report concerns involving YAWE staff, partners,
                  suppliers, or any other individuals or organizations involved
                  in YAWE-related activities.
                </p>
              </div>
            )}
          </div>

          {/* Protection */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl shadow-lg">
            <button
              onClick={() => toggleSection("protection")}
              className="w-full text-left p-6 font-semibold text-slate-800 flex justify-between items-center"
            >
              Confidentiality & Protection
              <span>{openSection === "protection" ? "−" : "+"}</span>
            </button>

            {openSection === "protection" && (
              <div className="px-6 pb-6 text-slate-600 space-y-2">
                <p>
                  YAWE strives to protect the identity of whistleblowers where
                  necessary. However, absolute anonymity cannot be guaranteed.
                </p>
                <p>
                  You are encouraged to use a private email and avoid including
                  identifying signatures if you wish to remain anonymous.
                </p>
              </div>
            )}
          </div>

          {/* What cannot be investigated */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl shadow-lg">
            <button
              onClick={() => toggleSection("cannot")}
              className="w-full text-left p-6 font-semibold text-slate-800 flex justify-between items-center"
            >
              What YAWE cannot investigate
              <span>{openSection === "cannot" ? "−" : "+"}</span>
            </button>

            {openSection === "cannot" && (
              <div className="px-6 pb-6 text-slate-600">
                <ul className="list-disc ml-5 space-y-1">
                  <li>
                    Allegations related to projects not supported or financed by YAWE
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* How to report */}
          <div className="bg-gradient-to-r from-[#0A7572] to-[#B704A2] text-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-semibold">How to report</h2>
            <p className="mt-2 text-slate-200">
              Send an email describing the incident, including the individuals or
              organizations involved.
            </p>

            <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:items-center">
              <div className="bg-white/10 px-4 py-2 rounded-lg font-mono">
                {email}
              </div>

              <button
                onClick={handleCopy}
                className="bg-white text-slate-900 px-4 py-2 rounded-lg font-semibold hover:bg-slate-200 transition"
              >
                {copied ? "Copied ✓" : "Copy Email"}
              </button>
            </div>
          </div>

          {/* Checklist */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl shadow-lg p-6">
            <h3 className="font-semibold text-slate-800 mb-3">
              Before sending your report, include:
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li>✔ Clear description of the incident</li>
              <li>✔ Names of persons or organizations involved</li>
              <li>✔ Dates, locations, or supporting details</li>
              <li>✔ Any evidence (if available)</li>
            </ul>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-slate-500 mt-10">
          This reporting system supports transparency and accountability within YAWE.
        </p>
      </div>
    </div>
  );
}