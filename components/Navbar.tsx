"use client"

import { useState } from "react"
import { Menu, ShoppingCart, User } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left: Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="#hero" className="hover:text-pink-600 transition">Home</a>
            <a href="#products" className="hover:text-pink-600 transition">Products</a>
            <a href="#about" className="hover:text-pink-600 transition">About</a>
            <a href="#contact" className="hover:text-pink-600 transition">Contact</a>
          </div>

          {/* Left: Mobile Hamburger */}
          <button
            className="text-gray-700 hover:text-pink-600 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Center: Brand */}
          <a
  href="#hero"
  className="font-heading text-xl md:text-2xl font-bold text-pink-700 absolute left-1/2 transform -translate-x-1/2"
>
  Hiraya Pilipina
</a>




          {/* Right: Cart & Profile */}
          <div className="flex items-center space-x-4">
            <a href="#cart" className="text-gray-700 hover:text-pink-600">
              <ShoppingCart className="w-6 h-6" />
            </a>
            <a href="#profile" className="text-gray-700 hover:text-pink-600">
              <User className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 text-gray-700 space-y-2 px-4 py-3 shadow-lg rounded-b-lg">
            <a href="#hero" onClick={() => setIsOpen(false)} className="block hover:text-pink-600">Home</a>
            <a href="#products" onClick={() => setIsOpen(false)} className="block hover:text-pink-600">Products</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block hover:text-pink-600">About</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-pink-600">Contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}
