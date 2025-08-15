"use client"

import { useState } from "react"
import Image from "next/image"

const specialists = [
  {
    id: 1,
    name: "Dr. Marcus Chen",
    credentials: "DVM, DACVIM (Oncology)",
    specialty: "oncology",
    testimonial:
      "He didn't just give us a second opinion; he gave us a clear, step-by-step plan that honored our goals.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    name: "Dr. Evelyn Reed",
    credentials: "DVM, DACVIM (Cardiology)",
    specialty: "cardiology",
    testimonial: "She drew diagrams and walked us through everything... for the first time, we felt in control.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    name: "Dr. Anya Patel",
    credentials: "DVM, DACVS (Surgery)",
    specialty: "surgery",
    testimonial: "That single conversation about a less invasive approach saved us so much stress and money.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 4,
    name: "Dr. Isaac Hayes",
    credentials: "DVM, DACVIM (Neurology)",
    specialty: "neurology",
    testimonial: "...sometimes the most powerful action plan involves knowing when *not* to operate.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 5,
    name: "Dr. Sofia Ortega",
    credentials: "DVM, DACVIM (SAIM)",
    specialty: "internal-medicine",
    testimonial: "We discovered the underlying issue wasn't what everyone thought... it changed everything.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 6,
    name: "Dr. Eleanor Vance",
    credentials: "DVM, DACVIM (Oncology)",
    specialty: "oncology",
    testimonial: "We found a path forward that gave us six more beautiful, happy months with our boy.",
    image: "/placeholder.svg?height=400&width=400",
  },
]

const filterOptions = [
  { value: "all", label: "All Specialties" },
  { value: "oncology", label: "Oncology" },
  { value: "neurology", label: "Neurology" },
  { value: "cardiology", label: "Cardiology" },
  { value: "surgery", label: "Surgery" },
  { value: "internal-medicine", label: "Internal Medicine" },
]

export function SpecialistsGrid() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredSpecialists = specialists.filter(
    (specialist) => activeFilter === "all" || specialist.specialty === activeFilter,
  )

  return (
    <section className="py-6 sm:py-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-gradient-to-br from-brand-gold/8 to-brand-sage/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-gradient-to-br from-brand-sage/8 to-brand-gold/8 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 animate-fade-in px-2">
          {filterOptions.map((option, index) => (
            <button
              key={option.value}
              onClick={() => setActiveFilter(option.value)}
              className={`group relative overflow-hidden rounded-full px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold transition-all duration-500 border-2 transform hover:scale-105 min-w-0 flex-shrink-0 ${
                activeFilter === option.value
                  ? "text-white shadow-xl scale-105 border-transparent" // removed bg-gradient to prevent double gradient
                  : "border-brand-sage/30 hover:bg-brand-sage/10 hover:border-brand-sage/60 text-brand-charcoal hover:shadow-lg"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {activeFilter === option.value && (
                <div className="absolute inset-0 bg-gradient-to-r from-brand-sage to-brand-gold rounded-full -z-10"></div> // added -z-10 to ensure proper layering
              )}
              {activeFilter !== option.value && (
                <div className="absolute inset-0 bg-gradient-to-r from-brand-sage/20 to-brand-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full -z-10"></div> // added -z-10 for consistency
              )}
              <span className="relative whitespace-nowrap">{option.label}</span>
            </button>
          ))}
        </div>

        <div className="text-center mb-12 sm:mb-16 animate-fade-in px-4" style={{ animationDelay: "600ms" }}>
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-sage/10 to-brand-gold/10 rounded-lg blur opacity-60"></div>
            <p className="relative text-xs sm:text-sm text-brand-charcoal/70 bg-white/80 backdrop-blur-sm px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg border border-white/50 leading-relaxed">
              Don't see the specialty you need?{" "}
              <a
                href="#"
                className="font-semibold text-brand-sage hover:text-brand-gold transition-colors duration-300 hover:underline"
              >
                Contact us
              </a>{" "}
              for a personal consultation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:gap-x-8 sm:gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSpecialists.map((specialist, index) => (
            <div
              key={specialist.id}
              className="group text-center flex flex-col animate-fade-in relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-br from-brand-sage/10 to-brand-gold/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110"></div>
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-brand-sage/15 to-brand-gold/15 rounded-2xl blur-xl opacity-0 group-hover:opacity-80 transition-all duration-500"></div>

              <div className="relative inline-block mx-auto">
                <div className="relative">
                  <div className="relative h-44 w-44 sm:h-52 sm:w-52 mx-auto rounded-full overflow-hidden ring-4 ring-white shadow-2xl group-hover:ring-8 group-hover:ring-brand-gold/40 transition-all duration-500 transform group-hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-sage/20 to-brand-gold/20 opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
                    <Image
                      src={
                        specialist.image ||
                        "/placeholder.svg?height=400&width=400&query=professional veterinarian headshot" ||
                        "/placeholder.svg" ||
                        "/placeholder.svg" ||
                        "/placeholder.svg" ||
                        "/placeholder.svg" ||
                        "/placeholder.svg"
                      }
                      alt={specialist.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-sage to-brand-gold text-white shadow-xl backdrop-blur-sm group-hover:scale-125 group-hover:shadow-2xl transition-all duration-300 border-2 border-white/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 sm:h-6 sm:w-6 ml-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 flex-grow flex flex-col relative px-2">
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold text-brand-charcoal group-hover:text-brand-sage transition-colors duration-300">
                  {specialist.name}
                </h3>
                <div className="mt-1 h-0.5 w-12 sm:w-16 bg-gradient-to-r from-brand-sage to-brand-gold rounded-full mx-auto opacity-60 group-hover:opacity-100 group-hover:w-20 sm:group-hover:w-24 transition-all duration-500"></div>
                <p className="text-brand-sage font-semibold mt-2 sm:mt-3 text-xs sm:text-sm tracking-wide">
                  {specialist.credentials}
                </p>

                <div className="mt-4 sm:mt-6 flex-grow">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-brand-sage/5 to-brand-gold/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <p className="relative text-brand-charcoal/80 italic leading-relaxed text-base sm:text-lg px-2 sm:px-4 py-2 sm:py-3">
                      "{specialist.testimonial}"
                    </p>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8">
                  <a
                    href={`/specialists/${specialist.id}`}
                    className="inline-block group/btn relative overflow-hidden rounded-full bg-white px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm font-semibold text-brand-sage shadow-xl ring-2 ring-brand-sage/20 transition-all duration-300 hover:shadow-2xl hover:scale-110 hover:ring-brand-gold/40 min-h-[44px] flex items-center justify-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-sage/10 to-brand-gold/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-sage/5 to-brand-gold/5 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <span className="relative flex items-center gap-1.5 sm:gap-2">
                      <span className="hidden sm:inline">See {specialist.name.split(" ")[1]}'s Case Study</span>
                      <span className="sm:hidden">View Case Study</span>
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
