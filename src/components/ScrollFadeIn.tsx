import { useState, useEffect, useRef, ReactNode } from 'react'

interface ScrollFadeInProps {
  children: ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  duration?: number
}

export default function ScrollFadeIn({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  delay = 0,
  direction = 'up',
  duration = 600
}: ScrollFadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true)
            setHasAnimated(true)
          }, delay)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [threshold, rootMargin, delay, hasAnimated])

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translateY(40px)'
      case 'down':
        return 'translateY(-40px)'
      case 'left':
        return 'translateX(40px)'
      case 'right':
        return 'translateX(-40px)'
      case 'fade':
      default:
        return 'translateY(0px)'
    }
  }

  const animationStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px) translateX(0px)' : getInitialTransform(),
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
  }

  return (
    <div
      ref={elementRef}
      className={className}
      style={animationStyle}
    >
      {children}
    </div>
  )
}