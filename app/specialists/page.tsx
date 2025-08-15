import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SpecialistsGrid } from "@/components/specialists-grid"

export default function SpecialistsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-offwhite via-white to-brand-offwhite">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-brand-sage/15 to-brand-gold/15 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-brand-gold/15 to-brand-sage/15 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-brand-sage/10 to-brand-gold/10 rounded-full blur-2xl"></div>
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="animate-fade-in">
                <h1 className="font-serif text-4xl font-bold tracking-tight text-brand-charcoal sm:text-5xl lg:text-6xl bg-gradient-to-r from-brand-charcoal via-brand-sage to-brand-gold bg-clip-text text-transparent">
                  Our Specialist Team
                </h1>
                <div className="mt-2 h-1 w-24 bg-gradient-to-r from-brand-sage to-brand-gold rounded-full mx-auto"></div>
              </div>
              <p
                className="mt-6 text-lg text-brand-charcoal/90 leading-relaxed animate-fade-in"
                style={{ animationDelay: "200ms" }}
              >
                Board-certified experts, chosen for their expertise and compassion.
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-3xl animate-fade-in" style={{ animationDelay: "400ms" }}>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-sage/30 to-brand-gold/30 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition duration-700"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-sage/20 to-brand-gold/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-2xl border border-white/60 group-hover:shadow-3xl transition-all duration-500">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className="h-px w-8 bg-gradient-to-r from-transparent to-brand-sage"></div>
                      <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-charcoal mx-4">
                        A Note From Our Founder
                      </h2>
                      <div className="h-px w-8 bg-gradient-to-l from-transparent to-brand-gold"></div>
                    </div>
                    <p className="mt-6 text-brand-charcoal/80 italic leading-relaxed text-lg">
                      "Our team is intentionally small because we believe in{" "}
                      <span className="bg-gradient-to-r from-brand-sage to-brand-gold text-white font-bold px-4 py-2 rounded-lg shadow-lg inline-block transform hover:scale-105 transition-transform duration-300">
                        quality over quantity
                      </span>
                      . I personally select each specialist for their world-class expertise and their commitment to
                      providing you with a clear, compassionate plan."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-sage/5 to-transparent h-16"></div>
          <SpecialistsGrid />
        </div>
      </main>

      <Footer />
    </div>
  )
}
