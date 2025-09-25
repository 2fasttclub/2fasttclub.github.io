import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import matthewPhoto from "@/assets/matthew-team-photo.jpg";
import aaronPhoto from "@/assets/aaron-team-photo.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Team = () => {
  const [titleRef, titleVisible] = useScrollAnimation<HTMLHeadingElement>();
  const [teamRef, teamVisible] = useScrollAnimation<HTMLDivElement>();
  const [involvedRef, involvedVisible] = useScrollAnimation<HTMLDivElement>();

  const leadership = [
    {
      name: "Matthew F.",
      role: "Founder",
      bio: "Started 2FASTT to build the inclusive running community Rutgers was missing. Believes every runner has a story worth celebrating.",
      year: "Sophomore",
      major: "Bio",
      funFact: "I put milk b4 the cereal",
      whyIRun: "My way to lock in after a long weekend",
    },
    {
      name: "Aaron C.", 
      role: "Technical Lead",
      bio: "Aaron oversees all technical aspects of the club, including the development and maintenance of this website.",
      year: "Sophomore",
      major: "Computer Engineering",
      funFact: "I am a self taught barber",
      whyIRun: "A good run helps me feel better and allows me to be more productive",
    },
    {
      name: "TBD",
      role: "TBD",
      bio: "TBD",
      year: "TBD", 
      major: "TBD",
      funFact: "TBD",
      whyIRun: "TBD",
    },
    {
      name: "TBD",
      role: "TBD",
      bio: "TBD",
      year: "TBD",
      major: "TBD",
      funFact: "TBD",
      whyIRun: "TBD",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <section className="max-w-6xl mx-auto">
          <h1 ref={titleRef} className={`text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-brand-red to-brand-red-light bg-clip-text text-transparent neon-glow-subtle fade-in-up ${titleVisible ? 'animate' : ''}`}>
            Meet The Team
          </h1>
          <p className={`text-xl text-muted-foreground text-center mb-12 fade-in-up delay-200 ${titleVisible ? 'animate' : ''}`}>
            The passionate runners leading our community
          </p>
          
          <div ref={teamRef} className={`grid md:grid-cols-2 gap-8 mb-12 fade-in-up delay-300 ${teamVisible ? 'animate' : ''}`}>
            {leadership.map((member, index) => (
              <Card key={index} className={`hover:shadow-lg transition-all duration-300 hover:neon-border fade-in-up delay-${(index + 2) * 100}`}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="h-20 w-20">
                      {index === 0 ? (
                        <AvatarImage 
                          src={matthewPhoto} 
                          alt={member.name}
                          className="object-cover object-[center_15%]"
                        />
                      ) : index === 1 ? (
                        <AvatarImage 
                          src={aaronPhoto} 
                          alt={member.name}
                          className="object-cover object-center"
                        />
                      ) : null}
                      <AvatarFallback className="bg-brand-red text-white text-lg">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-brand-red neon-glow-subtle">{member.name}</CardTitle>
                      <CardDescription className="text-base font-medium">{member.role}</CardDescription>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline">{member.year}</Badge>
                        <Badge variant="outline">{member.major}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-brand-red">Year & Major:</span> {member.year}, {member.major}
                    </div>
                    <div>
                      <span className="font-medium text-brand-red">Fun Fact:</span> {member.funFact}
                    </div>
                    <div>
                      <span className="font-medium text-brand-red">Why I Run:</span> {member.whyIRun}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div ref={involvedRef} className={`bg-card p-8 rounded-lg border text-center neon-border fade-in-up delay-500 ${involvedVisible ? 'animate' : ''}`}>
            <h2 className="text-2xl font-semibold mb-4 text-brand-red neon-glow-subtle">Want to Get Involved?</h2>
            <p className="text-muted-foreground mb-6">
              We're always looking for passionate runners to help grow our community. Whether you want to 
              lead a workout, organize events, or just share your love of running, there's a place for you 
              on our team.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="outline">Leadership Opportunities</Badge>
              <Badge variant="outline">Event Planning</Badge>
              <Badge variant="outline">Workout Leaders</Badge>
              <Badge variant="outline">Social Coordinators</Badge>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Team;