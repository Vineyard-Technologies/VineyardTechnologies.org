import { Button } from "@/components/ui/button"
import CTAButtons from "@/components/CTAButtons"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Code, Smartphone, Globe, Database, Shield, Zap } from "lucide-react"
// Image is now served from public/images as a static asset
import LazyLoadSection from "@/components/LazyLoadSection"
import ScrollFadeIn from "@/components/ScrollFadeIn"

export default function SoftwareDevelopmentPage() {
  const services = [
    {
      icon: Globe,
      title: "Web Application Development",
      description: "Full-stack web applications built with modern frameworks and best practices.",
      features: ["React/Angular/Vue.js frontends", "Node.js/Python/Java backends", "RESTful & GraphQL APIs", "Progressive Web Apps (PWAs)"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native development", "Native iOS & Android apps", "Cross-platform solutions", "App store deployment"]
    },
    {
      icon: Database,
      title: "Enterprise Software",
      description: "Scalable enterprise solutions designed for complex business requirements.",
      features: ["Microservices architecture", "Cloud-native applications", "Enterprise integrations", "Legacy system modernization"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Security-first development with compliance standards integration.",
      features: ["GDPR & HIPAA compliance", "Security audits & testing", "Data encryption & protection", "Authentication & authorization"]
    }
  ]

  const technologies = [
    "React", "Angular", "Vue.js", "Node.js", "Python", "Java", "TypeScript", "JavaScript",
    "PostgreSQL", "MongoDB", "MySQL", "Redis", "GraphQL", "REST APIs", "Docker", "Kubernetes",
    "AWS", "Google Cloud", "Azure", "Terraform", "Jenkins", "GitHub Actions"
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, define project scope, and create a detailed development roadmap."
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Our team designs the system architecture, user experience, and technical specifications."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous integration, automated testing, and regular client feedback."
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Production deployment, monitoring setup, and ongoing maintenance and support."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <LazyLoadSection>
        <section className="py-24 px-6 bg-secondary/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollFadeIn direction="left">
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                    Custom Software Development <img src="/images/vineyardtechnologiesicon.webp" alt="🍇" className="inline w-12 h-12 md:w-16 md:h-16" />
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Transform your business with custom software solutions built to your exact specifications. 
                    From web applications to mobile apps and enterprise systems, we deliver scalable, 
                    secure, and high-performance software that drives results.
                  </p>
                  <CTAButtons />
                </div>
              </ScrollFadeIn>
              
              <ScrollFadeIn direction="right" delay={200}>
                <div className="flex justify-center">
                  <img 
                    src="/images/customSoftwareDevelopment.webp" 
                    alt="Custom Software Development" 
                    className="w-full max-w-lg rounded-xl shadow-lg"
                  />
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </section>
      </LazyLoadSection>

      {/* Services Section */}
      <LazyLoadSection>
        <section id="services" className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <ScrollFadeIn direction="up">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Our Development Services <img src="/images/vineyardtechnologiesicon.webp" alt="🍇" className="inline w-8 h-8 md:w-10 md:h-10" /></h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive software development solutions tailored to your business needs.
                </p>
              </div>
            </ScrollFadeIn>
            
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <ScrollFadeIn key={index} direction="up" delay={index * 200}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
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
                        <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </section>
      </LazyLoadSection>

      {/* Technologies Section */}
      <LazyLoadSection>
        <section className="py-24 px-6 bg-secondary/30">
          <div className="container mx-auto max-w-6xl">
            <ScrollFadeIn direction="up">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Technologies We Use <img src="/images/vineyardtechnologiesicon.webp" alt="🍇" className="inline w-8 h-8 md:w-10 md:h-10" /></h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  We stay current with the latest technologies and frameworks to deliver cutting-edge solutions.
                </p>
              </div>
            </ScrollFadeIn>
            
            <ScrollFadeIn direction="up" delay={200}>
              <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                  {tech}
                </Badge>
              ))}
            </div>
            </ScrollFadeIn>
          </div>
        </section>
      </LazyLoadSection>

      {/* Process Section */}
      <LazyLoadSection>
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <ScrollFadeIn direction="up">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Our Development Process <img src="/images/vineyardtechnologiesicon.webp" alt="🍇" className="inline w-8 h-8 md:w-10 md:h-10" /></h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  A proven methodology that ensures quality, transparency, and successful project delivery.
                </p>
              </div>
            </ScrollFadeIn>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <ScrollFadeIn key={index} direction="up" delay={index * 150}>
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.step}
                    </div>
                    <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </section>
      </LazyLoadSection>

      {/* Stats Section */}
      <LazyLoadSection>
        <section className="py-24 px-6 bg-secondary/30">
          <div className="container mx-auto max-w-4xl">
            <ScrollFadeIn direction="up">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-lg text-muted-foreground">Applications Built</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5M+</div>
                <div className="text-lg text-muted-foreground">Lines of Code</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-lg text-muted-foreground">Uptime Achieved</div>
              </div>
            </div>
            </ScrollFadeIn>
          </div>
        </section>
      </LazyLoadSection>

      {/* CTA Section */}
      <LazyLoadSection>
        <section className="py-24 px-6 bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: 'url(/images/seattle5.webp)'}}>
          <div className="absolute inset-0 bg-black/60"></div>
          <ScrollFadeIn direction="up">
            <div className="container mx-auto max-w-4xl text-center relative z-10">
              <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">Ready to Build Something Amazing? <img src="/images/vineyardtechnologiesicon.webp" alt="🍇" className="inline w-8 h-8 md:w-10 md:h-10" /></h2>
              <p className="text-xl text-white mb-8 leading-relaxed drop-shadow-lg">
                Let's discuss your software development needs and create a solution that drives your business forward.
              </p>
              <CTAButtons />
            </div>
          </ScrollFadeIn>
        </section>
      </LazyLoadSection>
    </div>
  )
}
