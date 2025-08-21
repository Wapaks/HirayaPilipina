"use client"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-6 text-center font-body border-t-4 border-gradient-to-r from-pink-500 to-purple-500">
      <p>
        &copy; {new Date().getFullYear()} Hiraya Pilipina. All rights reserved.
      </p>
    </footer>
  )
}
