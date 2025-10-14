import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import matthewPhoto from "@/assets/matthew-team-photo.jpg";
import aaronPhoto from "@/assets/aaron-team-photo-new.jpg";
import breannaPhoto from "@/assets/breanna-team-photo.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Team = () => {
  const [titleRef, titleVisible] = useScrollAnimation<HTMLHeadingElement>();
  const [teamRef, teamVisible] = useScrollAnimation<HTMLDivElement>();
  const [involvedRef, involvedVisible] = useScrollAnimation<HTMLDivElement>();

  console.log('Team component render:', { titleVisible, teamVisible, involvedVisible });

  const leadership = [
    {
      name: "Matthew F.",
      role: "Founder/Run Leader",
      bio: "Started 2FASTT to build the inclusive running community Rutgers was missing. Believes every runner has a story worth celebrating.",
      year: "Sophomore",
      major: "Bio",
      funFact: "I put milk b4 the cereal",
      whyIRun: "To clear my head & challenge myself",
    },
    {
      name: "Aaron C.", 
      role: "Technical Lead",
      bio: "Oversees all technical aspects of the club, including the development and maintenance of this website.",
      year: "Sophomore",
      major: "Computer Engineering",
      funFact: "I am a self taught barber",
      whyIRun: "A good run helps me feel better and allows me to be more productive",
    },
    {
      name: "Breanna O.",
      role: "Run Leader",
      bio: "Leads group runs and helps create a welcoming environment for runners of all levels.",
      year: "Sophomore",
      major: "Bio",
      funFact: "PinkPantheress used to be my camp counselor",
      whyIRun: "To improve my overall health and to release built up stress from within",
    },
    {
      name: "Ameer R.",
      role: "Run Leader",
      bio: "Leads group runs and helps create a welcoming environment for runners of all levels.",
      year: "Junior",
      major: "Computer Science",
      funFact: "Used to play ball with Lil Tecca all the time in Queens before he blew up",
      whyIRun: "No better feeling than runners high",
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
          <h1 ref={titleRef} className={`text-5xl md:text-6xl font-extrabold mb-6 text-center bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red bg-clip-text text-transparent neon-glow-subtle tracking-tight fade-in-up ${titleVisible ? 'animate' : ''}`}>
            Meet The Team
          </h1>
          <p className={`text-xl md:text-2xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto leading-relaxed fade-in-up delay-200 ${titleVisible ? 'animate' : ''}`}>
            The <span className="text-brand-red font-semibold">passionate runners</span> leading our community
          </p>
          
          <div ref={teamRef} className={`grid md:grid-cols-2 gap-8 mb-16 fade-in-up delay-300 ${teamVisible ? 'animate' : ''}`}>
            {leadership.map((member, index) => (
              <Card key={index} className={`hover:shadow-2xl hover:shadow-brand-red/20 transition-all duration-500 hover:neon-border hover:-translate-y-1 fade-in-up delay-${(index + 2) * 100} ${teamVisible ? 'animate' : ''}`}>
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
                          className="object-cover object-center scale-110"
                        />
                      ) : index === 2 ? (
                        <AvatarImage
                          src={breannaPhoto}
                          alt={member.name}
                          className="object-cover object-[center_-10%] scale-125"
                        />
                      ) : null}
                      <AvatarFallback className="bg-brand-red text-white text-lg">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold text-brand-red neon-glow-subtle tracking-tight">{member.name}</CardTitle>
                      <CardDescription className="text-base font-semibold mt-1">{member.role}</CardDescription>
                      <div className="flex gap-2 mt-3">
                        <Badge variant="outline" className="font-medium">{member.year}</Badge>
                        <Badge variant="outline" className="font-medium">{member.major}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{member.bio}</p>
                  <div className="space-y-3 text-sm">
                    <div className="leading-relaxed">
                      <span className="font-semibold text-brand-red neon-glow-subtle">Year & Major:</span> {member.year}, {member.major}
                    </div>
                    <div className="leading-relaxed">
                      <span className="font-semibold text-brand-red neon-glow-subtle">Fun Fact:</span> {member.funFact}
                    </div>
                    <div className="leading-relaxed">
                      <span className="font-semibold text-brand-red neon-glow-subtle">Why I Run:</span> {member.whyIRun}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div ref={involvedRef} className={`bg-gradient-to-br from-card to-card/50 p-10 rounded-xl border-2 text-center neon-border shadow-xl fade-in-up delay-500 ${involvedVisible ? 'animate' : ''}`}>
            <h2 className="text-3xl font-bold mb-6 text-brand-red neon-glow-subtle tracking-tight">Want to Get Involved?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              We're always looking for <span className="text-brand-red font-semibold">passionate runners</span> to help grow our community. Whether you want to 
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