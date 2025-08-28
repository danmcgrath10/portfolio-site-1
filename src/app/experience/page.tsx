import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { resume, formatDateRange } from "@/lib/resume"

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-16 text-center">
        <h1 className="mb-6 text-5xl font-bold star-wars-title star-wars-glow">Experience</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          My professional journey across software development, focusing on performance optimization, 
          developer productivity, and scalable systems.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-16 star-wars-timeline">
        {resume.experience.map((company, companyIndex) => (
          <div key={companyIndex} className="relative star-wars-timeline-item">
            {/* Company Header */}
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold star-wars-text star-wars-glow mb-2">{company.company}</h2>
              <p className="text-lg text-cyan-400 uppercase tracking-wider">{company.location}</p>
            </div>

            {/* Roles */}
            <div className="space-y-8">
              {company.roles.map((role, roleIndex) => (
                <Card key={roleIndex} className="star-wars-card relative group hover:scale-[1.02] transition-transform duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-2xl star-wars-text group-hover:text-cyan-400 transition-colors">
                          {role.title}
                        </CardTitle>
                        <p className="text-sm text-cyan-400 uppercase tracking-wider font-medium">
                          {formatDateRange(role.start, role.end)}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {role.tech.slice(0, 4).map((tech) => (
                          <Badge key={tech} className="star-wars-badge text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {role.tech.length > 4 && (
                          <Badge className="star-wars-badge text-xs">
                            +{role.tech.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {role.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-4 group/item">
                          <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0 star-wars-glow group-hover/item:scale-125 transition-transform"></div>
                          <span className="text-gray-300 leading-relaxed text-base group-hover/item:text-gray-200 transition-colors">
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
      <div className="mt-20">
        <Card className="star-wars-card">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl star-wars-text star-wars-glow">Experience Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="star-wars-stats">
              <div className="star-wars-stat">
                <div className="star-wars-stat-number">
                  {resume.experience.length}
                </div>
                <div className="star-wars-stat-label">Companies</div>
              </div>
              <div className="star-wars-stat">
                <div className="star-wars-stat-number">
                  {resume.experience.reduce((total, company) => total + company.roles.length, 0)}
                </div>
                <div className="star-wars-stat-label">Roles</div>
              </div>
              <div className="star-wars-stat">
                <div className="star-wars-stat-number">5+</div>
                <div className="star-wars-stat-label">Years Experience</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
