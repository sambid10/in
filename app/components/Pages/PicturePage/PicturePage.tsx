import React from 'react'
import ComponentWrapper from '../../ComponentWrapper'
import Image from 'next/image'
import { Button } from '../../Button/Button'

export default function PicturePage() {
    const projects = [
        {
            title: "loftloom",
            subtitle: "UI Design, UX, Wireframe",
            imageSrc: "/1.webp",
            imageAlt: "pic1",
        },
        {
            title: "imusic",
            subtitle: "Research, UX, UI Design",
            imageSrc: "/2.webp",
            imageAlt: "pic2",
        },
        {
            title: "technis",
            subtitle: "UX, UI Design, Development",
            imageSrc: "/3.webp",
            imageAlt: "pic3",
        },
    ]

    return (
        <ComponentWrapper>
            <div className="flex flex-col">
                {projects.map((project, index) => (
                    <ProjectShowcase
                        key={project.title}
                        {...project}
                        reverse={index % 2 === 1}
                    />
                ))}
            </div>
        </ComponentWrapper>
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
    return (
        <div
            className={`flex h-dvh w-full items-center justify-between ${
                reverse ? 'flex-row-reverse' : ''
            }`}
        >
            <div className="flex flex-col gap-8 w-[30%]">
                <div className="flex flex-col gap-2">
                    <h1 className="uppercase font-bold text-6xl tracking-tighter">
                        {title}
                    </h1>
                    <p className="text-xl -mt-1">{subtitle}</p>
                </div>

                <Button>
                    <h1>{buttonLabel}</h1>
                </Button>
            </div>

            <div className="relative w-[60%] aspect-video">
                <Image
                    fill
                    alt={imageAlt}
                    src={imageSrc}
                    className="rounded-xl object-cover"
                />
            </div>
        </div>
    )
}