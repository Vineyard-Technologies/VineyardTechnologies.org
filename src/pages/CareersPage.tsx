import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Code, Users, Clock, Zap } from "lucide-react"
import ScrollFadeIn from "@/components/ScrollFadeIn"

export default function CareersPage() {
  const openPositions = [
    { title: "Senior Full-Stack Developer (Multiple Vacancies)" },
    { title: "DevOps Engineer" },
    { title: "Python Developer (Multiple Vacancies)" },
    { title: "UI/UX Designer" },
    { title: "React Developer (Multiple Vacancies)" },
    { title: "Node.js Developer" },
    { title: "Cloud Architect" },
    { title: "Database Administrator (Multiple Vacancies)" },
    { title: "Mobile Developer" },
    { title: "QA Engineer (Multiple Vacancies)" },
    { title: "Data Engineer" },
    { title: "Security Engineer (Multiple Vacancies)" },
    { title: "Site Reliability Engineer" },
    { title: "Frontend Developer (Multiple Vacancies)" },
    { title: "Backend Developer" },
    { title: "Java Developer (Multiple Vacancies)" },
    { title: "C# Developer" },
    { title: "Product Manager" },
    { title: "Scrum Master (Multiple Vacancies)" },
    { title: "Technical Writer" },
    { title: "Systems Administrator (Multiple Vacancies)" },
    { title: "Network Engineer" },
    { title: "Machine Learning Engineer" },
    { title: "Data Scientist (Multiple Vacancies)" },
    { title: "Solutions Architect" }
  ]

  const benefits = [
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with talented professionals in a supportive, growth-oriented environment."
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
      <section className="py-24 px-6 bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: 'url(/images/seattle.webp)'}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <ScrollFadeIn direction="up" delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Join Our Team <img src="/images/vineyardtechnologiesicon.webp" alt="🍇" className="inline w-12 h-12 md:w-16 md:h-16" />
            </h1>
          </ScrollFadeIn>
          <ScrollFadeIn direction="up" delay={400}>
            <p className="text-xl text-white mb-8 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
              Build your career with a company that values innovation, collaboration, and technical excellence. 
              Help us deliver exceptional software solutions to clients around the world.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <ScrollFadeIn direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Open Positions <img src="/images/vineyardtechnologiesicon.webp" alt="🍇" className="inline w-8 h-8 md:w-10 md:h-10" /></h2>
            </div>
          </ScrollFadeIn>
          
          <div className="grid grid-cols-5 gap-4">
            {openPositions.map((position, index) => (
              <ScrollFadeIn key={index} direction="up" delay={index * 50 + 200}>
                <Card className="aspect-[4/3] hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <CardContent className="p-4 flex flex-col justify-between h-32">
                    <CardTitle className="text-sm font-bold text-foreground text-center mb-2 leading-tight">
                      {position.title}
                    </CardTitle>
                    <Button size="sm" className="text-xs bg-primary hover:bg-primary/90 text-white" asChild>
                      <a href={`mailto:Careers@VineyardTechnologies.org?subject=${encodeURIComponent(position.title)}`}>
                        Learn More
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
