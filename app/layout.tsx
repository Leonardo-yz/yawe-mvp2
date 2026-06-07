import "./globals.css"
import Navbar from "@/components/Navbar"
import FooterAddress from "@/components/FooterAddress"
import WhatsAppButton from "@/components/WhatsAppButton"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-black text-white">

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="flex-1">
          {children}
        </main>

        {/* FOOTER */}

    <FooterAddress />

    <WhatsAppButton />

      </body>
    </html>
  )
}