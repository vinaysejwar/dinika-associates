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


      {/* 3. MEET OUR DIRECTOR */}
      <Section className="py-24 border-b border-border">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="overflow-hidden rounded-3xl border border-border/50 bg-muted aspect-[3/4] relative shadow-lg">
              <img
                src="/projects/director.jpeg"
                alt="Verendra Singh Tomar"
                className="absolute inset-0 size-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          <div className="lg:col-span-7 order-2 lg:order-1">
            <p className="eyebrow">Leadership</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl text-secondary">Verendra Singh Tomar</h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-primary">
              17+ Years of Real Estate Experience | Dinika Associates
            </p>

            <div className="mt-6 space-y-6 text-base leading-7 text-muted-foreground sm:text-lg">
              <p>
                With over 17 years of experience in the real estate industry, Verendra Singh Tomar brings extensive market knowledge, professional expertise, and a client-focused approach to Dinika Associates.
              </p>
              <p>
                Over the years, he has developed a deep understanding of residential and commercial real estate, property investments, market trends, and client requirements. His experience is built on long-term relationships, transparency, and a commitment to helping clients make confident and informed property decisions.
              </p>
              <p>
                At Dinika Associates, Verendra Singh Tomar combines his industry experience with a clear vision of delivering reliable, professional, and value-driven real estate solutions. His dedication to integrity and customer satisfaction has played an important role in building lasting trust with clients and business partners.
              </p>
            </div>

            <div className="mt-8 border-l-4 border-primary pl-4 font-serif text-lg italic text-secondary sm:text-xl">
              &ldquo;Experience. Expertise. Trust. &mdash; The foundation of Dinika Associates.&rdquo;
            </div>
          </div>


        </div>
      </Section>

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


      {/* 4. MISSION & VISION */}
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

      {/* 5. WHY CHOOSE DINIKA ASSOCIATES */}
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
