"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import products from "../data/products.json"

export default function HoverCard({ product }: { product: typeof products[0] }) {
  const [showCard, setShowCard] = useState(false)
  let hoverTimeout: NodeJS.Timeout

  const handleMouseEnter = () => {
    hoverTimeout = setTimeout(() => setShowCard(true), 600) // quicker reveal
  }

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout)
    setShowCard(false)
  }

  return (
    <div
      className="relative border border-pink-200 rounded-2xl shadow-md hover:shadow-2xl transition overflow-hidden bg-gradient-to-br from-white to-pink-50 font-body"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setShowCard(!showCard)} // ✅ Mobile tap toggle
    >
      {/* Product Image */}
      <div className="relative w-full aspect-[760/828]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain rounded-lg"
        />
      </div>

      {/* Card Body */}
      <div className="p-4">
        <h3 className="font-heading font-semibold text-lg text-pink-700">
          {product.name}
        </h3>
        <p className="text-muted-foreground mt-2">{product.price}</p>
        <Link
          href="/products"
          className="mt-4 inline-block border-2 border-pink-700 text-pink-700 px-4 py-2 rounded-xl font-body transition-transform hover:bg-pink-700 hover:text-white hover:scale-105 hover:shadow-md"
        >
          View Details
        </Link>
      </div>

      {/* Hover / Tap Overlay */}
      <div
        className={`absolute inset-0 bg-white/90 backdrop-blur-lg border border-pink-200/60 rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-xl
          transition-all duration-500 ease-out transform
          ${showCard ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        <h4 className="font-heading font-bold text-xl text-pink-700">
          {product.name}
        </h4>
        <p className="mt-3 font-body text-muted-foreground max-w-xs">
          This is a featured product. Grab it now!
        </p>
        <p className="mt-3 text-secondary font-semibold">{product.price}</p>
        <Link
          href="/products"
          className="mt-5 inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-2xl font-body transition-transform hover:scale-110 hover:shadow-[0_0_15px_rgba(236,72,153,0.7)]"
        >
          Shop Now
        </Link>
      </div>
    </div>
  )
}
