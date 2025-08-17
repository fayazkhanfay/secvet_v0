"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function PaymentSuccessPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [showElements, setShowElements] = useState(false)
  const searchParams = useSearchParams()

  const doctorParam = searchParams.get("doctor")
  const isResearchPath = !!doctorParam

  const doctorData = {
    "isaac-hayes": {
      name: "Dr. Isaac Hayes",
      photo: "/placeholder.svg?height=96&width=96&text=Dr.+Hayes",
      specialty: "Veterinary Neurologist",
    },
  }

  const selectedDoctor = doctorParam ? doctorData[doctorParam as keyof typeof doctorData] : null

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => setShowElements(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-offwhite via-white to-brand-offwhite relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-sage/5 via-transparent to-brand-gold/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-brand-gold/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-brand-sage/10 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Simplified Header with Enhanced Styling */}
      <header className="relative bg-gradient-to-r from-brand-charcoal via-brand-charcoal to-brand-sage shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/95 to-brand-sage/95"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
        <nav className="relative mx-auto flex max-w-7xl items-center justify-center p-4 lg:px-8" aria-label="Global">
          <Link href="/" className="-m-1.5 p-1.5 group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
            <span className="relative font-serif font-bold text-xl text-brand-offwhite group-hover:text-brand-gold transition-all duration-300 drop-shadow-sm">
              Second Veterinarian
            </span>
          </Link>
        </nav>
      </header>

      {/* Main Success Content */}
      <main className="flex items-center justify-center min-h-screen pt-8 px-4 py-8 relative z-10">
        <div
          className={`mx-auto max-w-xl w-full text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative bg-white/95 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/30 overflow-hidden group">
            {/* Enhanced Decorative Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-sage/8 via-transparent to-brand-gold/8"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-brand-gold/5 via-transparent to-brand-sage/5"></div>
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-brand-gold/20 to-transparent rounded-full blur-3xl scale-110 transition-transform duration-700"></div>
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-brand-sage/20 to-transparent rounded-full blur-3xl scale-110 transition-transform duration-700"></div>

            {/* Animated Border Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-sage/15 via-brand-gold/15 to-brand-sage/15 opacity-60 transition-opacity duration-500 blur-sm"></div>

            <div className="relative z-10">
              <div
                className={`flex justify-center mb-6 transition-all duration-700 delay-200 ${showElements ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-sage via-brand-sage/90 to-brand-sage/80 rounded-full flex items-center justify-center shadow-2xl border-2 border-brand-gold/30">
                    <svg
                      className="w-8 h-8 text-white drop-shadow-sm"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 to-brand-sage/20 rounded-full animate-pulse opacity-60"></div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-brand-gold/10 to-brand-sage/10 rounded-full blur-sm"></div>
                </div>
              </div>

              <div
                className={`flex justify-center mb-6 transition-all duration-700 delay-400 ${showElements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                {isResearchPath && selectedDoctor ? (
                  // Research Path - Single Doctor
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-br from-brand-sage/30 to-brand-gold/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <img
                      className="relative z-30 inline-block h-24 w-24 rounded-full object-cover ring-4 ring-brand-sage/20 shadow-xl group-hover:scale-110 group-hover:ring-brand-gold/50 transition-all duration-300"
                      src={selectedDoctor.photo || "/placeholder.svg"}
                      alt={selectedDoctor.name}
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-sage/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ) : (
                  // Concierge Path - Multiple Specialists
                  <div className="flex -space-x-4">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-br from-brand-sage/30 to-brand-gold/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      <img
                        className="relative z-30 inline-block h-16 w-16 rounded-full object-cover ring-3 ring-white shadow-xl group-hover:scale-110 group-hover:ring-brand-gold/50 transition-all duration-300"
                        src="/placeholder.svg?height=64&width=64"
                        alt="Dr. Chen - Veterinary Specialist"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-sage/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-br from-brand-gold/30 to-brand-sage/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      <img
                        className="relative z-20 inline-block h-16 w-16 rounded-full object-cover ring-3 ring-white shadow-xl group-hover:scale-110 group-hover:ring-brand-sage/50 transition-all duration-300"
                        src="/placeholder.svg?height=64&width=64"
                        alt="Dr. Reed - Veterinary Specialist"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-br from-brand-sage/30 to-brand-gold/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      <img
                        className="relative z-10 inline-block h-16 w-16 rounded-full object-cover ring-3 ring-white shadow-xl group-hover:scale-110 group-hover:ring-brand-gold/50 transition-all duration-300"
                        src="/placeholder.svg?height=64&width=64"
                        alt="Dr. Hayes - Veterinary Specialist"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                )}
              </div>

              <div
                className={`space-y-6 transition-all duration-700 delay-600 ${showElements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <div className="relative">
                  <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-brand-charcoal leading-tight">
                    {isResearchPath && selectedDoctor ? (
                      <>
                        Your consultation with{" "}
                        <span className="relative inline-block">
                          <span className="relative z-10 bg-gradient-to-r from-brand-sage to-brand-gold bg-clip-text text-transparent">
                            {selectedDoctor.name}
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-brand-sage/20 to-brand-gold/20 blur-lg"></div>
                        </span>{" "}
                        is confirmed.
                      </>
                    ) : (
                      <>
                        You're one step from{" "}
                        <span className="relative inline-block">
                          <span className="relative z-10 bg-gradient-to-r from-brand-sage to-brand-gold bg-clip-text text-transparent">
                            peace of mind
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-brand-sage/20 to-brand-gold/20 blur-lg"></div>
                        </span>
                        .
                      </>
                    )}
                  </h1>
                </div>

                <div className="max-w-lg mx-auto space-y-4">
                  <div className="relative p-4 bg-gradient-to-br from-brand-sage/5 to-brand-gold/5 rounded-2xl border border-brand-sage/10">
                    <p className="text-base text-brand-charcoal/90 leading-relaxed font-medium">
                      {isResearchPath && selectedDoctor ? (
                        <>
                          You've made an excellent choice. The next step is to enter your private consultation room and
                          share your story.
                        </>
                      ) : (
                        <>
                          Thank you for trusting us. The next step is to enter your private consultation room and share
                          your story.
                        </>
                      )}
                    </p>
                  </div>

                  <p className="text-sm text-brand-charcoal/75 leading-relaxed">
                    {isResearchPath && selectedDoctor ? (
                      <>
                        Once you've shared your story, {selectedDoctor.name} will be notified. You can expect a personal
                        video response from him by{" "}
                        <span className="font-bold text-brand-sage bg-brand-sage/10 px-2 py-1 rounded-lg">
                          12:00 PM the next business day
                        </span>
                        .
                      </>
                    ) : (
                      <>
                        Once you've shared your story, our team will personally match you with the ideal specialist for
                        your pet's needs. You can expect a personal video response from your matched specialist by{" "}
                        <span className="font-bold text-brand-sage bg-brand-sage/10 px-2 py-1 rounded-lg">
                          12:00 PM the next business day
                        </span>
                        .
                      </>
                    )}
                  </p>
                </div>

                <div className="pt-4">
                  <Link
                    href="/onboarding-concierge"
                    className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-brand-sage via-brand-sage to-brand-sage/90 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                  >
                    {/* Enhanced Button Effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/30 to-brand-sage/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <span className="relative flex items-center gap-2">
                      <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      Enter Your Room & Share Your Story
                      <svg
                        className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>

                <div className="pt-4 border-t border-gradient-to-r from-transparent via-brand-sage/20 to-transparent">
                  <div className="relative p-3 bg-gradient-to-br from-brand-sage/5 to-brand-gold/5 rounded-xl border border-brand-sage/10">
                    <p className="text-xs text-brand-charcoal/70 flex items-center justify-center gap-2">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-brand-sage to-brand-sage/80 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <span className="font-medium">
                        We've also sent a confirmation email with a secure link to your consultation room.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`mt-6 transition-all duration-700 delay-800 ${showElements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
              <div className="group flex items-center gap-2 px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/80 transition-all duration-300">
                <div className="w-2 h-2 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300"></div>
                <span className="font-medium text-brand-charcoal/80 group-hover:text-brand-charcoal transition-colors duration-300">
                  Secure & Private
                </span>
              </div>
              <div className="group flex items-center gap-2 px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/80 transition-all duration-300">
                <div className="w-2 h-2 bg-gradient-to-br from-brand-sage to-brand-sage/80 rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300"></div>
                <span className="font-medium text-brand-charcoal/80 group-hover:text-brand-charcoal transition-colors duration-300">
                  Expert Specialists
                </span>
              </div>
              <div className="group flex items-center gap-2 px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/80 transition-all duration-300">
                <div className="w-2 h-2 bg-gradient-to-br from-brand-gold to-brand-gold/80 rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300"></div>
                <span className="font-medium text-brand-charcoal/80 group-hover:text-brand-charcoal transition-colors duration-300">
                  24-Hour Response
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
