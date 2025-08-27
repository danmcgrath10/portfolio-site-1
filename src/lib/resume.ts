import resumeData from "../../data/resume.json"
import { formatDateRange } from "./utils"

export interface Profile {
  name: string
  headline: string
  location: string
  summary: string
  links: {
    email: string
    phone: string
    github?: string
    linkedin?: string
  }
}

export interface Skill {
  name: string
  category: string
}

export interface Skills {
  languages: string[]
  frameworks: string[]
  cloud: string[]
  data: string[]
  practices: string[]
  tools: string[]
}

export interface ExperienceRole {
  title: string
  start: string
  end?: string
  bullets: string[]
  tech: string[]
}

export interface Experience {
  company: string
  location: string
  roles: ExperienceRole[]
}

export interface Project {
  name: string
  summary: string
  impact: string[]
  tech: string[]
  links: Record<string, string>
  images: string[]
  slug: string
  role: string
  dates: string
}

export interface Education {
  school: string
  degree: string
  minor?: string
  year: string
  start: string
  end: string
}

export interface Certification {
  name: string
  issuer: string
  date: string
  url?: string
}

export interface Award {
  name: string
  issuer: string
  date: string
  description?: string
}

export interface Resume {
  profile: Profile
  skills: Skills
  experience: Experience[]
  projects: Project[]
  education: Education[]
  certifications: Certification[]
  awards: Award[]
  interests: string[]
}

export const resume: Resume = resumeData as Resume

export function getAllSkills(): Skill[] {
  const skills: Skill[] = []
  
  Object.entries(resume.skills).forEach(([category, skillList]) => {
    (skillList as string[]).forEach((skill: string) => {
      skills.push({ name: skill, category })
    })
  })
  
  return skills
}

export function getProjectsByTech(tech: string): Project[] {
  return resume.projects.filter((project) =>
    project.tech.some((t) => t.toLowerCase().includes(tech.toLowerCase()))
  )
}

export function getProjectBySlug(slug: string): Project | undefined {
  return resume.projects.find((project) => project.slug === slug)
}

export { formatDateRange }
