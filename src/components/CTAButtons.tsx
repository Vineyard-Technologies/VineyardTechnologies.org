import { Button } from "@/components/ui/button"

interface CTAButtonsProps {
  primaryText?: string
  primaryHref?: string
  primaryAction?: () => void
  secondaryText?: string
  secondaryHref?: string
  secondaryAction?: () => void
  className?: string
}

export default function CTAButtons({
  primaryText = "Send us a Message",
  primaryHref = "/contact",
  primaryAction,
  secondaryText = "Send us an Email",
  secondaryHref = "mailto:Contact@VineyardTechnologies.org",
  secondaryAction,
  className = ""
}: CTAButtonsProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center ${className}`}>
      {primaryAction ? (
        <Button 
          className="bg-primary text-white hover:bg-primary/90 px-8 py-3 text-lg"
          onClick={primaryAction}
        >
          {primaryText}
        </Button>
      ) : (
        <a href={primaryHref} className="inline-block cursor-pointer">
          <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-3 text-lg">
            {primaryText}
          </Button>
        </a>
      )}
      
      {secondaryAction ? (
        <Button 
          className="border-2 border-gray-400 text-gray-700 bg-white hover:bg-white hover:text-primary hover:border-primary px-8 py-3 text-lg transition-colors duration-200"
          onClick={secondaryAction}
        >
          {secondaryText}
        </Button>
      ) : (
        <a href={secondaryHref} className="inline-block cursor-pointer">
          <Button className="border-2 border-gray-400 text-gray-700 bg-white hover:bg-white hover:text-primary hover:border-primary px-8 py-3 text-lg transition-colors duration-200">
            {secondaryText}
          </Button>
        </a>
      )}
    </div>
  )
}