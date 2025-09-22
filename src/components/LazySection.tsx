import { lazy, Suspense, ComponentType, useState, useEffect } from 'react'

interface LazySectionProps {
  children: React.ReactNode
  className?: string
  fallback?: React.ReactNode
}

// Default section loader
function SectionLoader({ className = "" }: { className?: string }) {
  return (
    <div className={`py-12 px-6 flex items-center justify-center ${className}`}>
      <div className="text-center">
        <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
        <p className="text-sm text-muted-foreground">Loading section...</p>
      </div>
    </div>
  )
}

// Lazy section wrapper component
export function LazySection({ 
  children, 
  className = "",
  fallback = <SectionLoader className={className} />
}: LazySectionProps) {
  return (
    <Suspense fallback={fallback}>
      <div className={className}>
        {children}
      </div>
    </Suspense>
  )
}

// Higher-order component to create lazy sections
export function createLazySection<T extends Record<string, any>>(
  importFn: () => Promise<{ default: ComponentType<T> }>,
  fallback?: React.ReactNode
) {
  const LazyComponent = lazy(importFn)
  
  return function LazyLoadedSection(props: T) {
    return (
      <Suspense fallback={fallback || <SectionLoader />}>
        <LazyComponent {...(props as any)} />
      </Suspense>
    )
  }
}

// Intersection Observer hook for lazy loading on scroll
export function useLazyLoad(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const [ref, setRef] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(ref)
        }
      },
      { threshold }
    )

    observer.observe(ref)

    return () => {
      if (ref) observer.unobserve(ref)
    }
  }, [ref, threshold])

  return [setRef, isVisible] as const
}