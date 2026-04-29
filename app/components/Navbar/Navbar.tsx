import React from 'react'
import Image from 'next/image'
import ComponentWrapper from '../ComponentWrapper'
import { SecondaryButton } from '../SecondaryButton/SecondaryButton'
import { LuSunDim } from "react-icons/lu";

export default function Navbar() {
    return (
        <div className='sticky top-0 z-50'>
            <ComponentWrapper>
                <header className='h-26 w-full flex items-center justify-between'>
                    <Image
                        width={100}
                        loading='eager'
                        height={19}
                        alt='logo'
                        src={"/logo.svg"}
                    />
                    <div className='flex items-center gap-2'>
                        <SecondaryButton>
                            <LuSunDim className='h-8 w-8' />
                        </SecondaryButton>
                        <SecondaryButton className='flex items-center gap-[4px]'>
                            <span className='h-3 w-px bg-primary' />
                            <span className='h-5 w-px bg-primary' />
                            <span className='h-4 w-px bg-primary' />
                        </SecondaryButton>
                    </div>
                    <div className='flex items-center gap-4'>
                        <h1 className='uppercase text-xl'>Menu</h1>
                        <SecondaryButton className='flex flex-col items-end justify-center h-14 w-14 px-4'>
                            <span className='h-[2px] w-6 bg-primary' />
                            <span className='h-[2px] -mt-1 w-4 bg-primary' />
                        </SecondaryButton>
                    </div>
                </header>
            </ComponentWrapper>
        </div>
    )
}