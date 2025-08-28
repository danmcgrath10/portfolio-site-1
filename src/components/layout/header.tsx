"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="star-wars-nav sticky top-0 z-50 w-full border-b border-cyan-400/20 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold star-wars-text star-wars-glow">
            DANIEL MCGRATH
          </h1>
          <span className="text-sm text-cyan-400 uppercase tracking-wider">
            Galactic Engineer
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6 text-sm font-medium">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "star-wars-nav-link transition-colors hover:text-cyan-400 uppercase tracking-wider",
                pathname === item.href
                  ? "text-cyan-400 active"
                  : "text-gray-300"
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
