import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WorkInProgressBanner } from "@/components/work-in-progress-banner"
import { AnimatedSection } from "@/components/animated-section"
import { TwoPathsSection } from "@/components/two-paths-section"
import { FAQSection } from "@/components/faq-section"
import { Clock, MapPin, DollarSign, Check, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <>
      <WorkInProgressBanner />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-offwhite via-white to-brand-offwhite/50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(94,108,100,0.08)_0%,transparent_50%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(201,176,106,0.05)_0%,transparent_50%)] pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-sage/20 to-transparent"></div>

          <div className="mx-auto max-w-7xl w-full px-6 lg:px-8 py-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              <div className="lg:col-span-6 z-10 text-center lg:text-left">
                <AnimatedSection>
                  <h1 className="font-serif text-4xl font-bold tracking-tight text-brand-charcoal sm:text-6xl leading-tight">
                    <strong className="bg-gradient-to-r from-brand-sage to-brand-sage/80 text-brand-offwhite px-4 py-3 rounded-xl shadow-lg inline-block transform hover:scale-105 transition-transform duration-300">
                      Clarity
                    </strong>{" "}
                    <span className="block mt-2">for your pet's serious diagnosis.</span>
                  </h1>
                </AnimatedSection>

                <AnimatedSection delay={200}>
                  <p className="mt-8 text-lg leading-relaxed text-brand-charcoal/90 max-w-2xl">
                    It starts with a conversation. From the comfort of your home, privately share your story via text
                    and video messages with a{" "}
                    <strong className="bg-gradient-to-r from-brand-sage to-brand-sage/80 text-brand-offwhite font-bold px-3 py-2 rounded-lg shadow-sm inline-block">
                      top 1% veterinary specialist
                    </strong>{" "}
                    who listens first, then works with you to build a plan that fits your family's unique
                    needs—emotionally and financially.
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={250}>
                  <div className="mt-6 flex items-center justify-center lg:justify-start gap-4 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-brand-sage/10">
                    <div className="flex -space-x-2">
                      <img
                        className="h-8 w-8 rounded-full border-2 border-white"
                        src="/placeholder.svg?height=32&width=32&text=User+1"
                        alt="Happy customer"
                      />
                      <img
                        className="h-8 w-8 rounded-full border-2 border-white"
                        src="/placeholder.svg?height=32&width=32&text=User+2"
                        alt="Happy customer"
                      />
                      <img
                        className="h-8 w-8 rounded-full border-2 border-white"
                        src="/placeholder.svg?height=32&width=32&text=User+3"
                        alt="Happy customer"
                      />
                    </div>
                    <p className="text-sm font-semibold text-brand-charcoal">
                      <span className="text-brand-sage">500+</span> families found clarity
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={300}>
                  <p className="mt-6 text-base font-semibold text-brand-sage text-center lg:text-left bg-gradient-to-r from-brand-sage/5 to-brand-gold/5 px-6 py-3 rounded-xl inline-block border border-brand-sage/10">
                    ⚡ Start the conversation in the next 5 minutes, day or night.
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={400}>
                  <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                    <a
                      href="/checkout"
                      className="group w-full sm:w-auto rounded-full bg-gradient-to-r from-brand-gold to-brand-gold/90 px-12 py-5 text-lg font-bold text-brand-charcoal shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden border-2 border-brand-gold/20"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Get Clarity Now
                        <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </a>
                    <a
                      href="/specialists"
                      className="group text-sm font-semibold text-brand-sage hover:text-brand-charcoal transition-colors duration-200 flex items-center gap-2 bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full border border-brand-sage/20 hover:border-brand-sage/40"
                    >
                      Or, meet the specialists
                      <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </a>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={500}>
                  <p className="mt-6 text-xs text-brand-charcoal/60 text-center sm:text-left bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full inline-block border border-gray-200">
                    🔒 Takes less than 3 minutes to begin. All you need to start is your story.
                  </p>
                </AnimatedSection>
              </div>

              <AnimatedSection delay={600} className="lg:col-span-6 relative flex items-center justify-center h-full">
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-r from-brand-sage/15 via-brand-gold/10 to-brand-sage/15 rounded-3xl blur-2xl animate-pulse"></div>
                  <div className="absolute -inset-3 bg-gradient-to-r from-brand-sage/20 to-brand-gold/20 rounded-2xl blur-xl"></div>
                  <img
                    src="/placeholder.svg?height=600&width=800&text=Peaceful+Golden+Retriever"
                    alt="A calm golden retriever resting its head on a soft blanket, representing the peace of mind our service provides."
                    className="relative rounded-2xl shadow-2xl object-cover w-full h-full border-4 border-white/80 backdrop-blur-sm"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/5 via-transparent to-white/10 pointer-events-none"></div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section className="py-24 sm:py-32 bg-gradient-to-b from-white to-brand-offwhite/30">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-brand-sage/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-sage to-brand-gold"></div>
              <img
                className="mx-auto h-24 w-24 rounded-full object-cover border-4 border-brand-sage/20 shadow-lg"
                src="/placeholder.svg?height=96&width=96&text=Luna+Siamese+Cat"
                alt="Photo of Luna, a Siamese cat."
              />
              <blockquote className="mt-8 font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal leading-relaxed">
                "She wanted to understand what we were going through as a family.{" "}
                <strong className="bg-brand-sage text-brand-offwhite px-3 py-2 rounded-lg shadow-sm">
                  I felt heard for the first time.
                </strong>
                "
              </blockquote>
              <p className="mt-6 font-semibold text-brand-charcoal text-lg">- Jessica, parent to Luna</p>
            </div>
          </div>
        </section>

        {/* Two Paths Section */}
        <section id="process">
          <TwoPathsSection />
        </section>

        {/* Trust Section */}
        <section className="py-24 sm:py-32 bg-gradient-to-b from-brand-offwhite via-white to-brand-offwhite/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(94,108,100,0.08)_0%,transparent_50%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(201,176,106,0.05)_0%,transparent_50%)] pointer-events-none"></div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-serif text-4xl font-bold tracking-tight text-brand-charcoal sm:text-5xl">
                A partner you can trust.
              </h2>
              <p className="mt-6 text-lg text-brand-charcoal/90 leading-relaxed">
                Here's why you can feel confident in our guidance, in the words of pet owners like you.
              </p>
            </div>
            <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
              <div className="group bg-gradient-to-br from-white via-white to-brand-offwhite/30 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-brand-sage/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-sage to-brand-gold"></div>
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-brand-sage/10 to-transparent rounded-full blur-xl group-hover:from-brand-sage/20 transition-all duration-300"></div>
                <img
                  className="h-20 w-20 rounded-full object-cover mb-6 mx-auto border-4 border-brand-sage/20 group-hover:border-brand-sage/40 transition-colors duration-300 relative z-10"
                  src="/placeholder.svg?height=80&width=80&text=Happy+Terrier"
                  alt="A grateful-looking terrier mix."
                />
                <h3 className="font-bold text-brand-charcoal text-xl mb-4 relative z-10">
                  Answers in Hours, Not Weeks
                </h3>
                <p className="text-brand-charcoal/90 italic leading-relaxed relative z-10">
                  "The specialist in my city had a six-week waiting list. I was losing my mind. With Second
                  Veterinarian, I had a detailed plan from a top oncologist in{" "}
                  <strong className="bg-gradient-to-r from-brand-sage to-brand-sage/80 text-brand-offwhite font-bold px-3 py-2 rounded-lg shadow-lg inline-block">
                    less than 24 hours
                  </strong>
                  . The relief was indescribable."
                </p>
                <p className="mt-6 font-semibold text-brand-charcoal relative z-10">- Jessica R., parent to Bella</p>
              </div>
              <div className="group bg-gradient-to-br from-white via-white to-brand-offwhite/30 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-brand-sage/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold to-brand-sage"></div>
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-brand-gold/10 to-transparent rounded-full blur-xl group-hover:from-brand-gold/20 transition-all duration-300"></div>
                <img
                  className="h-20 w-20 rounded-full object-cover mb-6 mx-auto border-4 border-brand-sage/20 group-hover:border-brand-sage/40 transition-colors duration-300 relative z-10"
                  src="/placeholder.svg?height=80&width=80&text=Happy+Terrier"
                  alt="A grateful-looking terrier mix."
                />
                <h3 className="font-bold text-brand-charcoal text-xl mb-4 relative z-10">Unbiased Guidance</h3>
                <p className="text-brand-charcoal/90 italic leading-relaxed relative z-10">
                  "Our local vet was pushing for an expensive surgery... It was clear their only goal was{" "}
                  <strong className="bg-gradient-to-r from-brand-sage to-brand-sage/80 text-brand-offwhite font-bold px-3 py-2 rounded-lg shadow-lg inline-block">
                    what was best for our dog, not what was most profitable
                  </strong>
                  ."
                </p>
                <p className="mt-6 font-semibold text-brand-charcoal relative z-10">- Sarah K., parent to Winston</p>
              </div>
              <div className="group bg-gradient-to-br from-white via-white to-brand-offwhite/30 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-brand-sage/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-sage to-brand-gold"></div>
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-brand-sage/10 to-transparent rounded-full blur-xl group-hover:from-brand-sage/20 transition-all duration-300"></div>
                <img
                  className="h-20 w-20 rounded-full object-cover mb-6 mx-auto border-4 border-brand-sage/20 group-hover:border-brand-sage/40 transition-colors duration-300 relative z-10"
                  src="/placeholder.svg?height=80&width=80&text=Senior+Cat"
                  alt="A peaceful senior cat sleeping in the sun."
                />
                <h3 className="font-bold text-brand-charcoal text-xl mb-4 relative z-10">
                  Permission to Choose Kindness
                </h3>
                <p className="text-brand-charcoal/90 italic leading-relaxed relative z-10">
                  "Our specialist gave us the confidence to{" "}
                  <strong className="bg-gradient-to-r from-brand-sage to-brand-sage/80 text-brand-offwhite font-bold px-3 py-2 rounded-lg shadow-lg inline-block">
                    choose quality of life over more procedures
                  </strong>
                  . She helped us let go of the guilt. That was priceless."
                </p>
                <p className="mt-6 font-semibold text-brand-charcoal relative z-10">- Maria V., parent to Cleo</p>
              </div>
            </div>
          </div>
        </section>

        {/* Specialist Stories Section */}
        <section id="specialists" className="py-24 sm:py-32 bg-gradient-to-b from-white to-brand-offwhite/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                From Confusion to Clarity: Stories From Our Specialist Team
              </h2>
              <p className="mt-6 text-lg text-brand-charcoal/90 leading-relaxed">
                Our specialists are leaders in their fields, including <strong>Oncology, Cardiology, Neurology,</strong>{" "}
                and <strong>Surgery</strong>.
              </p>
              <p className="mt-4 text-lg text-brand-charcoal/90 leading-relaxed">
                On their full profiles, you'll find a personal video and stories from families just like yours. Here are
                a few examples:
              </p>
            </div>
            <div className="mt-20 space-y-20">
              {/* Story 1: Oncology */}
              <div className="group grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-8 items-center">
                <div className="md:col-span-4 text-center">
                  <div className="relative inline-block">
                    <div className="absolute -inset-2 bg-gradient-to-r from-brand-sage/20 to-brand-gold/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <img
                      className="relative mx-auto h-48 w-48 rounded-full object-cover border-4 border-white shadow-xl"
                      src="/placeholder.svg?height=192&width=192&text=Dr+Marcus+Chen"
                      alt="Professional headshot of Dr. Marcus Chen, a smiling man with short dark hair."
                    />
                  </div>
                  <h3 className="mt-8 font-serif text-2xl font-semibold text-brand-charcoal">Dr. Marcus Chen</h3>
                  <p className="text-brand-sage font-medium">DVM, DACVIM (Oncology)</p>
                  <a
                    href="/specialists"
                    className="mt-4 inline-block text-sm font-semibold text-brand-sage hover:text-brand-charcoal transition-colors duration-200 bg-brand-sage/5 px-3 py-1 rounded-full"
                  >
                    View Full Profile & Credentials →
                  </a>
                </div>
                <div className="md:col-span-8 bg-white p-8 rounded-xl shadow-lg border border-brand-sage/10 group-hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold to-brand-sage"></div>
                  <blockquote className="font-serif text-xl font-bold text-brand-sage mb-6">
                    "He gave us a clear, step-by-step plan."
                  </blockquote>
                  <p className="text-brand-charcoal/90 italic flex-grow leading-relaxed">
                    "Hearing the word 'cancer' was terrifying. We felt lost. Dr. Chen didn't just give us a second
                    opinion; he gave us a{" "}
                    <strong className="bg-brand-sage text-brand-offwhite font-bold px-2 py-1 rounded-md shadow-sm">
                      clear, step-by-step plan
                    </strong>
                    . He explained every option, answered every late-night question, and helped us find the confidence
                    to choose the right path for our family."
                  </p>
                  <div className="mt-8 flex items-center pt-4 border-t border-gray-100">
                    <img
                      className="h-12 w-12 rounded-full object-cover border-2 border-brand-sage/20"
                      src="/placeholder.svg?height=48&width=48&text=Buddy+Golden+Retriever"
                      alt="Photo of Buddy, a happy Golden Retriever."
                    />
                    <p className="ml-4 font-semibold text-brand-charcoal">- Mark R., parent to Buddy</p>
                  </div>
                </div>
              </div>

              {/* Story 2: Cardiology */}
              <div className="group grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-8 items-center">
                <div className="md:col-span-4 text-center">
                  <div className="relative inline-block">
                    <div className="absolute -inset-2 bg-gradient-to-r from-brand-sage/20 to-brand-gold/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <img
                      className="relative mx-auto h-48 w-48 rounded-full object-cover border-4 border-white shadow-xl"
                      src="/placeholder.svg?height=192&width=192&text=Dr+Evelyn+Reed"
                      alt="Professional headshot of Dr. Evelyn Reed, a smiling woman with blonde hair."
                    />
                  </div>
                  <h3 className="mt-8 font-serif text-2xl font-semibold text-brand-charcoal">Dr. Evelyn Reed</h3>
                  <p className="text-brand-sage font-medium">DVM, DACVIM (Cardiology)</p>
                  <a
                    href="/specialists"
                    className="mt-4 inline-block text-sm font-semibold text-brand-sage hover:text-brand-charcoal transition-colors duration-200 bg-brand-sage/5 px-3 py-1 rounded-full"
                  >
                    View Full Profile & Credentials →
                  </a>
                </div>
                <div className="md:col-span-8 bg-white p-8 rounded-xl shadow-lg border border-brand-sage/10 group-hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-sage to-brand-gold"></div>
                  <blockquote className="font-serif text-xl font-bold text-brand-sage mb-6">
                    "For the first time, we felt in control."
                  </blockquote>
                  <p className="text-brand-charcoal/90 italic flex-grow leading-relaxed">
                    "Our vet said Luna had a heart murmur, but we didn't understand what that really meant for her
                    future. Dr. Reed's video explanation was incredible. She drew diagrams and walked us through
                    everything, helping us understand the condition and what to watch for.{" "}
                    <strong className="bg-brand-sage text-brand-offwhite font-bold px-2 py-1 rounded-md shadow-sm">
                      For the first time, we felt in control
                    </strong>
                    ."
                  </p>
                  <div className="mt-8 flex items-center pt-4 border-t border-gray-100">
                    <img
                      className="h-12 w-12 rounded-full object-cover border-2 border-brand-sage/20"
                      src="/placeholder.svg?height=48&width=48&text=Luna+Siamese+Cat"
                      alt="Photo of Luna, a Siamese cat."
                    />
                    <p className="ml-4 font-semibold text-brand-charcoal">- Jessica T., parent to Luna</p>
                  </div>
                </div>
              </div>

              {/* Story 3: Surgery */}
              <div className="group grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-8 items-center">
                <div className="md:col-span-4 text-center">
                  <div className="relative inline-block">
                    <div className="absolute -inset-2 bg-gradient-to-r from-brand-sage/20 to-brand-gold/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <img
                      className="relative mx-auto h-48 w-48 rounded-full object-cover border-4 border-white shadow-xl"
                      src="/placeholder.svg?height=192&width=192&text=Dr+Anya+Patel"
                      alt="Professional headshot of Dr. Anya Patel, a smiling woman with dark hair."
                    />
                  </div>
                  <h3 className="mt-8 font-serif text-2xl font-semibold text-brand-charcoal">Dr. Anya Patel</h3>
                  <p className="text-brand-sage font-medium">DVM, DACVS (Surgery)</p>
                  <a
                    href="/specialists"
                    className="mt-4 inline-block text-sm font-semibold text-brand-sage hover:text-brand-charcoal transition-colors duration-200 bg-brand-sage/5 px-3 py-1 rounded-full"
                  >
                    View Full Profile & Credentials →
                  </a>
                </div>
                <div className="md:col-span-8 bg-white p-8 rounded-xl shadow-lg border border-brand-sage/10 group-hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-sage to-brand-gold"></div>
                  <blockquote className="font-serif text-xl font-bold text-brand-sage mb-6">
                    "Saved us so much stress and money."
                  </blockquote>
                  <p className="text-brand-charcoal/90 italic flex-grow leading-relaxed">
                    "The recommendation was a $10,000 surgery, and we were about to do it without a second thought. Dr.
                    Patel reviewed the case and suggested a less invasive approach that was not only more affordable but
                    also had a much faster recovery time. That single conversation{" "}
                    <strong className="bg-brand-sage text-brand-offwhite font-bold px-2 py-1 rounded-md shadow-sm">
                      saved us so much stress and money
                    </strong>
                    ."
                  </p>
                  <div className="mt-8 flex items-center pt-4 border-t border-gray-100">
                    <img
                      className="h-12 w-12 rounded-full object-cover border-2 border-brand-sage/20"
                      src="/placeholder.svg?height=48&width=48&text=Rocky+German+Shepherd"
                      alt="Photo of Rocky, a German Shepherd."
                    />
                    <p className="ml-4 font-semibold text-brand-charcoal">- David L., parent to Rocky</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 text-center">
              <a
                href="/specialists"
                className="group rounded-full bg-brand-sage px-10 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10">See All Specialists</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="py-24 sm:py-32 bg-gradient-to-b from-white via-brand-offwhite/30 to-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(94,108,100,0.05)_0%,transparent_50%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(201,176,106,0.05)_0%,transparent_50%)] pointer-events-none"></div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-serif text-4xl font-bold tracking-tight text-brand-charcoal sm:text-5xl">
                The Investment in{" "}
                <span className="bg-gradient-to-r from-brand-sage to-brand-sage/80 text-brand-offwhite px-4 py-2 rounded-xl shadow-lg inline-block">
                  Clarity
                </span>
              </h2>
            </div>
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column: Value Story with Icons */}
              <div className="bg-gradient-to-br from-brand-offwhite to-white p-8 rounded-2xl shadow-lg border border-brand-sage/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-sage to-brand-gold"></div>
                <h3 className="font-serif text-2xl font-bold text-brand-charcoal">
                  The Alternative is Stressful & Expensive...
                </h3>
                <div className="mt-8 space-y-6 text-brand-charcoal/90 leading-relaxed">
                  {/* Wait Time */}
                  <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-brand-sage/20 to-brand-sage/10 rounded-full mt-1 group-hover:from-brand-sage/30 group-hover:to-brand-sage/20 transition-all duration-300">
                      <Clock className="h-5 w-5 text-brand-sage" />
                    </div>
                    <div className="flex-grow">
                      <p>
                        <strong className="font-semibold text-brand-charcoal">The Wait Time:</strong> The first
                        available appointment was in six weeks. Six weeks of not knowing.
                      </p>
                      <div className="mt-3 flex justify-end items-center gap-3">
                        <p className="font-semibold text-brand-charcoal text-sm">- Michael R.</p>
                        <img
                          className="h-10 w-10 rounded-full object-cover border-2 border-brand-sage/20"
                          src="/placeholder.svg?height=100&width=100&text=Michael's+Pet"
                          alt="Photo of Michael's pet."
                        />
                      </div>
                    </div>
                  </div>
                  {/* Travel */}
                  <div className="group border-t border-gray-200 pt-6 flex items-start gap-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-brand-sage/20 to-brand-sage/10 rounded-full mt-1 group-hover:from-brand-sage/30 group-hover:to-brand-sage/20 transition-all duration-300">
                      <MapPin className="h-5 w-5 text-brand-sage" />
                    </div>
                    <div className="flex-grow">
                      <p>
                        <strong className="font-semibold text-brand-charcoal">The Travel:</strong> The clinic was a
                        three-hour drive away, which meant taking a full day off work and booking a hotel.
                      </p>
                      <div className="mt-3 flex justify-end items-center gap-3">
                        <p className="font-semibold text-brand-charcoal text-sm">- Sarah K.</p>
                        <img
                          className="h-10 w-10 rounded-full object-cover border-2 border-brand-sage/20"
                          src="/placeholder.svg?height=100&width=100&text=Sarah's+Pet"
                          alt="Photo of Sarah's pet."
                        />
                      </div>
                    </div>
                  </div>
                  {/* Cost */}
                  <div className="group border-t border-gray-200 pt-6 flex items-start gap-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-brand-sage/20 to-brand-sage/10 rounded-full mt-1 group-hover:from-brand-sage/30 group-hover:to-brand-sage/20 transition-all duration-300">
                      <DollarSign className="h-5 w-5 text-brand-sage" />
                    </div>
                    <div className="flex-grow">
                      <p>
                        <strong className="font-semibold text-brand-charcoal">The Cost:</strong> We were looking at well
                        over a thousand dollars, just to get an initial opinion.
                      </p>
                      <div className="mt-3 flex justify-end items-center gap-3">
                        <p className="font-semibold text-brand-charcoal text-sm">- David L.</p>
                        <img
                          className="h-10 w-10 rounded-full object-cover border-2 border-brand-sage/20"
                          src="/placeholder.svg?height=100&width=100&text=David's+Pet"
                          alt="Photo of David's pet."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Pricing & Value Stack */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-brand-sage/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold to-brand-sage"></div>
                <h3 className="font-serif text-3xl font-bold text-center lg:text-left">
                  One simple, all-inclusive price.
                </h3>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                  <div className="text-center bg-gradient-to-br from-brand-sage/5 to-brand-gold/5 p-6 rounded-xl border border-brand-sage/10">
                    <p className="font-sans text-6xl sm:text-7xl font-bold bg-gradient-to-r from-brand-sage to-brand-charcoal bg-clip-text text-transparent">
                      $400
                    </p>
                    <p className="mt-1 text-xs text-brand-charcoal/70">plus taxes</p>
                  </div>
                  <div className="bg-gradient-to-br from-brand-gold/20 to-brand-gold/10 p-4 rounded-xl border border-brand-gold/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"></div>
                    <p className="italic text-brand-charcoal/90 text-sm">
                      "I was shocked when my pet insurance{" "}
                      <strong className="bg-brand-sage text-brand-offwhite font-bold px-2 py-1 rounded-md shadow-sm">
                        covered the entire cost
                      </strong>
                      ... It made the service essentially free."
                    </p>
                    <div className="mt-2 flex justify-end items-center gap-2">
                      <p className="font-semibold text-brand-charcoal text-xs">- Alex P.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col items-center lg:items-start gap-y-4 text-brand-charcoal/90">
                  <span className="group flex items-start gap-3 p-2 rounded-lg hover:bg-brand-sage/5 transition-all duration-300">
                    <Check className="w-5 h-5 text-brand-sage flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <span>
                      An expert who <strong className="font-semibold">listens to your story first.</strong>
                    </span>
                  </span>
                  <span className="group flex items-start gap-3 p-2 rounded-lg hover:bg-brand-sage/5 transition-all duration-300">
                    <Check className="w-5 h-5 text-brand-sage flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <span>
                      A plan built around{" "}
                      <strong className="font-semibold">your budget and your family's needs.</strong>
                    </span>
                  </span>
                  <span className="group flex items-start gap-3 p-2 rounded-lg hover:bg-brand-sage/5 transition-all duration-300">
                    <Check className="w-5 h-5 text-brand-sage flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <span>
                      A <strong className="font-semibold">14-day, on-demand conversation.</strong> No appointments
                      necessary.
                    </span>
                  </span>
                  <span className="group flex items-start gap-3 p-2 rounded-lg hover:bg-brand-sage/5 transition-all duration-300">
                    <Check className="w-5 h-5 text-brand-sage flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <span>
                      A complete consultation from your home, on your schedule. No appointments, no travel, no stress.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="py-24 sm:py-32 bg-gradient-to-br from-brand-sage via-brand-sage to-brand-sage/90 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,176,106,0.15)_0%,transparent_50%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none"></div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                The "Peace of Mind" Guarantee.
              </h2>
              <p className="mt-4 text-lg text-gray-200">
                This is our promise to you. It's a risk-free investment in your peace of mind.
              </p>
            </div>
            <div className="mt-16 max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-brand-charcoal/60 to-brand-charcoal/40 p-8 rounded-2xl backdrop-blur-sm border border-brand-gold/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold via-brand-gold/80 to-brand-gold"></div>
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-brand-gold/20 to-transparent rounded-full blur-xl"></div>
                <h3 className="font-serif text-2xl font-bold text-brand-gold">Our "Peace of Mind" Guarantee</h3>
                <p className="mt-4 text-gray-200 leading-relaxed">
                  If you are not 100% satisfied with the clarity and support you receive, for any reason whatsoever,
                  just let us know. We will refund your entire fee immediately. No questions, no hassle.
                </p>
                <div className="mt-6 border-t border-brand-gold/20 pt-6">
                  <p className="italic text-gray-200 leading-relaxed">
                    "I couldn't believe they offered a guarantee. No other specialist does that. It{" "}
                    <strong className="bg-brand-gold/40 text-white font-bold px-3 py-2 rounded-lg shadow-sm">
                      made the decision to sign up a complete no-brainer
                    </strong>
                    ."
                  </p>
                  <div className="mt-4 flex justify-end items-center gap-3">
                    <img
                      className="h-12 w-12 rounded-full object-cover border-2 border-brand-gold/30"
                      src="/placeholder.svg?height=100&width=100&text=Jennifer+S.'s+Pet"
                      alt="Photo of Jennifer S.'s pet."
                    />
                    <p className="font-semibold text-white">- Jennifer S.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq">
          <FAQSection />
        </section>

        {/* What to Expect Section */}
        <section className="py-24 sm:py-32 bg-gradient-to-b from-brand-offwhite via-white to-brand-offwhite/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(94,108,100,0.06)_0%,transparent_50%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_80%,rgba(201,176,106,0.04)_0%,transparent_50%)] pointer-events-none"></div>

          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
            <h2 className="font-serif text-4xl font-bold tracking-tight text-brand-charcoal sm:text-5xl">
              What to expect after you sign up.
            </h2>
            <p className="mt-4 text-lg text-brand-charcoal/90 leading-relaxed">
              Our process is designed to be flexible and supportive, because every situation is different.
            </p>
            <div className="mt-12 space-y-8 text-left">
              <div className="group bg-gradient-to-br from-white via-white to-brand-offwhite/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-sage/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-sage to-brand-gold"></div>
                <p className="italic text-brand-charcoal/90 relative z-10">
                  "Immediately after I paid, I{" "}
                  <strong className="bg-gradient-to-r from-brand-sage to-brand-sage/80 text-brand-offwhite font-bold px-3 py-2 rounded-lg shadow-lg inline-block">
                    received a video message
                  </strong>{" "}
                  from Dr. Chen, the cancer specialist. He reassured me that we would work on it together and figure out
                  what was best for Buddy."
                </p>
                <div className="mt-4 flex justify-end items-center gap-3 relative z-10">
                  <p className="font-semibold text-brand-charcoal text-sm">- Mark, parent to Buddy</p>
                  <img
                    className="h-10 w-10 rounded-full object-cover border-2 border-brand-sage/30"
                    src="/placeholder.svg?height=40&width=40&text=Buddy+Golden+Retriever"
                    alt="Photo of Buddy, a Golden Retriever."
                  />
                </div>
              </div>
              <div className="group bg-gradient-to-br from-white via-white to-brand-offwhite/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-sage/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold to-brand-sage"></div>
                <p className="italic text-brand-charcoal/90 relative z-10">
                  "Dr. Reed{" "}
                  <strong className="bg-gradient-to-r from-brand-sage to-brand-sage/80 text-brand-offwhite font-bold px-3 py-2 rounded-lg shadow-lg inline-block">
                    asked for my story first
                  </strong>
                  —to understand my feelings, what we were going through, what options were laid out, and even
                  accounting for my financial situation. She wanted to understand what we were going through as a
                  family. I felt heard for the first time."
                </p>
                <div className="mt-4 flex justify-end items-center gap-3 relative z-10">
                  <p className="font-semibold text-brand-charcoal text-sm">- Jessica, parent to Luna</p>
                  <img
                    className="h-10 w-10 rounded-full object-cover border-2 border-brand-sage/30"
                    src="/placeholder.svg?height=40&width=40&text=Luna+Siamese+Cat"
                    alt="Photo of Luna, a Siamese cat."
                  />
                </div>
              </div>
              <div className="group bg-gradient-to-br from-white via-white to-brand-offwhite/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-sage/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-sage to-brand-gold"></div>
                <p className="italic text-brand-charcoal/90 relative z-10">
                  "Rather than having me copy and share stacks of records, Dr. Patel told me, based on my story, that we
                  didn't need additional tests and could determine a path with the current results. It{" "}
                  <strong className="bg-gradient-to-r from-brand-sage to-brand-sage/80 text-brand-offwhite font-bold px-3 py-2 rounded-lg shadow-lg inline-block">
                    took all the pressure off
                  </strong>
                  ."
                </p>
                <div className="mt-4 flex justify-end items-center gap-3 relative z-10">
                  <p className="font-semibold text-brand-charcoal text-sm">- David, parent to Rocky</p>
                  <img
                    className="h-10 w-10 rounded-full object-cover border-2 border-brand-sage/30"
                    src="/placeholder.svg?height=40&width=40&text=Rocky+German+Shepherd"
                    alt="Photo of Rocky, a German Shepherd."
                  />
                </div>
              </div>
              <div className="group bg-gradient-to-br from-white via-white to-brand-offwhite/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-sage/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold to-brand-sage"></div>
                <p className="italic text-brand-charcoal/90 relative z-10">
                  "The video I got back was incredible. He explained{" "}
                  <strong className="bg-gradient-to-r from-brand-sage to-brand-sage/80 text-brand-offwhite font-bold px-3 py-2 rounded-lg shadow-lg inline-block">
                    options my primary vet, Google, and AI never mentioned
                  </strong>{" "}
                  and helped me understand the pros and cons of each. It wasn't just medical advice; it was guidance. We
                  decided on a less invasive procedure that made Rocky comfortable for the rest of his life."
                </p>
                <div className="mt-4 flex justify-end items-center gap-3 relative z-10">
                  <p className="font-semibold text-brand-charcoal text-sm">- Another Grateful Parent</p>
                  <img
                    className="h-10 w-10 rounded-full object-cover border-2 border-brand-sage/30"
                    src="/placeholder.svg?height=100&width=100&text=A+Happy+Pet"
                    alt="A happy pet."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Share Your Story Section */}
        <section className="py-24 sm:py-32 bg-gradient-to-br from-white via-brand-offwhite/30 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(94,108,100,0.05)_0%,transparent_50%)] pointer-events-none"></div>

          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
            <h2 className="font-serif text-4xl font-bold tracking-tight text-brand-charcoal sm:text-5xl">
              Your story is important.
            </h2>
            <p className="mt-4 text-lg text-brand-charcoal/90 leading-relaxed">
              The stories from our community of pet parents are what inspire us and help others feel less alone. If our
              service has helped you, we'd be honored to hear from you. We read every email.
            </p>
            <a
              href="mailto:stories@secondveterinarian.com"
              className="group mt-8 inline-flex items-center justify-center rounded-full border border-transparent bg-gradient-to-r from-brand-sage to-brand-sage/90 px-8 py-3 text-base font-semibold text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">Share Your Story</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </div>
        </section>

        {/* Final CTA Section */}
        <section
          id="cta"
          className="bg-gradient-to-br from-brand-sage via-brand-sage to-brand-sage/90 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,176,106,0.15)_0%,transparent_50%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none"></div>

          <div className="mx-auto max-w-4xl py-16 px-6 text-center sm:py-24 lg:px-8 relative z-10">
            <h2 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Your Path to Clarity Starts Now.
            </h2>
            <p className="mt-4 text-lg text-gray-200">
              Get the clarity and confidence you need to make the best possible decision for your pet. We're here to
              help.
            </p>
            <a
              href="/checkout"
              className="group mt-10 inline-flex w-full items-center justify-center rounded-full border border-transparent bg-gradient-to-r from-brand-gold to-brand-gold/90 px-8 py-4 text-base font-semibold text-brand-charcoal hover:shadow-2xl sm:w-auto transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">Start My Consultation Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-300 flex items-center justify-center gap-2 bg-gradient-to-r from-brand-charcoal/20 to-brand-charcoal/10 px-4 py-2 rounded-full backdrop-blur-sm border border-brand-gold/20">
                <Shield className="w-5 h-5" />
                All conversations are encrypted, secured, and completely private.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
