"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { ChevronRight, ChevronLeft, Check, Upload, FileText, Heart, Clock, Shield } from "lucide-react"

export default function OnboardingConciergePage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [showElements, setShowElements] = useState(false)
  const [formData, setFormData] = useState({
    petName: "",
    animalType: "Dog",
    specialty: "",
    story: "",
    files: [] as File[]
  })
  const [showReassurance, setShowReassurance] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [lastSaved, setLastSaved] = useState<Date | null>(null)


  const steps = [
    { id: 1, title: "Pet Details", description: "Tell us about your pet" },
    { id: 2, title: "Your Story", description: "Share what's happening" },
    { id: 3, title: "Upload Files", description: "Add medical records (optional)" }
  ]

  // Load saved draft on component mount
  useEffect(() => {
    const savedDraft = localStorage.getItem('onboarding-concierge-draft')
    if (savedDraft) {
      try {
        const parsed = JSON.parse(savedDraft)
        // Note: We can't restore File objects from localStorage, so we only restore text fields
        setFormData(prev => ({
          ...prev,
          petName: parsed.petName || "",
          animalType: parsed.animalType || "Dog",
          specialty: parsed.specialty || "",
          story: parsed.story || ""
        }))
        setLastSaved(new Date(parsed.lastSaved))
      } catch (error) {
        console.error('Error loading saved draft:', error)
      }
    }
  }, [])

  // Auto-save function
  const saveDraft = useCallback(async () => {
    try {
      // Save text fields to localStorage
      const draftData = {
        petName: formData.petName,
        animalType: formData.animalType,
        specialty: formData.specialty,
        story: formData.story,
        lastSaved: new Date().toISOString()
      }
      
      localStorage.setItem('onboarding-concierge-draft', JSON.stringify(draftData))
      setLastSaved(new Date())
      
      // In a real app, you might also want to save to your backend here
      // await fetch('/api/drafts', { method: 'POST', body: JSON.stringify(draftData) })
      
    } catch (error) {
      console.error('Error saving draft:', error)
    }
  }, [formData])

  // Auto-save on form data changes (with debouncing)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (formData.petName || formData.specialty || formData.story) {
        saveDraft()
      }
    }, 2000) // Auto-save after 2 seconds of inactivity

    return () => clearTimeout(timeoutId)
  }, [formData.petName, formData.specialty, formData.story, saveDraft])



  // Clear draft after successful submission
  const clearDraft = () => {
    localStorage.removeItem('onboarding-concierge-draft')
    setLastSaved(null)
  }

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => setShowElements(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const updateFormData = (field: string, value: string | File[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return formData.petName.trim() && formData.specialty
      case 1:
        return formData.story.trim().length > 10
      default:
        return true
    }
  }

  const handleNext = () => {
    if (validateCurrentStep()) {
      if (currentStep === steps.length - 1) {
        handleSubmit()
      } else {
        setCurrentStep(prev => prev + 1)
      }
    }
  }

  const handleBack = () => {
    setCurrentStep(prev => Math.max(0, prev - 1))
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
    clearDraft() // Clear draft after successful submission
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    updateFormData("files", files)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-offwhite via-white to-brand-offwhite relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-sage/5 via-transparent to-brand-gold/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-brand-gold/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-brand-sage/10 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Header */}
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

        {/* Success Content */}
        <main className="flex items-center justify-center min-h-screen pt-8 px-4 py-8 relative z-10">
          <div className="mx-auto max-w-xl w-full text-center">
            <div className="relative bg-white/95 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
              {/* Enhanced Decorative Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-sage/8 via-transparent to-brand-gold/8"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-brand-gold/5 via-transparent to-brand-sage/5"></div>
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-brand-gold/20 to-transparent rounded-full blur-3xl scale-110 transition-transform duration-700"></div>
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-brand-sage/20 to-transparent rounded-full blur-3xl scale-110 transition-transform duration-700"></div>

              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-full flex items-center justify-center shadow-2xl border-2 border-brand-gold/30">
                      <Check className="w-8 h-8 text-white drop-shadow-sm" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 to-brand-sage/20 rounded-full animate-pulse opacity-60"></div>
                  </div>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-brand-charcoal leading-tight mb-6">
                  Thank You. Your Information is Submitted.
                </h1>

                <div className="space-y-4 text-left">
                  <p className="text-brand-charcoal/80 leading-relaxed">
                    We have received your story and it has been securely sent to our specialist team. You can expect a personal video introduction from your assigned specialist by{" "}
                    <span className="font-bold text-brand-sage bg-brand-sage/10 px-2 py-1 rounded-lg">
                      12:00 PM the next business day.
                    </span>
                  </p>
                  
                  <p className="text-sm text-brand-charcoal/70 leading-relaxed">
                    You will receive a notification in your consultation room and via email once your specialist has been assigned.
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href="/consultation-room"
                    className="group relative inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-brand-sage via-brand-sage to-brand-sage/90 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/30 to-brand-sage/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center gap-2">
                      <Heart className="w-5 h-5 text-brand-gold" />
                      Go to My Consultations
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-offwhite via-white to-brand-offwhite relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-sage/5 via-transparent to-brand-gold/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-brand-gold/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-brand-sage/10 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Header */}
      <header className="relative bg-gradient-to-r from-brand-charcoal via-brand-charcoal to-brand-sage shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/95 to-brand-sage/95"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
          <Link href="/" className="-m-1.5 p-1.5 group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
            <span className="relative font-serif font-bold text-xl text-brand-offwhite group-hover:text-brand-gold transition-all duration-300 drop-shadow-sm">
              Second Veterinarian
            </span>
          </Link>
          <div className="flex flex-1 justify-end">
            <Link 
              href="/consultation-room" 
              className="text-sm font-semibold leading-6 text-brand-offwhite transition-colors duration-300 hover:text-brand-gold rounded-md"
            >
              My Consultations
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Form Header */}
          <div 
            id="form-header" 
            className={`text-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="font-serif text-4xl font-bold tracking-tight text-brand-charcoal sm:text-5xl">
              Welcome. Let's begin.
            </h1>
            <p className="mt-4 text-lg text-brand-charcoal/80">
              Please provide the details below. This will be sent directly to our specialist team to start your consultation.
            </p>
            <p className="mt-4 text-sm font-semibold text-brand-sage">
              Take your time. Your 14-day consultation clock doesn't start until your specialist sends their first personal message.
            </p>
          </div>

          {/* Auto-save Status */}
          {lastSaved && (
            <div className="mt-4 text-center transition-all duration-500">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200 rounded-full text-xs text-green-700">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Auto-saved {lastSaved.toLocaleTimeString()}</span>
              </div>
            </div>
          )}

          {/* Onboarding Form Container */}
          <div 
            id="onboarding-container" 
            className={`mt-8 bg-white/95 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/30 overflow-hidden transition-all duration-1000 delay-300 ${
              showElements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Enhanced Decorative Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-sage/8 via-transparent to-brand-gold/8"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-brand-gold/5 via-transparent to-brand-sage/5"></div>
            
            {/* Progress Bar */}
            <div id="progress-bar" className="mb-8 relative z-10">
              <div className="flex items-center">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className={`flex items-center ${index <= currentStep ? 'text-brand-sage' : 'text-gray-400'}`}>
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full text-white transition-all duration-300 ${
                        index < currentStep 
                          ? 'bg-green-500' 
                          : index === currentStep 
                          ? 'bg-brand-sage' 
                          : 'bg-gray-300 text-brand-charcoal'
                      }`}>
                        {index < currentStep ? (
                          <Check className="h-5 w-5" />
                        ) : (
                          step.id
                        )}
                      </div>
                      <span className="ml-3 font-semibold hidden sm:block">{step.title}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`flex-auto border-t-2 mx-4 transition-all duration-300 ${
                        index < currentStep ? 'border-green-500' : 'border-gray-300'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div id="form-content" className="relative z-10">
              {/* Step 1: Pet Details & Specialty */}
              {currentStep === 0 && (
                <div className="animate-fade-in-rise">
                  <h2 className="font-serif text-2xl font-bold text-brand-charcoal mb-6">
                    Step 1: Tell us about your pet
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="pet-name" className="block text-sm font-medium text-brand-charcoal mb-2">
                        Pet's Name
                      </label>
                      <input
                        type="text"
                        id="pet-name"
                        value={formData.petName}
                        onChange={(e) => updateFormData("petName", e.target.value)}
                        className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-sage focus:ring-brand-sage p-3 transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="animal-type" className="block text-sm font-medium text-brand-charcoal mb-2">
                        Animal Type
                      </label>
                      <select
                        id="animal-type"
                        value={formData.animalType}
                        onChange={(e) => updateFormData("animalType", e.target.value)}
                        className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-sage focus:ring-brand-sage p-3 transition-all duration-300"
                      >
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="specialty" className="block text-sm font-medium text-brand-charcoal mb-2">
                        Primary Area of Concern
                      </label>
                      <select
                        id="specialty"
                        value={formData.specialty}
                        onChange={(e) => {
                          updateFormData("specialty", e.target.value)
                          setShowReassurance(e.target.value === "not-sure")
                        }}
                        className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-sage focus:ring-brand-sage p-3 transition-all duration-300"
                        required
                      >
                        <option value="" disabled>Select a specialty...</option>
                        <option value="oncology">Oncology (Cancer)</option>
                        <option value="cardiology">Cardiology (Heart)</option>
                        <option value="neurology">Neurology</option>
                        <option value="surgery">Surgery</option>
                        <option value="internal-medicine">Internal Medicine</option>
                        <option value="not-sure">I'm not sure</option>
                      </select>
                      {showReassurance && (
                        <p className="mt-2 text-sm text-brand-sage animate-fade-in-rise">
                          That's perfectly fine. Our lead internal medicine specialist will personally review your story to ensure you are matched with the correct expert.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Share Your Story */}
              {currentStep === 1 && (
                <div className="animate-fade-in-rise">
                  <h2 className="font-serif text-2xl font-bold text-brand-charcoal mb-4">
                    Step 2: The most important part—your story.
                  </h2>
                  <p className="text-sm text-brand-charcoal/80 mb-6 leading-relaxed">
                    We know this can be difficult to write. Please take your time. This is your private space to share everything you're going through. Don't worry about medical terms or getting it perfect. Just tell us what's been happening, what your primary vet has said, and most importantly, what your biggest questions and fears are right now. The more you share, the better we can help.
                  </p>
                  <div>
                    <textarea
                      id="story"
                      value={formData.story}
                      onChange={(e) => updateFormData("story", e.target.value)}
                      rows={10}
                      className="w-full rounded-lg border-0 p-3 text-brand-charcoal/90 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-sage transition-all duration-300"
                      placeholder="You can write as much as you need to here..."
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Upload Files (Optional) */}
              {currentStep === 2 && (
                <div className="animate-fade-in-rise">
                  <h2 className="font-serif text-2xl font-bold text-brand-charcoal mb-4">
                    Step 3: Upload files (Optional)
                  </h2>
                  <p className="text-sm text-brand-charcoal/80 mb-6 leading-relaxed">
                    If you have any medical records, photos, or videos handy, please attach them. If not, don't worry—you can always add them later.
                  </p>
                  <div className="flex items-center justify-center w-full">
                    <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all duration-300">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-4 text-gray-500" />
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">
                          PDF, JPG, PNG, MOV, or MP4 (MAX. 25MB)
                        </p>
                      </div>
                      <input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        multiple
                        onChange={handleFileUpload}
                        accept=".pdf,.jpg,.jpeg,.png,.mov,.mp4"
                      />
                    </label>
                  </div>
                  {formData.files.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {formData.files.map((file, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-brand-sage/5 rounded-lg">
                          <FileText className="w-4 h-4 text-brand-sage" />
                          <span className="text-sm text-brand-charcoal">{file.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className={`rounded-full bg-white px-8 py-3 text-sm font-semibold text-brand-charcoal shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all duration-300 ${
                    currentStep === 0 ? 'invisible' : 'visible'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4 inline mr-1" />
                  Back
                </button>
                
                {/* Next/Submit Button */}
                <button
                  type="button"
                  onClick={handleNext}
                  className="rounded-full bg-brand-gold px-8 py-3 text-sm font-semibold text-brand-charcoal shadow-lg hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2"
                >
                  {currentStep === steps.length - 1 ? (
                    <>
                      Submit & Begin My Consultation
                      <Heart className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Next Step
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className={`mt-8 flex flex-wrap items-center justify-center gap-4 text-xs transition-all duration-700 delay-800 ${
            showElements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <div className="group flex items-center gap-2 px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/80 transition-all duration-300">
              <Shield className="w-3 h-3 text-green-500" />
              <span className="font-medium text-brand-charcoal/80 group-hover:text-brand-charcoal transition-colors duration-300">
                Secure & Private
              </span>
            </div>
            <div className="group flex items-center gap-2 px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/80 transition-all duration-300">
              <Heart className="w-3 h-3 text-brand-sage" />
              <span className="font-medium text-brand-charcoal/80 group-hover:text-brand-charcoal transition-colors duration-300">
                Expert Specialists
              </span>
            </div>
            <div className="group flex items-center gap-2 px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/80 transition-all duration-300">
              <Clock className="w-3 h-3 text-brand-gold" />
              <span className="font-medium text-brand-charcoal/80 group-hover:text-brand-charcoal transition-colors duration-300">
                24-Hour Response
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
