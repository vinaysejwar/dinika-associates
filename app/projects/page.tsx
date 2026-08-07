'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { PageFrame, PageIntro } from "@/components/site-shell"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardImage, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const projects = [
  { 
    name: "IRIS \u2013 New Commercial at Super Corridor", 
    status: "Upcoming", 
    image: "/projects/super-corridor.png", 
    desc: "Next-gen commercial spaces designed for modern businesses and high footfall." 
  },
  { 
    name: "IRIS Premium", 
    status: "Ongoing", 
    image: "/projects/iris-premium-plan.png", 
    desc: "Luxury residential apartments in a prime locale with world-class amenities." 
  },
  { 
    name: "IRIS Ayodhya Estate", 
    status: "Ongoing", 
    image: "/projects/farm-estate.png", 
    desc: "Premium plotted development designed for custom homes and farm estates." 
  },
  { 
    name: "IRIS Park", 
    status: "Completed", 
    image: "/projects/iris-park-plan.png", 
    desc: "A beautifully planned residential community with robust infrastructure." 
  },
  { 
    name: "IRIS Nest", 
    status: "Completed", 
    image: "/projects/iris-nest-plan.png", 
    desc: "Cozy and secure living spaces crafted for modern families." 
  },
]

type Status = "All" | "Upcoming" | "Ongoing" | "Completed"
const tabs: Status[] = ["All", "Upcoming", "Ongoing", "Completed"]

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Status>("All")

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.status === filter
  )

  return (
    <PageFrame ctaTitle="Interested in a project? Get in touch for site visits and pricing.">
      <PageIntro 
        eyebrow="Our Projects" 
        title="A Fast-Growing Real Estate Destination in Indore" 
        description="The Super Corridor is rapidly transforming into Indore's prime hub for commercial and residential development, offering planned infrastructure, bustling commercial activity, and high residential demand." 
      />

      <Section className="py-20 sm:py-28 min-h-[60vh]">
        {/* FILTER/TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold transition-all border",
                filter === tab 
                  ? "bg-secondary border-secondary text-secondary-foreground shadow-sm" 
                  : "bg-background border-border text-muted-foreground hover:bg-muted hover:text-foreground hover:border-border/80"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, i) => (
            <Card key={i} className="group flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <CardImage src={project.image} alt={project.name} />
                <div className={cn(
                  "absolute top-4 left-4 rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest shadow-sm backdrop-blur-md",
                  project.status === "Upcoming" && "bg-background/90 text-foreground border border-border",
                  project.status === "Ongoing" && "bg-primary/95 text-primary-foreground",
                  project.status === "Completed" && "bg-accent/95 text-primary-foreground"
                )}>
                  {project.status}
                </div>
              </div>
              <CardContent className="flex flex-col flex-1">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.name}</CardTitle>
                <CardDescription className="line-clamp-2 mt-2 mb-4 flex-1">{project.desc}</CardDescription>
                <Link href="/contact" className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors">
                  View Details <ArrowRight size={14} />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* EMPTY STATE (Just in case) */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No projects found for this category.
          </div>
        )}

        {/* ATTRIBUTION NOTE */}
        <div className="mt-20 pt-8 border-t border-border/50 text-center">
          <p className="font-mono text-xs text-muted-foreground tracking-wide">
            Project imagery courtesy of <a href="#" className="underline hover:text-foreground transition-colors">The IRIS Group</a>
          </p>
        </div>
      </Section>
    </PageFrame>
  )
}
