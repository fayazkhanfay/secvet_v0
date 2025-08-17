"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqData = [
  {
    question: "Is this a replacement for my regular vet?",
    answer:
      "No, and that's by design. We are an expert partner *for* your primary veterinarian, not a replacement. Our goal is to give you the clarity and confidence to have a more productive conversation with them about your pet's care. They will always be in charge of all hands-on treatment.",
  },
  {
    question: "Can your specialists prescribe medicine?",
    answer:
      "No. Because our specialists are not seeing your pet in person, they cannot legally prescribe medication. We provide expert advice and a clear plan that you can then discuss with your primary veterinarian, who will handle all prescriptions and hands-on care.",
  },
  {
    question: "What are your service hours and response times?",
    answer:
      "Our platform is available for you to submit your case 24/7. We guarantee a personal video introduction from your assigned specialist by 12:00 PM on the next business day. For cases submitted during regular business hours (Mon-Fri, 9am-5pm ET), you can often expect a response within just a few hours.",
  },
  {
    question: 'What is your "Peace of Mind" Guarantee?',
    answer:
      "Our promise is simple: If you are not 100% satisfied with the clarity and support you receive, for any reason whatsoever, just let us know. We will refund your entire fee immediately. No questions, no hassle. There are no forms to fill out and no hoops to jump through. Your satisfaction is our priority.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-brand-offwhite">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="text-center font-serif text-4xl font-bold tracking-tight text-brand-charcoal sm:text-5xl">
          Common Questions
        </h2>
        <div className="mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 pb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-brand-charcoal hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-brand-charcoal/90 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-8 text-center">
          <a href="/faq" className="text-sm font-semibold text-brand-sage hover:text-brand-charcoal transition-colors">
            View All Questions &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}
