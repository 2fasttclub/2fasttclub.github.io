import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Schedule = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [cardsRef, cardsVisible] = useScrollAnimation();
  const [infoRef, infoVisible] = useScrollAnimation();

  const weeklyRuns = [
    {
      day: "Monday",
      time: "6:00 PM",
      type: "Easy Pace Run",
      location: "Busch Campus Recreation Center",
      distance: "3-5 miles",
      description: "Start your week with a relaxed, social run. Perfect for beginners or recovery days.",
    },
    {
      day: "Wednesday", 
      time: "6:30 PM",
      type: "Tempo Run",
      location: "Livingston Campus Track",
      distance: "4-6 miles",
      description: "Moderate intensity workout to build strength and endurance.",
    },
    {
      day: "Friday",
      time: "5:30 PM",
      type: "Fun Run Friday",
      location: "Cook Campus Loop",
      distance: "2-4 miles",
      description: "End the week with a fun, social run followed by optional hangout time.",
    },
    {
      day: "Saturday",
      time: "9:00 AM",
      location: "Johnson Park",
      type: "Long Run",
      distance: "6-10 miles",
      description: "Build endurance with our weekly long run through scenic routes.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <section className="max-w-6xl mx-auto">
          <h1 ref={titleRef} className={`text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-brand-red to-brand-red-light bg-clip-text text-transparent neon-glow-subtle fade-in-up ${titleVisible ? 'animate' : ''}`}>
            Weekly Schedule
          </h1>
          <p className={`text-xl text-muted-foreground text-center mb-12 fade-in-up delay-200 ${titleVisible ? 'animate' : ''}`}>
            Join us for regular runs throughout the week. All paces welcome!
          </p>
          
          <div ref={cardsRef} className={`grid md:grid-cols-2 gap-6 mb-12 fade-in-up delay-300 ${cardsVisible ? 'animate' : ''}`}>
            {weeklyRuns.map((run, index) => (
              <Card key={index} className={`hover:shadow-lg transition-all duration-300 hover:neon-border fade-in-up delay-${(index + 1) * 100}`}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-brand-red neon-glow-subtle">{run.day}</CardTitle>
                    <Badge variant="secondary">{run.type}</Badge>
                  </div>
                  <CardDescription className="text-base">{run.description}</CardDescription>
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

          <div ref={infoRef} className={`bg-card p-8 rounded-lg border text-center neon-border fade-in-up delay-500 ${infoVisible ? 'animate' : ''}`}>
            <h2 className="text-2xl font-semibold mb-4 text-brand-red neon-glow-subtle">New to Running?</h2>
            <p className="text-muted-foreground mb-6">
              Don't worry about pace or distance. Our community is here to support you every step of the way. 
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