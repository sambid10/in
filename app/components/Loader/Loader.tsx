"use client"
import { motion } from "motion/react"
import { useEffect, useState } from "react";

export default function Loader() {
    const [startanimate, setAnimate] = useState(false)
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

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`

    return (
        <motion.div
            animate={startanimate ? { y: "-130%" } : { y: 0 }}
            transition={{ ease: [0.25, 1, 0.5, 1], duration: 1.7 }}
            className='fixed z-[120] inset-0 bg-[#17181A] text-amber-50 flex items-center justify-center'>

            <svg className='absolute left-0 top-0 w-full h-[calc(100vh+320px)] fill-[#17181A]'>
                <motion.path
                    animate={{ d: startanimate ? targetPath : initialPath }}
                    transition={{
                        duration: 0.7,
                        ease: [0.76, 0, 0.24, 1] as const,
                        delay: startanimate ? 0.3 : 0
                    }}
                    d={initialPath}
                />
            </svg>
        </motion.div>
    )
}