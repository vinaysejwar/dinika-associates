import { PageFrame, PageIntro } from "@/components/site-shell"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Target, Lightbulb, Map, Users, ShieldCheck, Briefcase } from "lucide-react"

export default function AboutPage() {
  return (
    <PageFrame ctaTitle="Let's find the right property for you.">
      {/* 1. PAGE HEADER */}
      <PageIntro 
        eyebrow="About us" 
        title="Who We Are" 
        description="Dinika Associates is a trusted real estate consultancy headquartered in Indore, Madhya Pradesh. Established in 2022, we specialize in residential, commercial, agricultural and investment properties." 
      />

      {/* 2. COMPANY STORY */}
      <Section className="py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="overflow-hidden rounded-3xl border border-border/50 bg-muted aspect-[4/3] relative shadow-lg">
            {/* Placeholder image of Indore/Office */}
            <img src="/projects/indore-residence.png" alt="Dinika Associates Office" className="absolute inset-0 size-full object-cover" />
          </div>
          <div>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl text-secondary">A legacy of trust and transparent property advisory.</h2>
            <div className="mt-6 space-y-6 text-base leading-7 text-muted-foreground sm:text-lg">
              <p>
                Founded on the principles of honesty and local market expertise, Dinika Associates has quickly grown into one of Indore&apos;s most dependable real estate consulting firms. We understand that buying or selling property is one of the most significant financial decisions our clients make.
              </p>
              <p>
                Our team specializes in end-to-end advisory&mdash;whether you are buying your first home, selling a commercial space, leasing a retail outlet, or building a high-yield investment portfolio. We pride ourselves on our customer-first approach, ensuring every transaction is handled with absolute clarity and professionalism.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. MISSION & VISION */}
      <Section background="muted" eyebrow="Purpose" title="What drives us forward.">
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <Card className="h-full border-primary/20 bg-background shadow-sm hover:border-primary/40 p-8 sm:p-10 flex flex-col">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Target className="size-7" />
            </div>
            <h3 className="font-serif text-3xl text-secondary mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed text-lg flex-1">
              To simplify the real estate journey by delivering honest guidance, transparent transactions, and personalized property solutions tailored to every client&apos;s unique aspirations.
            </p>
          </Card>
          
          {/* Vision Card */}
          <Card className="h-full border-accent/20 bg-background shadow-sm hover:border-accent/40 p-8 sm:p-10 flex flex-col">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <Lightbulb className="size-7" />
            </div>
            <h3 className="font-serif text-3xl text-secondary mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed text-lg flex-1">
              To become one of the most trusted and respected real estate consulting firms in Central India, recognized for our professionalism, innovation, and unwavering commitment to customer satisfaction.
            </p>
          </Card>
        </div>
      </Section>

      {/* 4. WHY CHOOSE DINIKA ASSOCIATES */}
      <Section eyebrow="Why Choose Us" title="Your trusted property partners." className="py-24 border-t border-border">
        <div className="mt-12 grid sm:grid-cols-2 gap-6 lg:gap-8">
          {[
            { 
              icon: ShieldCheck, 
              title: "Established & Trusted", 
              desc: "Founded in 2022, we offer trusted and completely transparent consulting you can rely on." 
            },
            { 
              icon: Briefcase, 
              title: "End-to-End Consultancy", 
              desc: "Comprehensive support for buying, selling, leasing, and strategic investment advisory." 
            },
            { 
              icon: Map, 
              title: "Expert Market Guidance", 
              desc: "Deep knowledge across residential, commercial, and investment properties in Indore." 
            },
            { 
              icon: Users, 
              title: "Personalized Solutions", 
              desc: "We focus on building long-term client relationships rather than short-term transactions." 
            }
          ].map((item, i) => (
             <div key={i} className="flex gap-6 rounded-3xl border border-border bg-card p-6 sm:p-8 transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted text-accent">
                <item.icon className="size-6" />
              </div>
              <div>
                <h4 className="font-serif text-xl text-secondary">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </PageFrame>
  )
}
