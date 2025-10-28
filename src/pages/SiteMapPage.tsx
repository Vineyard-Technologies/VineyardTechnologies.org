import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, FileText, Users, Mail, Settings, Package } from "lucide-react"
import ScrollFadeIn from "@/components/ScrollFadeIn"

export default function SiteMapPage() {
  const mainPages = [
    {
      title: "Home",
      path: "/",
      description: "Welcome page with company overview and featured content"
    },
    {
      title: "About",
      path: "/about",
      description: "Learn about Vineyard Technologies, our mission, and values"
    },
    {
      title: "Contact",
      path: "/contact", 
      description: "Get in touch with us through our contact form"
    }
  ]

  const servicePages = [
    {
      title: "Software Development",
      path: "/services/software-development",
      description: "Custom software development solutions"
    },
    {
      title: "Development Outsourcing", 
      path: "/services/development-outsourcing",
      description: "Dedicated development teams and staff augmentation"
    },
    {
      title: "Technical Consulting",
      path: "/services/technical-consulting",
      description: "Strategic technology guidance and consulting"
    }
  ]

  const productPages = [
    {
      title: "Overlord",
      path: "/products/overlord",
      description: "An asset rendering pipeline management tool for NVIDIA Iray"
    },
    {
      title: "DaggerQuest",
      path: "/products/daggerquest",
      description: "An action role playing game playable directly from a web browser"
    },
    {
      title: "Mythic Market Mogul",
      path: "/products/mythic-market-mogul",
      description: "A multi-platform virtual commodities monitoring suite"
    }
  ]

  const legalPages = [
    {
      title: "Terms of Service",
      path: "/terms",
      description: "Website terms and conditions of use"
    },
    {
      title: "Privacy Policy",
      path: "/privacy", 
      description: "How we collect, use, and protect your information"
    },
    {
      title: "Site Map",
      path: "/sitemap",
      description: "Complete overview of all website pages and structure"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <ScrollFadeIn direction="up" delay={200}>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Site Map
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                A complete overview of all pages and sections available on the Vineyard Technologies website
              </p>
            </div>
          </ScrollFadeIn>

          {/* Main Pages */}
          <ScrollFadeIn direction="up" delay={400}>
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <FileText className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-foreground">Main Pages</h2>
              </div>
            <div className="grid md:grid-cols-3 gap-6">
              {mainPages.map((page, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <Link 
                        to={page.path} 
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        {page.title}
                      </Link>
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {page.description}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground mt-2 font-mono">
                      {page.path}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Service Pages */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Settings className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-foreground">Service Pages</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {servicePages.map((page, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-lg">
                      <Link 
                        to={page.path} 
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        {page.title}
                      </Link>
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {page.description}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground mt-2 font-mono">
                      {page.path}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Product Pages */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Package className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-foreground">Product Pages</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {productPages.map((page, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-lg">
                      <Link 
                        to={page.path} 
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        {page.title}
                      </Link>
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {page.description}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground mt-2 font-mono">
                      {page.path}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Legal Pages */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Users className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-foreground">Legal & Policies</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {legalPages.map((page, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-lg">
                      <Link 
                        to={page.path} 
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        {page.title}
                      </Link>
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {page.description}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground mt-2 font-mono">
                      {page.path}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Additional Information */}
          <section className="bg-secondary/30 rounded-lg p-8">
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-foreground">Need Help?</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you're looking for something specific or can't find what you need, please don't hesitate to reach out. 
              We're here to help and will be happy to assist you in finding the information you're looking for.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Contact Us
              <ExternalLink className="w-4 h-4 ml-1" />
            </Link>
          </section>
          </ScrollFadeIn>
        </div>
      </section>
    </div>
  )
}