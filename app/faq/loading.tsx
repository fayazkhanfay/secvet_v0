export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-offwhite via-white to-brand-offwhite flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-sage mx-auto mb-4"></div>
        <p className="text-brand-charcoal/60">Loading FAQ...</p>
      </div>
    </div>
  )
}
