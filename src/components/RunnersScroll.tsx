import { useEffect, useRef, useState } from "react";
import { createTimeline, onScroll } from "animejs";
import Runner from "@/components/Runner";
import { GROUPME_URL } from "@/lib/links";

// Each runner: colour, lane at each checkpoint (0 = front lane),
// and x position (vw) at each checkpoint. Different paces between
// checkpoints make the pack shuffle and overtake as you scroll.
const RUNNERS = [
  { color: "#ffffff", lanes: [1, 0, 1, 0], x: [-12, 34, 58, 118], strides: 13 },
  { color: "hsl(0 84% 50%)", lanes: [0, 1, 0, 1], x: [-26, 42, 50, 108], strides: 14 },
  { color: "#a3a3a3", lanes: [2, 2, 1, 2], x: [-40, 18, 66, 104], strides: 12 },
  { color: "hsl(0 84% 50%)", lanes: [3, 2, 3, 3], x: [-54, 8, 40, 96], strides: 13 },
  { color: "#ffffff", lanes: [2, 3, 2, 1], x: [-68, 26, 74, 124], strides: 15 },
];

const CAPTIONS = [
  {
    title: "All levels welcome",
    body: "Whether you run every day or just want to jog and meet people.",
  },
  {
    title: "Social & supportive",
    body: "Connect through running and build lasting friendships.",
  },
  {
    title: "No pressure runs",
    body: "No pressure to be fast, no judgment about your pace.",
  },
];

const RUN_END = 880; // runners cross the screen over 0 → RUN_END (timeline units)
const TOTAL = 1000;
const LANE_GAP_VH = 7;

/** [a, b, a, b, ...] with `cycles` round trips. */
const alt = (a: number, b: number, cycles: number) =>
  Array.from({ length: cycles * 2 + 1 }, (_, i) => (i % 2 === 0 ? a : b));

const laneY = (lane: number) => `${-lane * LANE_GAP_VH}vh`;
const laneScale = (lane: number) => 1 - lane * 0.13;

