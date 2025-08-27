"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Mail, Phone, MapPin, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { resume } from "@/lib/resume"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactForm = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (formData: ContactForm) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // For now, we'll just simulate a successful submission
      // In a real implementation, you'd send this to your API
      console.log("Form data:", formData) // Use the parameter to avoid warning
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      setSubmitStatus("success")
      reset()
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Get In Touch</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I&apos;m always interested in hearing about new opportunities and interesting projects. 
          Feel free to reach out if you&apos;d like to connect!
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={5}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="Tell me about your project or opportunity..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
                )}
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>

              {submitStatus === "success" && (
                <p className="text-sm text-green-600 text-center">
                  Thank you! Your message has been sent successfully.
                </p>
              )}

              {submitStatus === "error" && (
                <p className="text-sm text-destructive text-center">
                  Sorry, there was an error sending your message. Please try again.
                </p>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="font-medium">Email</div>
                  <a
                    href={`mailto:${resume.profile.links.email}`}
                    className="text-primary hover:underline"
                  >
                    {resume.profile.links.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="font-medium">Phone</div>
                  <a
                    href={`tel:${resume.profile.links.phone}`}
                    className="text-primary hover:underline"
                  >
                    {resume.profile.links.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-muted-foreground">{resume.profile.location}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What I&apos;m Looking For</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Backend & Infrastructure Roles</h3>
                <p className="text-sm text-muted-foreground">
                  I&apos;m particularly interested in roles focused on performance optimization, 
                  system architecture, and developer productivity tools.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Full-Stack Opportunities</h3>
                <p className="text-sm text-muted-foreground">
                  Open to full-stack positions where I can leverage my experience across 
                  the entire development stack.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Remote & Hybrid</h3>
                <p className="text-sm text-muted-foreground">
                  Prefer remote or hybrid work arrangements, with occasional travel for 
                  team meetings and collaboration.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                I typically respond to messages within 24 hours during business days. 
                For urgent matters, feel free to reach out via phone.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
