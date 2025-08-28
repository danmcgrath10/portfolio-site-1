import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { resume } from "@/lib/resume"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-16 text-center">
        <h1 className="mb-6 text-5xl font-bold star-wars-title star-wars-glow">About Me</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Learn more about my background, values, and what drives me in software development.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Professional Bio */}
          <Card className="star-wars-card group hover:scale-[1.01] transition-transform duration-300">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl star-wars-text star-wars-glow">Professional Background</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                I&apos;m a full-stack software engineer with over 5 years of experience building 
                scalable applications and improving developer productivity. My journey in 
                software development began with a passion for solving complex problems and 
                creating tools that make a difference.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Throughout my career, I&apos;ve focused on performance optimization, system architecture, 
                and building internal tools that streamline development workflows. I believe in 
                writing clean, maintainable code and creating systems that scale with the needs 
                of the business.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Currently, I&apos;m seeking backend, full stack, and infrastructure roles where I can leverage my 
                expertise in performance optimization and developer productivity to make a 
                significant impact on engineering teams and product development.
              </p>
            </CardContent>
          </Card>

          {/* Values */}
          <Card className="star-wars-card group hover:scale-[1.01] transition-transform duration-300">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl star-wars-text star-wars-glow">Values & Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4 group/item">
                  <h3 className="text-xl font-semibold star-wars-text group-hover/item:text-cyan-400 transition-colors">Performance First</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I prioritize performance optimization and efficient resource utilization 
                    in all my work, ensuring applications run smoothly and scale effectively.
                  </p>
                </div>
                <div className="space-y-4 group/item">
                  <h3 className="text-xl font-semibold star-wars-text group-hover/item:text-cyan-400 transition-colors">Developer Experience</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I believe in creating tools and systems that improve developer productivity 
                    and reduce friction in the development process.
                  </p>
                </div>
                <div className="space-y-4 group/item">
                  <h3 className="text-xl font-semibold star-wars-text group-hover/item:text-cyan-400 transition-colors">Clean Architecture</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I design systems with maintainability and scalability in mind, using 
                    proven patterns and best practices.
                  </p>
                </div>
                <div className="space-y-4 group/item">
                  <h3 className="text-xl font-semibold star-wars-text group-hover/item:text-cyan-400 transition-colors">Continuous Learning</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I stay current with industry trends and technologies, always looking 
                    for ways to improve my skills and knowledge.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="star-wars-card group hover:scale-[1.01] transition-transform duration-300">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl star-wars-text star-wars-glow">Education</CardTitle>
            </CardHeader>
            <CardContent>
              {resume.education.map((edu, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-start justify-between group/item">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold star-wars-text group-hover/item:text-cyan-400 transition-colors">{edu.school}</h3>
                      <p className="text-gray-300 text-lg">{edu.degree}</p>
                      {edu.minor && (
                        <p className="text-sm text-cyan-400 uppercase tracking-wider">Minor: {edu.minor}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-lg text-cyan-400 font-medium">{edu.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Location & Contact */}
          <Card className="star-wars-card group hover:scale-[1.01] transition-transform duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl star-wars-text star-wars-glow">Location & Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="text-sm font-medium text-cyan-400 uppercase tracking-wider">Location</div>
                <div className="text-gray-300 text-lg">{resume.profile.location}</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium text-cyan-400 uppercase tracking-wider">Email</div>
                <a
                  href={`mailto:${resume.profile.links.email}`}
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-lg"
                >
                  {resume.profile.links.email}
                </a>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium text-cyan-400 uppercase tracking-wider">Phone</div>
                <a
                  href={`tel:${resume.profile.links.phone}`}
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-lg"
                >
                  {resume.profile.links.phone}
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Interests */}
          <Card className="star-wars-card group hover:scale-[1.01] transition-transform duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl star-wars-text star-wars-glow">Interests & Hobbies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {resume.interests.map((interest) => (
                  <Badge key={interest} className="star-wars-badge text-sm hover:scale-105 transition-transform">
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Facts */}
          <Card className="star-wars-card group hover:scale-[1.01] transition-transform duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl star-wars-text star-wars-glow">Quick Facts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="text-sm font-medium text-cyan-400 uppercase tracking-wider">Experience</div>
                <div className="text-gray-300 text-lg">5+ years in software development</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium text-cyan-400 uppercase tracking-wider">Focus Areas</div>
                <div className="text-gray-300 text-lg">Backend, Performance, Developer Tools</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium text-cyan-400 uppercase tracking-wider">Current Status</div>
                <div className="text-gray-300 text-lg">Open to new opportunities</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
