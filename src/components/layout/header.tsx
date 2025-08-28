"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <header className="bg-black/90 backdrop-blur-sm text-white p-4 sticky top-0 z-50 border-b border-cyan-400/20">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-xl font-bold star-wars-text">DANIEL MCGRATH</h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={handleMenuToggle}
            className="md:hidden p-2 rounded-md hover:bg-cyan-400/20 transition-colors duration-200 cursor-pointer z-50 relative"
            aria-label="Toggle navigation menu"
            type="button"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center">
          <nav className="flex flex-col items-center space-y-8 p-8">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-2xl font-bold text-gray-300 hover:text-cyan-400 transition-all duration-300 py-4 px-8 rounded-lg hover:bg-cyan-400/10 hover:scale-110 star-wars-text cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
