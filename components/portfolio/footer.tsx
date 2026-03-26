import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 text-sm text-muted-foreground flex flex-col items-center sm:items-start gap-6">
      <div className="space-y-2 text-center sm:text-left">
        <h3 className="text-lg font-medium text-foreground">Connect</h3>
        <p className="leading-relaxed text-muted-foreground">
          I am open to contact through platforms below!
        </p>
      </div>

      <div className="flex items-center gap-5">
        <a
          href="mailto:chang.ihj05@gmail.com"
          className="text-muted-foreground hover:text-foreground transition-colors p-2 -m-2"
          aria-label="Email"
        >
          <Mail className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/inhwa-jaden-chang-461550298"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors p-2 -m-2"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="https://github.com/Jaden-5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors p-2 -m-2"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
      </div>

      <p className="pt-8 text-xs text-muted-foreground/60 border-t border-border mt-4 w-full text-center sm:text-left">
        © {new Date().getFullYear()} Jaden Chang. Redesigned with Next.js and Tailwind CSS.
      </p>
    </footer>
  )
}
