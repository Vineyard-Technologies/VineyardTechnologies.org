import CTAButtons from "@/components/CTAButtons"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Swords, Users, Globe, Gamepad2 } from "lucide-react"
import LazyLoadSection from "@/components/LazyLoadSection"
import ScrollFadeIn from "@/components/ScrollFadeIn"

export default function DaggerQuestPage() {
  const features = [
    {
      icon: "/images/richRPGExperience.webp",
      title: "Rich RPG Experience",
      description: "Deep character customization, immersive gameplay, and engaging storylines."
    },
    {
      icon: "/images/browserBased.webp",
      title: "Browser-Based",
      description: "Play directly from any modern web browser without downloads or installations."
    },
    {
      icon: "/images/3dpassive.webp",
      title: "3D Passive Skill Cube",
      description: "Experience character development through a unique 3D skill cube system."
    },
    {
      icon: "/images/specializedLoot.webp",
      title: "Specialized Loot",
      description: <>Customize item drops with the <em>Pillar of Fate</em> - shape your adventure experience.</>
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
                  <div className="mb-6">
                    <img 
                      src="/images/DaggerQuestLogo.webp" 
                      alt="DaggerQuest" 
                      className="w-full"
                    />
                  </div>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    An action role playing game playable directly from a web browser. 
                    Dive into epic adventures, master combat skills, and explore vast worlds 
                    without ever leaving your browser.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      className="bg-primary text-white hover:bg-primary/90 px-8 py-3 text-lg"
                      asChild
                    >
                      <a href="https://DaggerQuest.com" target="_blank" rel="noopener noreferrer">
                        Go to DaggerQuest.com
                      </a>
                    </Button>
                    <Button 
                      className="border-2 border-gray-400 text-gray-700 bg-white hover:bg-white hover:text-primary hover:border-primary px-8 py-3 text-lg transition-colors duration-200"
                      asChild
                    >
                      <a href="https://github.com/Vineyard-Technologies/DaggerQuest" target="_blank" rel="noopener noreferrer">
                        Browse Code on GitHub <img src="/images/github.webp" alt="GitHub" className="inline w-6 h-6 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </ScrollFadeIn>
              
              <ScrollFadeIn direction="right" delay={200}>
                <div className="flex justify-center">
                  <img 
                    src="/images/daggerquestHeroImage.webp" 
                    alt="DaggerQuest Screenshot" 
                    className="w-full max-w-lg aspect-square object-cover rounded-xl shadow-lg"
                  />
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
            
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <ScrollFadeIn key={index} direction="up" delay={index * 200}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    <img src={feature.icon} alt={feature.title} className="w-full object-cover" />
                    <CardHeader>
                      <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </section>
      </LazyLoadSection>

      {/* CTA Section */}
      <LazyLoadSection>
        <section className="py-24 px-6 bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: 'url(/images/daggerquestCTAImage.webp)'}}>
          <div className="absolute inset-0 bg-black/30"></div>
          <ScrollFadeIn direction="up">
            <div className="container mx-auto max-w-4xl text-center relative z-10">
              <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">Proudly Open Source <img src="/images/vineyardtechnologiesicon.webp" alt="🍇" className="inline w-8 h-8 md:w-10 md:h-10" /></h2>
              <p className="text-xl text-white mb-8 leading-relaxed drop-shadow-lg">
                See behind-the-scenes updates or contribute to DaggerQuest's development.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-white/90 font-semibold"
                asChild
              >
                <a href="https://github.com/Vineyard-Technologies/DaggerQuest" target="_blank" rel="noopener noreferrer">
                  See Repository <img src="/images/github.webp" alt="GitHub" className="inline w-6 h-6 ml-2" />
                </a>
              </Button>
            </div>
          </ScrollFadeIn>
        </section>
      </LazyLoadSection>
    </div>
  )
}
