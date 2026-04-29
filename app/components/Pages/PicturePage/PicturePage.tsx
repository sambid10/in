"use client"
import ComponentWrapper from '../../ComponentWrapper'
import Image from 'next/image'
import { Button } from '../../Button/Button'
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from 'react'

export default function PicturePage() {
    return (
        <div>
            <ProjectShowcase
                title="loftloom"
                subtitle="UI Design, UX, Wireframe"
                imageSrc="/1.webp"
                imageAlt="pic1"
            />
            <ProjectShowcase
                title="imusic"
                subtitle="Research, UX, UI Design"
                imageSrc="/2.webp"
                imageAlt="pic2"
                reverse={true}
            />
            <ProjectShowcase
                title="technis"
                subtitle="UX, UI Design, Development"
                imageSrc="/3.webp"
                imageAlt="pic3"
            />
        </div>
    )
}

interface ProjectShowcaseProps {
    title: string
    subtitle: string
    imageSrc: string
    imageAlt: string
    buttonLabel?: string
    reverse?: boolean
}

function ProjectShowcase({
    title,
    subtitle,
    imageSrc,
    imageAlt,
    buttonLabel = 'View Project',
    reverse = false,
}: ProjectShowcaseProps) {

    const ref = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const rotate = useTransform(scrollYProgress, [0, 0.5], [reverse ? -10 : 10, 0])
    const x = useTransform(scrollYProgress, [0, 1], [reverse ? -100 : 100, reverse ? 100 : -100])
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05])

    return (
        <div
            ref={ref}
            className={`flex w-full items-center justify-between overflow-hidden gap-6 py-20 min-h-dvh
                flex-col md:flex-row
                ${reverse ? 'md:flex-row-reverse' : ''}
            `}
        >
            <motion.div
                initial={{ y: "100px", opacity: 1 }}
                whileInView={{ y: "0%", opacity: 1 }}  
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.4, ease: "easeIn" }}
                className={`
                    flex flex-col gap-8 w-full md:w-[30%]
                    ${reverse ? 'md:items-end items-start px-24' : 'items-start px-24'}
                `}
            >
                <div className="flex flex-col gap-2 ">
                    <h1 className="uppercase font-bold text-4xl md:text-6xl tracking-tighter">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl -mt-1">{subtitle}</p>
                </div>

                <Button>
                    <h1>{buttonLabel}</h1>
                </Button>
            </motion.div>

            <motion.div
                className="relative w-full md:w-[60%] aspect-video"
                style={{ rotateZ: rotate, x, scale }}
            >
                <Image
                    fill
                    alt={imageAlt}
                    src={imageSrc}
                    className="rounded-xl object-cover"
                />
            </motion.div>
        </div>
    )
}