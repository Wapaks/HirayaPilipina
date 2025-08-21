"use client"

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 text-center bg-gradient-to-r from-pink-50 to-purple-50"
    >
      <h2 className="text-3xl font-heading font-bold mb-6 text-primary">
        Contact Us
      </h2>
      <p className="mb-4 font-body text-muted-foreground">
        Got questions? We’d love to hear from you.
      </p>
      <a
        href="mailto:hello@hirayapilipina.com"
        className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg shadow hover:scale-105 transition-transform font-body"
      >
        Email Us
      </a>
    </section>
  )
}
