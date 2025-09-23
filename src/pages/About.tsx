import Navigation from "@/components/Navigation";
import matthewFounder from "@/assets/matthew-founder.jpeg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-brand-red to-brand-red-light bg-clip-text text-transparent">
            About 2FASTT
          </h1>
          
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-muted-foreground">
              2FASTT was born from a simple idea: running should be fun, social, and accessible to everyone. 
              Founded at Rutgers University, we're more than just a running club – we're a community that 
              welcomes all paces, all backgrounds, and all levels of experience.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-brand-red">Our Mission</h2>
                <p className="text-muted-foreground">
                  To create an inclusive space where students can connect through running, build lasting 
                  friendships, and develop a healthy relationship with fitness. Whether you're training 
                  for a marathon or just want to jog around campus, you belong here.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="relative">
                  <img 
                    src={matthewFounder} 
                    alt="Matthew, Founder of 2FASTT"
                    className="w-64 h-80 object-cover rounded-lg shadow-lg mx-auto border-2 border-brand-red/20"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-brand-red">Matthew F.</h3>
                  <p className="text-muted-foreground font-medium">Founder of 2FASTT</p>
                  <p className="text-sm text-muted-foreground italic">
                    "Building the inclusive running community Rutgers was missing"
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-lg border mt-12">
              <h2 className="text-2xl font-semibold mb-4 text-brand-red">No Pressure. Just Community.</h2>
              <p className="text-muted-foreground">
                At 2FASTT, we believe that the best workouts happen when you're having fun. There's no 
                pressure to be fast, no judgment about your pace, and no requirement to compete. We're 
                here to support each other, celebrate small wins, and make running an enjoyable part 
                of campus life.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;