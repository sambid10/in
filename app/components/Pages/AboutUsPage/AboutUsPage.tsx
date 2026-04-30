"use client"

import React, { useRef } from "react"
import ComponentWrapper from "../../ComponentWrapper"
import { Button } from "../../Button/Button"
import { motion, useScroll, useTransform } from "motion/react"

const lines = [
    "As an award-winning agency within",
    "the digital jungle, transcends",
    "aesthetics, crafting your vision into a",
    "legacy that endures."
]

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1
        }
    }
}

const lineVariant = {
    hidden: {
        y: "60%",
        opacity: 0
    },
    visible: {
        y: "0%",
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: [0.33, 1, 0.68, 1] as const
        }
    }
}
export default function AboutUsPage() {
    const ref = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const title1 = useTransform(scrollYProgress, [0, 0.4], ["8%", "0%"])
    const title2 = useTransform(scrollYProgress, [0, 0.5], ["18%", "0%"])

    return (
        <ComponentWrapper>
            <div
                ref={ref}
                className="flex flex-col gap-4 min-h-screen justify-center relative pb-40"
            >
                <div>
                    <motion.h1
                        style={{ x: title1, lineHeight: "20%" }}
                        className="uppercase text-[150px] tracking-tighter font-bold"
                    >
                        WHO
                    </motion.h1>

                    <motion.h1
                        style={{ x: title2 }}
                        className="uppercase text-[150px] tracking-tighter font-bold"
                    >
                        WE ARE
                    </motion.h1>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: false,
                        amount: 0.8
                    }}
                    className="flex flex-col gap-1"
                >
                    {lines.map((line, i) => (
                        <div key={i} className="overflow-hidden">
                            <motion.p
                                variants={lineVariant}
                                className="text-4xl leading-none"
                            >
                                {line}
                            </motion.p>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ y: "80%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{
                        duration: 0.6,
                        ease: [0.33, 1, 0.68, 1]
                    }}
                    className="absolute bottom-0 right-0 w-[50%] flex flex-col gap-8 text-accent items-start"
                >
                    <motion.h1

                        className="text-xl text-left"
                    >
                        We roar with creativity, staying updated with the latest tech
                        to make your brand a formidable force in the digital wilderness
                        and deliver exceptional website and app experiences.
                    </motion.h1>

                    <motion.div

                    >
                        <Button>About Us</Button>
                    </motion.div>
                </motion.div>
            </div>
        </ComponentWrapper>
    )
}