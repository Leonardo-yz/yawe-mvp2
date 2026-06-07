"use client"

import { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"

export default function ContactPage() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })

  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  const [loading, setLoading] = useState(false)

  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    setSuccess("")
    setError("")

    if (!captchaToken) {
      setError("Please verify reCAPTCHA")
      return
    }

    setLoading(true)

    try {

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          captchaToken,
        }),
      })

      const data = await response.json()

      if (response.ok) {

        setSuccess("Message sent successfully!")

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        })

      } else {
        setError(data.message)
      }

    } catch (err) {
      setError("Something went wrong")
    }

    setLoading(false)
  }

  return (

    <section className="min-h-screen bg-gradient-to-br from-[#055D5D] to-[#98027F] py-20 px-6">

      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/20">

        <h1 className="text-4xl font-bold text-white mb-3 text-center">
          Contact Us
        </h1>

        <p className="text-white/80 text-center mb-10">
          We would love to hear from you
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-white/70 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-white/70 outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-white/70 outline-none"
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-white/70 outline-none"
          />

          <div className="flex justify-center">
  <ReCAPTCHA
    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
    onChange={(token: string | null) => setCaptchaToken(token)}
  />
</div>

          {success && (
            <p className="text-green-300 text-center">
              {success}
            </p>
          )}

          {error && (
            <p className="text-red-300 text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-[#055D5D] font-bold py-4 rounded-xl hover:scale-105 transition duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>

    </section>
  )
}