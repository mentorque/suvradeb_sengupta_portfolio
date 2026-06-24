import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import profileImage from "/image.png";
import heroBackground from "@/assets/hero-background-modern.jpg";
import HeroLiveBackground from "@/components/HeroLiveBackground";
import HeroSparkleGrain from "@/components/HeroSparkleGrain";
import { FULL_NAME, TITLE, RESUME_PATH } from "@/config/site";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.02]"
        style={{ backgroundImage: `url(${heroBackground})` }}
        aria-hidden
      />
      <HeroLiveBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/40 to-slate-950/82 pointer-events-none" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(202_85%_38%_/_0.14)] via-transparent to-[hsl(220_45%_12%_/_0.35)] pointer-events-none" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_50%_38%,hsl(220_25%_8%_/_0.08)_0%,hsl(220_28%_6%_/_0.58)_100%)] pointer-events-none" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-600/15 pointer-events-none" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/65 to-transparent pointer-events-none" aria-hidden />
      <HeroSparkleGrain />

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Profile — left, rectangular frame */}
          <div className="shrink-0 animate-fade-in order-1 lg:order-none">
            <div className="hero-profile-frame p-1.5 rounded-xl bg-gradient-to-br from-cyan-400/50 via-blue-500/30 to-purple-600/50 shadow-glow">
              <img
                src={profileImage}
                alt={FULL_NAME}
                className="w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 rounded-lg object-cover object-center border border-white/20 shadow-2xl"
              />
            </div>
          </div>

          {/* Content — right */}
          <div className="flex-1 text-center lg:text-left order-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight animate-fade-in font-space-grotesk hero-name-gradient">
              {FULL_NAME}
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-5 font-medium animate-slide-up">
              {TITLE}
            </p>

            <p className="text-base md:text-lg text-white/75 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-slide-up">
              4+ years building and scaling high-availability Java/Spring Boot enterprise applications.
              End-to-end system ownership, legacy stabilization, and rapid production defect resolution — completing MSc at UCD and seeking a full-time role in Ireland.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.15s" }}>
              <Button type="button" onClick={scrollToProjects} size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium px-8 py-6 text-base rounded-lg shadow-md transition-all duration-200 hover:scale-[1.02] border-0">
                View Projects
              </Button>
              <Button type="button" size="lg" variant="outline" className="border border-white/40 bg-white/5 backdrop-blur-sm text-white hover:bg-white/15 font-medium px-8 py-6 text-base rounded-lg transition-all duration-200 hover:scale-[1.02]" asChild>
                <a href={RESUME_PATH} download="Suvradeb_Sengupta_CV.pdf">Download Resume</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-float" aria-hidden>
        <ChevronDown className="w-7 h-7" />
      </div>
    </section>
  );
};

export default HeroSection;
