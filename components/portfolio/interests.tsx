import { BookOpen, Mountain, Globe, Music, Camera, MonitorPlay } from "lucide-react"
import Link from "next/link"

const interests = [
  {
    icon: BookOpen,
    title: "Reading",
    description: "I often spend my free time reading books from technology, business, classic novels, to broader contemporary non-fictions. Top picks: Nexus, The Psychology of Money, Co-Intelligence.",
  },
  {
    icon: Mountain,
    title: "Hiking Adventures",
    description: "Since kindergarten, hiking and camping have been a meaningful part of my life. 50+ National Parks visited, 8 summited, 10+ years of camping.",
  },
  {
    icon: Globe,
    title: "Global Journey",
    description: "Living in Singapore, Shanghai, Seoul, and now Pittsburgh navigating through diverse cultures. 8 Schools across 20+ countries.",
  },
  {
    icon: MonitorPlay,
    title: "Sports & Athletics",
    description: "I enjoy watching Formula 1 and Football, and playing Track & Field and Basketball.",
  },
  {
    icon: Music,
    title: "Music",
    description: "Music has been a part of my journey. Artists I love: Post Malone, Kendrick Lamar, SZA, keshi, Lauv, wave to earth, Jannabi.",
  },
  {
    icon: Camera,
    title: "Dance",
    description: "Most memorable moment in the army? Dancing on stage with a thousand people watching. A massive rush I'll never forget.",
  },
]

export function Interests() {
  return (
    <section id="interests" className="py-24 scroll-mt-24">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8 flex items-center gap-4 lg:hidden">
        <span className="h-px w-8 bg-muted-foreground" />
        Personal Record
      </h2>

      <div className="space-y-4 text-muted-foreground leading-relaxed mb-12">
        <p>
          This section explores who I am as a person or a friend, off the stage of achievements and academics. Here are some hobbies and interests that keep me balanced and inspired.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {interests.map((interest, index) => (
          <InterestCard key={index} {...interest} />
        ))}
      </div>
    </section>
  )
}

function InterestCard({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Mountain
  title: string
  description: string
}) {
  return (
    <div className="group p-4 rounded-lg border border-border bg-card/30 hover:bg-card/50 hover:border-primary/30 transition-colors">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-md bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div className="space-y-1">
          <h3 className="font-medium text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}
