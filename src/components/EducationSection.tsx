import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      institution: "University College Dublin",
      degree: "MSc. Information Systems",
      dates: "Sep 2024 – Sep 2025",
      location: "Dublin, Ireland",
      coursework: [
        "Applied Data Wrangling & Visualisation",
        "Quantitative Data Analytics",
        "Interactive Dashboards",
        "Machine Learning Foundations",
        "AI Ethics & Auditing",
        "Project Management",
      ],
    },
    {
      institution: "University of Engineering & Management",
      degree: "BTech. Electronics & Communication Engineering",
      dates: "Jul 2016 – May 2020",
      location: "Kolkata, India",
      coursework: [
        "Computer Programming",
        "Computer Organisation & Architecture",
        "Database Management Systems",
        "Data Science & Data Analytics",
        "Engineering Mathematics",
      ],
    },
  ];

  const certifications = [
    "Google Certified Data Analytics",
    "Google Cloud Ready Facilitator Program",
    "JP Morgan Chase & Co. Software Engineering Virtual Experience",
    "Spring Boot — Udemy Certified",
    "Hibernate & JPA — Udemy Certified",
  ];

  return (
    <section id="education" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">Education & Certifications</h2>
            <div className="w-16 h-px bg-[hsl(var(--primary))] mx-auto mb-5" />
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">Academic foundation and professional certifications.</p>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center"><GraduationCap className="w-5 h-5 mr-2 text-[hsl(var(--primary))]" />Degrees</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {education.map((edu, index) => (
              <Card key={index} className="rounded-lg border border-border/70 bg-card shadow-sm hover:shadow-md transition-shadow duration-200 border-l-4 border-l-[hsl(var(--primary))]">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold text-foreground mb-2">{edu.degree}</CardTitle>
                  <p className="text-base font-medium text-[hsl(var(--primary))]">{edu.institution}</p>
                  <div className="flex items-center space-x-2 text-muted-foreground mt-2"><Calendar className="w-4 h-4" /><span className="font-medium">{edu.dates}</span><span className="text-muted-foreground/60">·</span><span>{edu.location}</span></div>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-foreground mb-3">Key coursework:</p>
                  <div className="flex flex-wrap gap-2">{edu.coursework.map((c, i) => <Badge key={i} variant="secondary" className="font-normal text-xs rounded-md bg-[hsl(var(--skill-bg))] text-foreground border border-border/60">{c}</Badge>)}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center"><Award className="w-5 h-5 mr-2 text-[hsl(var(--primary))]" />Certifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <Card key={cert} className="rounded-lg border border-border/70 bg-card shadow-sm hover:shadow-md hover:border-[hsl(var(--primary))]/25 transition-all duration-200">
                <CardContent className="p-5 flex items-start gap-3">
                  <Award className="w-5 h-5 text-[hsl(var(--primary))] shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-foreground leading-snug">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
