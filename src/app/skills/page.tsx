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
      <div className="mb-16 text-center">
        <h1 className="mb-6 text-5xl font-bold star-wars-title star-wars-glow">Skills & Technologies</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A comprehensive overview of my technical skills and expertise across 
          different domains of software development.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {skillCategories.map((category) => (
          <Card key={category.name} className="star-wars-card h-fit star-wars-space group hover:scale-[1.02] transition-transform duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl star-wars-text group-hover:text-cyan-400 transition-colors">
                {category.name}
              </CardTitle>
              <p className="text-sm text-gray-300 leading-relaxed">
                {category.description}
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} className="star-wars-badge text-sm hover:scale-105 transition-transform">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Skills Summary */}
      <div className="mt-20">
        <Card className="star-wars-card">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl star-wars-text star-wars-glow">Skills Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="star-wars-stats">
              <div className="star-wars-stat">
                <div className="star-wars-stat-number">
                  {resume.skills.languages.length}
                </div>
                <div className="star-wars-stat-label">Languages</div>
              </div>
              <div className="star-wars-stat">
                <div className="star-wars-stat-number">
                  {resume.skills.frameworks.length}
                </div>
                <div className="star-wars-stat-label">Frameworks</div>
              </div>
              <div className="star-wars-stat">
                <div className="star-wars-stat-number">
                  {resume.skills.cloud.length}
                </div>
                <div className="star-wars-stat-label">Cloud Tools</div>
              </div>
              <div className="star-wars-stat">
                <div className="star-wars-stat-number">
                  {resume.skills.data.length}
                </div>
                <div className="star-wars-stat-label">Data Tools</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Strengths */}
      <div className="mt-20">
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
      </div>
    </div>
  )
}
