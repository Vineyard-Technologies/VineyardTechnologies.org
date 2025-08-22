import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Code, Users, Gear, ArrowRight, CheckCircle, Star, Phone, Mail, Calendar } from "@phosphor-icons/react"
import { useKV } from '@github/spark/hooks'
import { useState } from 'react'
import { toast } from 'sonner'

function App() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  
  const [submittedContacts, setSubmittedContacts] = useKV("contact-submissions", [])

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
      icon: Gear,
      title: "Technical Consulting",
      description: "Strategic guidance on technology decisions, architecture design, and digital transformation initiatives.",
      features: ["Technology strategy", "Architecture reviews", "Performance optimization", "Security assessments"]
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, FinanceFlow",
      company: "FinanceFlow",
      content: "Vineyard Technologies delivered our trading platform 3 weeks ahead of schedule. Their technical expertise and attention to detail exceeded our expectations.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Engineering",
      company: "MedConnect",
      content: "The team they provided integrated seamlessly with our existing development workflow. We've seen a 40% increase in delivery velocity since partnering with them.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Product Director",
      company: "RetailTech Solutions",
      content: "Their consulting helped us modernize our entire tech stack. The ROI was evident within the first quarter after implementation.",
      rating: 5
    }
  ]

  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "Go", "AWS", "Docker", "Kubernetes",
    "PostgreSQL", "MongoDB", "GraphQL", "REST APIs", "Microservices", "CI/CD"
  ]

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast.error("Please fill in all required fields")
      return
    }

    const newContact = {
      ...contactForm,
      id: Date.now(),
      timestamp: new Date().toISOString()
    }

    setSubmittedContacts(current => [...current, newContact])
    
    setContactForm({ name: '', email: '', company: '', message: '' })
    toast.success("Thank you for your inquiry! We'll get back to you within 24 hours.")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-primary">Vineyard Technologies</div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
            <Button asChild>
              <a href="#contact">Get Started</a>
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
              <a href="#contact">Start Your Project <ArrowRight className="ml-2" /></a>
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
              <h3 className="text-2xl font-semibold text-foreground mb-6">Our Technology Stack</h3>
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Client Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how we've helped businesses transform their technology and accelerate growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your project and how we can help you achieve your goals
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Tell us about your project and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          value={contactForm.name}
                          onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={contactForm.email}
                          onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={contactForm.company}
                        onChange={(e) => setContactForm(prev => ({ ...prev, company: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        value={contactForm.message}
                        onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="Tell us about your project, timeline, and specific requirements..."
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Phone className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <div className="font-semibold">Call us</div>
                      <div className="text-sm text-muted-foreground">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <Mail className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <div className="font-semibold">Email us</div>
                      <div className="text-sm text-muted-foreground">hello@vineyardtech.com</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <div className="font-semibold">Schedule a call</div>
                      <div className="text-sm text-muted-foreground">Book a consultation</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="text-sm text-muted-foreground">
                <p className="mb-2">Typical response time: Within 24 hours</p>
                <p>Business hours: Monday-Friday, 9AM-6PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/20 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-4">Vineyard Technologies</div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Transforming businesses through exceptional software development and technical expertise.
            </p>
            <div className="text-sm text-muted-foreground">
              © 2024 Vineyard Technologies. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App