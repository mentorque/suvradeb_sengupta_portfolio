import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { PROJECT_GITHUB } from "@/config/site";

type Project = {
  title: string;
  subtitle?: string;
  highlights: string[];
  stack: string[];
  image: string;
  imageFit?: "cover" | "contain";
  githubUrl?: string;
};

const ProjectImage = ({ project }: { project: Project }) => {
  const hasImage = project.image && project.image !== "/placeholder.svg";

  const imageContent = hasImage ? (
    <img
      src={project.image}
      alt={project.title}
      className={
        project.imageFit === "contain"
          ? "w-full h-full object-contain object-center p-3 sm:p-4 transition-transform duration-300 group-hover:scale-105"
          : "w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
      }
    />
  ) : (
    <div className="flex h-full items-center justify-center px-6 text-center">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--primary))] mb-2">Academic Project</p>
        <p className="text-sm font-medium text-muted-foreground">{project.subtitle || project.title}</p>
      </div>
    </div>
  );

  const wrapperClass =
    "relative aspect-video overflow-hidden border-b border-border/50 bg-gradient-to-br from-[hsl(var(--skill-bg))] to-card rounded-lg m-3 mb-0 group";

  if (project.githubUrl) {
    return (
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${wrapperClass} block cursor-pointer`}
        aria-label={`View ${project.title} on GitHub`}
      >
        {imageContent}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <span className="inline-flex items-center gap-1.5 text-white text-sm font-medium bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <ExternalLink className="w-4 h-4" />
            View on GitHub
          </span>
        </div>
      </a>
    );
  }

  return <div className={wrapperClass}>{imageContent}</div>;
};

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Bilingual History Learning App",
      subtitle: "Project Management · University College Dublin",
      highlights: [
        "Developed a project management plan for a government-commissioned bilingual mobile app covering €1M budget, 34-week schedule, risk register, and RACI matrix for 15 stakeholders, ensuring comprehensive oversight.",
        "Implemented Closure and Maintenance sections defining incident SLAs, quality gates (GDPR, WCAG, ISO 27001), and a 90% user satisfaction threshold to guarantee long-term compliance and reliability.",
      ],
      stack: ["Project Management", "Risk Register", "RACI Matrix", "GDPR", "WCAG", "ISO 27001"],
      image: "/history_learning_app.png",
      imageFit: "cover",
      githubUrl: PROJECT_GITHUB.historyLearningApp,
    },
    {
      title: "Outreach Event Management App",
      subtitle: "Full-Stack · Cognizant Technology Solutions",
      highlights: [
        "Built a full-stack event management application using Java, Spring Boot, Hibernate, MySQL, and JSP that automated participant registration, role-based access control, and real-time data logging for event managers.",
        "Automated registration and role-based access for 200+ users, replacing manual processes with a reliable system.",
      ],
      stack: ["Java", "Spring Boot", "Hibernate", "MySQL", "JSP"],
      image: "/event_management_app.png",
      imageFit: "cover",
      githubUrl: PROJECT_GITHUB.eventManagementApp,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">Projects</h2>
            <div className="w-16 h-px bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-5" />
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">Academic and professional projects spanning full-stack development and project management.</p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.title} className="rounded-lg border border-border/70 bg-card shadow-sm overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <ProjectImage project={project} />
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold text-foreground leading-snug">{project.title}</CardTitle>
                  {project.subtitle && <p className="text-sm font-medium text-[hsl(var(--primary))] mt-1">{project.subtitle}</p>}
                </CardHeader>
                <CardContent className="flex flex-col gap-4 flex-1 pt-0">
                  <ul className="space-y-2 text-sm text-muted-foreground flex-1">
                    {project.highlights.map((line) => (
                      <li key={line.slice(0, 48)} className="flex gap-2.5 leading-relaxed">
                        <span className="text-[hsl(var(--primary))] shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-current" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-foreground/80 mb-2">Skills used</p>
                    <div className="flex flex-wrap gap-1.5">{project.stack.map((tech) => <Badge key={tech} variant="secondary" className="font-normal text-xs rounded-md bg-[hsl(var(--skill-bg))] text-foreground border border-border/60">{tech}</Badge>)}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
