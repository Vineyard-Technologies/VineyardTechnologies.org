import CTAButtons from "@/components/CTAButtons"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, TrendingUp, Bell, BarChart3, Smartphone } from "lucide-react"
import LazyLoadSection from "@/components/LazyLoadSection"
import ScrollFadeIn from "@/components/ScrollFadeIn"

export default function MythicMarketMogulPage() {
  const platforms = [
    {
      title: "Old School RuneScape",
      description: "Track Grand Exchange prices, merching opportunities, and item trends.",
      available: true
    },
    {
      title: "Eve Online",
      description: "Monitor market hubs, regional pricing, and trade route profitability.",
      available: true
    },
    {
      title: "Albion Online",
      description: "Coming Soon!",
      available: false
    },
    {
      title: "Guild Wars 2",
      description: "Coming Soon!",
      available: false
    },
    {
      title: "World of Warcraft",
      description: "Coming Soon!",
      available: false
    },
    {
      title: "Final Fantasy XIV",
      description: "Coming Soon!",
      available: false
    }
  ]

  const benefits = [
    "Daily updated data and recommendations",
    "Weekly reports and market insights",
    "Newsletter-style format",
    "Thematically aligned",
    "Cross-platform access",
    "Custom budget tayloring"
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
                    Mythic Market Mogul <img src="/images/vineyardtechnologiesicon.webp" alt="🍇" className="inline w-12 h-12 md:w-16 md:h-16" />
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    A multi-platform virtual commodities monitoring suite. Track, analyze, and 
                    capitalize on virtual market opportunities across multiple platforms with 
                    powerful real-time analytics and insights.
                  </p>
                  <CTAButtons />
                </div>
              </ScrollFadeIn>
              
              <ScrollFadeIn direction="right" delay={200}>
                <div className="flex justify-center">
                  <div className="w-full max-w-lg aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl shadow-lg flex items-center justify-center">
                    <TrendingUp className="w-48 h-48 text-primary/40" />
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
                <h2 className="text-4xl font-bold text-foreground mb-4">Supported Platforms <img src="/images/vineyardtechnologiesicon.webp" alt="🍇" className="inline w-8 h-8 md:w-10 md:h-10" /></h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  See the latest reports for the following games.
                </p>
              </div>
            </ScrollFadeIn>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platforms.map((platform, index) => (
                <ScrollFadeIn key={index} direction="up" delay={index * 200}>
                  <Card className={`hover:shadow-lg transition-shadow duration-300 ${!platform.available ? 'opacity-60' : ''}`}>
                    <CardHeader>
                      <CardTitle className="text-xl mb-2">{platform.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {platform.description}
                      </CardDescription>
                    </CardHeader>
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
                <h2 className="text-4xl font-bold text-foreground mb-4">Outpace the Competition <img src="/images/vineyardtechnologiesicon.webp" alt="🍇" className="inline w-8 h-8 md:w-10 md:h-10" /></h2>
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
        <section className="py-24 px-6 bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: 'url(/images/mythicmarketmogulcta.webp)'}}>
          <div className="absolute inset-0 bg-black/60"></div>
          <ScrollFadeIn direction="up">
            <div className="container mx-auto max-w-4xl text-center relative z-10">
              <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">Proudly Open Source <img src="/images/vineyardtechnologiesicon.webp" alt="🍇" className="inline w-8 h-8 md:w-10 md:h-10" /></h2>
              <p className="text-xl text-white mb-8 leading-relaxed drop-shadow-lg">
                See behind-the-scenes updates or contribute to Mythic Market Mogul's development.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-white/90 font-semibold"
                asChild
              >
                <a href="https://github.com/Vineyard-Technologies/MythicMarketMogul" target="_blank" rel="noopener noreferrer">
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
