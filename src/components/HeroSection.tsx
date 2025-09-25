import { Button } from "@/components/ui/button";
import logo from "@/assets/2fastt-logo-clean.jpeg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const [heroRef, heroVisible] = useScrollAnimation<HTMLDivElement>();
  const [logoRef, logoVisible] = useScrollAnimation<HTMLDivElement>();
  const [titleRef, titleVisible] = useScrollAnimation<HTMLHeadingElement>();
  const [descRef, descVisible] = useScrollAnimation<HTMLParagraphElement>();
  const [ctaRef, ctaVisible] = useScrollAnimation<HTMLButtonElement>();
  const [merchRef, merchVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-16">
      {/* Background gradient effect */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: "var(--gradient-hero)",
        }}
      />
      
      <div ref={heroRef} className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 fade-in-up ${heroVisible ? 'animate' : ''}`}>
        {/* Logo */}
        <div ref={logoRef} className={`mb-8 flex justify-center fade-in-up delay-100 ${logoVisible ? 'animate' : ''}`}>
          <img 
            src={logo} 
            alt="2FASTT Logo" 
            className="h-32 w-32 md:h-40 md:w-40 animate-pulse"
          />
        </div>

        {/* Main Title */}
        <h1 ref={titleRef} className={`text-6xl md:text-8xl lg:text-9xl font-black text-foreground mb-4 tracking-tight neon-glow fade-in-up delay-200 ${titleVisible ? 'animate' : ''}`}>
          2FASTT
        </h1>

        {/* Tagline */}
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 neon-glow-subtle fade-in-up delay-300 ${titleVisible ? 'animate' : ''}`}>
          RU RUNNING?
        </h2>

        {/* Description */}
        <p ref={descRef} className={`text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed fade-in-up delay-400 ${descVisible ? 'animate' : ''}`}>
          I started 2FASTT because I always wanted a chill, social run club on campus. 
          This is a space for anyone, whether you run every day or just want to jog and meet people.{" "}
          <span className="text-primary font-semibold">No pressure. Just community.</span>
        </p>

        {/* CTA Button */}
        <Button
          ref={ctaRef}
          variant="brand" 
          size="lg" 
          className={`text-lg px-8 py-6 rounded-full transform hover:scale-105 transition-all duration-300 neon-border fade-in-up delay-500 ${ctaVisible ? 'animate' : ''}`}
          onClick={() => window.open("https://groupme.com/join_group/110452030/TN5hbw4T", "_blank")}
        >
          Join the Club
        </Button>

        {/* Merch Section */}
        <div ref={merchRef} className={`mt-20 pt-12 border-t border-border fade-in-up delay-300 ${merchVisible ? 'animate' : ''}`}>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 neon-glow-subtle">
            Merch Coming Soon
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            2FASTT Tees & Hoodies
          </p>
          <p className="text-sm text-muted-foreground">
            Stay tuned for updates!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;