"use client"

import React, { useState } from "react"
import { motion } from "motion/react"

const DURATION = 0.3
const STAGGER = 0.05

function AnimatedTitle({
  text,
  hovered
}: {
  text: string
  hovered: boolean
}) {
  return (
    <div
      className="relative overflow-hidden"
      style={{ lineHeight: 0.85 }}
    >
      <div>
        {text.split("").map((letter, i) => (
          <motion.span
            key={`top-${i}`}
            animate={{
              y: hovered ? "-100%" : "0%"
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i
            }}
            className="inline-block text-[100px] font-semibold tracking-tight"
          >
            {letter}
          </motion.span>
        ))}
      </div>

      <div className="absolute inset-0">
        {text.split("").map((letter, i) => (
          <motion.span
            key={`bottom-${i}`}
            animate={{
              y: hovered ? "0%" : "100%"
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i
            }}
            className="inline-block text-[100px] font-semibold tracking-tight"
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </div>
  )
}

function Card({
  reverse = false,
  color,
  title,
  subtitle
}: {
  reverse?: boolean
  color: string
  title: string
  subtitle: string
}) {
  const [hovered, setHovered] = useState(false)
  const defcolor = "#17181A"

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{
        opacity: 0.5,
        scale: 0.9,
        x: reverse ? 400 : -400,
        rotate: reverse ? 30 : -30
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        x: 0,
        rotate: 0
      }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: [0.5, 1, 0.89, 1]
      }}
      style={{
        backgroundColor: hovered ? color : defcolor,
        transition: "background-color 0.5s ease"
      }}
      className="h-[400px] rounded-xl p-6 flex flex-col text-white relative hover:text-black overflow-hidden"
    >
      <AnimatedTitle text={title} hovered={hovered} />

      <p className="text-3xl uppercase absolute right-6 bottom-6 text-right leading-none">
        {subtitle.split("  ").map((word, i) => (
          <span key={i} className="block font-semibold">
            {word}
          </span>
        ))}
      </p>
    </motion.div>
  )
}

export default function AchievementPage() {
  return (
    <div className="px-24 min-h-screen flex items-center py-24">
      <div className="grid grid-cols-2 gap-8 w-full">
        <div className="flex flex-col gap-8">
          <Card
            color="#C73202"
            title="50+"
            subtitle="awards  recognition"
          />
          <Card
            color="#A0C8B8"
            title="20+"
            subtitle="creative  minds"
          />
        </div>

        <div className="flex flex-col mt-24 gap-8">
          <Card
            reverse
            color="#C0C8C9"
            title="900+"
            subtitle="projects  completed"
          />
          <Card
            reverse
            color="#DDCE3E"
            title="20+"
            subtitle="years of  experience"
          />
        </div>
      </div>
    </div>
  )
}