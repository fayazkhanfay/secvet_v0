export default function OnboardingConciergeLoading() {
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
          <div className="-m-1.5 p-1.5">
            <div className="font-serif font-bold text-xl text-brand-offwhite">
              Second Veterinarian
            </div>
          </div>
          <div className="flex flex-1 justify-end">
            <div className="text-sm font-semibold leading-6 text-brand-offwhite/60">
              My Consultations
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Form Header Skeleton */}
          <div className="text-center animate-pulse">
            <div className="h-12 bg-gray-200 rounded-lg mb-4 max-w-2xl mx-auto"></div>
            <div className="h-6 bg-gray-200 rounded-lg mb-2 max-w-xl mx-auto"></div>
            <div className="h-6 bg-gray-200 rounded-lg mb-4 max-w-lg mx-auto"></div>
            <div className="h-5 bg-gray-200 rounded-lg max-w-md mx-auto"></div>
          </div>

          {/* Form Container Skeleton */}
          <div className="mt-12 bg-white/95 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
            {/* Progress Bar Skeleton */}
            <div className="mb-8">
              <div className="flex items-center">
                <div className="flex items-center text-brand-sage">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-sage text-white">1</div>
                  <span className="ml-3 font-semibold hidden sm:block">Pet Details</span>
                </div>
                <div className="flex-auto border-t-2 border-gray-300 mx-4"></div>
                <div className="flex items-center text-gray-400">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-brand-charcoal">2</div>
                  <span className="ml-3 font-semibold hidden sm:block">Your Story</span>
                </div>
                <div className="flex-auto border-t-2 border-gray-300 mx-4"></div>
                <div className="flex items-center text-gray-400">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-brand-charcoal">3</div>
                  <span className="ml-3 font-semibold hidden sm:block">Upload Files</span>
                </div>
              </div>
            </div>

            {/* Form Content Skeleton */}
            <div className="space-y-6">
              <div className="h-8 bg-gray-200 rounded-lg w-1/3"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                  <div className="h-12 bg-gray-200 rounded-lg"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                  <div className="h-12 bg-gray-200 rounded-lg"></div>
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-40"></div>
                  <div className="h-12 bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons Skeleton */}
            <div className="mt-8 pt-8 border-t border-gray-200 flex justify-between items-center">
              <div className="h-12 w-24 bg-gray-200 rounded-full"></div>
              <div className="h-12 w-32 bg-brand-gold rounded-full"></div>
            </div>
          </div>

          {/* Trust Indicators Skeleton */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-8 w-32 bg-gray-200 rounded-full"></div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
