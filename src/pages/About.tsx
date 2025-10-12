import Navigation from "@/components/Navigation";
import matthewFounder from "@/assets/matthew-founder.jpeg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const [titleRef, titleVisible] = useScrollAnimation<HTMLHeadingElement>();
  const [introRef, introVisible] = useScrollAnimation<HTMLParagraphElement>();
  const [missionRef, missionVisible] = useScrollAnimation<HTMLDivElement>();
  const [founderRef, founderVisible] = useScrollAnimation<HTMLDivElement>();
  const [communityRef, communityVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <section className="max-w-4xl mx-auto">
          <h1 ref={titleRef} className={`text-5xl md:text-6xl lg:text-7xl font-black mb-12 text-center bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red bg-clip-text text-transparent neon-glow tracking-tight fade-in-up ${titleVisible ? 'animate' : ''}`}>
            About 2FASTT
          </h1>
          
          <div className="space-y-12 text-lg leading-relaxed">
            <p ref={introRef} className={`text-xl md:text-2xl text-center text-foreground/90 font-medium max-w-3xl mx-auto leading-relaxed fade-in-up delay-200 ${introVisible ? 'animate' : ''}`}>
              2FASTT was born from a simple idea: <span className="text-brand-red font-semibold">running should be fun, social, and accessible to everyone.</span>
              {" "}Founded at Rutgers University, we're more than just a running club – we're a <span className="text-brand-red font-semibold">community</span> that 
              welcomes all paces, all backgrounds, and all levels of experience.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">
              <div ref={missionRef} className={`space-y-6 fade-in-left ${missionVisible ? 'animate' : ''}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-red neon-glow-subtle tracking-tight">Our Mission</h2>
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                  To create an <span className="text-brand-red font-semibold">inclusive space</span> where students can connect through running, build lasting 
                  friendships, and develop a healthy relationship with fitness. Whether you're training 
                  for a marathon or just want to jog around campus, <span className="text-brand-red font-semibold">you belong here.</span>
                </p>
              </div>
              
              <div ref={founderRef} className={`text-center space-y-6 fade-in-right ${founderVisible ? 'animate' : ''}`}>
                <div className="relative">
                  <img 
                    src={matthewFounder} 
                    alt="Matthew, Founder of 2FASTT"
                    className="w-80 h-96 object-cover rounded-lg shadow-lg mx-auto border-2 border-brand-red/20 neon-border"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-brand-red neon-glow-subtle">Matthew F.</h3>
                  <p className="text-foreground/70 font-semibold text-lg">Founder of 2FASTT</p>
                  <p className="text-base text-foreground/60 italic leading-relaxed px-4">
                    "Building the inclusive running community Rutgers was missing"
                  </p>
                </div>
              </div>
            </div>
            
            <div ref={communityRef} className={`bg-gradient-to-br from-brand-red/5 to-background p-10 md:p-12 rounded-lg border border-brand-red/20 mt-16 neon-border fade-in-up delay-400 ${communityVisible ? 'animate' : ''}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-red neon-glow-subtle tracking-tight">No Pressure. Just Community.</h2>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                At 2FASTT, we believe that the <span className="text-brand-red font-semibold">best workouts happen when you're having fun.</span> There's no 
                pressure to be fast, no judgment about your pace, and no requirement to compete. We're 
                here to support each other, celebrate small wins, and make running an <span className="text-brand-red font-semibold">enjoyable part 
                of campus life.</span>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;