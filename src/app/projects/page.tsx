"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { ArrowRight, ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { resume, getAllSkills } from "@/lib/resume"

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTech, setSelectedTech] = useState<string>("")
  
  const allSkills = getAllSkills()
  const uniqueTech = Array.from(new Set(allSkills.map(skill => skill.name)))

  const filteredProjects = useMemo(() => {
    return resume.projects.filter((project) => {
      const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesTech = !selectedTech || project.tech.some(tech => 
        tech.toLowerCase().includes(selectedTech.toLowerCase())
      )
      
      return matchesSearch && matchesTech
    })
  }, [searchTerm, selectedTech])

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Projects</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A collection of my work showcasing expertise in performance optimization, 
          developer productivity, and full-stack development.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
          <select
            value={selectedTech}
            onChange={(e) => setSelectedTech(e.target.value)}
            className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="">All Technologies</option>
            {uniqueTech.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>
        
        {(searchTerm || selectedTech) && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Filtered by:</span>
            {searchTerm && (
              <Badge variant="secondary" className="text-xs">
                &quot;{searchTerm}&quot;
              </Badge>
            )}
            {selectedTech && (
              <Badge variant="secondary" className="text-xs">
                {selectedTech}
              </Badge>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSearchTerm("")
                setSelectedTech("")
              }}
              className="h-auto p-1 text-xs"
            >
              Clear
            </Button>
          </div>
        )}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <Card key={project.slug} className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                  {project.name}
                </CardTitle>
                <div className="flex space-x-1">
                  {project.links.github && (
                    <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                      <a href={project.links.github} target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </a>
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                      <a href={project.links.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">Demo</span>
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              <CardDescription className="line-clamp-3">
                {project.summary}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="mb-2 text-xs font-medium text-muted-foreground">
                  Technologies
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <div className="mb-2 text-xs font-medium text-muted-foreground">
                  Impact
                </div>
                <div className="space-y-1">
                  {project.impact.map((impact, index) => (
                    <p key={index} className="text-sm text-muted-foreground">
                      • {impact}
                    </p>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{project.role}</span>
                <span>{project.dates}</span>
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

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground mb-4">
            No projects found matching your criteria.
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm("")
              setSelectedTech("")
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* Results Count */}
      {filteredProjects.length > 0 && (
        <div className="mt-8 text-center text-sm text-muted-foreground">
          Showing {filteredProjects.length} of {resume.projects.length} projects
        </div>
      )}
    </div>
  )
}
