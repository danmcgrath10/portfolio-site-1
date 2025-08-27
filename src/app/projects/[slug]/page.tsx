import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Github, Calendar, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getProjectBySlug } from "@/lib/resume"

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      {/* Project Header */}
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">{project.name}</h1>
        <p className="mb-6 text-xl text-muted-foreground">{project.summary}</p>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{project.role}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{project.dates}</span>
          </div>
        </div>
      </div>

      {/* Project Links */}
      {(project.links.github || project.links.demo) && (
        <div className="mb-8 flex gap-4">
          {project.links.github && (
            <Button asChild>
              <a href={project.links.github} target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          )}
          {project.links.demo && (
            <Button variant="outline" asChild>
              <a href={project.links.demo} target="_blank" rel="noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Project Description */}
          <Card>
            <CardHeader>
              <CardTitle>About This Project</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {project.summary}
              </p>
            </CardContent>
          </Card>

          {/* Impact */}
          <Card>
            <CardHeader>
              <CardTitle>Impact & Results</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.impact.map((impact, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{impact}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* What I Learned */}
          <Card>
            <CardHeader>
              <CardTitle>What I Learned</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                This project provided valuable experience in performance optimization, 
                system architecture, and developer productivity tools. The challenges 
                encountered helped me develop a deeper understanding of concurrent 
                programming, error handling, and scalable system design.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Technologies */}
          <Card>
            <CardHeader>
              <CardTitle>Technologies Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Project Details */}
          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm font-medium text-muted-foreground">Role</div>
                <div>{project.role}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">Timeline</div>
                <div>{project.dates}</div>
              </div>
              {project.links.github && (
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Repository</div>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline"
                  >
                    View on GitHub
                  </a>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
