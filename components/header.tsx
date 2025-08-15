"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/#process", label: "Our Process" },
    { href: "/#specialists", label: "Our Specialists" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#faq", label: "FAQ" }, // Updated FAQ link to scroll to landing page FAQ section instead of dedicated FAQ page
  ]

  return (
    <header className="bg-gradient-to-r from-brand-charcoal via-brand-charcoal to-brand-charcoal/95 text-brand-offwhite sticky top-0 z-50 shadow-xl backdrop-blur-sm border-b border-brand-sage/20">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-sage/5 via-transparent to-brand-gold/5 pointer-events-none"></div>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 relative z-10"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="group -m-1.5 p-1.5 rounded-xl hover:bg-white/5 transition-all duration-300">
            <span className="font-serif font-bold text-xl bg-gradient-to-r from-brand-offwhite to-brand-gold bg-clip-text text-transparent group-hover:from-brand-gold group-hover:to-brand-offwhite transition-all duration-300">
              Second Veterinarian
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-semibold leading-6 transition-all duration-300 hover:text-brand-gold rounded-lg px-3 py-2 hover:bg-white/5"
            >
              <span className="relative z-10">{link.label}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/10 to-brand-sage/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          ))}
        </div>

        {/* Desktop Login */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/login"
            className="group relative text-sm font-semibold leading-6 transition-all duration-300 hover:text-brand-gold rounded-lg px-4 py-2 border border-brand-sage/30 hover:border-brand-gold/50 hover:bg-white/5"
          >
            <span className="relative z-10 flex items-center gap-2">
              Log in
              <span
                className="transform group-hover:translate-x-1 transition-transform duration-200"
                aria-hidden="true"
              >
                →
              </span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/5 to-brand-sage/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="flex lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="text-brand-offwhite hover:text-brand-gold hover:bg-white/10 transition-all duration-300 border border-brand-sage/30 hover:border-brand-gold/50"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open main menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-gradient-to-b from-brand-charcoal to-brand-charcoal/95 text-brand-offwhite border-brand-sage/30 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-sage/10 via-transparent to-brand-gold/10 pointer-events-none"></div>
              <div className="flex flex-col space-y-6 mt-6 relative z-10">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group text-lg font-semibold transition-all duration-300 hover:text-brand-gold px-4 py-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-brand-gold/20"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="flex items-center justify-between">
                      {link.label}
                      <span className="transform group-hover:translate-x-1 transition-transform duration-200 opacity-0 group-hover:opacity-100">
                        →
                      </span>
                    </span>
                  </a>
                ))}
                <a
                  href="/login"
                  className="group text-lg font-semibold transition-all duration-300 hover:text-brand-gold border-t border-brand-sage/30 pt-6 px-4 py-3 rounded-lg hover:bg-white/5 border-l border-r border-b border-transparent hover:border-brand-gold/20"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="flex items-center justify-between">
                    Log in
                    <span
                      className="transform group-hover:translate-x-1 transition-transform duration-200"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </span>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
