import Link from "next/link"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { resume } from "@/lib/resume"

export default function HomePage() {
  const topSkills = [
    ...resume.skills.languages.slice(0, 3),
    ...resume.skills.frameworks.slice(0, 2),
    ...resume.skills.cloud.slice(0, 2),
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            {resume.profile.name}
          </h1>
          <p className="mb-8 text-xl text-muted-foreground sm:text-2xl">
            {resume.profile.headline}
          </p>
          <p className="mb-12 text-lg leading-relaxed text-muted-foreground">
            {resume.profile.summary}
          </p>
          
          {/* Key Skills */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {topSkills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/resume.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex justify-center space-x-4">
            {resume.profile.links.github && (
              <Button variant="ghost" size="icon" asChild>
                <a href={resume.profile.links.github} target="_blank" rel="noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
            )}
            {resume.profile.links.linkedin && (
              <Button variant="ghost" size="icon" asChild>
                <a href={resume.profile.links.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            )}
            <Button variant="ghost" size="icon" asChild>
              <a href={`mailto:${resume.profile.links.email}`}>
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            Recent work showcasing my expertise in performance optimization and developer productivity
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resume.projects.slice(0, 3).map((project) => (
            <Card key={project.slug} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {project.name}
                </CardTitle>
                <CardDescription>{project.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-2">
                  {project.impact.slice(0, 2).map((impact, index) => (
                    <p key={index} className="text-sm text-muted-foreground">
                      • {impact}
                    </p>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="mt-4 w-full" asChild>
                  <Link href={`/projects/${project.slug}`}>
                    View Details
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-primary">
              {resume.experience.length}
            </div>
            <div className="text-muted-foreground">Companies</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-primary">
              {resume.projects.length}
            </div>
            <div className="text-muted-foreground">Projects</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-primary">
              {getAllSkills().length}
            </div>
            <div className="text-muted-foreground">Skills</div>
          </div>
        </div>
      </section>
    </div>
  )
}

function getAllSkills() {
  const skills: string[] = []
  Object.values(resume.skills).forEach((skillList) => {
    skills.push(...skillList)
  })
  return skills
}
