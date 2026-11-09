import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { animate, stagger } from "animejs";
import { GROUPME_URL } from "@/lib/links";

const WORD = "2FASTT";

const HeroSection = () => {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const letters = animate(root.querySelectorAll(".hero-letter"), {
      translateY: ["105%", "0%"],
      duration: 900,
      delay: stagger(70),
      ease: "outExpo",
    });
    const rest = animate(root.querySelectorAll(".hero-fade"), {
      opacity: [0, 1],
      translateY: ["1.5rem", "0rem"],
      duration: 700,
      delay: stagger(90, { start: 450 }),
      ease: "outQuad",
    });
    return () => {
      letters.revert();
      rest.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-4 pb-10 pt-24 sm:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <p className="hero-fade mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Rutgers University · Social run club
        </p>

        <h1 aria-label={WORD} className="flex overflow-hidden font-condensed font-black uppercase leading-[0.82] tracking-tight text-[31vw] sm:text-[27vw] xl:text-[22rem]">
          {WORD.split("").map((ch, i) => (
            <span key={i} aria-hidden="true" className="hero-letter inline-block">
              {ch}
            </span>
          ))}
        </h1>

        <div className="mt-6 grid gap-8 border-t border-border pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="hero-fade">
            <p className="font-condensed text-5xl font-black uppercase leading-none text-brand-red sm:text-7xl">
              RU Running?
            </p>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground sm:text-xl">
              A chill, social run club on campus. All paces welcome.
            </p>
          </div>
          <div className="hero-fade flex flex-wrap gap-3">
            <a
              href={GROUPME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-red px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-brand-red-hover"
            >
              Join the Club
            </a>
            <Link
              to="/schedule"
              className="rounded-full border border-white/25 px-7 py-3.5 text-base font-bold transition-colors hover:border-white"
            >
              See the schedule
            </Link>
          </div>
        </div>

        <p className="hero-fade mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="inline-block h-px w-10 bg-muted-foreground" />
          Scroll to run with us
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
