import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { resume } from "@/lib/resume"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">About Me</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Learn more about my background, values, and what drives me in software development.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Professional Bio */}
          <Card>
            <CardHeader>
              <CardTitle>Professional Background</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a full-stack software engineer with over 5 years of experience building 
                scalable applications and improving developer productivity. My journey in 
                software development began with a passion for solving complex problems and 
                creating tools that make a difference.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Throughout my career, I&apos;ve focused on performance optimization, system architecture, 
                and building internal tools that streamline development workflows. I believe in 
                writing clean, maintainable code and creating systems that scale with the needs 
                of the business.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, I&apos;m seeking backend and infrastructure roles where I can leverage my 
                expertise in performance optimization and developer productivity to make a 
                significant impact on engineering teams and product development.
              </p>
            </CardContent>
          </Card>

          {/* Values */}
          <Card>
            <CardHeader>
              <CardTitle>Values & Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Performance First</h3>
                  <p className="text-sm text-muted-foreground">
                    I prioritize performance optimization and efficient resource utilization 
                    in all my work, ensuring applications run smoothly and scale effectively.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Developer Experience</h3>
                  <p className="text-sm text-muted-foreground">
                    I believe in creating tools and systems that improve developer productivity 
                    and reduce friction in the development process.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Clean Architecture</h3>
                  <p className="text-sm text-muted-foreground">
                    I design systems with maintainability and scalability in mind, using 
                    proven patterns and best practices.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Continuous Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    I stay current with industry trends and technologies, always looking 
                    for ways to improve my skills and knowledge.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              {resume.education.map((edu, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{edu.school}</h3>
                      <p className="text-muted-foreground">{edu.degree}</p>
                      {edu.minor && (
                        <p className="text-sm text-muted-foreground">Minor: {edu.minor}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{edu.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Location & Contact */}
          <Card>
            <CardHeader>
              <CardTitle>Location & Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm font-medium text-muted-foreground">Location</div>
                <div>{resume.profile.location}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">Email</div>
                <a
                  href={`mailto:${resume.profile.links.email}`}
                  className="text-primary hover:underline"
                >
                  {resume.profile.links.email}
                </a>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">Phone</div>
                <a
                  href={`tel:${resume.profile.links.phone}`}
                  className="text-primary hover:underline"
                >
                  {resume.profile.links.phone}
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Interests */}
          <Card>
            <CardHeader>
              <CardTitle>Interests & Hobbies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {resume.interests.map((interest) => (
                  <Badge key={interest} variant="outline" className="text-sm">
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Facts */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Facts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm font-medium text-muted-foreground">Experience</div>
                <div>5+ years in software development</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">Focus Areas</div>
                <div>Backend, Performance, Developer Tools</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">Current Status</div>
                <div>Open to new opportunities</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
