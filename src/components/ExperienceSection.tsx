import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Building2, Calendar, MapPin, TrendingUp } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Q-Park",
      position: "Quality Control Administrator",
      location: "Dublin, Ireland",
      duration: "Oct 2024 – Present",
      logoSrc: "/qpark_logo.png",
      logoAlt: "Q-Park",
      achievements: [
        { impact: "98%+ processing accuracy", description: "Audited over 4000 monthly CRM transactions with 98%+ accuracy, significantly reducing operational errors and customer escalations." },
        { impact: "20% faster issue resolution", description: "Resolved more than 100 monthly system issues including payment and account errors, cutting resolution time by 20% through root cause analysis and process improvements." },
        { impact: "Compliance & quality standards", description: "Maintained an appeals tracker and prepared all case documentation to meet quality and compliance standards." },
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
        { impact: "99.9% uptime at scale", description: "Built and maintained Java/Spring Boot services for Exigen Insurance Suite, processing 200K+ daily API requests at 99.9% uptime for 15K+ users, ensuring data integrity and feature consistency across modules." },
        { impact: "100% P1 resolution rate", description: "Led production incident response, resolving over 20 P1 outages with 100% resolution rate and reducing recurring faults by 35% through root cause analysis and preventive measures." },
        { impact: "25+ batch jobs delivered", description: "Developed 25+ batch jobs using Java and Spring Batch automating policy renewals, mid-term endorsements, form data updates, and bulk Oracle SQL testing workflows to streamline operations and improve efficiency." },
        { impact: "92%+ test coverage", description: "Raised legacy module test coverage above 92% with 100+ JUnit/Mockito tests, introducing TDD and BDD practices that reduced defects by 30% and improved code quality across the platform." },
        { impact: "25% faster response times", description: "Resolved service and database bottlenecks, improving response times by 25% and enabling 98%+ on-time releases through CI/CD pipeline optimizations using Jenkins, Maven, and Sonar." },
        { impact: "100+ production releases", description: "Led code reviews enforcing SOLID and secure coding standards, mentoring junior engineers and sustaining quality across 100+ production releases with consistent best practices." },
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
