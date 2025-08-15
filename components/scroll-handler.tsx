"use client"

import { useEffect, useRef } from "react"

export function ScrollHandler() {
  const lastPathRef = useRef<string>("")
  const isInitialLoadRef = useRef<boolean>(true)

  useEffect(() => {
    // Handle hash scrolling only when navigating from another page
    const handleHashScroll = () => {
      const hash = window.location.hash
      const currentPath = window.location.pathname

      const isNavigatingFromDifferentPage = lastPathRef.current !== "" && lastPathRef.current !== currentPath
      const isInitialLoadWithHash = isInitialLoadRef.current && hash

      if (hash && (isNavigatingFromDifferentPage || isInitialLoadWithHash)) {
        const element = document.querySelector(hash)
        if (element) {
          setTimeout(() => {
            const headerHeight = 80 // Approximate header height
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - headerHeight

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            })
          }, 100)
        }
      }

      lastPathRef.current = currentPath
      isInitialLoadRef.current = false
    }

    // Handle initial load
    handleHashScroll()

    // Handle hash changes
    window.addEventListener("hashchange", handleHashScroll)

    return () => {
      window.removeEventListener("hashchange", handleHashScroll)
    }
  }, [])

  return null
}
