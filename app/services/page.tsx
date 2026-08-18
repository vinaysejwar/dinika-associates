import { PageFrame, PageIntro } from "@/components/site-shell"
import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Home, Building2, Trees, TrendingUp, Search, Briefcase, FileText, BarChart3, Construction, PaintBucket, Lamp } from "lucide-react"

export default function ServicesPage() {
  return (
    <PageFrame ctaTitle="Not sure where to start? Talk to our team." ctaDescription="Our real estate experts are here to help you navigate every step of the journey.">
      {/* PAGE HEADER */}
      <PageIntro
        eyebrow="Our Services"
        title="End-to-End Real Estate Solutions"
        description="Comprehensive real estate advisory and support tailored to your unique requirements, from finding the right property to finalizing the deal and beyond."
      />

      {/* STICKY SUB-NAV */}
      <div className="sticky top-[72px] sm:top-[76px] z-40 border-b border-border bg-background/95 backdrop-blur shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 overflow-x-auto px-5 py-4 sm:px-8 lg:px-12 scrollbar-hide">
          <a href="#property-types" className="whitespace-nowrap text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">Property Types</a>
          <a href="#consulting" className="whitespace-nowrap text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">Consulting</a>
          <a href="#construction" className="whitespace-nowrap text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">Construction & Interiors</a>
        </div>
      </div>

      {/* SECTION A — PROPERTY TYPES */}
      <div id="property-types" className="scroll-mt-40">
        <Section eyebrow="Property Types" title="Tailored solutions for every asset class.">
          <div className="mt-12 grid lg:grid-cols-3 gap-8">
            {/* Residential */}
            <div className="flex flex-col gap-6">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted border border-border">
                <img src="/projects/indore-residence.png" alt="Residential" className="size-full object-cover" />
              </div>
              <div>
                <h3 className="font-serif text-3xl text-secondary">Residential</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Find your perfect family home or premium apartment in Indore's best neighborhoods.</p>
              </div>
              <Card className="flex-1 shadow-sm border-border/80">
                <CardContent className="p-6 space-y-4">
                  {[
                    "Plot consultation",
                    "Apartment/villa assistance",
                    "Home buying guidance",
                    "Location analysis",
                    "Property visits & evaluation",
                    "Documentation support"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="size-5 text-accent shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Commercial */}
            <div className="flex flex-col gap-6">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted border border-border">
                <img src="/projects/super-corridor.png" alt="Commercial" className="size-full object-cover" />
              </div>
              <div>
                <h3 className="font-serif text-3xl text-secondary">Commercial</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Strategic spaces for offices, retail, and business growth across prime locations.</p>
              </div>
              <Card className="flex-1 shadow-sm border-border/80">
                <CardContent className="p-6 space-y-4">
                  {[
                    "Property consultation",
                    "Office/retail advisory",
                    "Commercial plot investment",
                    "Market/location analysis",
                    "Buying/selling/leasing assistance",
                    "Negotiation & documentation support"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="size-5 text-accent shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Agricultural */}
            <div className="flex flex-col gap-6">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted border border-border">
                <img src="/projects/farm-estate.png" alt="Agricultural" className="size-full object-cover" />
              </div>
              <div>
                <h3 className="font-serif text-3xl text-secondary">Agricultural</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Invest in fertile land and farm estates with high appreciation potential.</p>
              </div>
              <Card className="flex-1 shadow-sm border-border/80">
                <CardContent className="p-6 space-y-4">
                  {[
                    "Land consultation",
                    "Investment advisory",
                    "Location/market analysis",
                    "Property verification",
                    "Investment planning support"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="size-5 text-accent shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>
      </div>

      {/* SECTION B — CONSULTING SERVICES */}
      <div id="consulting" className="scroll-mt-40">
        <Section background="muted" eyebrow="Consulting Services" title="Comprehensive consultancy from search to closing." className="py-24">
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Search, title: "Property Buying Assistance", desc: "Discover suitable properties based on requirements, budget, and objectives." },
              { icon: TrendingUp, title: "Property Investment Advisory", desc: "Analyse market trends and location growth to make strategic investment decisions." },
              { icon: Home, title: "Residential Property Consulting", desc: "Assisting homebuyers in finding apartments, villas, and plots in prime locations." },
              { icon: Building2, title: "Commercial Property Consulting", desc: "Guiding businesses in selecting suitable office spaces, retail properties, and assets." },
              { icon: Trees, title: "Agricultural Land Advisory", desc: "Evaluating location advantages and future development possibilities for land investments." },
              { icon: Briefcase, title: "Property Selling & Leasing", desc: "Market evaluation, buyer connections, negotiations, and transaction support." },
              { icon: BarChart3, title: "Market Analysis", desc: "Insights into emerging locations, market trends, and connectivity." },
              { icon: FileText, title: "Documentation Support", desc: "Navigating the process with clarity and confidence from consultation to finalization." },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-border bg-background p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-primary">
                  <item.icon className="size-6" />
                </div>
                <h4 className="font-serif text-xl text-secondary">{item.title}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* SECTION C — CONSTRUCTION, INTERIOR & DECORATIVE */}
      <div id="construction" className="scroll-mt-40">
        <Section eyebrow="Construction & Interiors" title="Built well, finished beautifully." className="py-24 border-t border-border/50">
          <div className="mt-12 grid md:grid-cols-3 gap-12">
            {[
              { icon: Construction, title: "Construction Services", desc: "Delivering strong, reliable, and well-planned structures that meet modern standards. We assist with professional execution from planning to completion." },
              { icon: PaintBucket, title: "Interior Design Services", desc: "Creating environments that are stylish, practical, and personalised according to each client's lifestyle, business needs, and preferences." },
              { icon: Lamp, title: "Decorative Services", desc: "Enhancing the beauty and appeal of spaces through thoughtful design elements and creative finishing touches." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col border-l-[3px] border-primary/20 pl-6 py-2">
                <item.icon className="size-8 text-accent mb-4" />
                <h3 className="font-serif text-2xl text-secondary mb-3">{item.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted border border-border relative">
              <img src="/projects/super-corridor1.jpeg" alt="Interior Details" className="absolute inset-0 size-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted border border-border hidden md:block relative">
              <img src="/projects/Residential.jpg" alt="Home Decor" className="absolute inset-0 size-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted border border-border relative">
              <img src="/projects/super-corridor.png" alt="Commercial Space" className="absolute inset-0 size-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted border border-border hidden md:block relative">
              <img src="/projects/farm-estate.png" alt="Landscaping" className="absolute inset-0 size-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </div>
        </Section>
      </div>
    </PageFrame>
  )
}
