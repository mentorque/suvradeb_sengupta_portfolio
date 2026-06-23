import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const ACHIEVEMENT_COLORS = [
  "achievement-icon-cyan",
  "achievement-icon-blue",
  "achievement-icon-purple",
  "achievement-icon-pink",
];

const KeyAchievementsSection = () => {
  const items = [
    "99.9% system uptime across 200K+ daily API requests",
    "100% resolution rate on 20+ P1 production outages",
    "35% reduction in recurring fault rate via root cause analysis",
    "92%+ test coverage with 100+ automated JUnit/Mockito tests",
  ];

  return (
    <section id="achievements" className="py-16 md:py-20 bg-background border-y border-border/60">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">Key achievements</h2>
            <div className="w-16 h-px bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4" />
            <p className="text-base text-muted-foreground max-w-xl mx-auto">Measurable outcomes from enterprise production systems and quality operations.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {items.map((text, index) => (
              <Card key={text} className="rounded-lg border border-border/70 bg-card shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-purple-500/30 transition-all duration-300 group">
                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                  <div className={`achievement-icon ${ACHIEVEMENT_COLORS[index % ACHIEVEMENT_COLORS.length]} group-hover:scale-110 transition-transform duration-300`}>
                    <Award className="w-6 h-6 text-white relative z-10" strokeWidth={2} />
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-foreground leading-snug">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyAchievementsSection;
