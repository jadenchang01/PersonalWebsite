"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { icon: Github, href: "https://github.com/jadenchang01/", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/inhwa-jaden-chang/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:chang.ihj05@gmail.com", label: "Email" },
]

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
          Jaden Chang
        </h1>
        <p className="text-xl md:text-2xl text-primary font-medium">
          Data Analyst & Interdisciplinary Builder. Curious About Everything.
        </p>
      </div>

      <nav className="mt-16 space-y-4" aria-label="In-page navigation">
        <NavLink href="#about">About</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#interests">Interests</NavLink>
      </nav>

      <div className="mt-16 flex items-center gap-5">
        {socialLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label={link.label}
          >
            <link.icon className="h-5 w-5" />
          </Link>
        ))}
      </div>
    </section>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
    >
      <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all" />
      {children}
    </a>
  )
}
