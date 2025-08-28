import { Github, Linkedin, Mail } from "lucide-react"

import { resume } from "@/lib/resume"

export function Footer() {
  return (
    <footer className="border-t border-cyan-400/20 bg-black/50 backdrop-blur-sm" role="contentinfo">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 py-8 md:h-20 md:flex-row md:py-6">
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
          <p className="text-center text-sm text-gray-300 md:text-left">
            Built by <span className="star-wars-text star-wars-glow">Daniel McGrath</span>. The source code is available on{" "}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-cyan-400 hover:text-orange-400 transition-colors"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <div className="flex items-center space-x-6" role="group" aria-label="Social media and contact links">
          {resume.profile.links.github && (
            <a
              href={resume.profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded p-1"
              aria-label="Visit GitHub profile (opens in new tab)"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </a>
          )}
          {resume.profile.links.linkedin && (
            <a
              href={resume.profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded p-1"
              aria-label="Visit LinkedIn profile (opens in new tab)"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">LinkedIn</span>
            </a>
          )}
          <a
            href={`mailto:${resume.profile.links.email}`}
            className="text-gray-300 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded p-1"
            aria-label="Send email"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
      <div className="border-t border-cyan-400/10 py-3 text-center">
        <p className="text-xs text-gray-400 uppercase tracking-widest">
          May the Force be with your code
        </p>
      </div>
    </footer>
  )
}
