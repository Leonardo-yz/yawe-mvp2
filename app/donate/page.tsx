import Image from "next/image";
import Link from "next/link";

export default function DonatePage() {
  return (
    <div className="bg-gradient-to-br from-[#BFE8E3] via-slate-50 to-slate-100 min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl text-center text-white">

        {/* Illustration */}
        <div className="mb-20 flex justify-center">
          <Image
            src="/under1.png"
            alt="Donation page under construction"
            width={800}
            height={500}
            className="w-full max-w-md"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl text-[#055D5D] font-bold mb-4">
          Donation System Coming Soon
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-[#055D5D] mb-8 leading-relaxed">
          We are currently building a secure online donation platform to make
          supporting our programs easier than ever.
          <br />
          Thank you for your patience and continued support.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 rounded-lg bg-[#055D5D]/70 text-white font-semibold hover:bg-[#98027F] transition-.3"
          >
            Return Home
          </Link>

          <Link
            href="/contact"
            className="px-8 py-3 rounded-lg bg-[#055D5D]/70 text-white font-semibold hover:bg-[#98027F] transition-.3"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </div>
  );
}