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
    mode: "onChange", // Enable validation on change for better UX
  })

  // Debug: Check if register is working
  console.log('React Hook Form register:', register)
  console.log('Form errors:', errors)

  // Chrome-specific debugging
  const handleInputTest = (fieldName: string) => {
    console.log(`Direct click on ${fieldName} input detected!`)
    alert(`${fieldName} input clicked - this should work in Chrome!`)
  }



  const onSubmit = async (formData: ContactForm) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }
      
      setSubmitStatus("success")
      reset()
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-16 text-center">
        <h1 className="mb-6 text-5xl font-bold star-wars-title star-wars-glow">Get In Touch</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          I&apos;m always interested in hearing about new opportunities and interesting projects. 
          Feel free to reach out if you&apos;d like to connect!
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Contact Form - COMMENTED OUT FOR NOW */}
        {/*
        <div className="simple-form-container" style={{ 
          background: 'rgba(0, 0, 0, 0.9)', 
          border: '1px solid #00d4ff', 
          borderRadius: '8px', 
          padding: '2rem',
          position: 'relative',
          zIndex: 1000,
          pointerEvents: 'auto',
          isolation: 'isolate'
        }}>
          <h3 className="text-2xl star-wars-text star-wars-glow mb-6">Send a Message</h3>
          
          <div style={{ marginBottom: '20px', padding: '10px', background: 'rgba(255, 0, 0, 0.1)', border: '1px solid red' }}>
            <p style={{ color: 'red', fontSize: '12px', marginBottom: '10px' }}>
              🔧 DEBUG: If you can click and type in this red test input, the issue is with React Hook Form:
            </p>
            <input 
              type="text" 
              placeholder="TEST INPUT - Try clicking here"
              onClick={() => alert('Vanilla input clicked! This means Chrome can detect clicks.')}
              style={{
                width: '100%',
                padding: '10px',
                border: '2px solid red',
                background: '#fff',
                color: '#000',
                fontSize: '16px',
                zIndex: 99999,
                position: 'relative'
              }}
            />
          </div>

          <div style={{ position: 'relative', zIndex: 1001, pointerEvents: 'auto' }}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 star-wars-form">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-cyan-400 uppercase tracking-wider">
                  Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  autoComplete="name"
                  className="debug-input"
                  placeholder="Your name"
                  onClick={() => handleInputTest('name')}
                  onFocus={() => console.log('Name input focused!')}
                  onMouseDown={() => console.log('Name input mouse down!')}
                  style={{ 
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #00d4ff',
                    borderRadius: '6px',
                    background: '#000',
                    color: '#fff',
                    fontSize: '16px',
                    pointerEvents: 'auto',
                    zIndex: 9999,
                    position: 'relative',
                    cursor: 'text',
                    touchAction: 'manipulation',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                    appearance: 'none'
                  }}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-cyan-400 uppercase tracking-wider">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  autoComplete="email"
                  className="debug-input"
                  placeholder="your.email@example.com"
                  style={{ 
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #00d4ff',
                    borderRadius: '6px',
                    background: '#000',
                    color: '#fff',
                    fontSize: '16px',
                    pointerEvents: 'auto',
                    zIndex: 9999,
                    position: 'relative',
                    cursor: 'text',
                    touchAction: 'manipulation'
                  }}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-cyan-400 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={6}
                  className="debug-input"
                  placeholder="Tell me about your project or opportunity..."
                  style={{ 
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #00d4ff',
                    borderRadius: '6px',
                    background: '#000',
                    color: '#fff',
                    fontSize: '16px',
                    pointerEvents: 'auto',
                    zIndex: 9999,
                    position: 'relative',
                    cursor: 'text',
                    resize: 'none',
                    touchAction: 'manipulation',
                    minHeight: '120px'
                  }}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>
                )}
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full star-wars-button text-lg py-3">
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-3 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>

              {submitStatus === "success" && (
                <p className="text-sm text-green-400 text-center bg-green-400/10 p-4 rounded-md">
                  Thank you! Your message has been sent successfully.
                </p>
              )}

              {submitStatus === "error" && (
                <p className="text-sm text-red-400 text-center bg-red-400/10 p-4 rounded-md">
                  Sorry, there was an error sending your message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
        */}

        {/* Contact Information */}
        <div className="space-y-8">
          <Card className="star-wars-card group hover:scale-[1.01] transition-transform duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl star-wars-text star-wars-glow">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-cyan-400" />
                <div className="space-y-1">
                  <div className="font-medium text-cyan-400 uppercase tracking-wider text-sm">Email</div>
                  <a
                    href={`mailto:${resume.profile.links.email}`}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-lg"
                  >
                    {resume.profile.links.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-cyan-400" />
                <div className="space-y-1">
                  <div className="font-medium text-cyan-400 uppercase tracking-wider text-sm">Phone</div>
                  <a
                    href={`tel:${resume.profile.links.phone}`}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-lg"
                  >
                    {resume.profile.links.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-cyan-400" />
                <div className="space-y-1">
                  <div className="font-medium text-cyan-400 uppercase tracking-wider text-sm">Location</div>
                  <div className="text-gray-300 text-lg">{resume.profile.location}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="star-wars-card group hover:scale-[1.01] transition-transform duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl star-wars-text star-wars-glow">What I&apos;m Looking For</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h3 className="font-medium text-cyan-400 uppercase tracking-wider">Backend & Infrastructure Roles</h3>
                <p className="text-gray-300 leading-relaxed">
                  I&apos;m particularly interested in roles focused on performance optimization, 
                  system architecture, and developer productivity tools.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-medium text-cyan-400 uppercase tracking-wider">Full-Stack Opportunities</h3>
                <p className="text-gray-300 leading-relaxed">
                  Open to full-stack positions where I can leverage my experience across 
                  the entire development stack.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-medium text-cyan-400 uppercase tracking-wider">Remote & Hybrid</h3>
                <p className="text-gray-300 leading-relaxed">
                  Prefer remote or hybrid work arrangements, with occasional travel for 
                  team meetings and collaboration.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="star-wars-card group hover:scale-[1.01] transition-transform duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl star-wars-text star-wars-glow">Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
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
