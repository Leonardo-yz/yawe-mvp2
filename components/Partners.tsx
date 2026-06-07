import Logo from "./Logo"
import afriyan from "@/public/afriyan.png"
import company2 from "@/public/company2.png"

export default function Partners() {
  const logos = [afriyan, company2]

  return (
    <div className="flex gap-6 animate-scroll">
      {logos.map((logo, i) => (
        <Logo key={i} src={logo} alt={`partner-${i}`} />
      ))}
    </div>
  )
}