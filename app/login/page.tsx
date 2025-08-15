"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, ArrowLeft, Check, Sparkles } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get("redirect") || "/"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate magic link sending
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  const handleBackClick = () => {
    router.push(redirectTo)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-brand-offwhite via-white to-brand-offwhite/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(94,108,100,0.12)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(201,176,106,0.08)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(94,108,100,0.03)_0%,transparent_70%)] pointer-events-none"></div>

        <div className="absolute top-20 left-20 w-6 h-6 bg-gradient-to-br from-brand-gold/20 to-brand-gold/40 rounded-full animate-pulse delay-300 blur-sm"></div>
        <div className="absolute bottom-32 right-16 w-4 h-4 bg-gradient-to-br from-brand-sage/30 to-brand-sage/50 rounded-full animate-pulse delay-700 blur-sm"></div>
        <div className="absolute top-1/3 right-10 w-3 h-3 bg-gradient-to-br from-brand-gold/40 to-brand-gold/60 rounded-full animate-pulse delay-1000 blur-sm"></div>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gradient-to-br from-brand-sage/20 to-brand-sage/40 rounded-full animate-pulse delay-1500 blur-sm"></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-gradient-to-br from-brand-gold/15 to-brand-gold/30 rounded-full animate-pulse delay-2000 blur-sm"></div>

        <div className="lg:grid lg:grid-cols-2 lg:min-h-screen">
          {/* Left Column: Image */}
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-sage/30 via-transparent to-brand-gold/20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/10 via-transparent to-transparent"></div>
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="/placeholder.svg?height=1200&width=800&text=Serene+Pet+in+Peaceful+Setting"
              alt="A calm pet resting in a peaceful setting, representing the tranquility our service provides."
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

            <div className="absolute top-20 left-20 w-8 h-8 bg-gradient-to-br from-brand-gold/40 to-brand-gold/60 rounded-full animate-pulse delay-300 backdrop-blur-sm border border-white/20"></div>
            <div className="absolute bottom-32 right-16 w-6 h-6 bg-gradient-to-br from-brand-sage/50 to-brand-sage/70 rounded-full animate-pulse delay-700 backdrop-blur-sm border border-white/20"></div>
            <div className="absolute top-1/3 right-10 w-4 h-4 bg-gradient-to-br from-brand-gold/60 to-brand-gold/80 rounded-full animate-pulse delay-1000 backdrop-blur-sm border border-white/20"></div>
          </div>

          {/* Right Column: Form */}
          <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-brand-offwhite/30 to-white/20 backdrop-blur-sm"></div>

            <div className="max-w-md w-full space-y-8 relative z-10">
              <button
                onClick={handleBackClick}
                className="group flex items-center gap-2 text-brand-sage hover:text-brand-charcoal transition-all duration-300 mb-8 hover:scale-105 transform"
              >
                <div className="p-1 rounded-full bg-brand-sage/10 group-hover:bg-brand-sage/20 transition-all duration-300">
                  <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" />
                </div>
                <span className="text-sm font-medium">Back</span>
              </button>

              <div className="text-center">
                <div className="mb-8">
                  <h1 className="font-serif font-bold text-3xl bg-gradient-to-r from-brand-sage via-brand-charcoal to-brand-sage bg-clip-text text-transparent animate-pulse">
                    Second Veterinarian
                  </h1>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mt-2"></div>
                </div>

                {!isSubmitted ? (
                  <>
                    <h2 className="font-serif text-3xl font-bold tracking-tight bg-gradient-to-r from-brand-charcoal via-brand-sage to-brand-charcoal bg-clip-text text-transparent sm:text-4xl">
                      Welcome Back
                    </h2>
                    <p className="mt-4 text-brand-charcoal/80 leading-relaxed text-lg">
                      Your secure, private consultation room is just a click away.
                    </p>
                  </>
                ) : (
                  <>
                    <div className="relative mx-auto w-20 h-20 mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-sage to-brand-sage/80 rounded-full shadow-2xl animate-pulse"></div>
                      <div className="absolute inset-1 bg-gradient-to-br from-brand-sage/90 to-brand-sage rounded-full flex items-center justify-center">
                        <Check className="w-10 h-10 text-white drop-shadow-sm" />
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-br from-brand-sage/20 to-brand-sage/40 rounded-full animate-ping"></div>
                    </div>
                    <h2 className="font-serif text-3xl font-bold tracking-tight bg-gradient-to-r from-brand-charcoal to-brand-sage bg-clip-text text-transparent">
                      Check Your Email
                    </h2>
                    <p className="mt-4 text-brand-charcoal/80 leading-relaxed text-lg">
                      We've sent a secure login link to{" "}
                      <strong className="text-brand-sage font-semibold">{email}</strong>
                    </p>
                  </>
                )}
              </div>

              {!isSubmitted ? (
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="relative group">
                      <label htmlFor="email-address" className="sr-only">
                        Email address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-sage/5 to-brand-gold/5 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-brand-sage/60 group-focus-within:text-brand-sage group-focus-within:scale-110 transition-all duration-300 z-10" />
                        <input
                          id="email-address"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="block w-full pl-14 pr-4 py-5 border-2 border-gray-200 rounded-xl text-brand-charcoal placeholder-gray-500 focus:z-10 focus:border-brand-sage focus:outline-none focus:ring-4 focus:ring-brand-sage/20 transition-all duration-300 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl text-lg relative"
                          placeholder="Enter your email address"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-sage/0 via-brand-sage/5 to-brand-gold/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isLoading || !email}
                      className="group relative flex w-full justify-center rounded-full border border-transparent bg-gradient-to-r from-brand-sage via-brand-sage/95 to-brand-sage/90 py-5 px-6 text-lg font-semibold text-white hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-brand-sage/30 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 overflow-hidden shadow-xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-sage/80 to-brand-sage opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 flex items-center gap-3">
                        {isLoading ? (
                          <>
                            <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Sending Magic Link...
                          </>
                        ) : (
                          <>
                            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                            Continue with Email
                            <Sparkles className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-12" />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="mt-8 space-y-6">
                  <div className="relative bg-gradient-to-br from-white/80 via-brand-offwhite/60 to-white/70 backdrop-blur-sm p-8 rounded-2xl border-2 border-brand-sage/20 shadow-2xl overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-sage/50 to-transparent"></div>
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-brand-gold/10 to-transparent rounded-full blur-3xl"></div>
                    <h3 className="font-semibold text-brand-charcoal mb-4 text-lg flex items-center gap-2">
                      <div className="w-3 h-3 bg-gradient-to-br from-brand-gold to-brand-gold/80 rounded-full animate-pulse"></div>
                      What happens next?
                    </h3>
                    <ul className="space-y-3 text-brand-charcoal/80">
                      <li className="flex items-start gap-3 group">
                        <div className="w-2 h-2 bg-gradient-to-br from-brand-sage to-brand-sage/80 rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="group-hover:text-brand-charcoal transition-colors duration-300">
                          Click the secure link in your email
                        </span>
                      </li>
                      <li className="flex items-start gap-3 group">
                        <div className="w-2 h-2 bg-gradient-to-br from-brand-sage to-brand-sage/80 rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="group-hover:text-brand-charcoal transition-colors duration-300">
                          You'll be automatically logged in
                        </span>
                      </li>
                      <li className="flex items-start gap-3 group">
                        <div className="w-2 h-2 bg-gradient-to-br from-brand-sage to-brand-sage/80 rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="group-hover:text-brand-charcoal transition-colors duration-300">
                          Continue where you left off
                        </span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full text-center text-brand-sage hover:text-brand-charcoal transition-all duration-300 font-medium hover:scale-105 transform py-2"
                  >
                    Use a different email address
                  </button>
                </div>
              )}

              <div className="mt-8">
                <div className="relative bg-gradient-to-br from-white/90 via-brand-offwhite/70 to-white/80 backdrop-blur-md p-8 rounded-2xl border-2 border-brand-sage/20 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-sage/40 to-transparent"></div>
                  <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-brand-sage/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-gradient-to-br from-brand-gold/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                  <h4 className="font-semibold text-brand-charcoal mb-3 flex items-center gap-3 text-lg">
                    <div className="w-3 h-3 bg-gradient-to-br from-brand-gold to-brand-gold/80 rounded-full animate-pulse"></div>
                    A Simpler, Safer Login
                    <Sparkles className="w-4 h-4 text-brand-gold opacity-60 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300" />
                  </h4>
                  <p className="text-brand-charcoal/80 leading-relaxed relative z-10">
                    No passwords to remember (or for anyone to steal). We'll email you a secure, one-time link to access
                    your private consultation room.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
