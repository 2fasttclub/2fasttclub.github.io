import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GROUPME_URL } from "@/lib/links";

const runTypes = [
  {
    type: "Easy Pace Run",
    description: "A relaxed, social run. Perfect for beginners or recovery days.",
  },
  {
    type: "Tempo Run",
    description: "Moderate intensity workout to build strength and endurance.",
  },
  {
    type: "Fun Run Friday",
    description: "End the week with a fun, social run followed by optional hangout time.",
  },
  {
    type: "Long Run",
    description: "Build endurance with a longer run through scenic routes.",
  },
];

const Schedule = () => {
  const [titleRef, titleVisible] = useScrollAnimation<HTMLHeadingElement>();
  const [typesRef, typesVisible] = useScrollAnimation<HTMLDivElement>();
  const [infoRef, infoVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <section className="mx-auto max-w-6xl">
          <h1
            ref={titleRef}
            className={`mb-6 text-center text-5xl font-extrabold tracking-tight text-foreground md:text-6xl fade-in-up ${titleVisible ? "animate" : ""}`}
          >
            Run Schedule
          </h1>
          <p
            className={`mx-auto mb-10 max-w-3xl text-center text-xl leading-relaxed text-muted-foreground md:text-2xl fade-in-up delay-200 ${titleVisible ? "animate" : ""}`}
          >
            Run times and meeting spots are posted in our GroupMe each week. All paces welcome!
          </p>
          <div className={`mb-20 flex justify-center fade-in-up delay-300 ${titleVisible ? "animate" : ""}`}>
            <a
              href={GROUPME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-red px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-brand-red-hover"
            >
              Get the schedule on GroupMe
            </a>
          </div>

          <div ref={typesRef} className={`mb-16 fade-in-up ${typesVisible ? "animate" : ""}`}>
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Runs we do
            </h2>
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
              {runTypes.map((run) => (
                <div key={run.type} className="bg-card p-6 md:p-8">
                  <h3 className="text-2xl font-bold tracking-tight text-brand-red">{run.type}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{run.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={infoRef}
            className={`rounded-xl border-2 bg-card p-10 text-center fade-in-up delay-500 ${infoVisible ? "animate" : ""}`}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-brand-red">New to Running?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
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
