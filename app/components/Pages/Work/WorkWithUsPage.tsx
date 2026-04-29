"use client";

import ComponentWrapper from "../../ComponentWrapper";
import { Button } from "../../Button/Button";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function WorkWithUsPage() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const xLeft = useTransform(scrollYProgress, [0, 0.5], ["-30%", "0%"]);
  const xRight = useTransform(scrollYProgress, [0, 0.5], ["30%", "0%"]);

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center justify-center"
    >
      <ComponentWrapper>
        <div className="flex justify-between items-end w-full">

          <div className="flex flex-col gap-8">

            <div>
              <motion.h1
                style={{
                  x: xLeft,
                  lineHeight: "10%",
                }}
                className="font-bold text-[150px] tracking-tighter"
              >
                RECENT
              </motion.h1>

              <motion.h1
                style={{
                  x: xRight,
                }}
                className="font-bold text-[150px] tracking-tighter"
              >
                WORK
              </motion.h1>
            </div>

            <p className="text-2xl text-accent">
              In the creative wilderness,<br />
              clients find our work truly<br />
              beloved.
            </p>
          </div>

          <Button>
            <h1>Explore Work</h1>
          </Button>

        </div>
      </ComponentWrapper>
    </div>
  );
}