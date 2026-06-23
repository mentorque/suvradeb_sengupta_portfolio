import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Building2, Calendar, MapPin, TrendingUp } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Q-Park Dublin",
      position: "Quality Control Administrator",
      location: "Dublin, Ireland",
      duration: "Oct 2024 – Present",
      logoSrc: "/qpark_logo.png",
      logoAlt: "Q-Park",
      achievements: [
        { impact: "98%+ processing accuracy", description: "Audited 4,000+ monthly customer transactions through an internal CRM system, directly reducing downstream operational errors and customer escalations." },
        { impact: "20% faster issue resolution", description: "Investigated and resolved 100+ monthly system-related issues — payment discrepancies and account processing errors — through root cause analysis." },
        { impact: "Compliance & quality standards", description: "Maintained an appeals tracker, preparing appeal packs and ensuring all case documentation met quality and compliance standards." },
      ],
      technologies: ["CRM Systems", "Data Auditing", "Root Cause Analysis", "Customer Operations", "Compliance"],
    },
    {
      company: "Cognizant Technology Solutions",
      position: "Software Engineer",
      location: "Kolkata, India",
      duration: "Jul 2020 – Aug 2024",
      logoSrc: "/cognizant_logo.png",
      logoAlt: "Cognizant",
      achievements: [
        { impact: "99.9% uptime at scale", description: "Built and shipped Java/Spring Boot services for the Exigen Insurance Suite (EIS), processing 200K+ API requests/day for 15K+ users with feature consistency and data integrity." },
        { impact: "100% P1 resolution rate", description: "Led the team as first-call engineer for production incidents — resolved 20+ P1 outages and cut recurring fault rate by 35% through root cause analysis, not symptom patching." },
        { impact: "92%+ test coverage", description: "Improved test coverage of EIS legacy modules with 100+ automated tests (JUnit/Mockito) from scratch and introduced TDD/BDD team-wide, reducing production defects by 30%." },
        { impact: "25% faster response times", description: "Resolved bottlenecks across service and database layers in underwriting workflows, improving response times by 25% and sustaining 98%+ release delivery via CI/CD (Jenkins, Maven, Sonar)." },
        { impact: "25+ batch jobs delivered", description: "Developed triggered batch jobs using Java and Spring Batch for policy renewals, mid-term endorsements, form data updates, and bulk Oracle SQL query execution." },
      ],
      technologies: ["Java", "Spring Boot", "Spring Batch", "REST APIs", "Hibernate", "Oracle SQL", "JUnit", "Mockito", "Jenkins", "Maven", "Sonar"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground font-space-grotesk">
            Work <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Enterprise insurance systems, production ownership, and operational quality in Dublin.
          </p>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="rounded-lg border border-border/70 bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 min-w-0">
                    <div className="h-20 w-36 sm:w-40 shrink-0 rounded-xl bg-card border border-border px-3 py-2 shadow-sm flex items-center justify-center overflow-hidden">
                      <img src={exp.logoSrc} alt={exp.logoAlt} className="max-h-14 sm:max-h-16 max-w-full w-auto object-contain" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-2xl font-bold text-foreground font-space-grotesk">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-[hsl(var(--primary))] font-semibold text-lg mt-1"><Building2 className="w-4 h-4 shrink-0" />{exp.company}</div>
                    </div>
                  </div>
                  <div className="flex flex-col lg:items-end gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4 shrink-0" />{exp.duration}</div>
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4 shrink-0" />{exp.location}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="hidden md:block space-y-4">
                  {exp.achievements.map((a, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-muted/40 rounded-lg border border-primary/10">
                      <div className="w-8 h-8 bg-primary/15 rounded-full flex items-center justify-center shrink-0 mt-1"><TrendingUp className="w-4 h-4 text-[hsl(var(--primary))]" /></div>
                      <div><div className="text-[hsl(var(--primary))] font-semibold text-lg leading-snug">{a.impact}</div><p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{a.description}</p></div>
                    </div>
                  ))}
                </div>
                <div className="md:hidden">
                  <Carousel opts={{ align: "start", loop: true }} className="w-full relative">
                    <CarouselContent className="-ml-2">
                      {exp.achievements.map((a, i) => (
                        <CarouselItem key={i} className="pl-2 basis-full">
                          <div className="flex gap-4 p-4 bg-muted/40 rounded-lg border border-primary/10">
                            <div className="w-8 h-8 bg-primary/15 rounded-full flex items-center justify-center shrink-0 mt-1"><TrendingUp className="w-4 h-4 text-[hsl(var(--primary))]" /></div>
                            <div><div className="text-[hsl(var(--primary))] font-semibold text-lg">{a.impact}</div><p className="text-muted-foreground text-sm">{a.description}</p></div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 border-border bg-background shadow-sm" />
                    <CarouselNext className="right-2 border-border bg-background shadow-sm" />
                  </Carousel>
                </div>
                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">Skills used</h4>
                  <div className="flex flex-wrap gap-2">{exp.technologies.map((t, i) => <Badge key={i} variant="secondary" className="text-xs font-normal rounded-md bg-[hsl(var(--skill-bg))] text-foreground border border-border/60">{t}</Badge>)}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
