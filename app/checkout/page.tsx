"use client"

import type React from "react"
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Footer } from "@/components/footer"

const doctorData = {
  "isaac-hayes": {
    id: "isaac-hayes",
    slug: "isaac-hayes",
    name: "Dr. Isaac Hayes",
    credentials: "DVM, DACVIM (Neurology)",
    image: "/placeholder.svg?height=64&width=64",
    firstName: "Dr. Hayes",
  },
  "marcus-chen": {
    id: "marcus-chen",
    slug: "marcus-chen",
    name: "Dr. Marcus Chen",
    credentials: "DVM, DACVIM (Oncology)",
    image: "/placeholder.svg?height=64&width=64",
    firstName: "Dr. Chen",
  },
  "evelyn-reed": {
    id: "evelyn-reed",
    slug: "evelyn-reed",
    name: "Dr. Evelyn Reed",
    credentials: "DVM, DACVIM (Cardiology)",
    image: "/placeholder.svg?height=64&width=64",
    firstName: "Dr. Reed",
  },
  "anya-patel": {
    id: "anya-patel",
    slug: "anya-patel",
    name: "Dr. Anya Patel",
    credentials: "DVM, DACVS (Surgery)",
    image: "/placeholder.svg?height=64&width=64",
    firstName: "Dr. Patel",
  },
  "sofia-ortega": {
    id: "sofia-ortega",
    slug: "sofia-ortega",
    name: "Dr. Sofia Ortega",
    credentials: "DVM, DACVIM (SAIM)",
    image: "/placeholder.svg?height=64&width=64",
    firstName: "Dr. Ortega",
  },
  "eleanor-vance": {
    id: "eleanor-vance",
    slug: "eleanor-vance",
    name: "Dr. Eleanor Vance",
    credentials: "DVM, DACVIM (Oncology)",
    image: "/placeholder.svg?height=64&width=64",
    firstName: "Dr. Vance",
  },
}

