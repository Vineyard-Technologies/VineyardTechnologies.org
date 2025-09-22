import ScrollFadeIn from "@/components/ScrollFadeIn"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <ScrollFadeIn direction="up" delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-center">
              Terms of Service
            </h1>
          </ScrollFadeIn>
          <ScrollFadeIn direction="up" delay={400}>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed text-center">
              Last updated: September 22, 2025
            </p>
          </ScrollFadeIn>
          
          <ScrollFadeIn direction="up" delay={600}>
            <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Website Usage</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This website is provided for informational purposes only. You may browse and access the content for personal, 
                non-commercial use. You agree not to use the website for any unlawful purpose or in any way that might harm, 
                damage, or disparage any other party.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Content and Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The content, layout, design, data, databases and graphics on this website are protected by intellectual property laws 
                and are owned by Vineyard Technologies. You may not reproduce, distribute, modify, or create derivative works of any 
                content without explicit written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. User Conduct</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree to use this website in a manner consistent with all applicable laws and regulations. You will not:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Attempt to gain unauthorized access to any portion of the website</li>
                <li>Use the website to transmit any harmful, offensive, or illegal content</li>
                <li>Interfere with or disrupt the website's functionality or servers</li>
                <li>Violate any applicable local, state, national, or international law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact Forms and Communications</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Information submitted through contact forms on this website will be used to respond to your inquiries. 
                By submitting information through our contact forms, you consent to receive communications from us regarding your inquiry.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This website is provided "as is" without any representations or warranties. We make no representations or warranties 
                in relation to this website or the information and materials provided on this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vineyard Technologies will not be liable for any direct, indirect, special, incidental, or consequential damages 
                that result from the use of, or the inability to use, this website or any information provided on the website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting 
                to the website. Your continued use of the website after any changes constitutes your acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us at Contact@VineyardTechnologies.org.
              </p>
            </section>
          </div>
          </ScrollFadeIn>
        </div>
      </section>
    </div>
  )
}