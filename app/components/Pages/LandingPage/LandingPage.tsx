"use client"
import ComponentWrapper from '../../ComponentWrapper'
import { Button } from '../../Button/Button'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.5,
            delayChildren: 1.5
        },
    },
}

const item = {
    hidden: {
        opacity: 0,
        rotateX: 90,
        y: 30,
        filter: "blur(8px)",
    },
    show: {
        opacity: 1,
        rotateX: 0,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.7,
            ease: [0.33, 1, 0.68, 1] as const,
        },
    },
}

const item2 = {
    hidden: {
        opacity: 0,
        y: 60,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: [0.33, 1, 0.68, 1] as const,
        },
    },
}

export default function LandingPage() {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    })

    const videoWidth = useTransform(scrollYProgress, [0, 0.6], ["12px", "100vw"])
    const videoHeight = useTransform(scrollYProgress, [0, 0.6], ["12px", "100vh"])
    const borderRadius = useTransform(scrollYProgress, [0, 0.6], ["99px", "24px"])
    const videoTop = useTransform(scrollYProgress, [0, 0.6], ["86%", "50%"])

    return (
        <div ref={containerRef} className="relative h-[200vh]">

            <ComponentWrapper>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="min-h-screen z-10 -mt-26 flex flex-col items-center justify-center relative"
                >
                    {/* title */}
                    <div className="flex flex-col gap-4 mx-auto w-full items-center">
                        <motion.h1
                            variants={item}
                            style={{ lineHeight: "90%" }}
                            className="uppercase font-bold max-w-4xl text-[82px] text-center tracking-tighter"
                        >
                            roar in the <br /> digital wilderness.
                        </motion.h1>

                        <motion.p
                            variants={item2}
                            className="text-center text-sm max-w-2xl uppercase tracking-tight"
                        >
                            We roar with success, delivering the TRIONN® <br />
                            through versatile design, branding and the latest <br />
                            tech development to companies.
                        </motion.p>
                    </div>

                    {/* buttons */}
                    <div className="absolute bottom-18 flex items-center w-full justify-between">
                        <motion.div variants={item2}>
                            <Button><h1>Explore work</h1></Button>
                        </motion.div>
                        <motion.div variants={item2}>
                            <Button><h1>Get in Touch</h1></Button>
                        </motion.div>
                    </div>
                </motion.div>
            </ComponentWrapper>

            <motion.div
                style={{
                    width: videoWidth,
                    height: videoHeight,
                    borderRadius: borderRadius,
                    overflow: "hidden",
                    position: "fixed",
                    top: videoTop,
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                    zIndex: 20,
                }}
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-cover w-full h-full"
                    src="/intro-video.mp4"
                />
            </motion.div>

        </div>
    )
}