import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import HomePage from '@/pages/HomePage'
import CareersPage from '@/pages/CareersPage'
import ContactPage from '@/pages/ContactPage'
import SoftwareDevelopmentPage from '@/pages/SoftwareDevelopmentPage'
import DeveloperOutsourcingPage from '@/pages/DeveloperOutsourcingPage'
import TechnicalConsultingPage from '@/pages/TechnicalConsultingPage'

function ContactForm() {
  const [state, handleSubmit] = useForm("xrbyzaab");
  
  if (state.succeeded) {
    return (
      <div className="text-center py-8">
        <h3 className="text-2xl font-semibold text-primary mb-2">Thank you!</h3>
        <p className="text-lg text-muted-foreground">We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto mt-12">
      <h3 className="text-2xl font-semibold text-foreground text-center mb-8">Get Started Today</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            className="w-full"
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
            className="text-sm text-destructive"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium">
            Phone
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            className="w-full"
          />
          <ValidationError 
            prefix="Phone" 
            field="phone"
            errors={state.errors}
            className="text-sm text-destructive"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            className="w-full"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-sm text-destructive"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium">
            Message
          </Label>
          <Input
            id="message"
            name="message"
            required
            className="w-full"
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="text-sm text-destructive"
          />
        </div>
      </div>
      
      <div className="text-center mt-6">
        <Button type="submit" disabled={state.submitting} size="lg" className="px-8">
          {state.submitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
}

function App() {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "End-to-end development of web applications, mobile apps, and enterprise software solutions tailored to your business needs.",
      features: ["Full-stack development", "Cloud-native architecture", "API design & integration", "Legacy system modernization"],
      image: CustomSoftwareDevelopmentImage
    },
    {
      icon: Users,
      title: "Developer Outsourcing",
      description: "Skilled development teams that integrate seamlessly with your existing processes and deliver exceptional results.",
      features: ["Dedicated development teams", "Staff augmentation", "Technical leadership", "Agile methodology expertise"],
      image: DeveloperOutsourcingImage
    },
    {
      icon: Settings,
      title: "Technical Consulting",
      description: "Strategic guidance on technology decisions, architecture design, and digital transformation initiatives.",
      features: ["Technology strategy", "Architecture reviews", "Performance optimization", "Security assessments"],
      image: TechnicalConsultingImage
    }
  ]

  const technologies = [
    { name: "React", icon: SiReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Python", icon: SiPython },
    { name: "Go", icon: SiGo },
    { name: "AWS", icon: SiAmazon },
    { name: "Docker", icon: SiDocker },
    { name: "Kubernetes", icon: SiKubernetes },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "GraphQL", icon: SiGraphql },
    { name: "Java", icon: SiOpenjdk },
    { name: "Spring Boot", icon: SiSpring },
    { name: "C#", icon: SiSharp },
    { name: ".NET", icon: SiDotnet },
    { name: "Angular", icon: SiAngular },
    { name: "Vue.js", icon: SiVuedotjs },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "Django", icon: SiDjango },
    { name: "Flask", icon: SiFlask },
    { name: "Redis", icon: SiRedis },
    { name: "Elasticsearch", icon: SiElasticsearch },
    { name: "Apache Kafka", icon: SiApachekafka },
    { name: "RabbitMQ", icon: SiRabbitmq },
    { name: "Terraform", icon: SiTerraform },
    { name: "Jenkins", icon: SiJenkins },
    { name: "GitHub Actions", icon: SiGithubactions },
    { name: "Azure", icon: Cloud },
    { name: "Google Cloud", icon: SiGooglecloud },
    { name: "MySQL", icon: SiMysql },
    { name: "JavaScript", icon: SiJavascript },
    { name: "REST APIs", icon: Server },
    { name: "Microservices", icon: Database },
    { name: "CI/CD", icon: Settings }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="bg-white p-2 rounded-lg shadow-sm">
            <img src={VineyardTechnologiesLogo} alt="Vineyard Technologies" className="h-8" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-white/90 hover:text-white transition-colors">Home</a>
            <a href="#services" className="text-white/90 hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-white/90 hover:text-white transition-colors">About</a>
            <a href="/careers" className="text-white/90 hover:text-white transition-colors">Careers</a>
            <a href="#contact" className="text-white/90 hover:text-white transition-colors">Contact</a>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="mailto:Contact@VineyardTechnologies.org">Get Started</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="py-24 px-6 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
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
              <a href="mailto:Contact@VineyardTechnologies.org">Start Your Project <ArrowRight className="ml-2" /></a>
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Technical Excellence, Delivered
              </h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                With over a decade of experience in enterprise software development, 
                Vineyard Technologies has established itself as a trusted partner for businesses 
                seeking innovative, high-quality software solutions. We've successfully delivered 
                projects across diverse industries, from emerging startups looking to disrupt 
                their markets to established enterprises modernizing their technology infrastructure.
              </p>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Our team of senior developers brings deep expertise across modern technology stacks, 
                cloud platforms, and development methodologies. We specialize in creating robust, 
                scalable applications that not only meet your current business requirements but 
                are architected to adapt and grow with your organization's evolving needs.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From initial concept to deployment and ongoing support, we ensure every project 
                is built with industry best practices, security-first principles, and future-proof 
                architecture that delivers measurable business value and competitive advantage.
              </p>
            </div>
            
            <div className="flex justify-center">
              <img 
                src={TechnicalExcellenceImage} 
                alt="Technical Excellence" 
                className="w-full max-w-lg rounded-xl shadow-lg"
              />
            </div>
          </div>
          
          <div className="text-center mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-base text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-base text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-base text-muted-foreground">Years Average Experience</div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive software development solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="aspect-video w-full overflow-hidden rounded-lg m-6 mb-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2 h-14 flex items-center">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed h-28 overflow-hidden">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 h-32">
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

      {/* Tech Stack Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto max-w-6xl px-6 mb-12">
          <h3 className="text-3xl font-bold text-foreground text-center">Expertise, Across the Board</h3>
        </div>
        <div className="overflow-hidden">
          <div className="flex animate-scroll space-x-8 whitespace-nowrap">
            {/* Create multiple sets for truly seamless scrolling */}
            {Array.from({ length: 3 }).map((_, setIndex) => 
              technologies.map((tech, index) => (
                <div key={`${setIndex}-${index}`} className="flex flex-col items-center justify-center min-w-32 h-24 bg-background rounded-lg px-6 py-3 border shadow-sm flex-shrink-0">
                  <tech.icon className="text-3xl mb-2 text-foreground" />
                  <span className="text-sm font-medium text-foreground text-center">{tech.name}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Software Development Services <span className="text-primary">in Seattle, WA</span>
              </h2>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="inline-block">
                  <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-3 text-lg">
                    Send us a message
                  </Button>
                </a>
                <a href="mailto:Contact@VineyardTechnologies.org" className="inline-block">
                  <Button variant="outline" className="border-2 border-foreground text-foreground bg-white hover:bg-gray-50 px-8 py-3 text-lg">
                    Send us an email
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="border-4 border-primary rounded-xl shadow-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172152.9602865583!2d-122.50460303987828!3d47.608828458613985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA%2C%20USA!5e0!3m2!1sen!2sbr!4v1758541249116!5m2!1sen!2sbr"
                  width="600"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-12 px-6 text-white">
        <div className="w-full max-w-none px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-6 md:space-y-0">
            {/* Logo - Far left corner with white rounded background */}
            <div className="flex flex-col items-start">
              <div className="bg-white p-3 rounded-xl shadow-lg mb-3">
                <img src={VineyardTechnologiesLogo} alt="Vineyard Technologies" className="h-8" />
              </div>
              <div className="text-sm text-white/90">
                Software Development Services in Seattle, WA
              </div>
            </div>
            
            {/* Copyright and Links - Far right corner */}
            <div className="flex flex-col items-start md:items-end space-y-2">
              <div className="text-sm text-white/90">
                © 2025 Vineyard Technologies. All rights reserved.
              </div>
              <div className="text-sm text-white/90">
                This website is licensed under the MIT License.
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <a href="/terms" className="text-white/80 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="/privacy" className="text-white/80 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="/sitemap" className="text-white/80 hover:text-white transition-colors duration-200">
                  Site Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App