"use client"

export function TwoPathsSection() {
  return (
    <section
      id="process"
      className="py-24 sm:py-32 bg-gradient-to-b from-brand-offwhite via-white to-brand-offwhite/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(94,108,100,0.03)_0%,transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(201,176,106,0.03)_0%,transparent_50%)] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-brand-charcoal sm:text-5xl relative">
            Two Paths to Clarity
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-brand-sage to-brand-gold rounded-full"></div>
          </h2>
          <p className="mt-6 text-lg text-brand-charcoal/90 leading-relaxed">
            We understand that everyone's needs are different. Our entire process is built around an unhurried, 14-day
            private conversation that happens on your schedule. No travel, no appointments—just a supportive
            partnership.
          </p>
          <p className="mt-6 text-center font-semibold text-brand-sage bg-gradient-to-r from-brand-sage/5 to-brand-gold/5 px-6 py-3 rounded-full inline-block border border-brand-sage/20">
            ✨ Both paths are included for one all-inclusive price. The choice is simply yours.
          </p>
        </div>

        {/* Desktop: Two-column grid */}
        <div className="mt-16 hidden md:grid md:grid-cols-2 gap-8">
          <PathCard
            title="The Concierge Path"
            subtitle="For the fastest path to a supportive conversation."
            steps={[
              "Tell us your concern and share your story.",
              "We match you with the perfect specialist for your pet's needs.",
              "Begin your 14-day private conversation.",
            ]}
            testimonial="I was a mess and my records were a disaster. They told me to just start with my story and they'd handle the rest. It took all the pressure off."
            ctaText="Get Clarity Now"
            ctaHref="/checkout"
            ctaVariant="primary"
          />
          <PathCard
            title="The Researcher Path"
            subtitle="To personally select your expert partner."
            steps={[
              "Browse our specialist profiles and their credentials.",
              "Select the doctor you trust the most.",
              "Begin your 14-day private conversation.",
            ]}
            testimonial="The transparency was critical. I could review every specialist's credentials and choose the one whose expertise best fit Luna's specific case. No black box."
            ctaText="Meet the Specialists"
            ctaHref="/specialists"
            ctaVariant="secondary"
          />
        </div>

        {/* Mobile/Tablet: Vertical Stack instead of Tabs */}
        <div className="mt-16 md:hidden space-y-8">
          {/* Concierge Path on top */}
          <PathCard
            title="The Concierge Path"
            subtitle="For the fastest path to a supportive conversation."
            steps={[
              "Tell us your concern and share your story.",
              "We match you with the perfect specialist for your pet's needs.",
              "Begin your 14-day private conversation.",
            ]}
            testimonial="I was a mess and my records were a disaster. They told me to just start with my story and they'd handle the rest. It took all the pressure off."
            ctaText="Get Clarity Now"
            ctaHref="/checkout"
            ctaVariant="primary"
          />
          <PathCard
            title="The Researcher Path"
            subtitle="To personally select your expert partner."
            steps={[
              "Browse our specialist profiles and their credentials.",
              "Select the doctor you trust the most.",
              "Begin your 14-day private conversation.",
            ]}
            testimonial="The transparency was critical. I could review every specialist's credentials and choose the one whose expertise best fit Luna's specific case. No black box."
            ctaText="Meet the Specialists"
            ctaHref="/specialists"
            ctaVariant="secondary"
          />
        </div>
      </div>
    </section>
  )
}

interface PathCardProps {
  title: string
  subtitle: string
  steps: string[]
  testimonial: string
  ctaText: string
  ctaHref: string
  ctaVariant: "primary" | "secondary"
}

function PathCard({ title, subtitle, steps, testimonial, ctaText, ctaHref, ctaVariant }: PathCardProps) {
  return (
    <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200/50 hover:border-brand-sage/30 flex flex-col transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-sage via-brand-gold to-brand-sage opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-sage/2 via-transparent to-brand-gold/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-2 group-hover:text-brand-sage transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm font-semibold text-brand-charcoal/80 mb-6">{subtitle}</p>

        <ol className="space-y-4 text-left flex-grow">
          {steps.map((step, index) => (
            <li key={index} className="flex items-start gap-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-brand-sage to-brand-sage/80 text-white font-bold text-sm flex-shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                {index + 1}
              </span>
              <span className="text-brand-charcoal/90 leading-relaxed group-hover:text-brand-charcoal transition-colors duration-300">
                {step}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-8 border-t border-gray-200/50 pt-6">
          <p className="italic text-brand-charcoal/90 text-sm leading-relaxed">
            "{testimonial.replace(/It took all the pressure off\./g, "").replace(/No black box\./g, "")}"
            <strong className="bg-gradient-to-r from-brand-sage to-brand-sage/80 text-brand-offwhite font-bold px-3 py-1 rounded-lg shadow-sm ml-1 inline-block">
              {testimonial.includes("It took all the pressure off") ? "It took all the pressure off." : "No black box."}
            </strong>
          </p>
        </div>

        <a
          href={ctaHref}
          className={`group/btn mt-8 inline-block w-full text-center rounded-full px-8 py-4 text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden border-2 ${
            ctaVariant === "primary"
              ? "bg-gradient-to-r from-brand-gold to-brand-gold/90 text-brand-charcoal hover:from-brand-gold/90 hover:to-brand-gold border-brand-gold/30"
              : "bg-gradient-to-r from-brand-sage to-brand-sage/90 text-white hover:from-brand-sage/90 hover:to-brand-sage border-brand-sage/30"
          }`}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {ctaText}
            <span className="transform group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
        </a>
      </div>
    </div>
  )
}
