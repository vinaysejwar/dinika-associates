import { ReactNode } from "react"
import { cn } from "@/lib/utils"

export interface SectionProps {
  children?: ReactNode
  className?: string
  eyebrow?: string
  title?: ReactNode
  description?: ReactNode
  background?: "default" | "muted" | "primary" | "secondary"
}

export function Section({ 
  children, 
  className, 
  eyebrow, 
  title, 
  description, 
  background = "default" 
}: SectionProps) {
  return (
    <section className={cn(
      "py-12 md:py-20", 
      background === "muted" && "bg-muted text-foreground",
      background === "primary" && "bg-primary text-primary-foreground",
      background === "secondary" && "bg-secondary text-secondary-foreground",
      className
    )}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {(eyebrow || title || description) && (
          <div className="mb-12 max-w-3xl">
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            {title && <h2 className={cn("font-serif text-4xl leading-tight sm:text-5xl", background === "primary" ? "text-primary-foreground" : "text-primary")}>{title}</h2>}
            {description && (
              <div className={cn("mt-4 text-base leading-7 sm:text-lg", background === "primary" ? "text-primary-foreground/80" : "text-muted-foreground")}>
                {description}
              </div>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
