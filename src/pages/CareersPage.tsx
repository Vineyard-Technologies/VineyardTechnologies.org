import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Code, Users, Clock, Zap } from "lucide-react"
import ScrollFadeIn from "@/components/ScrollFadeIn"

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Seattle, WA / Remote",
      type: "Full-time",
      description: "Lead development of enterprise web applications using React, Node.js, and cloud technologies.",
      requirements: [
        "5+ years of full-stack development experience",
        "Proficiency in React, Node.js, TypeScript",
        "Experience with cloud platforms (AWS, GCP, or Azure)",
        "Strong knowledge of database systems",
        "Excellent communication and leadership skills"
      ]
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Seattle, WA / Remote",
      type: "Full-time",
      description: "Design and maintain scalable infrastructure and CI/CD pipelines for our client projects.",
      requirements: [
        "3+ years of DevOps/Infrastructure experience",
        "Expertise in Docker, Kubernetes, and containerization",
        "Experience with Infrastructure as Code (Terraform, CloudFormation)",
        "Knowledge of monitoring and logging solutions",
        "Strong problem-solving and automation skills"
      ]
    },
    {
      title: "Python Developer",
      department: "Engineering",
      location: "Seattle, WA / Remote",
      type: "Full-time",
      description: "Develop backend services and data processing systems using Python and modern frameworks.",
      requirements: [
        "4+ years of Python development experience",
        "Experience with Django, Flask, or FastAPI",
        "Knowledge of data processing and analysis tools",
        "Understanding of microservices architecture",
        "Experience with API design and development"
      ]
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Seattle, WA / Remote",
      type: "Contract",
      description: "Create intuitive and engaging user experiences for web and mobile applications.",
      requirements: [
        "3+ years of UI/UX design experience",
        "Proficiency in Figma, Adobe Creative Suite",
        "Understanding of design systems and accessibility",
        "Experience with user research and testing",
        "Strong portfolio demonstrating design thinking"
      ]
    }
  ]

  const benefits = [
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with talented professionals in a supportive, growth-oriented environment."
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Remote-first culture with flexible hours to support work-life balance."
    },
    {
      icon: Zap,
      title: "Professional Growth",
      description: "Continuous learning opportunities, conference attendance, and certification support."
    },
    {
      icon: Code,
      title: "Cutting-Edge Tech",
      description: "Work with the latest technologies and tools on challenging, impactful projects."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl text-center">
          <ScrollFadeIn direction="up" delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Join Our Team
            </h1>
          </ScrollFadeIn>
          <ScrollFadeIn direction="up" delay={400}>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Build your career with a company that values innovation, collaboration, and technical excellence. 
              Help us deliver exceptional software solutions to clients around the world.
            </p>
          </ScrollFadeIn>
          <ScrollFadeIn direction="up" delay={600}>
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#positions">View Open Positions</a>
            </Button>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <ScrollFadeIn direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Why Vineyard Technologies?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We're more than just a software company—we're a community of passionate developers and innovators.
              </p>
            </div>
          </ScrollFadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollFadeIn key={index} direction="up" delay={index * 150 + 200}>
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

      {/* Open Positions */}
      <section id="positions" className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <ScrollFadeIn direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Open Positions</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Find your next opportunity with our growing team of talented professionals.
              </p>
            </div>
          </ScrollFadeIn>
          
          <div className="grid gap-8">
            {openPositions.map((position, index) => (
              <ScrollFadeIn key={index} direction="up" delay={index * 200 + 300}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary">{position.department}</Badge>
                        <Badge variant="outline">{position.location}</Badge>
                        <Badge variant="outline">{position.type}</Badge>
                      </div>
                    </div>
                    <Button className="mt-4 md:mt-0" asChild>
                      <a href="mailto:careers@vineyardtechnologies.org?subject=Application for {position.title}">
                        Apply Now
                      </a>
                    </Button>
                  </div>
                  <CardDescription className="text-base leading-relaxed mb-4">
                    {position.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollFadeIn direction="up" delay={100}>
            <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Apply?</h2>
          </ScrollFadeIn>
          <ScrollFadeIn direction="up" delay={300}>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Send us your resume and a brief cover letter explaining why you'd be a great fit for our team. 
              We review all applications carefully and will get back to you within one week.
            </p>
          </ScrollFadeIn>
          <ScrollFadeIn direction="up" delay={500}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a href="mailto:careers@vineyardtechnologies.org">Send Application</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <a href="/">Back to Home</a>
              </Button>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </div>
  )
}
