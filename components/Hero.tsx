"use client"
import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#9b3452] pt-32 pb-24 px-6 md:px-12 flex flex-col md:flex-row items-center"
    >
      {/* Background Blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-300/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-300/40 rounded-full blur-3xl" />

      {/* Left Content */}
      <div className="flex-1 text-center md:text-left relative z-10">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-white drop-shadow-lg">
          Empowered. Independent. Filipina.
        </h1>
        <p className="text-base md:text-lg mb-8 font-body text-pink-100 max-w-lg mx-auto md:mx-0">
          Celebrate strength and beauty with fashion & lifestyle pieces made 
          proudly for Filipinas. Own your story, wear your power.
        </p>
        <a
          href="#products"
          className="px-6 py-3 rounded-xl shadow-lg bg-pink-300 text-[#9b3452] font-semibold 
                     hover:bg-pink-400 transition-all duration-300 
                     hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]"
        >
          🌸 Shop Now
        </a>
      </div>

      {/* Right Image */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center relative z-10">
        <Image
          src="/hero-sample.png"
          alt="Empowered Filipina Hero"
          width={480}
          height={480}
          className="rounded-3xl shadow-2xl border-4 border-pink-200"
        />
      </div>
    </section>
  )
}
