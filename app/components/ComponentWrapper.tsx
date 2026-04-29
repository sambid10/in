import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function ComponentWrapper({children,className}:{
    children:React.ReactNode,
    className?:string
}) {
  return (
    <div className={ twMerge(` max-w-7xl mx-auto w-full h-full overflow-x-visible`,className)}>
        {children}
    </div>
  )
}
