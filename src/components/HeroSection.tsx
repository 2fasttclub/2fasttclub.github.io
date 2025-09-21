import { Button } from "@/components/ui/button";
import logo from "@/assets/2fastt-logo-clean.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background gradient effect */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: "var(--gradient-hero)",
        }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src={logo} 
            alt="2FASTT Logo" 
            className="h-32 w-32 md:h-40 md:w-40 animate-pulse"
          />
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-foreground mb-4 tracking-tight">
          2FASTT
        </h1>

        {/* Tagline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">
          RU RUNNING?
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          I started 2FASTT because I always wanted a chill, social run club on campus. 
          This is a space for anyone, whether you run every day or just want to jog and meet people.{" "}
          <span className="text-primary font-semibold">No pressure. Just community.</span>
        </p>

        {/* CTA Button */}
        <Button 
          variant="brand" 
          size="lg" 
          className="text-lg px-8 py-6 rounded-full transform hover:scale-105 transition-all duration-300"
          onClick={() => window.open("https://groupme.com/join_group/110452030/TN5hbw4T", "_blank")}
        >
          Join the Club
        </Button>

        {/* Merch Section */}
        <div className="mt-20 pt-12 border-t border-border">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
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