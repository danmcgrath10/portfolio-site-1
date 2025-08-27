import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { resume } from "@/lib/resume"

export default function SkillsPage() {
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
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Skills & Technologies</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and expertise across 
          different domains of software development.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {skillCategories.map((category) => (
          <Card key={category.name} className="h-fit">
            <CardHeader>
              <CardTitle className="text-xl">{category.name}</CardTitle>
              <p className="text-sm text-muted-foreground">
                {category.description}
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Skills Summary */}
      <div className="mt-16">
        <Card>
          <CardHeader>
            <CardTitle>Skills Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-primary">
                  {resume.skills.languages.length}
                </div>
                <div className="text-muted-foreground">Languages</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-primary">
                  {resume.skills.frameworks.length}
                </div>
                <div className="text-muted-foreground">Frameworks</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-primary">
                  {resume.skills.cloud.length}
                </div>
                <div className="text-muted-foreground">Cloud Tools</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-primary">
                  {resume.skills.data.length}
                </div>
                <div className="text-muted-foreground">Data Tools</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Strengths */}
      <div className="mt-16">
        <Card>
          <CardHeader>
            <CardTitle>Key Strengths</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Performance Optimization</h3>
                <p className="text-muted-foreground">
                  Expertise in improving application performance through thread pool optimization, 
                  concurrency management, and system architecture improvements.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Developer Productivity</h3>
                <p className="text-muted-foreground">
                  Building internal tools and systems that streamline development workflows 
                  and reduce cycle time for teams.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Full-Stack Development</h3>
                <p className="text-muted-foreground">
                  Experience across the entire stack from frontend frameworks to backend 
                  systems and cloud infrastructure.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">System Architecture</h3>
                <p className="text-muted-foreground">
                  Designing scalable systems with proper error handling, monitoring, 
                  and maintainable code patterns.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
