import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["Java (Core + Advanced)", "J2EE", "Spring Boot", "Spring MVC", "REST APIs", "Hibernate"],
    },
    {
      title: "Architecture & Design",
      skills: ["OOP", "SOLID Principles", "Design Patterns", "TDD", "BDD"],
    },
    {
      title: "Testing & Databases",
      skills: ["JUnit", "Mockito", "Integration Testing", "MySQL", "Oracle SQL"],
    },
    {
      title: "DevOps & Tools",
      skills: ["CI/CD", "Git", "Maven", "Jenkins", "IntelliJ IDEA", "Postman", "Sonar", "Agile/Scrum"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">Skills</h2>
            <div className="w-16 h-px bg-[hsl(var(--primary))] mx-auto mb-5" />
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Production systems ownership, performance optimisation, legacy stabilisation, and technical leadership under pressure.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="rounded-lg border border-border/70 bg-[hsl(var(--skill-bg))] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <CardHeader className="pb-3"><CardTitle className="text-lg font-semibold text-foreground">{category.title}</CardTitle></CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="rounded-lg border-0 bg-[hsl(var(--primary))] px-3.5 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-[hsl(var(--primary))]/90">{skill}</Badge>
                    ))}
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

export default SkillsSection;
