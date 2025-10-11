import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ShoppingBag, Users, Heart, Zap, PersonStanding } from "lucide-react";
import logo from "@/assets/2fastt-logo-clean.jpeg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const [heroRef, heroVisible] = useScrollAnimation<HTMLDivElement>();
  const [logoRef, logoVisible] = useScrollAnimation<HTMLDivElement>();
  const [titleRef, titleVisible] = useScrollAnimation<HTMLHeadingElement>();
  const [descRef, descVisible] = useScrollAnimation<HTMLParagraphElement>();
  const [ctaRef, ctaVisible] = useScrollAnimation<HTMLButtonElement>();
  const [featuresRef, featuresVisible] = useScrollAnimation<HTMLDivElement>();
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
          <div className="relative">
            <div className="absolute inset-0 bg-brand-red/20 blur-3xl rounded-full animate-pulse"></div>
            <img
              src={logo}
              alt="2FASTT Logo"
              className="h-32 w-32 md:h-40 md:w-40 relative z-10 rounded-full border-4 border-brand-red/30 shadow-xl shadow-brand-red/50"
            />
          </div>
        </div>

        {/* Main Title */}
        <h1 ref={titleRef} className={`text-6xl md:text-8xl lg:text-9xl font-black text-foreground mb-4 tracking-tight neon-glow fade-in-up delay-200 ${titleVisible ? 'animate' : ''}`}>
          2FASTT
        </h1>

        {/* Tagline */}
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 neon-glow-subtle fade-in-up delay-300 ${titleVisible ? 'animate' : ''}`}>
          RU RUNNING?
        </h2>

        {/* Description Card */}
        <Card ref={descRef} className={`max-w-3xl mx-auto mb-12 bg-gradient-to-br from-brand-red/5 to-background border-brand-red/20 neon-border fade-in-up delay-400 ${descVisible ? 'animate' : ''}`}>
          <CardContent className="p-6 md:p-8">
            <div className="flex items-start gap-3 mb-4">
              <PersonStanding className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
              <p className="text-lg md:text-xl text-foreground leading-relaxed text-left">
                "I started 2FASTT because I always wanted a chill, social run club on campus.
                This is a space for anyone, whether you run every day or just want to jog and meet people.{" "}
                <span className="text-primary font-semibold">No pressure. Just community.</span>"
              </p>
            </div>
            <p className="text-right text-sm text-muted-foreground font-medium">— Matthew, Founder</p>
          </CardContent>
        </Card>

        {/* Feature Badges */}
        <div ref={featuresRef} className={`flex flex-wrap justify-center gap-3 mb-8 fade-in-up delay-450 ${featuresVisible ? 'animate' : ''}`}>
          <Badge variant="outline" className="px-4 py-2 text-sm border-brand-red/30 hover:bg-brand-red/10 transition-colors">
            <Users className="w-4 h-4 mr-2" />
            All Levels Welcome
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm border-brand-red/30 hover:bg-brand-red/10 transition-colors">
            <Heart className="w-4 h-4 mr-2" />
            Social & Supportive
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm border-brand-red/30 hover:bg-brand-red/10 transition-colors">
            <Zap className="w-4 h-4 mr-2" />
            No Pressure Runs
          </Badge>
        </div>

        {/* CTA Button */}
        <Button
          ref={ctaRef}
          variant="brand"
          size="lg"
          className={`text-lg px-8 py-6 rounded-full transform hover:scale-105 transition-all duration-300 neon-border shadow-lg shadow-brand-red/30 hover:shadow-xl hover:shadow-brand-red/50 fade-in-up delay-500 ${ctaVisible ? 'animate' : ''}`}
          onClick={() => window.open("https://groupme.com/join_group/110452030/TN5hbw4T", "_blank")}
        >
          Join the Club
        </Button>

        {/* Merch Section */}
        <div ref={merchRef} className={`mt-20 fade-in-up delay-300 ${merchVisible ? 'animate' : ''}`}>
          <Card className="bg-gradient-to-br from-brand-red/10 via-background to-brand-red/5 border-brand-red/20 hover:border-brand-red/40 transition-all duration-500 hover:shadow-xl hover:shadow-brand-red/20 neon-border overflow-hidden">
            <CardContent className="p-8 md:p-12 relative">
              <div className="absolute top-4 right-4 opacity-20">
                <ShoppingBag className="w-24 h-24 text-brand-red" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-brand-red animate-pulse" />
                  <h3 className="text-3xl md:text-4xl font-bold text-brand-red neon-glow-subtle">
                    Merch Coming Soon
                  </h3>
                  <Sparkles className="w-6 h-6 text-brand-red animate-pulse" />
                </div>

                <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 border border-brand-red/30 mb-6">
                  <p className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                    2FASTT Tees & Hoodies
                  </p>
                  <p className="text-muted-foreground">
                    Premium quality gear for the running community
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red/10 rounded-full border border-brand-red/30">
                  <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></div>
                  <p className="text-sm font-medium text-brand-red">
                    Stay tuned for updates!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;