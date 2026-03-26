import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 scroll-mt-24">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8 flex items-center gap-4 lg:hidden">
        <span className="h-px w-8 bg-muted-foreground" />
        About
      </h2>

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="shrink-0">
          <div className="relative w-32 h-32 md:w-48 md:h-48 overflow-hidden rounded-full border-4 border-card/50">
            <Image
              src="/Images/profile.jpeg"
              alt="Jaden Chang"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <h3 className="text-xl font-semibold text-foreground">Hello, I&apos;m Jaden!</h3>
          <p>
            My name is Jaden Chang — or Inhwa for Korean speakers. I am an interdisciplinary learner drawn to the points of intersection where ideas converge. I&apos;ve always been fascinated by the patterns that emerge when seemingly unrelated domains connect, and this curiosity naturally led me toward <span className="text-foreground font-medium">data science</span>: a field built on uncovering structures, insights, and connections from a vast pool of data.
          </p>
        </div>
      </div>

      <div className="space-y-4 text-muted-foreground leading-relaxed flex flex-col">
        <p>
          In hopes of better describing who I am beyond the rigid framework of resumes and CVs, this website illustrates the intersections that define my journey: where app development merges with strategic thinking; where quantitative modeling meets image analysis; and where professional rigor on campus connects to relaxed hiking off campus.
        </p>
        <p>
          With the basic idea of this website in mind, I invite you to explore my website, which I hope will reveal a clearer portrait of who I am.
        </p>
      </div>

      <div className="mt-12">
        <h4 className="font-medium text-foreground mb-6">Skills & Interests</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <SkillCategory
            title="Programming"
            skills={["Python", "C", "SQL", "R"]}
          />
          <SkillCategory
            title="Web Development"
            skills={["HTML/CSS", "TypeScript", "JavaScript", "React"]}
          />
          <SkillCategory
            title="Interests"
            skills={["Data Science", "Machine Learning & AI", "Sustainable Energy", "Public Policy", "Actuarial Science"]}
          />
          <SkillCategory
            title="Tools"
            skills={["Excel", "GitHub", "VS Code", "Jupyter Notebook", "Pycharm", "Google Cloud"]}
          />
        </div>
      </div>
    </section>
  )
}

function SkillCategory({ title, skills }: { title: string, skills: string[] }) {
  return (
    <div className="space-y-3">
      <h5 className="text-sm font-medium text-foreground/80">{title}</h5>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
