import React from 'react'
import Image from 'next/image'
import ComponentWrapper from '../ComponentWrapper'
export default function Navbar() {
    return (
        <ComponentWrapper>
            <header className='h-26 w-full flex items-center justify-between'>

                <Image
                    width={100}
                    loading='eager'
                    height={19}
                    alt='logo'
                    src={"/logo.svg"}
                />
            </header>
        </ComponentWrapper>
    )
}
