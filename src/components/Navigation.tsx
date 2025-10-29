import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Link } from "react-router-dom"
import MenuIcon from "lucide-react/dist/esm/icons/menu"
import ChevronDownIcon from "lucide-react/dist/esm/icons/chevron-down"
// Logo is now served from public/images as a static asset
import { cn } from "@/lib/utils"
import { useState } from "react"

const services = [
  {
    title: "Software Development",
    href: "/services/software-development",
    description: "Custom web applications, mobile apps, and enterprise software solutions."
  },
  {
    title: "Development Outsourcing",
    href: "/services/development-outsourcing", 
    description: "Dedicated teams and staff augmentation to scale your development capacity."
  },
  {
    title: "Technical Consulting",
    href: "/services/technical-consulting",
    description: "Strategic guidance on technology decisions and digital transformation."
  }
]

const products = [
  {
    title: "Overlord",
    href: "/products/overlord",
    description: "An asset rendering pipeline management tool for NVIDIA Iray.",
    icon: "/images/overlordIcon.webp"
  },
  {
    title: "DaggerQuest",
    href: "/products/daggerquest",
    description: "A action role playing game playable directly from a web browser.",
    icon: "/images/DaggerQuestIcon.webp"
  },
  {
    title: "Mythic Market Mogul",
    href: "/products/mythic-market-mogul",
    description: "A deep-dive analysis suite for monitoring virtual commodities.",
    icon: "/images/MythicMarketMogulIcon.webp"
  }
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const closeSheet = () => {
    setIsOpen(false)
    setExpandedSection(null)
  }

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="bg-white p-2 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-200">
          <img src="/images/logo.webp" alt="Vineyard Technologies" className="h-8" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="text-white/90 hover:text-white transition-colors px-4 py-2">
                  Home
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white/90 bg-transparent px-4 py-2 text-base font-normal hover:!bg-transparent hover:!text-white/90 data-[state=open]:bg-transparent data-[state=open]:hover:!bg-transparent focus:!bg-transparent focus:!text-white/90">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-3 p-4 md:w-[600px] md:grid-cols-1 lg:w-[600px]">
                    {services.map((service) => (
                      <ListItem
                        key={service.title}
                        title={service.title}
                        href={service.href}
                      >
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white/90 bg-transparent px-4 py-2 text-base font-normal hover:!bg-transparent hover:!text-white/90 data-[state=open]:bg-transparent data-[state=open]:hover:!bg-transparent focus:!bg-transparent focus:!text-white/90">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-3 p-4 md:w-[600px] md:grid-cols-1 lg:w-[600px]">
                    {products.map((product) => (
                      <ListItem
                        key={product.title}
                        title={product.title}
                        href={product.href}
                        icon={product.icon}
                      >
                        {product.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/about" className="text-white/90 hover:text-white transition-colors px-4 py-2">
                  About
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/contact" className="text-white/90 hover:text-white transition-colors px-4 py-2">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary ml-4" asChild>
            <Link to="/contact">Get Started <img src="/images/vineyardtechnologiesicon.webp" alt="🍇" className="inline w-6 h-6 ml-1" /></Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-12 w-12">
              <MenuIcon className="h-8 w-8" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-6">
              <Link 
                to="/" 
                className="text-lg font-medium hover:text-primary transition-colors py-2"
                onClick={closeSheet}
              >
                Home
              </Link>
              
              {/* Services Accordion */}
              <div className="border-b pb-2">
                <button
                  onClick={() => toggleSection('services')}
                  className="flex items-center justify-between w-full text-lg font-medium hover:text-primary transition-colors py-2"
                >
                  Services
                  <ChevronDownIcon 
                    className={cn(
                      "h-4 w-4 transition-transform",
                      expandedSection === 'services' && "rotate-180"
                    )}
                  />
                </button>
                {expandedSection === 'services' && (
                  <div className="flex flex-col gap-2 mt-2 ml-4">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        to={service.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                        onClick={closeSheet}
                      >
                        <div className="font-medium">{service.title}</div>
                        <div className="text-xs mt-1">{service.description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Products Accordion */}
              <div className="border-b pb-2">
                <button
                  onClick={() => toggleSection('products')}
                  className="flex items-center justify-between w-full text-lg font-medium hover:text-primary transition-colors py-2"
                >
                  Products
                  <ChevronDownIcon 
                    className={cn(
                      "h-4 w-4 transition-transform",
                      expandedSection === 'products' && "rotate-180"
                    )}
                  />
                </button>
                {expandedSection === 'products' && (
                  <div className="flex flex-col gap-2 mt-2 ml-4">
                    {products.map((product) => (
                      <Link
                        key={product.title}
                        to={product.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                        onClick={closeSheet}
                      >
                        <div className="flex items-center gap-2">
                          {product.icon && (
                            <img src={product.icon} alt={product.title} className="w-8 h-8 rounded" />
                          )}
                          <div>
                            <div className="font-medium">{product.title}</div>
                            <div className="text-xs mt-1">{product.description}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link 
                to="/about" 
                className="text-lg font-medium hover:text-primary transition-colors py-2"
                onClick={closeSheet}
              >
                About
              </Link>
              
              <Link 
                to="/contact" 
                className="text-lg font-medium hover:text-primary transition-colors py-2"
                onClick={closeSheet}
              >
                Contact
              </Link>

              <Button className="mt-4" asChild>
                <Link to="/contact" onClick={closeSheet}>
                  Get Started <img src="/images/vineyardtechnologiesicon.webp" alt="🍇" className="inline w-6 h-6 ml-1" />
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

const ListItem = ({ className, title, children, href, icon, ...props }: {
  className?: string
  title: string
  children: React.ReactNode
  href: string
  icon?: string
  [key: string]: any
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className={cn(
            "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-4">
            {icon && <img src={icon} alt={title} className="w-16 h-16 rounded flex-shrink-0" />}
            <div className="flex-1">
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-primary-foreground mt-1">
                {children}
              </p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}