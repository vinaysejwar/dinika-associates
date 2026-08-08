'use client'

import { useState, useTransition } from "react"
import { PageFrame, PageIntro } from "@/components/site-shell"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { CheckCircle2, MapPin, Phone, Mail, Send, AlertCircle } from "lucide-react"
import { sendContactEmail } from "@/app/actions/send-contact-email"

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [isPending, startTransition] = useTransition()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    setStatus("idle")
    setErrorMessage("")

    startTransition(async () => {
      try {
        const result = await sendContactEmail(formData)

        if (result.success) {
          setStatus("success")
          form.reset()
          // Reset success state after a few seconds
          setTimeout(() => setStatus("idle"), 5000)
        } else {
          setStatus("error")
          setErrorMessage(result.error || "Something went wrong. Please try again or call us directly.")
        }
      } catch (error) {
        setStatus("error")
        setErrorMessage("An unexpected error occurred. Please try again or call us directly.")
      }
    })
  }

  return (
    <PageFrame>
      {/* PAGE HEADER */}
      <PageIntro
        eyebrow="Get in touch"
        title="Let's Talk About Your Next Property"
        description="Whether you're looking to buy, sell, lease, or invest, our team is ready to provide transparent advice and personalized solutions."
      />

      <Section className="py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

          {/* LEFT COLUMN — Contact Form */}
          <div>
            <h2 className="font-serif text-3xl text-secondary mb-8">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-foreground">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  disabled={isPending}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary disabled:opacity-50"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={isPending}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary disabled:opacity-50"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    disabled={isPending}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary disabled:opacity-50"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">Message / Requirement</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  disabled={isPending}
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary disabled:opacity-50"
                  placeholder="Tell us what you are looking for..."
                />
              </div>

              <div className="pt-4 flex items-center gap-4 flex-wrap">
                <button
                  type="submit"
                  disabled={isPending || status === "success"}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed min-w-[180px] cursor-pointer"
                >
                  {isPending ? (
                    "Sending..."
                  ) : status === "success" ? (
                    <><CheckCircle2 size={18} /> Sent Successfully</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
                {status === "success" && (
                  <p className="text-sm text-accent font-medium animate-in fade-in slide-in-from-left-2">
                    We'll be in touch shortly!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-500 font-medium animate-in fade-in slide-in-from-left-2 flex items-center gap-1.5">
                    <AlertCircle size={16} /> {errorMessage}
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* RIGHT COLUMN — Contact Details Card */}
          <div className="lg:pl-6">
            <Card className="h-full border-border/80 bg-card shadow-sm p-8 sm:p-12 flex flex-col justify-center gap-12">

              <div className="flex gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-muted text-primary border border-border/50">
                  <MapPin className="size-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-secondary mb-2">Visit Our Office</h4>
                  <address className="not-italic text-sm leading-relaxed text-muted-foreground">
                    UG 6 Lokhandwala Street,<br />
                    Goyal Nagar, Indore,<br />
                    Madhya Pradesh 452016
                  </address>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-muted text-primary border border-border/50">
                  <Phone className="size-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-secondary mb-2">Call Us</h4>
                  <div className="flex flex-col gap-1 text-sm font-mono tracking-wide">
                    <a href="tel:07314058609" className="text-muted-foreground hover:text-primary transition-colors">0731 4058609</a>
                    <a href="tel:+919424721555" className="text-muted-foreground hover:text-primary transition-colors">94247 21555</a>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-muted text-primary border border-border/50">
                  <Mail className="size-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-secondary mb-2">Email Us</h4>
                  <a href="mailto:Dinikaassociates@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Dinikaassociates@gmail.com
                  </a>
                </div>
              </div>

            </Card>
          </div>

        </div>
      </Section>

      {/* MAP EMBED */}
      <section className="w-full h-[400px] sm:h-[500px] border-t border-border bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14722.520970966838!2d75.8966453!3d22.7247738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd3753ffc649%3A0x6b77cd56e40b3c66!2sGoyal%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dinika Associates Office Location"
          className="grayscale opacity-90 contrast-125 transition-all duration-700 hover:grayscale-0 hover:opacity-100"
        ></iframe>
      </section>
    </PageFrame>
  )
}
