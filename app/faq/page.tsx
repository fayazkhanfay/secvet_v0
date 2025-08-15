"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface FAQItem {
  question: string
  answer: string
}

interface FAQCategory {
  title: string
  items: FAQItem[]
}

const faqData: FAQCategory[] = [
  {
    title: "About Our Service & Specialists",
    items: [
      {
        question: "How do you select your specialists?",
        answer:
          "Our specialists are hand-picked through a rigorous vetting process. **Board certification** in their specialty is the absolute minimum requirement. We also require a minimum of **10 years of post-residency experience** and a history of leadership or publication in their field. Most importantly, we personally interview every specialist to ensure they are not just brilliant, but also compassionate guides who can communicate with **kindness and clarity**.",
      },
      {
        question: "Why are your specialists based in Canada?",
        answer:
          "To guarantee 100% unbiased guidance, we deliberately partner with elite, board-certified specialists who practice outside of the U.S. corporate veterinary and pharmaceutical systems. This ensures their recommendations are based solely on the best interests of your pet. It's a core part of our 'quality over quantity' philosophy.",
      },
      {
        question: 'What is the difference between "tele-advice" and "telehealth"?',
        answer:
          'This is an important distinction that allows us to operate legally across the United States. The short answer is that our specialists cannot prescribe medication. "Telehealth" requires a physical examination to establish a formal relationship (VCPR). Since our service is remote, we operate as a "tele-advice" platform, providing expert educational guidance and a clear action plan you can implement with your primary vet.',
      },
      {
        question: "Are there any cases you don't handle?",
        answer:
          "Our team covers a broad range of complex specialties. However, if you have an extremely rare condition or don't see the specialty you need, we encourage you to contact us. Our care coordinators can review your case and see if we have an expert in our extended network who can help.",
      },
      {
        question: "Is this a replacement for my regular vet?",
        answer:
          "No, and that's by design. We are an expert partner *for* your primary veterinarian, not a replacement. Our goal is to give you the clarity and confidence to have a more productive conversation with them about your pet's care. They will always be in charge of all hands-on treatment.",
      },
    ],
  },
  {
    title: "The Consultation Process",
    items: [
      {
        question: "Does the consultation include a live phone or video call?",
        answer:
          "No. To provide the most thoughtful and comprehensive review, our service is based entirely on asynchronous messaging and video responses. This allows you to share information on your schedule and gives your specialist the dedicated time they need to review your case without the pressure of a live appointment.",
      },
      {
        question: "What are your service hours and response times?",
        answer:
          "Our platform is available for you to submit your case 24/7. We guarantee a personal video introduction from your assigned specialist by 12:00 PM on the next business day. For cases submitted during regular business hours (Mon-Fri, 9am-5pm ET), you can often expect a response within just a few hours.",
      },
      {
        question: "How does the 14-day conversation work?",
        answer:
          "Your private consultation room remains open for 14 calendar days, including two full weekends. This is by design. It gives you an unhurried window to review your specialist's guidance, discuss it with your family, and ask follow-up questions on your schedule. It's a supportive conversation, not a high-pressure appointment.",
      },
      {
        question: "What if I don't know which type of specialist I need?",
        answer:
          "That's completely understandable, and it's exactly why our Concierge Path was created. When you select 'I'm not sure,' your case is immediately assigned to one of our board-certified specialists in Small Animal Internal Medicine (SAIM).\n\nThink of them as master diagnosticians—the experts that other vets turn to with their most complex cases. Their entire job is to look at the big picture, connect the dots between symptoms, and determine the absolute best path forward.\n\nThis expert triage is included as part of your consultation. If they determine you need a different specialist, they will facilitate a seamless, internal handoff. This expert triage is included as part of your consultation at no additional charge. Our goal is to take the burden of that decision off your shoulders so you can focus on your pet.",
      },
      {
        question: "Will my primary vet be upset that I'm getting a second opinion?",
        answer:
          "This is a common and understandable concern. Our goal is always collaboration, not confrontation. The best veterinarians are confident in their skills and welcome a specialist's perspective on complex cases. We provide you with a professional summary written in medical language that you can share with your vet to facilitate a productive, partnership-focused conversation.",
      },
      {
        question: "Can I upload new records during the 14-day period?",
        answer:
          "Absolutely. If you receive new bloodwork or test results during your consultation period, we strongly encourage you to upload them. Your specialist can review the new information and incorporate it into their assessment and final plan.",
      },
      {
        question: "What happens after the 14-day consultation ends?",
        answer:
          "At the end of your consultation, you will receive a Final Consultation Summary PDF. This document contains your pet's history, the specialist's assessment, and the final recommended action plan. Your private consultation room will be archived, and you can request a full transcript at any time. Should a new, related issue arise in the future, you can book a follow-up consultation.",
      },
    ],
  },
  {
    title: "Payment & Insurance",
    items: [
      {
        question: "Is the consultation fee a flat rate?",
        answer:
          "Yes. Our $400 + tax fee is a simple, all-inclusive flat rate for every consultation. There are no hidden fees or up-charges for case complexity. The price you see is the price you pay, plus any applicable taxes based on your location.",
      },
      {
        question: "Is this covered by pet insurance?",
        answer:
          "Yes, in many cases. Most pet insurance plans that cover specialist visits will reimburse you for our service. Our detailed receipts include the necessary information and service codes (CPT codes) that insurance providers typically require to process a claim.",
      },
      {
        question: 'What is your "Peace of Mind" Guarantee?',
        answer:
          "Our promise is simple: If you are not 100% satisfied with the clarity and support you receive, for any reason whatsoever, just let us know. We will refund your entire fee immediately. No questions, no hassle. There are no forms to fill out and no hoops to jump through. Your satisfaction is our priority.",
      },
    ],
  },
  {
    title: "Data, Privacy & Technical",
    items: [
      {
        question: "How do you protect my pet's medical data?",
        answer:
          "We take the security of your pet's sensitive medical information very seriously. All data is protected with **bank-level encryption**. Our platform's protocols are aligned with the principles of HIPAA for data privacy and security. As a final layer of protection, all case files are archived for your convenience for one year and then **permanently deleted** from our servers.",
      },
      {
        question: "Can I download my consultation history?",
        answer:
          "Yes. In addition to your Final Consultation Summary PDF, you can request a complete archive of your conversation at any time. You can also request the early deletion of your account and all associated data by contacting our support team.",
      },
      {
        question: "Are there limits on file uploads?",
        answer:
          "You can upload most common file types, including PDF, JPG, PNG, MOV, and MP4. The maximum size for any single file is 25MB. If you have larger files, such as full DICOM imaging sets, please contact our support team, and we will arrange a secure transfer.",
      },
    ],
  },
]

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function AccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  const formatAnswer = (text: string) => {
    // Split by double newlines to create paragraphs
    const paragraphs = text.split("\n\n")

    return paragraphs.map((paragraph, index) => (
      <p key={index} className={`text-brand-charcoal/90 leading-relaxed ${index > 0 ? "mt-4" : ""}`}>
        {paragraph
          .split("**")
          .map((part, partIndex) => (partIndex % 2 === 1 ? <strong key={partIndex}>{part}</strong> : part))}
      </p>
    ))
  }

  return (
    <div className="group border-b border-brand-sage/20 pb-6 last:border-b-0 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-sage/5 to-brand-gold/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between text-left transition-all duration-300 hover:text-brand-sage focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:ring-offset-2 rounded-lg p-4 -m-4 relative z-10"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-brand-charcoal group-hover:text-brand-sage transition-colors duration-300 pr-4">
          {item.question}
        </span>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-sage/20 to-brand-gold/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"></div>
          <ChevronDownIcon
            className={`h-6 w-6 shrink-0 text-brand-sage transition-all duration-500 relative z-10 ${
              isOpen ? "rotate-180 text-brand-gold scale-110" : "group-hover:text-brand-gold group-hover:scale-110"
            }`}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-700 ease-out ${
          isOpen ? "max-h-[1000px] opacity-100 mt-6" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-4 pl-2 border-l-2 border-gradient-to-b from-brand-sage/30 to-brand-gold/30">
          <div className="pl-4">{formatAnswer(item.answer)}</div>
        </div>
      </div>
    </div>
  )
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-offwhite via-white to-brand-offwhite relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-brand-sage/15 via-brand-gold/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-brand-gold/15 via-brand-sage/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-gradient-to-br from-brand-sage/8 to-brand-gold/8 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-gradient-to-tr from-brand-gold/8 to-brand-sage/8 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-brand-sage/5 via-transparent to-brand-gold/5 rounded-full blur-3xl animate-pulse delay-300"></div>
      </div>

      <Header />

      <main className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center mb-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-sage/5 to-transparent rounded-3xl blur-xl"></div>
            <div className="relative z-10">
              <h1 className="font-serif text-5xl sm:text-7xl font-bold tracking-tight mb-8 relative">
                <span className="bg-gradient-to-r from-brand-charcoal via-brand-sage via-brand-gold to-brand-charcoal bg-clip-text text-transparent animate-pulse">
                  Frequently Asked Questions
                </span>
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-sage/10 via-brand-gold/10 to-brand-sage/10 rounded-2xl opacity-20 blur-xl"></div>
              </h1>
              <p className="text-xl text-brand-charcoal/80 max-w-3xl mx-auto leading-relaxed">
                Have a question? We have answers. If you don't see what you're looking for, please don't hesitate to{" "}
                <a
                  href="/contact"
                  className="font-semibold text-brand-sage hover:text-brand-gold transition-all duration-300 underline decoration-brand-sage/30 hover:decoration-brand-gold/50 hover:scale-105 inline-block"
                >
                  contact us
                </a>
                .
              </p>
            </div>
          </div>

          <div className="space-y-20">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="group relative">
                <div className="relative mb-10">
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-brand-charcoal to-brand-sage bg-clip-text text-transparent">
                      {category.title}
                    </span>
                    <div className="absolute -inset-4 bg-gradient-to-r from-brand-sage/10 via-brand-gold/10 to-brand-sage/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 blur-sm"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-sage to-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </h2>
                </div>

                <div className="relative group/card">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-sage/10 via-white/50 to-brand-gold/10 rounded-3xl blur-xl opacity-50 group-hover/card:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative bg-white/70 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-brand-sage/20 hover:shadow-3xl transition-all duration-700 hover:border-brand-sage/30 hover:bg-white/80">
                    <div className="space-y-8">
                      {category.items.map((item, itemIndex) => (
                        <AccordionItem
                          key={itemIndex}
                          item={item}
                          isOpen={openItems[`${categoryIndex}-${itemIndex}`] || false}
                          onToggle={() => toggleItem(categoryIndex, itemIndex)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-sage/10 via-brand-gold/10 to-brand-sage/10 rounded-3xl blur-2xl opacity-50"></div>
            <div className="relative bg-gradient-to-br from-white/80 via-brand-offwhite/60 to-white/80 backdrop-blur-sm rounded-3xl p-12 border border-brand-sage/30 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-sage/5 via-transparent to-brand-gold/5 rounded-3xl"></div>
              <div className="relative z-10">
                <h3 className="font-serif text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-brand-charcoal via-brand-sage to-brand-charcoal bg-clip-text text-transparent">
                    Still have questions?
                  </span>
                </h3>
                <p className="text-brand-charcoal/80 mb-8 max-w-lg mx-auto text-lg leading-relaxed">
                  Our team is here to help. Get in touch and we'll respond as quickly as possible.
                </p>
                <div className="relative inline-block group">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-sage to-brand-gold rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300 scale-110"></div>
                  <a
                    href="/contact"
                    className="relative inline-flex items-center gap-3 bg-gradient-to-r from-brand-sage to-brand-gold text-white px-10 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg"
                  >
                    Contact Us
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
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
