"use client"

import { notFound } from "next/navigation"
import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Mock data for specialists - in a real app, this would come from a database
const specialists = {
  "marcus-chen": {
    id: 1,
    slug: "marcus-chen",
    name: "Dr. Marcus Chen",
    credentials: "DVM, DACVIM (Oncology)",
    image: "/placeholder.svg?height=400&width=400",
    videoThumbnail: "/placeholder.svg?height=720&width=1280",
    specialties: ["Cancer Treatment", "Chemotherapy", "Radiation Therapy", "Palliative Care"],
    animals: ["Dog", "Cat"],
    education: {
      veterinarySchool: "University of California, Davis",
      residency: "Colorado State University",
      boardCertification: "American College of Veterinary Internal Medicine (Oncology)",
      yearsInPractice: 12,
    },
    caseStudy: {
      problem:
        "A family came to me with Luna, a golden retriever diagnosed with lymphoma. Their local vet recommended immediate chemotherapy, but the family was overwhelmed and unsure about the treatment options.",
      approach:
        "I took the time to explain every treatment option, from aggressive chemotherapy to palliative care. I created a personalized treatment plan that considered Luna's age, the family's financial situation, and their emotional capacity to handle intensive treatment.",
      result:
        "The family chose a modified chemotherapy protocol. Luna responded beautifully and is now in remission. Most importantly, the family felt empowered and confident in their decision. This case reinforced my belief that the best treatment plan is one that the family can fully commit to and understand.",
    },
    testimonials: [
      {
        title: "He gave us clarity when we were lost.",
        quote:
          "When our golden retriever was diagnosed with lymphoma, we were devastated and confused. Dr. Chen didn't just give us a second opinion; he gave us a clear, step-by-step plan that honored our goals and our budget. Luna is now in remission and we feel confident about every decision we made.",
        author: "Jennifer L., parent to Luna",
      },
    ],
  },
  "evelyn-reed": {
    id: 2,
    slug: "evelyn-reed",
    name: "Dr. Evelyn Reed",
    credentials: "DVM, DACVIM (Cardiology)",
    image: "/placeholder.svg?height=400&width=400",
    videoThumbnail: "/placeholder.svg?height=720&width=1280",
    specialties: ["Heart Disease", "Cardiac Ultrasound", "Congestive Heart Failure", "Arrhythmias"],
    animals: ["Dog", "Cat"],
    education: {
      veterinarySchool: "Cornell University",
      residency: "North Carolina State University",
      boardCertification: "American College of Veterinary Internal Medicine (Cardiology)",
      yearsInPractice: 15,
    },
    caseStudy: {
      problem:
        "A family brought in Max, a dachshund with a heart murmur. Their regular vet was concerned but couldn't provide a clear diagnosis or treatment plan.",
      approach:
        "I performed a comprehensive cardiac workup including echocardiography and ECG. I discovered Max had mitral valve disease, but it was in early stages. I created a detailed monitoring plan and explained exactly what to watch for.",
      result:
        "Max is now on a carefully managed treatment plan. His condition is stable and the family knows exactly what signs to watch for. They feel confident and in control of Max's care.",
    },
    testimonials: [
      {
        title: "She drew diagrams and walked us through everything.",
        quote:
          "Our dachshund Max has a heart condition, and we were terrified. Dr. Reed was incredible. She drew diagrams, explained every test result, and created a monitoring plan that made us feel in control. For the first time, we understood what was happening and what to expect.",
        author: "Michael R., parent to Max",
      },
    ],
  },
  "anya-patel": {
    id: 3,
    slug: "anya-patel",
    name: "Dr. Anya Patel",
    credentials: "DVM, DACVS (Surgery)",
    image: "/placeholder.svg?height=400&width=400",
    videoThumbnail: "/placeholder.svg?height=720&width=1280",
    specialties: ["Soft Tissue Surgery", "Orthopedic Surgery", "Minimally Invasive Procedures", "Emergency Surgery"],
    animals: ["Dog", "Cat"],
    education: {
      veterinarySchool: "University of Pennsylvania",
      residency: "University of Florida",
      boardCertification: "American College of Veterinary Surgeons",
      yearsInPractice: 10,
    },
    caseStudy: {
      problem:
        "A family was told their cat needed major abdominal surgery for a foreign body. They were concerned about the invasiveness and recovery time.",
      approach:
        "I reviewed the case and realized we could use a minimally invasive approach. I explained the benefits of laparoscopy and created a detailed recovery plan that would minimize stress for both the cat and the family.",
      result:
        "The surgery was successful with minimal trauma. The cat recovered much faster than expected, and the family was amazed at how smooth the entire process was.",
    },
    testimonials: [
      {
        title: "That single conversation about a less invasive approach saved us so much stress and money.",
        quote:
          "Our cat needed surgery and we were terrified. Dr. Patel reviewed the case and suggested a minimally invasive approach we hadn't even heard of. It was more expensive upfront but saved us so much in recovery time and stress. Our cat was back to normal in days instead of weeks.",
        author: "Sarah M., parent to Whiskers",
      },
    ],
  },
  "isaac-hayes": {
    id: 4,
    slug: "isaac-hayes",
    name: "Dr. Isaac Hayes",
    credentials: "DVM, DACVIM (Neurology)",
    image: "/placeholder.svg?height=400&width=400",
    videoThumbnail: "/placeholder.svg?height=720&width=1280",
    specialties: ["Seizure Management", "Intervertebral Disc Disease (IVDD)", "Brain Tumors", "Vestibular Disease"],
    animals: ["Dog", "Cat"],
    education: {
      veterinarySchool: "Cornell University",
      residency: "University of California, Davis",
      boardCertification: "American College of Veterinary Internal Medicine (Neurology)",
      yearsInPractice: 14,
    },
    caseStudy: {
      problem:
        "A family came to me with Frankie, a dachshund who had suddenly lost the use of his back legs. Their local ER vet recommended immediate, expensive spinal surgery. The family was in a panic, unsure if surgery was the only option.",
      approach:
        "After a thorough review of Frankie's records, I confirmed the diagnosis of IVDD. However, I also noted that he still had deep pain sensation—a critical positive sign. I explained to the family that while surgery was an option, a strict, conservative management plan involving 8 weeks of crate rest had a very high chance of success in his specific case. I provided a detailed daily guide for them to follow.",
      result:
        "The family chose conservative management. It was a long two months, but their dedication paid off. Frankie made a full recovery and is now walking and running again without the need for surgery. This case is a perfect example of my core belief: sometimes the most powerful action plan involves knowing when *not* to operate, providing a path that minimizes risk, cost, and stress for the entire family.",
    },
    testimonials: [
      {
        title: "Life-changing clarity for our family.",
        quote:
          "Our local vet suspected a brain tumor in our golden retriever, Winston, and we were devastated and lost. Dr. Hayes was incredible. He reviewed the MRI, explained every detail in a way we could finally understand, and laid out a non-surgical management plan that gave us six more beautiful, happy months with our boy. He didn't just give us a second opinion; he gave us peace.",
        author: "Sarah K., parent to Winston",
      },
      {
        title: "The most thorough vet I've ever worked with.",
        quote:
          "Our dachshund, Frankie, suddenly became paralyzed. The emergency vet recommended immediate, expensive surgery. We were in a panic. Dr. Hayes reviewed the case within hours, confirmed it was IVDD, but suggested a more conservative crate-rest protocol first. It worked. He saved us thousands of dollars and the stress of a major surgery. His follow-up messages during the 14-day period were a lifeline.",
        author: "Mark D., parent to Frankie",
      },
    ],
  },
  "sofia-ortega": {
    id: 5,
    slug: "sofia-ortega",
    name: "Dr. Sofia Ortega",
    credentials: "DVM, DACVIM (SAIM)",
    image: "/placeholder.svg?height=400&width=400",
    videoThumbnail: "/placeholder.svg?height=720&width=1280",
    specialties: ["Gastrointestinal Disease", "Liver Disease", "Endocrine Disorders", "Chronic Illness Management"],
    animals: ["Dog", "Cat"],
    education: {
      veterinarySchool: "University of California, Davis",
      residency: "University of Wisconsin",
      boardCertification: "American College of Veterinary Internal Medicine (Small Animal Internal Medicine)",
      yearsInPractice: 11,
    },
    caseStudy: {
      problem:
        "A family was struggling with their cat's chronic vomiting and weight loss. Multiple vets had tried different treatments without success.",
      approach:
        "I took a systematic approach, reviewing all previous treatments and creating a comprehensive diagnostic plan. I discovered an underlying food allergy that had been missed. I created a detailed dietary management plan.",
      result:
        "The cat is now thriving on a specialized diet. The family finally has answers and a clear path forward. This case shows the importance of looking beyond obvious symptoms to find root causes.",
    },
    testimonials: [
      {
        title: "We discovered the underlying issue wasn't what everyone thought.",
        quote:
          "Our cat had been vomiting for months and losing weight. We'd seen three different vets and tried countless treatments. Dr. Ortega took a completely different approach and discovered it was a food allergy. Now our cat is healthy and happy. It changed everything.",
        author: "David L., parent to Shadow",
      },
    ],
  },
  "eleanor-vance": {
    id: 6,
    slug: "eleanor-vance",
    name: "Dr. Eleanor Vance",
    credentials: "DVM, DACVIM (Oncology)",
    image: "/placeholder.svg?height=400&width=400",
    videoThumbnail: "/placeholder.svg?height=720&width=1280",
    specialties: ["Cancer Treatment", "Palliative Care", "Quality of Life Assessment", "Family Support"],
    animals: ["Dog", "Cat"],
    education: {
      veterinarySchool: "Tufts University",
      residency: "University of Minnesota",
      boardCertification: "American College of Veterinary Internal Medicine (Oncology)",
      yearsInPractice: 13,
    },
    caseStudy: {
      problem:
        "A family was told their elderly dog had an aggressive cancer with limited treatment options. They were devastated and unsure how to proceed.",
      approach:
        "I reviewed the case and found that while the cancer was advanced, there were still treatment options that could improve quality of life. I created a palliative care plan that focused on comfort and family support.",
      result:
        "The dog lived six more months with excellent quality of life. The family felt supported and confident in their decisions. This case reinforced my belief that every family deserves compassionate guidance through difficult decisions.",
    },
    testimonials: [
      {
        title: "We found a path forward that gave us six more beautiful, happy months with our boy.",
        quote:
          "When our elderly golden was diagnosed with cancer, we were told there was nothing more to do. Dr. Vance found treatment options that gave us six more beautiful months together. She supported us every step of the way and helped us make the best decisions for our boy.",
        author: "Lisa T., parent to Buddy",
      },
    ],
  },
}

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default function SpecialistProfilePage({ params }: PageProps) {
  const [specialist, setSpecialist] = useState<any>(null)
  const [showStickyFooter, setShowStickyFooter] = useState(false)
  const [stickyFooterPhase, setStickyFooterPhase] = useState<"soft" | "hard">("soft")
  const [scrollProgress, setScrollProgress] = useState(0)

  // Handle async params for Next.js 15
  useEffect(() => {
    const getSpecialist = async () => {
      const resolvedParams = await params
      const foundSpecialist = specialists[resolvedParams.slug as keyof typeof specialists]
      setSpecialist(foundSpecialist)
    }
    getSpecialist()
  }, [params])

  useEffect(() => {
    const handleScroll = () => {
      const videoSection = document.getElementById("video-section")
      const offerBoxSection = document.getElementById("offer-box-section")

      if (videoSection && offerBoxSection) {
        const videoBottom = videoSection.offsetTop + videoSection.offsetHeight
        const offerBoxTop = offerBoxSection.offsetTop
        const scrollPosition = window.scrollY + window.innerHeight

        const documentHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = Math.min(window.scrollY / documentHeight, 1)
        setScrollProgress(progress)

        // Show sticky footer after scrolling past the video section
        const shouldShowFooter = scrollPosition > videoBottom
        setShowStickyFooter(shouldShowFooter)

        if (scrollPosition > offerBoxTop) {
          setStickyFooterPhase("hard") // Show price after seeing offer box
        } else {
          setStickyFooterPhase("soft") // Show soft CTA before offer box
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToOfferBox = () => {
    const offerBoxSection = document.getElementById("offer-box-section")
    if (offerBoxSection) {
      offerBoxSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  if (!specialist) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-offwhite via-white to-brand-offwhite flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand-sage mx-auto mb-4"></div>
          <p className="text-brand-charcoal">Loading specialist profile...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-offwhite via-white to-brand-offwhite relative overflow-hidden">
      <Header />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-brand-sage/8 to-brand-gold/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-brand-gold/8 to-brand-sage/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-brand-sage/4 to-brand-gold/4 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <main className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-16">
            {/* Main Content Column - Mobile Persuasion Stack Order */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8 lg:space-y-12">
              {/* 1. Specialist Header - First on mobile */}
              <div className="group animate-fade-in order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-sage/8 via-transparent to-brand-gold/8 rounded-2xl sm:rounded-3xl blur-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/3 via-transparent to-brand-sage/3 rounded-2xl sm:rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                  <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8 bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-brand-sage/20 shadow-2xl hover:shadow-3xl transition-all duration-700 group-hover:bg-white/90 group-hover:border-brand-gold/30">
                    <div className="relative mx-auto sm:mx-0">
                      <div className="absolute -inset-3 bg-gradient-to-br from-brand-sage/30 to-brand-gold/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                      <div className="absolute -inset-1 bg-gradient-to-br from-brand-gold/20 to-brand-sage/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>
                      <img
                        className="relative h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 rounded-full object-cover ring-4 ring-brand-sage/30 group-hover:ring-brand-gold/50 transition-all duration-700 shadow-xl group-hover:shadow-2xl group-hover:scale-105"
                        src={specialist.image || "/placeholder.svg"}
                        alt={specialist.name}
                      />
                      <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-brand-sage to-brand-gold rounded-full flex items-center justify-center shadow-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight bg-gradient-to-r from-brand-charcoal via-brand-sage to-brand-gold bg-clip-text text-transparent mb-2 group-hover:bg-gradient-to-r group-hover:from-brand-gold group-hover:via-brand-sage group-hover:to-brand-charcoal transition-all duration-700">
                        {specialist.name}
                      </h1>
                      <p className="text-lg sm:text-xl font-semibold text-brand-sage mb-3 sm:mb-4 group-hover:text-brand-gold transition-colors duration-500">
                        {specialist.credentials}
                      </p>
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
                        <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-brand-sage/20 to-brand-sage/15 text-brand-sage border border-brand-sage/30 hover:from-brand-sage/35 hover:to-brand-sage/25 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zM9 12a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Board Certified
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-brand-gold/20 to-brand-gold/15 text-brand-charcoal border border-brand-gold/30 hover:from-brand-gold/35 hover:to-brand-gold/25 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {specialist.education.yearsInPractice} Years Experience
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Personal Video - Second on mobile */}
              <section id="video-section" className="group animate-fade-in delay-100 order-2">
                <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-brand-charcoal to-brand-sage bg-clip-text text-transparent mb-4 sm:mb-6 flex items-center gap-3 sm:gap-4">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-brand-sage to-brand-gold rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Hear Directly From {specialist.name.split(" ")[1]}
                </h2>
                <div className="relative">
                  <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-brand-sage/15 via-transparent to-brand-gold/15 rounded-2xl sm:rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-br from-brand-gold/10 via-transparent to-brand-sage/10 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300"></div>

                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-700 bg-gradient-to-br from-brand-sage/25 to-brand-gold/25 p-1 sm:p-2 group-hover:from-brand-sage/35 group-hover:to-brand-gold/35">
                    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-white/95 backdrop-blur-sm">
                      <img
                        src={specialist.videoThumbnail || "/placeholder.svg"}
                        alt={`A video introduction from ${specialist.name}`}
                        className="w-full h-48 sm:h-64 lg:h-72 xl:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-center justify-center">
                        <button className="group/play transform transition-all duration-500 hover:scale-110 focus:scale-110 focus:outline-none">
                          <div className="relative">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/98 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover/play:bg-white group-hover/play:scale-110 transition-all duration-500">
                              <svg
                                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-brand-sage ml-1 group-hover/play:text-brand-gold transition-colors duration-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <div className="absolute inset-0 rounded-full bg-white/40 animate-ping"></div>
                            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-brand-sage/30 to-brand-gold/30 animate-pulse"></div>
                            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-brand-gold/20 to-brand-sage/20 animate-pulse delay-500"></div>
                          </div>
                        </button>
                      </div>
                      <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6">
                        <div className="bg-black/70 backdrop-blur-md rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 border border-white/30 group-hover:bg-black/80 group-hover:border-brand-gold/50 transition-all duration-500">
                          <p className="text-white text-xs sm:text-sm font-semibold flex items-center gap-2">
                            <svg
                              className="w-3 h-3 sm:w-4 sm:h-4 text-brand-gold animate-pulse"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Watch my 1-minute introduction
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. Full Offer Box - MOVED UP to third position on mobile (critical change) */}
              <section id="offer-box-section" className="lg:hidden animate-fade-in delay-300 order-3">
                <div className="relative group">
                  <div className="absolute -inset-3 sm:-inset-5 bg-gradient-to-r from-brand-sage/15 via-transparent to-brand-gold/15 rounded-2xl sm:rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-br from-brand-gold/10 via-transparent to-brand-sage/10 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-sage/5 to-brand-gold/5 rounded-2xl sm:rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400"></div>

                  <div className="relative bg-white/98 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-brand-sage/25 shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden group-hover:border-brand-gold/40 group-hover:bg-white">
                    <div className="bg-gradient-to-r from-brand-sage to-brand-gold p-6 text-white relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-sage/95 to-brand-gold/95"></div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/15 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-1000"></div>
                      <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000 delay-300"></div>
                      <div className="relative text-center">
                        <h2 className="font-serif text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-500">
                          Book with {specialist.name.split(" ")[1]}
                        </h2>
                        <p className="text-white/95 text-sm">Start your consultation today</p>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="text-center mb-8">
                        <div className="relative inline-block group/price">
                          <div className="absolute -inset-4 bg-gradient-to-r from-brand-sage/10 to-brand-gold/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                          <p className="text-5xl font-bold bg-gradient-to-r from-brand-charcoal to-brand-sage bg-clip-text text-transparent group-hover/price:bg-gradient-to-r group-hover/price:from-brand-gold group-hover/price:to-brand-sage transition-all duration-700 relative z-10">
                            $400
                          </p>
                          <span className="text-lg font-medium text-brand-charcoal/70 ml-2">+ tax</span>
                        </div>
                        <p className="text-sm font-semibold text-brand-sage mt-2 flex items-center justify-center gap-1 group-hover:text-brand-gold transition-colors duration-500">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Covered by most pet insurance
                        </p>
                      </div>

                      <div className="mb-8">
                        <h3 className="font-bold text-brand-charcoal mb-6 flex items-center gap-2 text-lg group-hover:text-brand-sage transition-colors duration-500">
                          <svg
                            className="w-6 h-6 text-brand-sage group-hover:text-brand-gold group-hover:scale-110 transition-all duration-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          What's Included:
                        </h3>
                        <ul className="space-y-4 text-sm text-brand-charcoal/90">
                          {[
                            `A private, 14-day conversation with ${specialist.name.split(" ")[1]} to discuss your pet's case.`,
                            `Personal video responses from ${specialist.name.split(" ")[1]} that you can rewatch anytime.`,
                            "The ability to ask unlimited follow-up questions as they arise.",
                            "A collaborative plan that accounts for your family's needs—emotionally and financially.",
                            'Backed by our "Peace of Mind" Guarantee.',
                          ].map((item, index) => (
                            <li
                              key={index}
                              className={`flex items-start gap-3 group/item hover:bg-brand-sage/8 rounded-xl p-3 transition-all duration-300 hover:scale-102 animate-fade-in delay-${300 + index * 100}`}
                            >
                              <div className="w-5 h-5 bg-gradient-to-br from-brand-sage to-brand-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-500 shadow-lg">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                              <span className="leading-relaxed group-hover/item:text-brand-charcoal transition-colors duration-300">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                                          <a
                      href={`/checkout?doctor=${specialist.slug}`}
                      className="group/cta relative w-full inline-flex items-center justify-center rounded-full border border-transparent bg-gradient-to-r from-brand-gold to-brand-sage px-8 py-5 text-lg font-bold text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 focus:scale-105 focus:outline-none overflow-hidden min-h-[56px]"
                    >
                        <span className="relative z-10 flex items-center gap-3 text-center">
                          <svg
                            className="w-6 h-6 group-hover/cta:scale-110 group-hover/cta:rotate-12 transition-all duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                          Start Consultation with {specialist.name.split(" ")[1]}
                          <svg
                            className="w-5 h-5 group-hover/cta:translate-x-2 group-hover/cta:scale-110 transition-all duration-300"
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
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-sage to-brand-gold opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 bg-white/15 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/50 to-brand-sage/50 rounded-full blur-lg opacity-0 group-hover/cta:opacity-100 transition-opacity duration-700"></div>
                      </a>

                      <p className="mt-6 text-xs text-center text-brand-charcoal/60 leading-relaxed">
                        🔒 Secure checkout • 💯 Money-back guarantee • ⚡ Instant access
                      </p>

                      <div className="mt-8 text-center">
                        <a
                          href="/contact"
                          className="text-sm font-semibold text-brand-sage hover:text-brand-gold transition-colors duration-300 hover:underline flex items-center justify-center gap-2 group/contact"
                        >
                          <svg
                            className="w-4 h-4 group-hover/contact:scale-110 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          Questions? Contact our support team
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4. Case Study - MOVED DOWN to fourth position on mobile */}
              <section className="group animate-fade-in delay-400 order-4">
                <h2 className="font-serif text-3xl font-bold bg-gradient-to-r from-brand-charcoal to-brand-sage bg-clip-text text-transparent mb-8 flex items-center gap-4">
                  <span className="w-10 h-10 bg-gradient-to-br from-brand-sage to-brand-gold rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  My Philosophy in Action: A Case Study
                </h2>
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-r from-brand-sage/5 via-transparent to-brand-gold/5 rounded-3xl blur-2xl"></div>

                  <div className="relative bg-white/80 backdrop-blur-md rounded-3xl border border-brand-sage/15 shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden">
                    <div className="bg-gradient-to-r from-brand-sage/10 to-brand-gold/10 p-6 border-b border-brand-sage/10">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-brand-sage to-brand-gold rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="font-semibold text-brand-charcoal text-lg">
                          Real Case Study: Frankie's Recovery
                        </h3>
                      </div>
                    </div>

                    <div className="p-8 space-y-8">
                      <div className="relative group/step">
                        <div className="absolute -left-4 top-0 w-2 h-full bg-gradient-to-b from-red-400 to-red-600 rounded-full shadow-lg"></div>
                        <div className="pl-8">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-lg group-hover/step:scale-110 transition-transform duration-300">
                              <span className="text-white font-bold text-lg">!</span>
                            </div>
                            <h3 className="font-bold text-brand-charcoal text-xl">The Crisis</h3>
                          </div>
                          <div className="bg-red-50/80 backdrop-blur-sm rounded-2xl p-6 border border-red-200/50">
                            <p className="text-brand-charcoal/90 leading-relaxed text-lg italic">
                              "{specialist.caseStudy.problem}"
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="relative group/step">
                        <div className="absolute -left-4 top-0 w-2 h-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-full shadow-lg"></div>
                        <div className="pl-8">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover/step:scale-110 transition-transform duration-300">
                              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <h3 className="font-bold text-brand-charcoal text-xl">My Expert Approach</h3>
                          </div>
                          <div className="bg-blue-50/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50">
                            <p className="text-brand-charcoal/90 leading-relaxed text-lg italic">
                              "{specialist.caseStudy.approach}"
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="relative group/step">
                        <div className="absolute -left-4 top-0 w-2 h-full bg-gradient-to-b from-green-400 to-green-600 rounded-full shadow-lg"></div>
                        <div className="pl-8">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover/step:scale-110 transition-transform duration-300">
                              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <h3 className="font-bold text-brand-charcoal text-xl">The Successful Outcome</h3>
                          </div>
                          <div className="bg-green-50/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50">
                            <p className="text-brand-charcoal/90 leading-relaxed text-lg italic">
                              "{specialist.caseStudy.result}"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 5. Testimonials - Updated to fifth position on mobile */}
              <section className="group animate-fade-in delay-500 order-5">
                <h2 className="font-serif text-3xl font-bold bg-gradient-to-r from-brand-charcoal to-brand-sage bg-clip-text text-transparent mb-8 flex items-center gap-4">
                  <span className="w-10 h-10 bg-gradient-to-br from-brand-sage to-brand-gold rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 2 0 01-2-2V5z" />
                    </svg>
                  </span>
                  What Pet Families Say
                </h2>
                <div className="space-y-8">
                  {specialist.testimonials.map((testimonial, index) => (
                    <div key={index} className={`group/testimonial animate-fade-in delay-${500 + index * 100}`}>
                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-brand-sage/5 via-transparent to-brand-gold/5 rounded-3xl blur-xl opacity-0 group-hover/testimonial:opacity-100 transition-opacity duration-700"></div>

                        <div className="relative bg-white/80 backdrop-blur-md rounded-3xl border border-brand-sage/15 shadow-2xl hover:shadow-3xl transition-all duration-700 p-8 group-hover/testimonial:bg-white/90">
                          <div className="flex items-start gap-6">
                            <div className="relative flex-shrink-0">
                              <div className="w-16 h-16 bg-gradient-to-br from-brand-sage to-brand-gold rounded-full flex items-center justify-center shadow-xl group-hover/testimonial:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 2 0 01-2-2V5z" />
                                </svg>
                              </div>
                              <div className="absolute -inset-2 bg-gradient-to-br from-brand-sage/20 to-brand-gold/20 rounded-full blur-lg opacity-0 group-hover/testimonial:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-brand-charcoal text-xl mb-4 bg-gradient-to-r from-brand-charcoal to-brand-sage bg-clip-text text-transparent">
                                {testimonial.title}
                              </h3>
                              <blockquote className="italic text-brand-charcoal/85 leading-relaxed mb-6 text-lg font-medium">
                                "{testimonial.quote}"
                              </blockquote>
                              <div className="flex items-center gap-4">
                                <img
                                  className="w-12 h-12 rounded-full object-cover ring-3 ring-brand-sage/20 shadow-lg"
                                  src="/placeholder.svg?height=48&width=48"
                                  alt="Customer"
                                />
                                <div>
                                  <p className="font-bold text-brand-sage">- {testimonial.author}</p>
                                  <div className="flex items-center gap-1 mt-1">
                                    {[...Array(5)].map((_, i) => (
                                      <svg key={i} className="w-4 h-4 text-brand-gold fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                      </svg>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 6. Credentials - Remains last on mobile */}
              <section className="group animate-fade-in delay-600 order-6">
                <h2 className="font-serif text-3xl font-bold bg-gradient-to-r from-brand-charcoal to-brand-sage bg-clip-text text-transparent mb-8 flex items-center gap-4">
                  <span className="w-10 h-10 bg-gradient-to-br from-brand-sage to-brand-gold rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Verified Credentials & Expertise
                </h2>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-brand-sage/5 via-transparent to-brand-gold/5 rounded-3xl blur-xl"></div>

                  <div className="relative bg-white/80 backdrop-blur-md rounded-3xl border border-brand-sage/15 shadow-2xl hover:shadow-3xl transition-all duration-700 p-8">
                    <div className="grid gap-6">
                      {[
                        {
                          icon: "🏆",
                          label: "Board Certification",
                          value: specialist.education.boardCertification,
                          verified: true,
                        },
                        {
                          icon: "🎓",
                          label: "Residency Training",
                          value: specialist.education.residency,
                          verified: false,
                        },
                        {
                          icon: "🏫",
                          label: "Veterinary School",
                          value: specialist.education.veterinarySchool,
                          verified: false,
                        },
                        {
                          icon: "⏰",
                          label: "Years in Practice",
                          value: specialist.education.yearsInPractice.toString(),
                          verified: false,
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="group/item hover:bg-gradient-to-r hover:from-brand-sage/5 hover:to-brand-gold/5 rounded-2xl p-4 transition-all duration-300 border border-transparent hover:border-brand-sage/10"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-brand-sage to-brand-gold rounded-full flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                              <span className="text-xl">{item.icon}</span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-1">
                                <h3 className="font-bold text-brand-charcoal">{item.label}:</h3>
                                {item.verified && (
                                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-brand-sage to-brand-gold text-white shadow-lg">
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                      <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                    VERIFIED
                                  </span>
                                )}
                              </div>
                              <p className="text-brand-charcoal/80 font-medium">{item.value}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 pt-8 border-t border-brand-sage/15">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="font-bold text-brand-charcoal mb-4 flex items-center gap-2">
                            <span className="w-6 h-6 bg-gradient-to-br from-brand-sage to-brand-gold rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </span>
                            Works With:
                          </h3>
                          <div className="flex flex-wrap gap-3">
                            {specialist.animals.map((animal) => (
                              <span
                                key={animal}
                                className="flex items-center gap-2 text-sm font-semibold text-brand-charcoal bg-gradient-to-r from-brand-sage/10 to-brand-gold/10 px-4 py-2 rounded-full border border-brand-sage/20 hover:from-brand-sage/20 hover:to-brand-gold/20 transition-all duration-300"
                              >
                                <span className="text-lg">{animal === "Dog" ? "🐕" : "🐱"}</span>
                                {animal}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-bold text-brand-charcoal mb-4 flex items-center gap-2">
                            <span className="w-6 h-6 bg-gradient-to-br from-brand-gold to-brand-sage rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </span>
                            Specialties:
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {specialist.specialties.map((specialty) => (
                              <span
                                key={specialty}
                                className="rounded-full bg-gradient-to-r from-brand-sage/15 to-brand-gold/15 border border-brand-sage/25 px-4 py-2 text-sm font-semibold text-brand-charcoal hover:from-brand-sage/25 hover:to-brand-gold/25 hover:scale-105 transition-all duration-300 shadow-sm"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Desktop Sidebar - Hidden on mobile */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="lg:sticky lg:top-8 animate-fade-in delay-600">
                <div className="relative">
                  <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-brand-sage/10 via-transparent to-brand-gold/10 rounded-2xl sm:rounded-3xl blur-2xl"></div>

                  <div className="relative bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-brand-sage/20 shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden">
                    <div className="bg-gradient-to-r from-brand-sage to-brand-gold p-4 sm:p-6 lg:p-8 text-white relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-sage/90 to-brand-gold/90"></div>
                      <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full blur-2xl"></div>
                      <div className="relative text-center lg:text-left">
                        <h2 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">
                          Book with Dr. Hayes
                        </h2>
                        <p className="text-white/90 text-xs sm:text-sm">Start your consultation today</p>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6 lg:p-8">
                      <div className="text-center mb-6 sm:mb-8">
                        <div className="relative inline-block">
                          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-brand-charcoal to-brand-sage bg-clip-text text-transparent">
                            $400
                          </p>
                          <span className="text-sm sm:text-base lg:text-lg font-medium text-brand-charcoal/70 ml-2">
                            + tax
                          </span>
                          <div className="absolute -inset-2 bg-gradient-to-r from-brand-sage/5 to-brand-gold/5 rounded-xl blur-lg"></div>
                        </div>
                        <p className="text-xs sm:text-sm font-semibold text-brand-sage mt-2 flex items-center justify-center gap-1">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Covered by most pet insurance
                        </p>
                      </div>

                      <div className="mb-6 sm:mb-8">
                        <h3 className="font-bold text-brand-charcoal mb-4 sm:mb-6 flex items-center gap-2 text-sm sm:text-base lg:text-lg">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-brand-sage"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          What's Included:
                        </h3>
                        <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-brand-charcoal/90">
                          {[
                            `A private, 14-day conversation with ${specialist.name.split(" ")[1]} to discuss your pet's case.`,
                            `Personal video responses from ${specialist.name.split(" ")[1]} that you can rewatch anytime.`,
                            "The ability to ask unlimited follow-up questions as they arise.",
                            "A collaborative plan that accounts for your family's needs—emotionally and financially.",
                            'Backed by our "Peace of Mind" Guarantee.',
                          ].map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 sm:gap-3 group/item hover:bg-brand-sage/5 rounded-lg sm:rounded-xl p-2 sm:p-3 transition-all duration-300"
                            >
                              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-brand-sage to-brand-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                                <svg
                                  className="w-2 h-2 sm:w-3 sm:h-3 text-white"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={`/checkout?doctor=${specialist.slug}`}
                        className="group relative w-full inline-flex items-center justify-center rounded-full border border-transparent bg-gradient-to-r from-brand-gold to-brand-sage px-4 sm:px-6 lg:px-8 py-4 sm:py-5 text-sm sm:text-base lg:text-lg font-bold text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 focus:scale-105 focus:outline-none overflow-hidden min-h-[56px]"
                      >
                        <span className="relative z-10 flex items-center gap-2 sm:gap-3 text-center">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                          <span className="hidden sm:inline">Start Consultation with {specialist.name.split(" ")[1]}</span>
                          <span className="sm:hidden">Start Consultation</span>
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"
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
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-sage to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </a>

                      <p className="mt-4 sm:mt-6 text-xs text-center text-brand-charcoal/60 leading-relaxed">
                        🔒 Secure checkout • 💯 Money-back guarantee • ⚡ Instant access
                      </p>

                      <div className="mt-6 sm:mt-8 text-center">
                        <a
                          href="/contact"
                          className="text-xs sm:text-sm font-semibold text-brand-sage hover:text-brand-gold transition-colors duration-300 hover:underline flex items-center justify-center gap-2"
                        >
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          Questions? Contact our support team
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {showStickyFooter && (
        <div
          className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-all duration-500 ${stickyFooterPhase === "soft" ? "animate-slide-up" : "animate-slide-up-alt"}`}
        >
          <div className="bg-white/98 backdrop-blur-md border-t border-brand-sage/25 shadow-2xl relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-1 bg-gradient-to-r from-brand-sage to-brand-gold transition-all duration-300"
              style={{ width: `${scrollProgress * 100}%` }}
            ></div>

            <div className="px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-sage/40 shadow-lg flex-shrink-0 transition-all duration-300 hover:ring-brand-gold/50 hover:scale-105"
                    src={specialist.image || "/placeholder.svg"}
                    alt={specialist.name}
                  />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-brand-sage to-brand-gold rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  {stickyFooterPhase === "soft" ? (
                    <p className="text-sm font-semibold text-brand-charcoal truncate transition-all duration-300">
                      {specialist.name.split(" ")[1]}
                    </p>
                  ) : (
                    <p className="text-sm font-semibold text-brand-charcoal truncate transition-all duration-300">
                      Consultation: <span className="text-brand-sage font-bold">$400 + tax</span>
                    </p>
                  )}
                </div>
                {stickyFooterPhase === "soft" ? (
                  <button
                    onClick={scrollToOfferBox}
                    className="bg-gradient-to-r from-brand-sage to-brand-gold text-white px-6 py-3 rounded-full font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex-shrink-0 relative overflow-hidden group/sticky"
                  >
                    <span className="relative z-10">Start Your Consultation</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-gold to-brand-sage opacity-0 group-hover/sticky:opacity-100 transition-opacity duration-300"></div>
                  </button>
                ) : (
                  <a
                    href={`/checkout?doctor=${specialist.slug}`}
                    className="bg-gradient-to-r from-brand-gold to-brand-sage text-white px-6 py-3 rounded-full font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex-shrink-0 relative overflow-hidden group/sticky"
                  >
                    <span className="relative z-10">Start Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-sage to-brand-gold opacity-0 group-hover/sticky:opacity-100 transition-opacity duration-300"></div>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up-alt {
          from {
            opacity: 0.8;
            transform: translateY(10px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.5s ease-out forwards;
        }
        
        .animate-slide-up-alt {
          animation: slide-up-alt 0.3s ease-out forwards;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  )
}
