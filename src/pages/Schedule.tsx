import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Schedule = () => {
  const [titleRef, titleVisible] = useScrollAnimation<HTMLHeadingElement>();
  const [cardsRef, cardsVisible] = useScrollAnimation<HTMLDivElement>();
  const [infoRef, infoVisible] = useScrollAnimation<HTMLDivElement>();

  console.log('Schedule component render:', { titleVisible, cardsVisible, infoVisible });

  const weeklyRuns = [
    {
      day: "TBD",
      time: "TBD",
      type: "Easy Pace Run",
      location: "TBD",
      distance: "TBD",
      description: "Start your week with a relaxed, social run. Perfect for beginners or recovery days.",
    },
    {
      day: "TBD", 
      time: "TBD",
      type: "Tempo Run",
      location: "TBD",
      distance: "TBD",
      description: "Moderate intensity workout to build strength and endurance.",
    },
    {
      day: "TBD",
      time: "TBD",
      type: "Fun Run Friday",
      location: "TBD",
      distance: "TBD",
      description: "End the week with a fun, social run followed by optional hangout time.",
    },
    {
      day: "TBD",
      time: "TBD",
      location: "TBD",
      type: "Long Run",
      distance: "TBD",
      description: "Build endurance with our weekly long run through scenic routes.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <section className="max-w-6xl mx-auto">
          <h1 ref={titleRef} className={`text-5xl md:text-6xl font-extrabold mb-6 text-center bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red bg-clip-text text-transparent neon-glow-subtle tracking-tight fade-in-up ${titleVisible ? 'animate' : ''}`}>
            Weekly Schedule
          </h1>
          <p className={`text-xl md:text-2xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto leading-relaxed fade-in-up delay-200 ${titleVisible ? 'animate' : ''}`}>
            Join us for <span className="text-brand-red font-semibold">regular runs</span> throughout the week. <span className="text-brand-red font-semibold">All paces welcome!</span>
          </p>
          
          <div ref={cardsRef} className={`grid md:grid-cols-2 gap-8 mb-16 fade-in-up delay-300 ${cardsVisible ? 'animate' : ''}`}>
            {weeklyRuns.map((run, index) => (
              <Card key={index} className={`hover:shadow-2xl hover:shadow-brand-red/20 transition-all duration-500 hover:neon-border hover:-translate-y-1 fade-in-up delay-${(index + 1) * 100} ${cardsVisible ? 'animate' : ''}`}>
                <CardHeader className="space-y-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-2xl font-bold text-brand-red neon-glow-subtle tracking-tight">{run.day}</CardTitle>
                    <Badge variant="secondary" className="text-sm font-semibold">{run.type}</Badge>
                  </div>
                  <CardDescription className="text-base leading-relaxed">{run.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{run.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{run.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{run.distance}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div ref={infoRef} className={`bg-gradient-to-br from-card to-card/50 p-10 rounded-xl border-2 text-center neon-border shadow-xl fade-in-up delay-500 ${infoVisible ? 'animate' : ''}`}>
            <h2 className="text-3xl font-bold mb-6 text-brand-red neon-glow-subtle tracking-tight">New to Running?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Don't worry about <span className="text-brand-red font-semibold">pace</span> or <span className="text-brand-red font-semibold">distance</span>. Our community is here to support you every step of the way. 
              Show up, have fun, and we'll help you build your running confidence naturally.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="outline">Beginner Friendly</Badge>
              <Badge variant="outline">All Paces Welcome</Badge>
              <Badge variant="outline">No Drop Policy</Badge>
              <Badge variant="outline">Social Focus</Badge>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Schedule;