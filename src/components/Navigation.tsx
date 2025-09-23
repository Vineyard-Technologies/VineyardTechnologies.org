import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"
// Logo is now served from public/images as a static asset
import { cn } from "@/lib/utils"

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

export default function Navigation() {
  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="bg-white p-2 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-200">
          <img src="/images/logo.webp" alt="Vineyard Technologies" className="h-8" />
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="text-white/90 hover:text-white transition-colors px-4 py-2">
                  Home
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white/90 hover:text-white bg-transparent px-4 py-2 text-base font-normal">
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
                <Link to="/about" className="text-white/90 hover:text-white transition-colors px-4 py-2">
                  About
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/careers" className="text-white/90 hover:text-white transition-colors px-4 py-2">
                  Careers
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
      </div>
    </nav>
  )
}

const ListItem = ({ className, title, children, href, ...props }: {
  className?: string
  title: string
  children: React.ReactNode
  href: string
  [key: string]: any
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}