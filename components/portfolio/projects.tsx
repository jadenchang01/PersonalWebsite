import { ArrowUpRight, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "Family Atlas",
    description: "Rescuing digital archives from unorganized mess, this desktop app transforms family trip images on your desktop into an intuitive, map-integrated gallery. It pairs a multi-class LDA model trained on CV data with optimized geospatial caching.",
    image: "/Images/FamilyAtlas.png",
    link: "https://github.com/jadenchang01/FamilyAtlas",
    isPaper: false,
    technologies: ["Python", "Machine Learning", "Computer Vision"],
  },
  {
    title: "Integrated Artillery Maintenance System",
    description: "I led a four-member team to develop an artillery maintenance-forecast platform predicting quarterly part demand. Placed 1st place out of 144 teams in the Applied Data Science Competition.",
    image: "/Images/k9.jpg",
    link: "https://github.com/jadenchang01/IAMS",
    isPaper: false,
    technologies: ["Data Science", "UI/UX", "React", "Team Project"],
  },
  {
    title: "Personal Portfolio Website",
    description: "The website you are viewing was developed entirely using HTML, CSS, and JavaScript. Now redesigned with Next.js and Tailwind CSS.",
    image: "/Images/Halla.JPG",
    link: "https://github.com/Jaden-5/PersonalWebsite",
    isPaper: false,
    technologies: ["Next.js", "React", "HTML/CSS", "JavaScript"],
  },
  {
    title: "CedarStone Website Development",
    description: "Contributed to developing the homepage for a start-up business consulting firm using modern web development practices.",
    image: "/Images/cslogo.png",
    link: "https://cedarstone.co.kr",
    isPaper: false,
    technologies: ["Web Development", "UI/UX", "Collaboration"],
  },
  {
    title: "King of the Pacific (15112 Term Project)",
    description: "Play an online version of Battleship board game with an algorithm of different levels of difficulty.",
    image: "/Images/startbgcopy.jpeg",
    link: "https://github.com/Jaden-5/TermProject",
    isPaper: false,
    technologies: ["Python", "Game Development"],
  },
  {
    title: "Avoid The Rush (Hack 112)",
    description: "Move nearby cars, trucks, and buses to free the red car. Developed in 24 hours with my team for a hackathon.",
    image: "/Images/starterimage copy.jpeg",
    link: "https://github.com/Jaden-5/AvoidTheRush",
    isPaper: false,
    technologies: ["Python", "Hackathon"],
  },
]

const papers = [
  {
    title: "Exploring Turing's Argument: Can Machines Think?",
    description: "Evaluates Alan Turing's argument of whether machines can think within the framework of modern artificial intelligence.",
    image: "/Images/ai.jpg",
    link: "https://drive.google.com/file/d/1lOG3m-Is2u0cQTg0OeIVtO7rsXPg2BO9/view?usp=drive_link",
    isPaper: true,
    technologies: ["AI", "Philosophy", "Computer Science"],
  },
  {
    title: "What is the Relationship between Justice and Law?",
    description: "Elucidates the distance between law and justice through looking at historical precedents of Jim Crow laws, court cases, along with contemporary inequity.",
    image: "/Images/law.jpeg",
    link: "https://drive.google.com/file/d/176Ul_WgTL4Qj3BgKZ_MGBxZ1hr-NkKbr/view?usp=drive_link",
    isPaper: true,
    technologies: ["Philosophy", "Law", "Ethics"],
  },
  {
    title: "Energy Poverty and Human Rights: A Candle of Hope for Mankind",
    description: "Addresses the missing link between the international economic gap and deprivation of human rights in impoverished regions via a holistic literature review.",
    image: "/Images/energy.webp",
    link: "https://drive.google.com/file/d/1TI1p1IMShNA5mYAwMobrTpSoQSLzPo9K/view?usp=drive_link",
    isPaper: true,
    technologies: ["Human Rights", "Energy Policy", "Research"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 scroll-mt-24">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8 flex items-center gap-4 lg:hidden">
        <span className="h-px w-8 bg-muted-foreground" />
        Projects & Papers
      </h2>

      <div className="space-y-12">
        <h3 className="text-xl font-semibold text-foreground">Programming Projects</h3>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}

        <h3 className="text-xl font-semibold text-foreground mt-16 pt-8 border-t border-border">Research Papers</h3>
        {papers.map((paper, index) => (
          <ProjectCard key={index} {...paper} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({
  title,
  description,
  image,
  link,
  isPaper,
  technologies,
}: {
  title: string
  description: string
  image: string
  link: string
  isPaper: boolean
  technologies: string[]
}) {
  return (
    <Link
      href={link}
      target="_blank"
      className="group relative grid md:grid-cols-[200px_1fr] gap-6 p-4 -mx-4 rounded-lg hover:bg-card/50 transition-colors"
    >
      <div className="relative aspect-video md:aspect-[4/3] rounded-md overflow-hidden border border-border bg-card">
        <Image
          src={image}
          alt={title}
          fill
          unoptimized
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="space-y-3">
        <h3 className="font-medium flex items-center gap-2 leading-tight text-foreground group-hover:text-primary transition-colors">
          {isPaper ? <FileText className="h-4 w-4" /> : null}
          {title}
          <ArrowUpRight className="h-3.5 w-3.5 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        <ul className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  )
}
