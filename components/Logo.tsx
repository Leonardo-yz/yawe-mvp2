import Image from "next/image"

type Props = {
  src: any
  alt: string
}

export default function Logo({ src, alt }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      className="img-hover-effect"
    />
  )
}