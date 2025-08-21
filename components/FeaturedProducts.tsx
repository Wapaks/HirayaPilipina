"use client"
import { useEffect } from "react"
import products from "../data/products.json"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import HoverCard from "./HoverCard"

export default function FeaturedProducts() {
  const featuredProducts = products.filter((p) => p.featured)

  useEffect(() => {
    // Dynamically import ScrollReveal
    import("scrollreveal").then((module) => {
      const ScrollReveal = module.default

      ScrollReveal().reveal("#featuredproducts h2", {
        duration: 1000,
        origin: "top",
        distance: "50px",
        delay: 200,
      })

      ScrollReveal().reveal(".swiper-slide", {
        duration: 1000,
        origin: "bottom",
        distance: "50px",
        interval: 200,
      })
    })
  }, [])

  return (
    <section
      id="featuredproducts"
      className="py-20 px-6 md:px-12 bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300 shadow"
    >
      <h2 className="text-4xl font-heading font-bold text-center mb-12 text-pink-700">
        Featured Products
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {featuredProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <HoverCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
