import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Linkedin, GraduationCap, Calendar, Globe, Award, Phone } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF, LINKEDIN_URL, LINKEDIN_DISPLAY, LOCATION } from "@/config/site";

const AboutSection = () => {
  const quickFacts = [
    { icon: MapPin, label: "Location", value: LOCATION },
    { icon: GraduationCap, label: "Education", value: "MSc Information Systems, UCD" },
    { icon: Calendar, label: "Experience", value: "4+ years" },
    { icon: Globe, label: "Work Authorisation", value: "No sponsorship required" },
  ];

  const contactInfo = [
    { icon: Phone, value: CONTACT_PHONE, href: CONTACT_PHONE_HREF },
    { icon: Mail, value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    { icon: Linkedin, value: LINKEDIN_DISPLAY, href: LINKEDIN_URL },
  ];

  return (
    <section id="about" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">About</h2>
            <div className="w-16 h-px bg-[hsl(var(--primary))] mx-auto mb-5" />
          </div>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-5 text-base text-muted-foreground leading-relaxed">
              <p>
                I am a Software Engineer with 4+ years of experience building and maintaining Java/Spring Boot
                enterprise-grade applications in a US-based insurance domain. Now based in Dublin, having completed
                my MSc in Information Systems at UCD, I also work part-time at Q-Park Dublin Street Parking Services.
              </p>
              <p>
                I was responsible for maintaining 99.9% system uptime, resolving 50+ critical outages with a 100%
                resolution rate, and cutting recurring fault rates by 35%. What sets me apart is the discipline to own
                a system end-to-end under pressure — debugging what others avoid, finding the root cause of critical
                defects instead of patching the symptom, and making sure the same failure does not happen twice.
              </p>
              <p>
                I am an exceptionally hard-working professional, and I want to bring to the Irish tech market my
                expertise to solve real challenges, interpersonal skills, and technical depth — and become an integral
                part of the team.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-card border border-border/60 shadow-sm hover:border-[hsl(var(--primary))]/30 transition-colors duration-200">
                    <contact.icon className="w-5 h-5 text-[hsl(var(--primary))] shrink-0" />
                    <a href={contact.href} target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-[hsl(var(--primary))] transition-colors text-sm break-all">{contact.value}</a>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-1">
              <Card className="rounded-lg border border-border/70 bg-card shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-6 flex items-center"><Award className="w-5 h-5 mr-2 text-[hsl(var(--primary))]" />Quick facts</h4>
                  <div className="space-y-6">
                    {quickFacts.map((fact, index) => (
                      <div key={index} className="flex items-start space-x-3 pb-4 border-b border-border last:border-0 last:pb-0">
                        <fact.icon className="w-5 h-5 text-[hsl(var(--primary))] mt-1 shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground text-sm uppercase tracking-wide">{fact.label}</p>
                          <p className="text-muted-foreground mt-1 font-medium text-sm">{fact.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
