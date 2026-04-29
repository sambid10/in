"use client"
import useMousePosition from '@/hooks/useMousePostiton'
import {motion} from "motion/react"
export default function MaskCursor() {
    const size=25;
    const {x,y}=useMousePosition()
  return (
    <>
       <motion.div
    className='mask'
    animate={{
        maskPosition:`${x -size/2}px ${y -size/2}px`,
        maskSize:`${size}px`
    }}
    transition={{
        type:"tween",
        ease:"backOut"
    }}
    />
    </>
 
  )
}
