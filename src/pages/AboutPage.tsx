import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Award, Target, Code, Lightbulb } from "lucide-react"
import CTAButtons from "@/components/CTAButtons"
import LazyLoadSection from "@/components/LazyLoadSection"
import ScrollFadeIn from "@/components/ScrollFadeIn"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Client-Focused",
      description: "We prioritize understanding your unique business needs and delivering solutions that drive real results."
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Our team consists of seasoned developers with deep expertise in modern technologies and best practices."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of industry trends and leverage cutting-edge technologies to create competitive advantages."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work as an extension of your team, fostering transparent communication and shared success."
    }
  ]

  const stats = [
    {
      number: "50+",
      label: "Projects Completed"
    },
    {
      number: "15+",
      label: "Happy Clients"
    },
    {
      number: "5+",
      label: "Years Experience"
    },
    {
      number: "24/7",
      label: "Support Available"
    }
  ]

  const expertise = [
    "Full-Stack Web Development",
    "Mobile Application Development", 
    "Cloud Architecture & DevOps",
    "API Design & Integration",
    "Database Design & Optimization",
    "UI/UX Design & Implementation",
    "Technical Consulting & Strategy",
    "Legacy System Modernization",
    "Performance Optimization",
    "Security Implementation"
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <LazyLoadSection>
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <ScrollFadeIn direction="up" delay={200}>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                About <span className="text-primary">Vineyard Technologies</span>
              </h1>
            </ScrollFadeIn>
            <ScrollFadeIn direction="up" delay={400}>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                We're a passionate team of software developers and technology consultants based in Seattle, 
                dedicated to helping businesses transform their ideas into powerful digital solutions.
              </p>
            </ScrollFadeIn>
            <ScrollFadeIn direction="up" delay={600}>
              <CTAButtons />
            </ScrollFadeIn>
          </div>
        </section>
      </LazyLoadSection>

      {/* Mission Section */}
      <LazyLoadSection>
        <section className="py-24 px-6 bg-secondary/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollFadeIn direction="left">
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    At Vineyard Technologies, we believe that great software should empower businesses 
                    to reach their full potential. Our mission is to bridge the gap between innovative 
                    technology and practical business solutions.
                  </p>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Whether you're a startup looking to build your first product or an established 
                    enterprise modernizing your technology stack, we provide the expertise, 
                    dedication, and partnership you need to succeed.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Custom software tailored to your business</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Scalable solutions that grow with you</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Ongoing support and maintenance</span>
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
              
              <ScrollFadeIn direction="right" delay={200}>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <Card key={index} className="text-center p-6">
                      <CardContent className="p-0">
                        <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                        <div className="text-muted-foreground">{stat.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </section>
      </LazyLoadSection>

      {/* Values Section */}
      <LazyLoadSection>
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <ScrollFadeIn direction="up" delay={100}>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  The principles that guide everything we do and shape how we work with our clients
                </p>
              </div>
            </ScrollFadeIn>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <ScrollFadeIn key={index} direction="up" delay={index * 150 + 200}>
                  <Card className="text-center h-full">
                    <CardHeader className="pb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <value.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </section>
      </LazyLoadSection>

      {/* Expertise Section */}
      <LazyLoadSection>
        <section className="py-24 px-6 bg-secondary/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Expertise</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We specialize in modern technologies and proven methodologies to deliver exceptional results
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {expertise.map((skill, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-background rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </LazyLoadSection>

      {/* Team Section */}
      <LazyLoadSection>
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <ScrollFadeIn direction="up" delay={100}>
              <h2 className="text-4xl font-bold text-foreground mb-6">Why Choose Us?</h2>
            </ScrollFadeIn>
            <ScrollFadeIn direction="up" delay={300}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                Located in Seattle's thriving tech ecosystem, we combine Pacific Northwest innovation 
                with world-class technical expertise. Our team brings years of experience from startups 
                to Fortune 500 companies, ensuring we understand both the technical and business sides 
                of software development.
              </p>
            </ScrollFadeIn>
            <ScrollFadeIn direction="up" delay={500}>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
                We don't just write code – we build partnerships. When you work with Vineyard Technologies, 
                you're getting a team that's invested in your success and committed to delivering solutions 
                that make a real impact on your business.
              </p>
            </ScrollFadeIn>
            <ScrollFadeIn direction="up" delay={700}>
              <CTAButtons />
            </ScrollFadeIn>
          </div>
        </section>
      </LazyLoadSection>
    </div>
  )
}