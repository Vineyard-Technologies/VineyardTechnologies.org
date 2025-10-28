import CTAButtons from "@/components/CTAButtons"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Cpu, Zap, BarChart, Settings } from "lucide-react"
import LazyLoadSection from "@/components/LazyLoadSection"
import ScrollFadeIn from "@/components/ScrollFadeIn"

export default function OverlordPage() {
  const features = [
    {
      icon: Cpu,
      title: "NVIDIA Iray Integration",
      description: "Seamless integration with NVIDIA Iray rendering engine for high-quality, photorealistic results.",
      highlights: ["GPU-accelerated rendering", "Material-based physics", "Advanced lighting"]
    },
    {
      icon: Zap,
      title: "Pipeline Automation",
      description: "Automate your entire rendering workflow from asset preparation to final output.",
      highlights: ["Batch processing", "Smart queue management", "Automated quality checks"]
    },
    {
      icon: BarChart,
      title: "Performance Monitoring",
      description: "Real-time monitoring and analytics for your rendering operations.",
      highlights: ["Resource utilization tracking", "Render time analytics", "Cost optimization insights"]
    },
    {
      icon: Settings,
      title: "Flexible Configuration",
      description: "Highly customizable settings to match your specific workflow requirements.",
      highlights: ["Custom render profiles", "Template-based workflows", "Extensible architecture"]
    }
  ]

  const benefits = [
    "Streamline asset rendering workflows",
    "Reduce manual intervention and errors",
    "Optimize resource utilization",
    "Track and analyze rendering performance",
    "Scale operations efficiently",
    "Integrate with existing pipelines"
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
                  <Badge className="mb-4" variant="secondary">Product</Badge>
                  <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                    Overlord <img src="/images/vineyardtechnologiesicon.webp" alt="🍇" className="inline w-12 h-12 md:w-16 md:h-16" />
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    An asset rendering pipeline management tool for NVIDIA Iray. 
                    Streamline your rendering workflows, automate processes, and maximize 
                    the efficiency of your GPU-accelerated rendering operations.
                  </p>
                  <CTAButtons />
                </div>
              </ScrollFadeIn>
              
              <ScrollFadeIn direction="right" delay={200}>
                <div className="flex justify-center">
                  <div className="w-full max-w-lg aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl shadow-lg flex items-center justify-center">
                    <Cpu className="w-48 h-48 text-primary/40" />
                  </div>
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </section>
      </LazyLoadSection>

      {/* Features Section */}
      <LazyLoadSection>
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <ScrollFadeIn direction="up">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Key Features <img src="/images/vineyardtechnologiesicon.webp" alt="🍇" className="inline w-8 h-8 md:w-10 md:h-10" /></h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Powerful tools designed to optimize your NVIDIA Iray rendering pipeline.
                </p>
              </div>
            </ScrollFadeIn>
            
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <ScrollFadeIn key={index} direction="up" delay={index * 200}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {feature.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span className="leading-snug">{highlight}</span>
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

      {/* Benefits Section */}
      <LazyLoadSection>
        <section className="py-24 px-6 bg-secondary/30">
          <div className="container mx-auto max-w-6xl">
            <ScrollFadeIn direction="up">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Overlord? <img src="/images/vineyardtechnologiesicon.webp" alt="🍇" className="inline w-8 h-8 md:w-10 md:h-10" /></h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Transform your rendering operations with enterprise-grade pipeline management.
                </p>
              </div>
            </ScrollFadeIn>
            
            <ScrollFadeIn direction="up" delay={200}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-center mb-2">
                        <CheckCircle className="w-6 h-6 text-primary" />
                      </div>
                      <CardDescription className="text-base font-medium text-foreground">
                        {benefit}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
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
              <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">Ready to Optimize Your Rendering Pipeline? <img src="/images/vineyardtechnologiesicon.webp" alt="🍇" className="inline w-8 h-8 md:w-10 md:h-10" /></h2>
              <p className="text-xl text-white mb-8 leading-relaxed drop-shadow-lg">
                Contact us to learn more about Overlord and how it can transform your NVIDIA Iray workflows.
              </p>
              <CTAButtons />
            </div>
          </ScrollFadeIn>
        </section>
      </LazyLoadSection>
    </div>
  )
}
