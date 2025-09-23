import { Button } from "@/components/ui/button"
import CTAButtons from "@/components/CTAButtons"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Clock, Globe, Award, Zap, Shield } from "lucide-react"
// Image is now served from public/images as a static asset
import LazyLoadSection from "@/components/LazyLoadSection"
import ScrollFadeIn from "@/components/ScrollFadeIn"

export default function DevelopmentOutsourcingPage() {
  const services = [
    {
      icon: Users,
      title: "Dedicated Development Teams",
      description: "Full teams of developers working exclusively on your projects with complete dedication.",
      features: ["Team lead & project manager", "Senior & mid-level developers", "QA engineers & DevOps", "Direct communication channels"]
    },
    {
      icon: Zap,
      title: "Staff Augmentation",
      description: "Individual developers or specialists to supplement your existing team capabilities.",
      features: ["Frontend/Backend specialists", "Flexible engagement models", "Quick onboarding process", "Seamless team integration"]
    },
    {
      icon: Globe,
      title: "Remote Development",
      description: "Distributed teams that work efficiently across time zones and locations.",
      features: ["Timezone overlap coverage", "Agile development practices", "Daily standups & reporting", "Collaborative tools & processes"]
    },
    {
      icon: Award,
      title: "Technical Leadership",
      description: "Senior architects and tech leads to guide your development initiatives.",
      features: ["Solution architecture", "Code reviews & standards", "Technology consulting", "Team mentorship"]
    }
  ]

  const benefits = [
    {
      icon: Clock,
      title: "Faster Time to Market",
      description: "Accelerate development with experienced teams that hit the ground running."
    },
    {
      icon: Shield,
      title: "Reduced Risk",
      description: "Proven processes and experienced professionals minimize project risks."
    },
    {
      icon: Users,
      title: "Access to Talent",
      description: "Tap into a global pool of skilled developers and specialists."
    },
    {
      icon: Zap,
      title: "Cost Efficiency",
      description: "Reduce hiring costs and overhead while maintaining quality standards."
    }
  ]

  const expertise = [
    "Full-Stack Development", "Frontend Development", "Backend Development", "Mobile Development",
    "DevOps & Infrastructure", "QA & Testing", "UI/UX Design", "Data Engineering",
    "Machine Learning", "Blockchain", "Cloud Architecture", "Security Engineering"
  ]

  const engagementModels = [
    {
      title: "Dedicated Team",
      description: "A complete team working exclusively on your project",
      duration: "3-12+ months",
      bestFor: "Large projects, product development, long-term initiatives",
      includes: ["Project manager", "Tech lead", "Developers", "QA engineers"]
    },
    {
      title: "Staff Augmentation",
      description: "Individual specialists integrated into your existing team",
      duration: "1-6+ months",
      bestFor: "Skill gaps, peak workloads, specialized expertise",
      includes: ["Developers", "Specialists", "Consultants", "Part-time options"]
    },
    {
      title: "Project-Based",
      description: "Complete project delivery with defined scope and timeline",
      duration: "2-8 months",
      bestFor: "Specific features, MVP development, proof of concepts",
      includes: ["Full delivery", "Fixed scope", "Timeline guarantee", "Quality assurance"]
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
                    Developer Outsourcing <img src="/images/vineyardtechnologiesicon.webp" alt="🍇" className="inline w-12 h-12 md:w-16 md:h-16" />
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Scale your development capacity with our skilled teams and individual specialists. 
                    Get access to top-tier talent without the overhead of full-time hiring, 
                    and accelerate your projects with proven expertise.
                  </p>
                  <CTAButtons />
                </div>
              </ScrollFadeIn>
              
              <ScrollFadeIn direction="right" delay={200}>
                <div className="flex justify-center">
                  <img 
                    src="/images/developerOutsourcing.webp" 
                    alt="Developer Outsourcing" 
                    className="w-full max-w-lg rounded-xl shadow-lg"
                  />
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </section>
      </LazyLoadSection>

      {/* Benefits Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <ScrollFadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Why Outsource Development? <img src="/images/vineyardtechnologiesicon.webp" alt="🍇" className="inline w-8 h-8 md:w-10 md:h-10" /></h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Strategic advantages that help you build better products faster and more efficiently.
              </p>
            </div>
          </ScrollFadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollFadeIn key={index} direction="up" delay={index * 150}>
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Outsourcing Services <img src="/images/vineyardtechnologiesicon.webp" alt="🍇" className="inline w-8 h-8 md:w-10 md:h-10" /></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible engagement models to match your specific needs and project requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
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
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section id="models" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Engagement Models <img src="/images/vineyardtechnologiesicon.webp" alt="🍇" className="inline w-8 h-8 md:w-10 md:h-10" /></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the model that best fits your project timeline, budget, and team structure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{model.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed mb-4">
                    {model.description}
                  </CardDescription>
                  <div className="space-y-2 text-sm">
                    <div><strong>Duration:</strong> {model.duration}</div>
                    <div><strong>Best for:</strong> {model.bestFor}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {model.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Expertise <img src="/images/vineyardtechnologiesicon.webp" alt="🍇" className="inline w-8 h-8 md:w-10 md:h-10" /></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Skilled professionals across all major technology areas and development disciplines.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {expertise.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-lg text-muted-foreground">Developers Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">48hrs</div>
              <div className="text-lg text-muted-foreground">Average Onboarding Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-lg text-muted-foreground">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: 'url(/images/seattle7.webp)'}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <ScrollFadeIn direction="up">
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">Ready to Scale Your Team? <img src="/images/vineyardtechnologiesicon.webp" alt="🍇" className="inline w-8 h-8 md:w-10 md:h-10" /></h2>
            <p className="text-xl text-white mb-8 leading-relaxed drop-shadow-lg">
              Whether you need a dedicated team or individual specialists, we can help you find 
              the right talent to accelerate your development goals.
            </p>
            <CTAButtons />
          </div>
        </ScrollFadeIn>
      </section>
    </div>
  )
}