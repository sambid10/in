import React from 'react'

export default function ComponentWrapper({children}:{
    children:React.ReactNode
}) {
  return (
    <div className='max-w-7xl mx-auto w-full h-full'>
        {children}
    </div>
  )
}
