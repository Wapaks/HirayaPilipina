"use client"

import { useState } from "react"
import Image from "next/image"
import products from "@/data/products.json"

const categories = [
  "All Products",
  "New Products",
  "Push Up Bra",
  "Nipple Pasties",
  "Product Care",
  "Boob Tape",
  "Styling Innovation",
  "Bundles",
]

export default function AllProducts() {
  const [selectedCategory, setSelectedCategory] = useState("All Products")

  // filter products based on category
  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter((p) =>
          p.category?.toLowerCase() === selectedCategory.toLowerCase()
        )

  return (
    <section
      id="products"
      className="py-16 px-6 md:px-12 bg-background min-h-screen"
    >
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
        All Products
      </h2>

      <div className="flex gap-8">
        {/* Sidebar Categories */}
        <aside className="w-1/4 hidden md:block">
          <ul className="space-y-3">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-4 py-2 rounded-lg font-body transition 
                    ${
                      selectedCategory === cat
                        ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow"
                        : "hover:bg-muted"
                    }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Products Grid */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-xl shadow hover:shadow-lg transition overflow-hidden bg-gradient-to-br from-white to-pink-50 font-body"
            >
              {/* Product Image */}
              <div className="relative w-full aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Product Info */}
              <div className="p-3 text-center">
                <h3 className="font-heading font-medium text-sm md:text-base text-foreground line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  {product.price}
                </p>
                <button className="mt-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1.5 rounded-md text-xs md:text-sm hover:scale-105 transition-transform">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
