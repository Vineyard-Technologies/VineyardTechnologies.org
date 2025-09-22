import { Button } from "@/components/ui/button"
import CTAButtons from "@/components/CTAButtons"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Settings, Lightbulb, Target, TrendingUp, Shield, Layers } from "lucide-react"
import TechnicalConsultingImage from '@/images/technicalConsulting.webp'
import LazyLoadSection from "@/components/LazyLoadSection"
import ScrollFadeIn from "@/components/ScrollFadeIn"

export default function TechnicalConsultingPage() {
  const services = [
    {
      icon: Lightbulb,
      title: "Technology Strategy",
      description: "Strategic guidance on technology decisions, roadmaps, and digital transformation initiatives.",
      features: ["Technology roadmap planning", "Digital transformation strategy", "Platform selection guidance", "Innovation consulting"]
    },
    {
      icon: Layers,
      title: "Architecture Reviews",
      description: "Comprehensive analysis of your current architecture with recommendations for improvement.",
      features: ["System architecture assessment", "Scalability analysis", "Security evaluation", "Migration planning"]
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Identify bottlenecks and optimize your applications for better performance and efficiency.",
      features: ["Performance audits", "Database optimization", "Code review & refactoring", "Infrastructure tuning"]
    },
    {
      icon: Shield,
      title: "Security Assessments",
      description: "Thorough security evaluations to identify vulnerabilities and strengthen your systems.",
      features: ["Security audits", "Vulnerability assessments", "Compliance consulting", "Security best practices"]
    }
  ]

  const expertise = [
    {
      category: "Cloud Platforms",
      technologies: ["AWS", "Google Cloud", "Azure", "Kubernetes", "Docker", "Serverless"]
    },
    {
      category: "Architecture Patterns",
      technologies: ["Microservices", "Event-Driven", "Domain-Driven Design", "CQRS", "API-First", "JAMstack"]
    },
    {
      category: "Data & Analytics",
      technologies: ["Data Lakes", "Big Data", "Machine Learning", "ETL Pipelines", "Analytics", "Business Intelligence"]
    },
    {
      category: "Security & Compliance",
      technologies: ["Zero Trust", "DevSecOps", "GDPR", "HIPAA", "SOC 2", "PCI DSS"]
    }
  ]

  const process = [
    {
      step: "01",
      title: "Assessment",
      description: "Comprehensive analysis of your current technology landscape, challenges, and business objectives."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create detailed recommendations, roadmaps, and implementation plans tailored to your goals."
    },
    {
      step: "03",
      title: "Implementation Support",
      description: "Hands-on guidance during implementation with regular check-ins and course corrections."
    },
    {
      step: "04",
      title: "Ongoing Optimization",
      description: "Continuous monitoring, optimization recommendations, and strategic technology updates."
    }
  ]

  const benefits = [
    {
      title: "Reduce Technical Debt",
      description: "Identify and address technical debt before it becomes a major impediment to growth."
    },
    {
      title: "Improve Scalability",
      description: "Design systems that can grow with your business and handle increased load efficiently."
    },
    {
      title: "Enhance Security",
      description: "Strengthen your security posture with industry best practices and compliance standards."
    },
    {
      title: "Accelerate Innovation",
      description: "Leverage modern technologies and practices to accelerate development and time-to-market."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollFadeIn direction="left">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Technical Consulting
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Strategic technology guidance from seasoned experts. Whether you're planning a digital transformation, 
                  optimizing existing systems, or need architectural guidance, our consultants provide the expertise 
                  to make informed decisions and achieve your technology goals.
                </p>
                <CTAButtons />
              </div>
            </ScrollFadeIn>
            
            <ScrollFadeIn direction="right" delay={200}>
              <div className="flex justify-center">
                <img 
                  src={TechnicalConsultingImage} 
                  alt="Technical Consulting" 
                  className="w-full max-w-lg rounded-xl shadow-lg"
                />
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <ScrollFadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Consulting Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Strategic guidance across all aspects of technology planning, implementation, and optimization.
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

      {/* Expertise Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <ScrollFadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Areas of Expertise</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Deep knowledge across modern technology stacks, platforms, and industry best practices.
              </p>
            </div>
          </ScrollFadeIn>
          
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((area, index) => (
              <ScrollFadeIn key={index} direction="up" delay={index * 200}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl mb-4">{area.category}</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {area.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
              </Card>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Consulting Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to understanding your needs and delivering actionable recommendations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
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
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Technical Consulting?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Strategic technology decisions that drive business value and competitive advantage.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-lg text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-lg text-muted-foreground">Consulting Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">40%</div>
              <div className="text-lg text-muted-foreground">Average Performance Improvement</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <ScrollFadeIn direction="up">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Optimize Your Technology?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's discuss your technology challenges and create a strategic plan to achieve your goals 
              with the right architecture, processes, and technologies.
            </p>
            <CTAButtons />
          </div>
        </ScrollFadeIn>
      </section>
    </div>
  )
}
