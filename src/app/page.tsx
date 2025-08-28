"use client"

import { ArrowRight, Download, Github, Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { resume, formatDateRange } from "@/lib/resume"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactForm = z.infer<typeof contactSchema>

export default function HomePage() {
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

  const topSkills = [
    ...resume.skills.languages.slice(0, 3),
    ...resume.skills.frameworks.slice(0, 2),
    ...resume.skills.cloud.slice(0, 2),
  ]

  const skillCategories = [
    {
      name: "Languages",
      skills: resume.skills.languages,
      description: "Programming languages I use for development",
    },
    {
      name: "Frameworks & Libraries",
      skills: resume.skills.frameworks,
      description: "Frameworks and libraries for building applications",
    },
    {
      name: "Cloud & Infrastructure",
      skills: resume.skills.cloud,
      description: "Cloud platforms and infrastructure tools",
    },
    {
      name: "Data & Analytics",
      skills: resume.skills.data,
      description: "Data processing, storage, and analytics technologies",
    },
    {
      name: "Development Practices",
      skills: resume.skills.practices,
      description: "Methodologies and best practices",
    },
    {
      name: "Tools & Platforms",
      skills: resume.skills.tools,
      description: "Development tools and platforms",
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main content landmark */}
      <main id="main-content" role="main">
        {/* Hero Section */}
        <section id="home" className="py-12 sm:py-16 lg:py-20 text-center star-wars-hero">
        <div className="mx-auto max-w-4xl relative z-10">
          <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight star-wars-title">
            {resume.profile.name}
          </h1>
          <p className="mb-6 sm:mb-8 text-lg sm:text-xl lg:text-2xl text-cyan-400 star-wars-glow uppercase tracking-wider">
            {resume.profile.headline}
          </p>
          <p className="mb-8 sm:mb-12 text-base sm:text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto px-4">
            {resume.profile.summary}
          </p>
          
          {/* Key Skills */}
          <div className="mb-8 sm:mb-12 flex flex-wrap justify-center gap-2 px-4">
            {topSkills.map((skill) => (
              <Badge key={skill} className="star-wars-badge text-xs sm:text-sm">
                {skill}
              </Badge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:justify-center px-4" role="group" aria-label="Main call-to-action buttons">
            <Button asChild size="lg" className="star-wars-button w-full sm:w-auto">
              <a href="#projects" aria-label="View my projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="star-wars-button w-full sm:w-auto">
              <a href="/resume.pdf" target="_blank" download aria-label="Download my resume (opens in new tab)">
                <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
            </Button>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:justify-center mt-4 sm:mt-5 px-4">
            <Button variant="outline" size="lg" asChild className="star-wars-button w-full sm:w-auto">
              <a href="#contact" aria-label="Go to contact form">
                Contact Me
                <Send className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 star-wars-section" aria-labelledby="about-heading">
        <div className="mb-8 sm:mb-12 text-center px-4">
          <h2 id="about-heading" className="mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold star-wars-title star-wars-glow">About Me</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Learn more about my background, values, and what drives me in software development.
          </p>
        </div>

        <div className="grid gap-8 sm:gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 sm:space-y-12">
            {/* Professional Bio */}
            <Card className="star-wars-card group hover:scale-[1.01] transition-transform duration-300">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="text-xl sm:text-2xl star-wars-text star-wars-glow">Professional Background</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  I&apos;m a full-stack software engineer with over 5 years of experience building 
                  scalable applications and improving developer productivity. My journey in 
                  software development began with a passion for solving complex problems and 
                  creating tools that make a difference.
                </p>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  Throughout my career, I&apos;ve focused on performance optimization, system architecture, 
                  and building internal tools that streamline development workflows. I believe in 
                  writing clean, maintainable code and creating systems that scale with the needs 
                  of the business.
                </p>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  Currently, I&apos;m seeking backend and infrastructure roles where I can leverage my 
                  expertise in performance optimization and developer productivity to make a 
                  significant impact on engineering teams and product development.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="star-wars-card group hover:scale-[1.01] transition-transform duration-300">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="text-xl sm:text-2xl star-wars-text star-wars-glow">Values & Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
                  <div className="space-y-3 sm:space-y-4 group/item">
                    <h3 className="text-lg sm:text-xl font-semibold star-wars-text group-hover/item:text-cyan-400 transition-colors">Performance First</h3>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      I prioritize performance optimization and efficient resource utilization 
                      in all my work, ensuring applications run smoothly and scale effectively.
                    </p>
                  </div>
                  <div className="space-y-3 sm:space-y-4 group/item">
                    <h3 className="text-lg sm:text-xl font-semibold star-wars-text group-hover/item:text-cyan-400 transition-colors">Developer Experience</h3>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      I believe in creating tools and systems that improve developer productivity 
                      and reduce friction in the development process.
                    </p>
                  </div>
                  <div className="space-y-3 sm:space-y-4 group/item">
                    <h3 className="text-lg sm:text-xl font-semibold star-wars-text group-hover/item:text-cyan-400 transition-colors">Clean Architecture</h3>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      I design systems with maintainability and scalability in mind, using 
                      proven patterns and best practices.
                    </p>
                  </div>
                  <div className="space-y-3 sm:space-y-4 group/item">
                    <h3 className="text-lg sm:text-xl font-semibold star-wars-text group-hover/item:text-cyan-400 transition-colors">Continuous Learning</h3>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      I stay current with industry trends and technologies, always looking 
                      for ways to improve my skills and knowledge.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 sm:space-y-8">
            {/* Location & Contact */}
            <Card className="star-wars-card group hover:scale-[1.01] transition-transform duration-300">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-lg sm:text-xl star-wars-text star-wars-glow">Location & Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="space-y-1 sm:space-y-2">
                  <div className="text-xs sm:text-sm font-medium text-cyan-400 uppercase tracking-wider">Location</div>
                  <div className="text-gray-300 text-base sm:text-lg">{resume.profile.location}</div>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <div className="text-xs sm:text-sm font-medium text-cyan-400 uppercase tracking-wider">Email</div>
                  <a
                    href={`mailto:${resume.profile.links.email}`}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-base sm:text-lg break-all"
                  >
                    {resume.profile.links.email}
                  </a>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <div className="text-xs sm:text-sm font-medium text-cyan-400 uppercase tracking-wider">Phone</div>
                  <a
                    href={`tel:${resume.profile.links.phone}`}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-base sm:text-lg"
                  >
                    {resume.profile.links.phone}
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="star-wars-card group hover:scale-[1.01] transition-transform duration-300">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-lg sm:text-xl star-wars-text star-wars-glow">Interests & Hobbies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {resume.interests.map((interest) => (
                    <Badge key={interest} className="star-wars-badge text-xs sm:text-sm hover:scale-105 transition-transform">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-16 star-wars-section" aria-labelledby="experience-heading">
        <div className="mb-8 sm:mb-12 text-center px-4">
          <h2 id="experience-heading" className="mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold star-wars-title star-wars-glow">Experience</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My professional journey across software development, focusing on performance optimization, 
            developer productivity, and scalable systems.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16 star-wars-timeline">
          {resume.experience.map((company, companyIndex) => (
            <div key={companyIndex} className="relative star-wars-timeline-item">
              {/* Company Header */}
              <div className="mb-6 sm:mb-8 text-center px-4">
                <h3 className="text-2xl sm:text-3xl font-bold star-wars-text star-wars-glow mb-2">{company.company}</h3>
                <p className="text-base sm:text-lg text-cyan-400 uppercase tracking-wider">{company.location}</p>
              </div>

              {/* Roles */}
              <div className="space-y-6 sm:space-y-8">
                {company.roles.map((role, roleIndex) => (
                  <Card key={roleIndex} className="star-wars-card relative group hover:scale-[1.02] transition-transform duration-300">
                    <CardHeader className="pb-3 sm:pb-4">
                      <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="space-y-1 sm:space-y-2">
                          <CardTitle className="text-xl sm:text-2xl star-wars-text group-hover:text-cyan-400 transition-colors">
                            {role.title}
                          </CardTitle>
                          <p className="text-xs sm:text-sm text-cyan-400 uppercase tracking-wider font-medium">
                            {formatDateRange(role.start, role.end)}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {role.tech.slice(0, 4).map((tech) => (
                            <Badge key={tech} className="star-wars-badge text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {role.tech.length > 4 && (
                            <div className="relative group/skills">
                              <Badge 
                                className="star-wars-badge text-xs cursor-help hover:bg-cyan-400/20 transition-colors"
                                aria-describedby={`skills-tooltip-${companyIndex}-${roleIndex}`}
                                tabIndex={0}
                              >
                                +{role.tech.length - 4} more
                              </Badge>
                              {/* Tooltip */}
                              <div 
                                id={`skills-tooltip-${companyIndex}-${roleIndex}`}
                                className="absolute top-full right-0 mt-2 px-3 py-2 bg-black/90 border border-cyan-400/50 rounded-lg shadow-lg opacity-0 group-hover/skills:opacity-100 group-focus-within/skills:opacity-100 transition-opacity duration-200 pointer-events-none z-[9999] min-w-max max-w-xs"
                                role="tooltip"
                                aria-hidden="true"
                              >
                                <div className="flex flex-wrap gap-1">
                                  {role.tech.slice(4).map((tech) => (
                                    <span key={tech} className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded border border-cyan-400/30 whitespace-nowrap">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                                {/* Arrow */}
                                <div className="absolute bottom-full right-4 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-cyan-400/50"></div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 sm:space-y-4">
                        {role.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="flex items-start gap-3 sm:gap-4 group/item">
                            <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0 star-wars-glow group-hover/item:scale-125 transition-transform"></div>
                            <span className="text-gray-300 leading-relaxed text-sm sm:text-base group-hover/item:text-gray-200 transition-colors">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 star-wars-section" aria-labelledby="skills-heading">
        <div className="mb-8 sm:mb-12 text-center px-4">
          <h2 id="skills-heading" className="mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold star-wars-title star-wars-glow">Skills & Technologies</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and expertise across 
            different domains of software development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 mb-12 sm:mb-16">
          {skillCategories.map((category) => (
            <Card key={category.name} className="star-wars-card h-fit star-wars-space group hover:scale-[1.02] transition-transform duration-300">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-xl sm:text-2xl star-wars-text group-hover:text-cyan-400 transition-colors">
                  {category.name}
                </CardTitle>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {category.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} className="star-wars-badge text-xs sm:text-sm hover:scale-105 transition-transform">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Strengths */}
        <Card className="star-wars-card">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl star-wars-text star-wars-glow">Key Strengths</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4 group">
                <h3 className="text-xl font-semibold star-wars-text group-hover:text-cyan-400 transition-colors">Performance Optimization</h3>
                <p className="text-gray-300 leading-relaxed">
                  Expertise in improving application performance through thread pool optimization, 
                  concurrency management, and system architecture improvements.
                </p>
              </div>
              <div className="space-y-4 group">
                <h3 className="text-xl font-semibold star-wars-text group-hover:text-cyan-400 transition-colors">Developer Productivity</h3>
                <p className="text-gray-300 leading-relaxed">
                  Building internal tools and systems that streamline development workflows 
                  and reduce cycle time for teams.
                </p>
              </div>
              <div className="space-y-4 group">
                <h3 className="text-xl font-semibold star-wars-text group-hover:text-cyan-400 transition-colors">Full-Stack Development</h3>
                <p className="text-gray-300 leading-relaxed">
                  Experience across the entire stack from frontend frameworks to backend 
                  systems and cloud infrastructure.
                </p>
              </div>
              <div className="space-y-4 group">
                <h3 className="text-xl font-semibold star-wars-text group-hover:text-cyan-400 transition-colors">System Architecture</h3>
                <p className="text-gray-300 leading-relaxed">
                  Designing scalable systems with proper error handling, monitoring, 
                  and maintainable code patterns.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 star-wars-section" aria-labelledby="projects-heading">
        <div className="mb-8 sm:mb-12 text-center px-4">
          <h2 id="projects-heading" className="mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold star-wars-title star-wars-glow">Featured Projects</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Recent work showcasing my expertise in performance optimization and developer productivity
          </p>
        </div>
        
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resume.projects.slice(0, 6).map((project) => (
            <Card key={project.slug} className="star-wars-card group star-wars-space hover:scale-[1.02] transition-transform duration-300">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="group-hover:text-cyan-400 transition-colors star-wars-text text-lg sm:text-xl">
                  {project.name}
                </CardTitle>
                <CardDescription className="text-gray-300 text-sm">{project.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-3 sm:mb-4 flex flex-wrap gap-1 sm:gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge key={tech} className="star-wars-badge text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-1 sm:space-y-2">
                  {project.impact.slice(0, 2).map((impact, index) => (
                    <p key={index} className="text-xs sm:text-sm text-gray-300">
                      • {impact}
                    </p>
                  ))}
                </div>
                <div className="mt-3 sm:mt-4 flex gap-1 sm:gap-2">
                  {project.links.github && (
                    <Button variant="ghost" size="sm" className="star-wars-button text-xs sm:text-sm" asChild>
                      <a href={project.links.github} target="_blank" rel="noreferrer">
                        <Github className="mr-1 sm:mr-2 h-3 w-3" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button variant="ghost" size="sm" className="star-wars-button text-xs sm:text-sm" asChild>
                      <a href={project.links.demo} target="_blank" rel="noreferrer">
                        <ArrowRight className="mr-1 sm:mr-2 h-3 w-3" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 star-wars-section" aria-labelledby="contact-heading">
        <div className="mb-8 sm:mb-12 text-center px-4">
          <h2 id="contact-heading" className="mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold star-wars-title star-wars-glow">Get In Touch</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I&apos;m always interested in hearing about new opportunities and interesting projects. 
            Feel free to reach out if you&apos;d like to connect!
          </p>
        </div>

        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="star-wars-card group hover:scale-[1.01] transition-transform duration-300">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-xl sm:text-2xl star-wars-text star-wars-glow">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8 star-wars-form" aria-label="Contact form">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-cyan-400 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    className="w-full rounded-md border border-input bg-background px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200 focus:border-cyan-400"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-xs sm:text-sm text-red-400">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-cyan-400 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-input bg-background px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200 focus:border-cyan-400"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-xs sm:text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-cyan-400 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={4}
                    className="w-full rounded-md border border-input bg-background px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200 focus:border-cyan-400 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-xs sm:text-sm text-red-400">{errors.message.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full star-wars-button text-base sm:text-lg py-2 sm:py-3"
                  aria-describedby={submitStatus !== "idle" ? "submit-status" : undefined}
                >
                  {isSubmitting ? (
                    <>
                      <span className="sr-only">Sending message</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-3 h-5 w-5" aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <p id="submit-status" className="text-sm text-green-400 text-center bg-green-400/10 p-4 rounded-md" role="status" aria-live="polite">
                    Thank you! Your message has been sent successfully.
                  </p>
                )}

                {submitStatus === "error" && (
                  <p id="submit-status" className="text-sm text-red-400 text-center bg-red-400/10 p-4 rounded-md" role="status" aria-live="polite">
                    Sorry, there was an error sending your message. Please try again.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>

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
          </div>
        </div>
      </section>
      </main>
    </div>
  )
}

