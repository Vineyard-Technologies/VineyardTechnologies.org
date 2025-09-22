import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"
import CTAButtons from "@/components/CTAButtons"
import LazyLoadSection from "@/components/LazyLoadSection"
import ScrollFadeIn from "@/components/ScrollFadeIn"
import { Code, Users, Settings, ArrowRight, CheckCircle } from "lucide-react"
import { useForm, ValidationError } from '@formspree/react'
import { 
  SiReact, SiTypescript, SiNodedotjs, SiPython, SiGo, SiAmazon, SiDocker, SiKubernetes,
  SiPostgresql, SiMongodb, SiGraphql, SiOpenjdk, SiSpring, SiAngular, SiVuedotjs,
  SiNextdotjs, SiExpress, SiDjango, SiFlask, SiRedis, SiElasticsearch, SiApachekafka,
  SiTerraform, SiJenkins, SiGithubactions, SiGooglecloud, SiMysql,
  SiRabbitmq, SiDotnet, SiJavascript, SiSharp
} from "react-icons/si"
import { Cloud, Database, Server } from "lucide-react"
// Images are now served from public/images as static assets

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
    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto mt-12">
      <h3 className="text-2xl font-semibold text-foreground text-center mb-8">Get Started Today <img src="/images/vineyardtechnologiesicon.webp" alt="" className="inline w-6 h-6 ml-2" /></h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-3 py-2 border border-input rounded-md"
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-3 py-2 border border-input rounded-md"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full px-3 py-2 border border-input rounded-md"
          />
          <ValidationError 
            prefix="Phone" 
            field="phone"
            errors={state.errors}
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <input
            id="message"
            name="message"
            type="text"
            required
            className="w-full px-3 py-2 border border-input rounded-md"
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>
        
        <div className="md:col-span-4 text-center">
          <Button 
            type="submit" 
            disabled={state.submitting}
            className="px-8 py-3 text-lg"
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </div>
    </form>
  );
}

