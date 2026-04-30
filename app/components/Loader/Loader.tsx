"use client"
import { motion } from "motion/react"
import { useEffect, useState } from "react";

const words = ["Loading", "TRIONN®"]

export default function Loader() {
    const [startAnimate, setAnimate] = useState(false)
    const [dimension, setDimension] = useState({ height: 0, width: 0 })

    useEffect(() => {
        setDimension({
            height: window.innerHeight,
            width: window.innerWidth
        })
    }, [])

    useEffect(() => {
        document.body.style.overflowY = "scroll";
        document.body.style.position = "fixed";
        document.body.style.width = "100%";
        const timer = setTimeout(() => {
            setAnimate(true);
            document.body.style.position = "static";
            document.body.style.overflowY = "auto";
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height - 600} 0 ${dimension.height} L0 0`

const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height + 320} Q${dimension.width / 2} ${dimension.height + 320 - 600} 0 ${dimension.height + 320} L0 0`
    return (
        <motion.div
            animate={startAnimate ? { y: "-300%" } : { y: 0 }}
            transition={{ ease: [0.25, 1, 0.5, 1], duration: 1.7,delay:startAnimate ? 0.5 : 0  }}
            className="fixed z-[120] inset-0 bg-[#17181A] text-primary flex items-center justify-center"
        >

            <div className="flex items-center gap-4 z-10">
                {words.map((word, i) => (
                    <div key={i} className="overflow-hidden">
                        <motion.p
                            initial={{ y: "100%" }}
                            animate={{ y: startAnimate ? "100%" : 0 }}
                            transition={{
                                duration: 0.7,
                                ease: [0.33, 1, 0.68, 1],
                                delay: i * 0.15
                            }}
                            className="uppercase text-4xl font-bold tracking-tighter"
                        >
                            {word}
                        </motion.p>
                    </div>
                ))}
            </div>

            <svg className="absolute left-0 top-0 w-full h-[calc(100vh+320px)] fill-[#17181A]">
                <motion.path
                    animate={{ d: startAnimate ? targetPath : initialPath }}
                    transition={{
                        duration: 0.7,
                        ease: [0.76, 0, 0.24, 1] as const,
                        delay: startAnimate ? 0.3 : 0
                    }}
                    d={initialPath}
                />
            </svg>
        </motion.div>
    )
}