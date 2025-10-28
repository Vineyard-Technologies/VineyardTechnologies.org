import CTAButtons from "@/components/CTAButtons"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Swords, Users, Globe, Gamepad2 } from "lucide-react"
import LazyLoadSection from "@/components/LazyLoadSection"
import ScrollFadeIn from "@/components/ScrollFadeIn"

export default function DaggerQuestPage() {
  const features = [
    {
      icon: Swords,
      title: "Immersive Combat",
      description: "Engage in thrilling action-oriented combat with responsive controls and strategic depth.",
      highlights: ["Real-time combat system", "Character progression", "Diverse weapons & abilities"]
    },
    {
      icon: Globe,
      title: "Browser-Based",
      description: "Play directly from any modern web browser without downloads or installations.",
      highlights: ["No installation required", "Cross-platform compatible", "Instant access"]
    },
    {
      icon: Users,
      title: "Multiplayer Adventures",
      description: "Team up with friends or challenge other players in epic quests and battles.",
      highlights: ["Cooperative gameplay", "PvP arenas", "Guild systems"]
    },
    {
      icon: Gamepad2,
      title: "Rich RPG Experience",
      description: "Deep character customization, skill trees, and engaging storylines.",
      highlights: ["Character customization", "Skill progression", "Story-driven quests"]
    }
  ]

  const highlights = [
    "Action-packed combat mechanics",
    "No downloads or installations",
    "Play anywhere, anytime",
    "Regular content updates",
    "Cross-platform progression",
    "Active community"
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
                    DaggerQuest <img src="/images/vineyardtechnologiesicon.webp" alt="🍇" className="inline w-12 h-12 md:w-16 md:h-16" />
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    An action role playing game playable directly from a web browser. 
                    Dive into epic adventures, master combat skills, and explore vast worlds 
                    without ever leaving your browser.
                  </p>
                  <CTAButtons />
                </div>
              </ScrollFadeIn>
              
              <ScrollFadeIn direction="right" delay={200}>
                <div className="flex justify-center">
                  <div className="w-full max-w-lg aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl shadow-lg flex items-center justify-center">
                    <Swords className="w-48 h-48 text-primary/40" />
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
                <h2 className="text-4xl font-bold text-foreground mb-4">Game Features <img src="/images/vineyardtechnologiesicon.webp" alt="🍇" className="inline w-8 h-8 md:w-10 md:h-10" /></h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Experience next-generation browser gaming with rich features and engaging gameplay.
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

      {/* Highlights Section */}
      <LazyLoadSection>
        <section className="py-24 px-6 bg-secondary/30">
          <div className="container mx-auto max-w-6xl">
            <ScrollFadeIn direction="up">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Why Play DaggerQuest? <img src="/images/vineyardtechnologiesicon.webp" alt="🍇" className="inline w-8 h-8 md:w-10 md:h-10" /></h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  The ultimate browser-based action RPG experience.
                </p>
              </div>
            </ScrollFadeIn>
            
            <ScrollFadeIn direction="up" delay={200}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-center mb-2">
                        <CheckCircle className="w-6 h-6 text-primary" />
                      </div>
                      <CardDescription className="text-base font-medium text-foreground">
                        {highlight}
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
              <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">Ready to Begin Your Quest? <img src="/images/vineyardtechnologiesicon.webp" alt="🍇" className="inline w-8 h-8 md:w-10 md:h-10" /></h2>
              <p className="text-xl text-white mb-8 leading-relaxed drop-shadow-lg">
                Contact us to learn more about DaggerQuest and join the adventure today.
              </p>
              <CTAButtons />
            </div>
          </ScrollFadeIn>
        </section>
      </LazyLoadSection>
    </div>
  )
}
