import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { resume, formatDateRange } from "@/lib/resume"

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Experience</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          My professional journey across software development, focusing on performance optimization, 
          developer productivity, and scalable systems.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-12">
        {resume.experience.map((company, companyIndex) => (
          <div key={companyIndex} className="relative">
            {/* Company Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold">{company.company}</h2>
              <p className="text-muted-foreground">{company.location}</p>
            </div>

            {/* Roles */}
            <div className="space-y-8">
              {company.roles.map((role, roleIndex) => (
                <Card key={roleIndex} className="relative">
                  <CardHeader>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <CardTitle className="text-xl">{role.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {formatDateRange(role.start, role.end)}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {role.tech.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {role.tech.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{role.tech.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {role.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-3">
                          <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">
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

      {/* Summary Stats */}
      <div className="mt-16">
        <Card>
          <CardHeader>
            <CardTitle>Experience Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-primary">
                  {resume.experience.length}
                </div>
                <div className="text-muted-foreground">Companies</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-primary">
                  {resume.experience.reduce((total, company) => total + company.roles.length, 0)}
                </div>
                <div className="text-muted-foreground">Roles</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-primary">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
