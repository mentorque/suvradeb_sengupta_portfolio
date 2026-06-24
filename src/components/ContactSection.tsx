import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Phone } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF, LINKEDIN_URL, LINKEDIN_DISPLAY } from "@/config/site";

const ContactSection = () => {
  const links = [
    { icon: Phone, label: "Phone", value: CONTACT_PHONE, href: CONTACT_PHONE_HREF },
    { icon: Mail, label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    { icon: Linkedin, label: "LinkedIn", value: LINKEDIN_DISPLAY, href: LINKEDIN_URL },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">Contact</h2>
            <div className="w-16 h-px bg-[hsl(var(--primary))] mx-auto mb-5" />
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">Seeking a full-time software engineering role in Dublin and across Ireland.</p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-5">
            {links.map((item) => (
              <Card key={item.label} className="rounded-lg border border-border/70 bg-card shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <CardContent className="p-6 text-center flex flex-col items-center gap-3">
                  <item.icon className="w-8 h-8 text-[hsl(var(--primary))]" />
                  <h4 className="text-sm font-semibold text-foreground">{item.label}</h4>
                  <a href={item.href} target={item.href.startsWith("http") || item.href.startsWith("tel") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-[hsl(var(--primary))] transition-colors break-all">{item.value}</a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
