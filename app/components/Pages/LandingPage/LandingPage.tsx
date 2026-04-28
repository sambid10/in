import React from 'react'
import ComponentWrapper from '../../ComponentWrapper'
import { Button } from '../../Button/Button'

export default function LandingPage() {
    return (
        <ComponentWrapper>
            <div className='min-h-screen -mt-26 flex flex-col items-center justify-center relative'>
                <div className=' flex flex-col gap-4 mx-auto'> 
                    <h1
                        style={{
                            lineHeight: "90%"
                        }}
                        className='uppercase font-semibold max-w-3xl  text-7xl text-center tracking-tighter'>
                        roar in the <br /> digital wilderness.
                    </h1>
                    <p className='text-center text-sm max-w-2xl uppercase tracking-tight'>
                        We roar with success, delivering the TRIONN® <br/>through versatile design, branding and the latest <br/>tech development to companies.
                    </p>
                </div>
                <div className='absolute bottom-18 flex items-center h-fit w-full justify-between'>
                    <Button>
                        <h1>Explore work</h1>
                    </Button>
                     <Button>
                        <h1>Get in Touch</h1>
                    </Button>
                </div>
                
            </div>
        </ComponentWrapper>
    )
}
