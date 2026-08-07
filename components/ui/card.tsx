import { ReactNode } from "react"
import { cn } from "@/lib/utils"

export interface CardProps {
  className?: string
  children: ReactNode
}

export function Card({ className, children }: CardProps) {
  return (
    <div className={cn(
      "group overflow-hidden rounded-2xl bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:shadow-primary/5 border border-border/50",
      className
    )}>
      {children}
    </div>
  )
}

export function CardImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className="overflow-hidden aspect-[4/3] w-full bg-muted">
      <img 
        src={src} 
        alt={alt} 
        className={cn("size-full object-cover transition-transform duration-700 group-hover:scale-105", className)} 
      />
    </div>
  )
}

export function CardContent({ className, children }: CardProps) {
  return <div className={cn("p-6 sm:p-8 flex flex-col items-start", className)}>{children}</div>
}

export function CardTag({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("mb-3 text-xs font-mono font-semibold uppercase tracking-widest text-accent", className)}>{children}</p>
}

export function CardTitle({ className, children }: CardProps) {
  return <h3 className={cn("font-serif text-2xl leading-tight text-primary", className)}>{children}</h3>
}

export function CardDescription({ className, children }: CardProps) {
  return <p className={cn("mt-3 text-sm leading-relaxed text-muted-foreground", className)}>{children}</p>
}