export default function CheckoutPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({})

  const doctorId = searchParams.get("doctor")
  const selectedDoctor = doctorId ? doctorData[doctorId as keyof typeof doctorData] : null
  const isResearchPath = !!selectedDoctor

  // Form validation
  const validateForm = () => {
    const errors: { [key: string]: string } = {}

    if (!formData.name.trim()) {
      errors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters"
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm() || !termsAccepted) return

    setIsLoading(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log("Processing payment...", formData)
    setIsLoading(false)

    router.push(doctorId ? `/success?doctor=${doctorId}` : "/success")
  }

  const isFormValid =
    formData.name.trim() && formData.email.trim() && termsAccepted && Object.keys(formErrors).length === 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-offwhite via-white to-brand-offwhite/50">
      <Header />

      <main className="relative overflow-hidden">
        {/* Enhanced background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-brand-sage/20 to-brand-gold/20 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-brand-gold/20 to-brand-sage/20 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-brand-sage/10 to-brand-gold/10 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-br from-brand-gold/15 to-brand-sage/15 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-sage/15 to-brand-gold/15 backdrop-blur-sm border border-brand-sage/30 rounded-full px-4 py-2 mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-2 h-2 bg-gradient-to-r from-brand-sage to-brand-gold rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-brand-sage">🔒 Secure Checkout</span>
            </div>

            {isResearchPath ? (
              <>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-charcoal mb-4 bg-gradient-to-r from-brand-charcoal via-brand-sage to-brand-charcoal bg-clip-text">
                  Let's Begin Your Conversation with {selectedDoctor.firstName}.
                </h1>
                <p className="text-base sm:text-lg text-brand-charcoal/80 max-w-2xl mx-auto mb-6">
                  Confirm your consultation to get the action plan you need.
                </p>
              </>
            ) : (
              <>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-charcoal mb-4 bg-gradient-to-r from-brand-charcoal via-brand-sage to-brand-charcoal bg-clip-text">
                  You're One Step From Peace of Mind.
                </h1>
                <p className="text-base sm:text-lg text-brand-charcoal/80 max-w-2xl mx-auto mb-6">
                  Our team will personally match you with the ideal specialist for your pet's needs.
                </p>
              </>
            )}

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-brand-sage/80">
              <div className="flex items-center gap-1">
                <span className="text-green-500">✓</span>
                <span>500+ families helped</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-green-500">✓</span>
                <span>"Peace of Mind" Guarantee</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-green-500">✓</span>
                <span>Top 1% veterinary specialist</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="relative group order-1 lg:col-span-1 lg:row-span-2">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-sage/10 to-brand-gold/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/60 hover:shadow-3xl transition-all duration-700 hover:scale-[1.01]">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-sage to-brand-gold rounded-t-3xl"></div>

                <h2 className="font-serif text-xl sm:text-2xl font-bold text-brand-charcoal mb-6">
                  {isResearchPath ? "Your Consultation Package" : "Your Concierge Consultation Package"}
                </h2>

                {isResearchPath ? (
                  <div className="flex items-center gap-4 p-4 sm:p-5 bg-gradient-to-r from-brand-sage/10 to-brand-gold/10 rounded-2xl border border-brand-sage/20 mb-6 hover:shadow-lg transition-all duration-300">
                    <img
                      className="h-16 w-16 rounded-full object-cover ring-2 ring-white shadow-lg"
                      src={selectedDoctor.image || "/placeholder.svg"}
                      alt={selectedDoctor.name}
                    />
                    <div>
                      <p className="font-semibold text-brand-charcoal">Your Specialist:</p>
                      <p className="text-brand-sage">
                        {selectedDoctor.name}, {selectedDoctor.credentials}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-4 p-4 sm:p-5 bg-gradient-to-r from-brand-sage/10 to-brand-gold/10 rounded-2xl border border-brand-sage/20 mb-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex -space-x-3">
                      {[
                        { name: "Dr. Chen", specialty: "Oncology" },
                        { name: "Dr. Reed", specialty: "Cardiology" },
                        { name: "Dr. Hayes", specialty: "Surgery" },
                      ].map((doctor, index) => (
                        <div
                          key={doctor.name}
                          className={`relative z-${30 - index * 10} inline-block h-14 w-14 sm:h-16 sm:w-16 rounded-full ring-2 ring-white overflow-hidden hover:scale-110 transition-transform duration-300`}
                        >
                          <img
                            src={`/placeholder.svg?height=64&width=64&query=Professional veterinarian ${doctor.name} headshot`}
                            alt={doctor.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-brand-charcoal">Your Specialist:</p>
                      <p className="text-brand-sage text-sm leading-relaxed">
                        We'll personally match you with one of our world-class experts, like Dr. Chen or Dr. Reed.
                      </p>
                    </div>
                  </div>
                )}

                <div className="border-t border-brand-sage/20 pt-6 mb-6">
                  <h3 className="font-semibold text-brand-charcoal mb-5 flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-brand-sage to-brand-gold rounded-full animate-pulse"></div>
                    What's Included:
                  </h3>
                  <ul className="space-y-4 text-sm text-brand-charcoal/90">
                    {(isResearchPath
                      ? [
                          {
                            text: "An expert who **listens to your story first**, not just reads a lab result.",
                            icon: "👂",
                          },
                          {
                            text: "A **collaborative plan** built around your budget and your family's needs.",
                            icon: "🤝",
                          },
                          {
                            text:
                              "An **unhurried, 14-day conversation** with " +
                              selectedDoctor.firstName +
                              ", on your schedule.",
                            icon: "📅",
                          },
                        ]
                      : [
                          {
                            text: "An expert triage of your case to ensure you're matched with the **perfect specialist**.",
                            icon: "🎯",
                          },
                          {
                            text: "An expert who **listens to your story first**, not just reads a lab result.",
                            icon: "👂",
                          },
                          {
                            text: "A collaborative plan built around **your budget** and your family's needs.",
                            icon: "🤝",
                          },
                          {
                            text: "An unhurried, **14-day conversation** with your matched specialist, on your schedule.",
                            icon: "📅",
                          },
                        ]
                    ).map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 group/item hover:bg-brand-sage/5 p-2 rounded-lg transition-all duration-300"
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-sage to-brand-gold flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300 shadow-lg">
                            <span className="text-xs">{item.icon}</span>
                          </div>
                        </div>
                        <span
                          className="leading-relaxed"
                          dangerouslySetInnerHTML={{
                            __html: item.text.replace(
                              /\*\*(.*?)\*\*/g,
                              '<strong class="font-semibold text-brand-charcoal">$1</strong>',
                            ),
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced Guarantee */}
                <div className="border-t border-brand-sage/20 pt-6">
                  <div className="p-4 sm:p-5 bg-gradient-to-r from-brand-gold/15 to-brand-sage/15 rounded-2xl border border-brand-gold/30 hover:shadow-lg transition-all duration-300">
                    <h3 className="font-semibold text-brand-charcoal flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-gold to-brand-sage flex items-center justify-center shadow-lg">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      Our "Peace of Mind" Guarantee
                    </h3>
                    <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                      Your purchase is protected by our full money-back guarantee. If we don't provide you with a clear
                      path forward, you pay nothing.
                    </p>
                  </div>
                </div>

                {/* Social proof */}
                <div className="mt-6 pt-6 border-t border-brand-sage/20">
                  <div className="text-center">
                    <div className="flex justify-center items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-brand-gold text-lg">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-brand-charcoal/80 italic">
                      "Finally got the clarity we needed for Max's condition. Worth every penny."
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-1">
                      <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-brand-sage/30">
                        <img
                          src="/placeholder.svg?height=24&width=24"
                          alt="Sarah M."
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xs text-brand-sage">- Sarah M., verified customer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group order-2 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-sage/10 to-brand-gold/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-5 sm:p-6 rounded-3xl shadow-2xl border border-white/60 hover:shadow-3xl transition-all duration-700">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-sage to-brand-gold rounded-t-3xl"></div>

                <div className="flex justify-between items-baseline mb-6">
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-brand-charcoal flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-sage to-brand-gold text-white text-xs font-bold flex items-center justify-center">
                      1
                    </div>
                    Create Your Secure Account
                  </h2>
                  <p className="text-xs sm:text-sm">
                    Returning user?{" "}
                    <a
                      href="#"
                      className="font-semibold text-brand-sage hover:text-brand-gold transition-colors duration-300 hover:underline"
                    >
                      Log in here
                    </a>
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-brand-charcoal font-medium flex items-center gap-1">
                      Your Name
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`mt-1 transition-all duration-300 ${
                        formErrors.name
                          ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                          : "border-brand-sage/20 focus:border-brand-sage focus:ring-brand-sage/20"
                      }`}
                      placeholder="Enter your full name"
                      aria-describedby={formErrors.name ? "name-error" : undefined}
                    />
                    {formErrors.name && (
                      <p id="name-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <span>⚠️</span>
                        {formErrors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-brand-charcoal font-medium flex items-center gap-1">
                      Your Email (This will be your username)
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`mt-1 transition-all duration-300 ${
                        formErrors.email
                          ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                          : "border-brand-sage/20 focus:border-brand-sage focus:ring-brand-sage/20"
                      }`}
                      placeholder="Enter your email address"
                      aria-describedby={formErrors.email ? "email-error" : undefined}
                    />
                    {formErrors.email && (
                      <p id="email-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <span>⚠️</span>
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group order-3 lg:order-3">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-sage/10 to-brand-gold/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-5 sm:p-6 rounded-3xl shadow-2xl border border-white/60 hover:shadow-3xl transition-all duration-700">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-sage to-brand-gold rounded-t-3xl"></div>

                <h2 className="font-serif text-lg sm:text-xl font-bold text-brand-charcoal mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-sage to-brand-gold text-white text-xs font-bold flex items-center justify-center">
                    2
                  </div>
                  Confirm & Pay
                </h2>

                {/* Enhanced Order Summary */}
                <div className="border border-brand-sage/20 rounded-2xl p-4 sm:p-5 mb-6 bg-gradient-to-r from-brand-sage/5 to-brand-gold/5">
                  <h3 className="font-semibold text-brand-charcoal mb-4 flex items-center gap-2">
                    <span>📋</span>
                    Order Summary
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-brand-charcoal/80">Peace of Mind Consultation Fee:</span>
                      <span className="font-medium">$400.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-brand-charcoal/80">State & Local Taxes:</span>
                      <span className="font-medium">$28.00</span>
                    </div>
                    <div className="border-t border-brand-sage/20 pt-3 mt-3">
                      <div className="flex justify-between items-center font-bold text-base">
                        <span>Total Due Today:</span>
                        <span className="text-brand-sage text-lg">$428.00</span>
                      </div>
                      <p className="text-xs text-brand-charcoal/60 mt-1">💳 Secure payment • 🔒 256-bit encryption</p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Payment Element Placeholder */}
                <div className="mb-6 p-6 border-2 border-dashed border-brand-sage/30 rounded-2xl text-center bg-gradient-to-r from-brand-sage/10 to-brand-gold/10 hover:from-brand-sage/15 hover:to-brand-gold/15 transition-all duration-300">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-sage to-brand-gold flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-brand-sage font-semibold">🔒 Secure Stripe Payment Element</p>
                  <p className="text-xs text-brand-charcoal/60 mt-2 leading-relaxed">
                    Your payment information is encrypted and secure. We accept all major credit cards and digital
                    wallets.
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-gradient-to-r from-brand-sage/10 to-brand-gold/10 rounded-xl border border-brand-sage/20">
                    <p className="text-xs sm:text-sm text-brand-charcoal/70 text-center leading-relaxed">
                      By purchasing, you confirm you're the pet's legal owner, are over 18, and understand this is
                      educational guidance.
                    </p>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-white/70 rounded-xl border border-brand-sage/20 hover:bg-white/90 transition-all duration-300">
                    <Checkbox
                      id="confirm-terms"
                      checked={termsAccepted}
                      onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                      className="mt-0.5 border-brand-sage/40 data-[state=checked]:bg-brand-sage data-[state=checked]:border-brand-sage flex-shrink-0 w-5 h-5"
                    />
                    <Label
                      htmlFor="confirm-terms"
                      className="text-sm leading-relaxed text-brand-charcoal cursor-pointer"
                    >
                      <div className="sm:inline">
                        <span>I agree to the </span>
                        <a
                          href="#"
                          className="text-brand-sage hover:text-brand-gold transition-colors duration-300 hover:underline font-medium"
                        >
                          Terms of Service
                        </a>
                        <span> and </span>
                        <a
                          href="#"
                          className="text-brand-sage hover:text-brand-gold transition-colors duration-300 hover:underline font-medium"
                        >
                          Privacy Policy
                        </a>
                      </div>
                    </Label>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <Button
                    type="submit"
                    disabled={!isFormValid || isLoading}
                    className="w-full bg-gradient-to-r from-brand-gold to-brand-gold/90 hover:from-brand-gold/90 hover:to-brand-gold text-brand-charcoal font-bold py-4 px-8 rounded-2xl text-base transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group shadow-xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative flex items-center justify-center gap-2">
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-brand-charcoal/30 border-t-brand-charcoal rounded-full animate-spin"></div>
                          Processing Payment...
                        </>
                      ) : (
                        <>
                          Complete Purchase — Pay $428.00
                          <svg
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </>
                      )}
                    </span>
                  </Button>
                </form>

                {/* Additional trust indicators */}
                <div className="mt-4 flex flex-wrap justify-center items-center gap-4 text-xs text-brand-charcoal/60">
                  <div className="flex items-center gap-1">
                    <span className="text-green-500">🔒</span>
                    <span>SSL Secured</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-blue-500">💳</span>
                    <span>PCI Compliant</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-purple-500">⚡</span>
                    <span>Instant Access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