export default function HomePage() {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "End-to-end development of web applications, mobile apps, and enterprise software solutions tailored to your business needs.",
      features: ["Full-stack development", "Cloud-native architecture", "API design & integration", "Legacy system modernization"],
      image: "/images/customSoftwareDevelopment.webp",
      link: "/software-development"
    },
    {
      icon: Users,
      title: "Developer Outsourcing",
      description: "Skilled development teams that integrate seamlessly with your existing processes and deliver exceptional results.",
      features: ["Dedicated development teams", "Staff augmentation", "Technical leadership", "Agile methodology expertise"],
      image: "/images/developerOutsourcing.webp",
      link: "/development-outsourcing"
    },
    {
      icon: Settings,
      title: "Technical Consulting",
      description: "Strategic guidance on technology decisions, architecture design, and digital transformation initiatives.",
      features: ["Technology strategy", "Architecture reviews", "Performance optimization", "Security assessments"],
      image: "/images/technicalConsulting.webp",
      link: "/technical-consulting"
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
    { name: "Angular", icon: SiAngular },
    { name: "Vue.js", icon: SiVuedotjs },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "Django", icon: SiDjango },
    { name: "Flask", icon: SiFlask },
    { name: "Redis", icon: SiRedis },
    { name: "Elasticsearch", icon: SiElasticsearch },
    { name: "Apache Kafka", icon: SiApachekafka },
    { name: "Terraform", icon: SiTerraform },
    { name: "Jenkins", icon: SiJenkins },
    { name: "GitHub Actions", icon: SiGithubactions },
    { name: "Google Cloud", icon: SiGooglecloud },
    { name: "MySQL", icon: SiMysql },
    { name: "RabbitMQ", icon: SiRabbitmq },
    { name: ".NET", icon: SiDotnet },
    { name: "JavaScript", icon: SiJavascript },
    { name: "C#", icon: SiSharp }
  ]

  return (
    <>
      {/* Hero Section */}
      <section 
        className="py-24 px-6 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/images/heroImage.webp)` }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <ScrollFadeIn direction="up" delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Software Development Services in
              <span className="text-primary block">Seattle, WA <img src="/images/vineyardtechnologiesicon.webp" alt="" className="inline w-12 h-12 ml-2" /></span>
            </h1>
          </ScrollFadeIn>
          <ScrollFadeIn direction="up" delay={400}>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Partner with expert developers who deliver exceptional software solutions. 
              Scale your team with trusted professionals who understand your business.
            </p>
          </ScrollFadeIn>
          <ScrollFadeIn direction="up" delay={600}>
            <CTAButtons />
          </ScrollFadeIn>
        </div>
      </section>

      {/* About Section */}
      <LazyLoadSection>
        <section id="about" className="py-24 px-6 bg-secondary/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <ScrollFadeIn direction="left">
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-6">
                    Technical Excellence, Delivered <img src="/images/vineyardtechnologiesicon.webp" alt="" className="inline w-8 h-8 ml-2" />
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
              </ScrollFadeIn>
              
              <ScrollFadeIn direction="right" delay={200}>
                <div className="flex justify-center">
                  <img 
                    src="/images/technicalExcellence.webp" 
                    alt="Technical Excellence" 
                    className="w-full max-w-lg rounded-xl shadow-lg"
                  />
                </div>
              </ScrollFadeIn>
            </div>
            
            <ScrollFadeIn direction="up" delay={300}>
              <div className="text-center mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <div className="text-base text-muted-foreground">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <div className="text-base text-muted-foreground">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">5+</div>
                    <div className="text-base text-muted-foreground">Years Average Experience</div>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
            
            <ScrollFadeIn direction="up" delay={400}>
              <div className="text-center">
                <ContactForm />
              </div>
            </ScrollFadeIn>
          </div>
        </section>
      </LazyLoadSection>

      {/* Services Section */}
      <LazyLoadSection>
        <section id="services" className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <ScrollFadeIn direction="up">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Our Services <img src="/images/vineyardtechnologiesicon.webp" alt="" className="inline w-8 h-8 ml-2" />
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive software development solutions designed to accelerate your business growth
                </p>
              </div>
            </ScrollFadeIn>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ScrollFadeIn key={index} direction="up" delay={index * 200}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden rounded-lg m-6 mb-0">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <img 
                        src="/images/vineyardtechnologiesicon.webp" 
                        alt="Vineyard Technologies" 
                        className="w-8 h-8"
                      />
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
                    <div className="mt-6">
                      <Button asChild className="w-full bg-primary hover:bg-primary/90">
                        <Link to={service.link}>
                          Learn more
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </section>
      </LazyLoadSection>

      {/* Tech Stack Section */}
      <LazyLoadSection>
        <section className="py-16 bg-secondary/30">
          <ScrollFadeIn direction="up">
            <div className="container mx-auto max-w-6xl px-6 mb-12">
              <h3 className="text-3xl font-bold text-foreground text-center">
                Expertise, Across the Board <img src="/images/vineyardtechnologiesicon.webp" alt="" className="inline w-7 h-7 ml-2" />
              </h3>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn direction="up" delay={200}>
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
          </ScrollFadeIn>
        </section>
      </LazyLoadSection>

      {/* Location Section */}
      <LazyLoadSection>
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollFadeIn direction="left">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-foreground mb-6">
                    Software Development Services in <span className="text-primary">Seattle, WA <img src="/images/vineyardtechnologiesicon.webp" alt="" className="inline w-8 h-8 ml-2" /></span>
                  </h2>
                  
                  {/* Action Buttons */}
                  <CTAButtons />
                </div>
              </ScrollFadeIn>
              
              <ScrollFadeIn direction="right" delay={200}>
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
              </ScrollFadeIn>
            </div>
          </div>
        </section>
      </LazyLoadSection>
    </>
  )
}
