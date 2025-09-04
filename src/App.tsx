import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Users, Settings, ArrowRight, CheckCircle } from "lucide-react"
import VineyardTechnologiesLogo from '@/assets/images/logo.webp'

function App() {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "End-to-end development of web applications, mobile apps, and enterprise software solutions tailored to your business needs.",
      features: ["Full-stack development", "Cloud-native architecture", "API design & integration", "Legacy system modernization"]
    },
    {
      icon: Users,
      title: "Developer Outsourcing",
      description: "Skilled development teams that integrate seamlessly with your existing processes and deliver exceptional results.",
      features: ["Dedicated development teams", "Staff augmentation", "Technical leadership", "Agile methodology expertise"]
    },
    {
      icon: Settings,
      title: "Technical Consulting",
      description: "Strategic guidance on technology decisions, architecture design, and digital transformation initiatives.",
      features: ["Technology strategy", "Architecture reviews", "Performance optimization", "Security assessments"]
    }
  ]

  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "Go", "AWS", "Docker", "Kubernetes",
    "PostgreSQL", "MongoDB", "GraphQL", "REST APIs", "Microservices", "CI/CD",
    "Java", "Spring Boot", "C#", ".NET", "ASP.NET Core", "Angular", "Vue.js", "Next.js",
    "Express.js", "Django", "Flask", "Redis", "Elasticsearch", "Apache Kafka", "RabbitMQ",
    "Terraform", "Jenkins", "GitHub Actions", "Azure", "Google Cloud", "MySQL"
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <img src={VineyardTechnologiesLogo} alt="Vineyard Technologies" className="h-8" />
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <Button asChild>
              <a href="mailto:Contact@VineyardTechnologies.com">Get Started</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Premium Software Development
            <span className="text-primary block">& Developer Outsourcing</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Partner with expert developers who deliver exceptional software solutions. 
            Scale your team with trusted professionals who understand your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="mailto:Contact@VineyardTechnologies.com">Start Your Project <ArrowRight className="ml-2" /></a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive software development solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Technical Excellence, Delivered
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over a decade of experience in enterprise software development, 
                Vineyard Technologies has helped companies from startups to Fortune 500 
                build robust, scalable solutions that drive business growth.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our team of senior developers brings deep expertise across modern 
                technology stacks, ensuring your project is built with best practices 
                and future-proof architecture.
              </p>
              
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Average Experience</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Our Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/20 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <img src={VineyardTechnologiesLogo} alt="Vineyard Technologies" className="h-8 mx-auto mb-4" />
            <div className="text-sm text-muted-foreground">
              © 2025 Vineyard Technologies. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App