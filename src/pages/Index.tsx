import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import RunnersScroll from "@/components/RunnersScroll";
import matthewFounder from "@/assets/matthew-founder.jpeg";
import { EMAIL, GROUPME_URL, INSTAGRAM_URL } from "@/lib/links";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <RunnersScroll />

      {/* Founder */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-24 sm:px-8 md:grid-cols-[2fr_3fr] md:items-center md:py-32">
        <img
          src={matthewFounder}
          alt="Matthew, founder of 2FASTT"
          className="aspect-[4/5] w-full max-w-sm rounded-lg object-cover grayscale transition duration-500 hover:grayscale-0"
        />
        <figure>
          <blockquote className="font-condensed text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            “I started 2FASTT because I always wanted a chill, social run club on campus. This is a space for
            anyone, whether you run every day or just want to jog and meet people.{" "}
            <span className="text-brand-red">No pressure. Just community.</span>”
          </blockquote>
          <figcaption className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Matthew, Founder
          </figcaption>
        </figure>
      </section>

      {/* Merch */}
      <section className="border-y border-border bg-brand-red text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-14 sm:px-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Merch coming soon</p>
            <p className="mt-2 font-condensed text-5xl font-black uppercase leading-none sm:text-7xl">
              2FASTT Tees &amp; Hoodies
            </p>
          </div>
          <p className="max-w-sm text-white/80">
            Premium quality gear for the running community. Stay tuned for updates!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 text-sm text-muted-foreground sm:px-8 md:flex-row md:items-center md:justify-between">
        <p className="font-condensed text-2xl font-black uppercase text-foreground">2FASTT Run Club</p>
        <div className="flex flex-wrap gap-6">
          <a href={GROUPME_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            GroupMe
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            @2fasttclub
          </a>
          <a href={`mailto:${EMAIL}`} className="hover:text-foreground">
            {EMAIL}
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
