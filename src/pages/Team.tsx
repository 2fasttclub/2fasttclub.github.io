import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Team = () => {
  const leadership = [
    {
      name: "Alex Johnson",
      role: "Club President & Founder",
      bio: "Started 2FASTT to build the inclusive running community Rutgers was missing. Believes every runner has a story worth celebrating.",
      year: "Senior",
      major: "Exercise Science",
      favoriteDistance: "Half Marathon",
      runningGoal: "Sub-1:30 half marathon",
    },
    {
      name: "Sam Chen", 
      role: "Vice President",
      bio: "Passionate about making running accessible to everyone. Organizes our social events and ensures no one gets left behind.",
      year: "Junior",
      major: "Kinesiology",
      favoriteDistance: "5K",
      runningGoal: "Complete first marathon",
    },
    {
      name: "Maya Patel",
      role: "Training Coordinator",
      bio: "Former track athlete who loves helping others discover their potential. Plans our weekly workouts and training programs.",
      year: "Sophomore", 
      major: "Sports Management",
      favoriteDistance: "10K",
      runningGoal: "Qualify for Boston Marathon",
    },
    {
      name: "Jordan Kim",
      role: "Social Media & Events",
      bio: "The creative force behind our community events. Makes sure every run ends with good vibes and great memories.",
      year: "Junior",
      major: "Communications",
      favoriteDistance: "Fun Run",
      runningGoal: "Run in all 5 boroughs of NYC",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <section className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-brand-red to-brand-red-light bg-clip-text text-transparent">
            Meet The Team
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            The passionate runners leading our community
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {leadership.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarFallback className="bg-brand-red text-white text-lg">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-brand-red">{member.name}</CardTitle>
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
                      <span className="font-medium text-brand-red">Favorite Distance:</span> {member.favoriteDistance}
                    </div>
                    <div>
                      <span className="font-medium text-brand-red">Current Goal:</span> {member.runningGoal}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card p-8 rounded-lg border text-center">
            <h2 className="text-2xl font-semibold mb-4 text-brand-red">Want to Get Involved?</h2>
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