const RunnersScroll = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const kmRef = useRef<HTMLSpanElement>(null);
  const [reduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reduced) return;

    const q = (sel: string) => section.querySelectorAll<HTMLElement | SVGElement>(sel);
    const distance = { km: 0 };

    const tl = createTimeline({
      defaults: { ease: "linear" },
      autoplay: onScroll({
        target: section,
        enter: "top top",
        leave: "bottom bottom",
        sync: 0.8,
      }),
    });

    // Background type and track marks drift left: the camera moves with the pack.
    tl.add(q(".rs-bigtype"), { translateX: ["0%", "-50%"], duration: TOTAL }, 0)
      .add(q(".rs-marks"), { translateX: ["0vw", "-160vw"], duration: TOTAL }, 0)
      .add(
        distance,
        {
          km: [0, 5],
          duration: RUN_END,
          onUpdate: () => {
            if (kmRef.current) kmRef.current.textContent = distance.km.toFixed(2);
          },
        },
        0,
      );

    RUNNERS.forEach((r, i) => {
      const el = q(`.rs-runner-${i}`)[0];
      const seg = RUN_END / (r.x.length - 1);

      // Position across the screen + lane changes (y + depth scale).
      tl.add(
        el,
        {
          translateX: r.x.slice(1).map((x) => ({ to: `${x}vw`, duration: seg, ease: "inOutSine" })),
          translateY: r.lanes.slice(1).map((l) => ({ to: laneY(l), duration: seg, ease: "inOutQuad" })),
          scale: r.lanes.slice(1).map((l) => ({ to: laneScale(l), duration: seg, ease: "inOutQuad" })),
        },
        0,
      );

      // Stride cycle, driven by scroll: scroll more → more steps.
      const limb = (sel: string, values: number[]) =>
        tl.add(el.querySelectorAll(sel), { rotate: values, duration: RUN_END, ease: "inOutSine" }, 0);
      limb(".leg-a", alt(-40, 32, r.strides));
      limb(".leg-b", alt(32, -40, r.strides));
      limb(".leg-a .shin", alt(8, 75, r.strides));
      limb(".leg-b .shin", alt(75, 8, r.strides));
      limb(".arm-a", alt(38, -38, r.strides));
      limb(".arm-b", alt(-38, 38, r.strides));
      tl.add(
        el.querySelectorAll(".body"),
        { translateY: alt(0, -5, r.strides * 2), duration: RUN_END, ease: "inOutSine" },
        0,
      );
    });

    // Captions swap as the pack moves.
    const captions = q(".rs-caption");
    const slot = RUN_END / CAPTIONS.length;
    captions.forEach((c, i) => {
      if (i > 0) {
        tl.add(c, { opacity: [0, 1], translateY: ["2rem", "0rem"], duration: 70, ease: "outQuad" }, i * slot);
      }
      tl.add(c, { opacity: 0, translateY: "-2rem", duration: 70, ease: "inQuad" }, (i + 1) * slot - 70);
    });

    // Finish: invite people in once the pack has gone by.
    tl.add(q(".rs-finish"), { opacity: [0, 1], translateY: ["3rem", "0rem"], duration: 100, ease: "outQuad" }, RUN_END - 40);
    tl.add(q(".rs-finish-line"), { scaleY: [0, 1], duration: 120, ease: "outQuad" }, RUN_END - 120);

    return () => {
      tl.revert();
    };
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="run"
      aria-label="What running with 2FASTT is like"
      className={reduced ? "relative" : "relative h-[420vh]"}
    >
      <div className={`${reduced ? "relative min-h-screen" : "sticky top-0 h-screen"} overflow-hidden`}>
        {/* giant background type */}
        <div className="pointer-events-none absolute inset-x-0 top-[14vh] select-none overflow-hidden">
          <div className="rs-bigtype whitespace-nowrap font-condensed text-[26vh] font-black uppercase leading-none text-white/[0.04]">
            No pressure. Just community. No pressure. Just community.&nbsp;
          </div>
        </div>

        {/* header row: captions + distance */}
        <div className="relative z-20 mx-auto flex max-w-7xl items-start justify-between gap-6 px-4 pt-24 sm:px-8">
          <div className="relative h-40 w-full max-w-md">
            {CAPTIONS.map((c, i) => (
              <div
                key={c.title}
                className="rs-caption absolute inset-0"
                style={{ opacity: i === 0 || reduced ? 1 : 0, position: reduced ? "static" : undefined }}
              >
                <p className="font-mono text-sm text-brand-red">0{i + 1} / 0{CAPTIONS.length}</p>
                <h3 className="mt-2 font-condensed text-5xl font-black uppercase leading-[0.9] sm:text-6xl">
                  {c.title}
                </h3>
                <p className="mt-3 text-base text-muted-foreground sm:text-lg">{c.body}</p>
              </div>
            ))}
          </div>
          <div className="hidden shrink-0 text-right sm:block">
            <p className="font-condensed text-6xl font-black tabular-nums leading-none">
              <span ref={kmRef}>{reduced ? "5.00" : "0.00"}</span>
              <span className="ml-1 text-2xl text-muted-foreground">km</span>
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">Group run in progress</p>
          </div>
        </div>

        {/* track */}
        <div className="absolute inset-x-0 bottom-0 h-[44vh]">
          <div className="absolute inset-x-0 bottom-0 h-[34vh] border-t border-white/15 bg-neutral-950">
            {[1, 2, 3].map((l) => (
              <div
                key={l}
                className="absolute inset-x-0 border-t border-white/10"
                style={{ bottom: `${l * LANE_GAP_VH + 3}vh` }}
              />
            ))}
            <div
              className="rs-marks absolute bottom-0 left-0 h-full w-[400vw] opacity-40"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, transparent 0 calc(20vw - 2px), rgba(255,255,255,.25) calc(20vw - 2px) 20vw)",
                maskImage: "linear-gradient(to top, black, transparent)",
                WebkitMaskImage: "linear-gradient(to top, black, transparent)",
              }}
            />
            <div className="rs-finish-line absolute bottom-0 right-[12vw] h-full w-3 origin-bottom bg-[repeating-linear-gradient(0deg,#fff_0_12px,#000_12px_24px)] opacity-80" style={{ transform: reduced ? undefined : "scaleY(0)" }} />
          </div>

          {/* runners: back lanes first so front lane draws on top */}
          {RUNNERS.map((r, i) => ({ r, i }))
            .sort((a, b) => b.r.lanes[0] - a.r.lanes[0])
            .map(({ r, i }) => (
              <div
                key={i}
                className={`rs-runner-${i} absolute bottom-[3vh] left-0 h-[13vh] origin-bottom sm:h-[22vh]`}
                style={{
                  transform: reduced
                    ? `translateX(${10 + i * 17}vw) translateY(${laneY(r.lanes[0])}) scale(${laneScale(r.lanes[0])})`
                    : `translateX(${r.x[0]}vw) translateY(${laneY(r.lanes[0])}) scale(${laneScale(r.lanes[0])})`,
                }}
              >
                <Runner color={r.color} className="h-full w-auto" />
              </div>
            ))}
        </div>

        {/* finish CTA */}
        <div
          className="rs-finish absolute inset-x-0 top-1/2 z-20 -translate-y-1/2 px-4 text-center"
          style={{ opacity: reduced ? 1 : 0, position: reduced ? "relative" : undefined }}
        >
          <p className="font-condensed text-6xl font-black uppercase leading-[0.9] sm:text-8xl">
            Your lane is open.
          </p>
          <a
            href={GROUPME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-brand-red px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-brand-red-hover"
          >
            Join the Club
          </a>
        </div>
      </div>
    </section>
  );
};

export default RunnersScroll;
