"use client";

import { motion, useScroll } from "motion/react";
import { useRef } from "react";

export default function WorkExperienceScroll() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollContainerRef });

  return (
    <div className="flex gap-4 max-w-2xl">
      <div className="relative w-1.5 h-52 md:h-40 bg-zinc-800 rounded-full">
        <motion.div
          className="absolute top-0 left-0 w-full bg-pink-400 rounded-full"
          style={{
            height: "100%",
            scaleY: scrollYProgress,
            transformOrigin: "top",
          }}
        />
      </div>

      <div
        ref={scrollContainerRef}
        className="flex-1 h-52 md:h-40 overflow-y-auto  scrollbar-hide snap-y snap-mandatory"
      >
        <section className="flex flex-col space-y-4">
          <h2 className="text-white text-lg font-light sticky top-0 bg-black z-10">
            Work Experience
          </h2>

          <article className="min-h-36 flex flex-col justify-center snap-end">
            <div>
              <h2 className="text-white text-lg md:text-2xl font-medium">
                Endeavor Assets{" "}
                <span className="font-light text-xs md:text-base">
                  {"- Full Stack Developer"}
                </span>
              </h2>
              <p className="text-zinc-300 font-light">2024 - Present</p>
            </div>
            <p className="text-zinc-300">
              {
                "I develop the core products and services for a startup focused on educating and showcasing successful day traders."
              }
            </p>
          </article>

          <article className="min-h-36 flex flex-col justify-center snap-end">
            <div>
              <h2 className="text-white text-lg md:text-2xl font-medium">
                All Tech Solutions{" "}
                <span className="font-light text-xs md:text-base">
                  {"- Full Stack Developer"}
                </span>
              </h2>
              <p className="text-zinc-300 font-light">2024 - 2025</p>
            </div>
            <p className="text-zinc-300">
              {
                "Designed and implemented responsive user interfaces for client projects using modern JavaScript frameworks and CSS techniques."
              }
            </p>
          </article>

          <article className="min-h-36 flex flex-col justify-center snap-end">
            <div>
              <h2 className="text-white text-lg md:text-2xl font-medium">
                G2 Insurance{" "}
                <span className="font-light text-xs md:text-base">
                  {"- Software Engineer Consultant"}
                </span>
              </h2>
              <p className="text-zinc-300 font-light">2024 - 2024</p>
            </div>
            <p className="text-zinc-300">
              {
                "Led and consulted with a team of developers and insurance professionals to build an online presence and IT team."
              }
            </p>
          </article>
        </section>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
