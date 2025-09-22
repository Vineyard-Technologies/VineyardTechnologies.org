import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useForm, ValidationError } from '@formspree/react'
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import ScrollFadeIn from "@/components/ScrollFadeIn"

function ContactForm() {
  const [state, handleSubmit] = useForm("xrbyzaab");
  
  if (state.succeeded) {
    return (
      <div className="text-center py-8">
        <h3 className="text-2xl font-semibold text-primary mb-2">Thank you!</h3>
        <p className="text-lg text-muted-foreground">We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your.email@company.com"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            name="company"
            type="text"
            placeholder="Your company name"
          />
          <ValidationError 
            prefix="Company" 
            field="company"
            errors={state.errors}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
          />
          <ValidationError 
            prefix="Phone" 
            field="phone"
            errors={state.errors}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="subject">Subject *</Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="What can we help you with?"
        />
        <ValidationError 
          prefix="Subject" 
          field="subject"
          errors={state.errors}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell us about your project, timeline, and requirements..."
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>
      
      <Button 
        type="submit" 
        disabled={state.submitting}
        className="w-full text-lg py-3"
      >
        {state.submitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "Contact@VineyardTechnologies.org",
      link: "mailto:Contact@VineyardTechnologies.org"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (206) 555-0123",
      link: "tel:+12065550123"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "Seattle, WA, USA",
      link: "https://maps.google.com/?q=Seattle,WA"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 9:00 AM - 6:00 PM PST",
      link: null
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl text-center">
          <ScrollFadeIn direction="up" delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Get In Touch
            </h1>
          </ScrollFadeIn>
          <ScrollFadeIn direction="up" delay={400}>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Ready to start your next project? We'd love to hear from you. 
              Let's discuss how we can help bring your ideas to life.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <ScrollFadeIn direction="up" delay={100}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours, or send us a email at <a href="mailto:Contact@VineyardTechnologies.org" className="text-primary">Contact@VineyardTechnologies.org</a>
              </p>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn direction="up" delay={300}>
            <Card className="p-8">
              <ContactForm />
            </Card>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <ScrollFadeIn direction="up" delay={100}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Software Development Services <span className="text-primary">in Seattle, WA</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Located in the heart of the Pacific Northwest, we serve clients locally and globally.
              </p>
            </div>
          </ScrollFadeIn>
          
          <ScrollFadeIn direction="up" delay={300}>
            <div className="flex justify-center">
              <div className="border-4 border-primary rounded-xl shadow-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172152.9602865583!2d-122.50460303987828!3d47.608828458613985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA%2C%20USA!5e0!3m2!1sen!2sbr!4v1758541249116!5m2!1sen!2sbr"
                  width="800"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Seattle, WA Location"
                />
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </div>
  )
}
