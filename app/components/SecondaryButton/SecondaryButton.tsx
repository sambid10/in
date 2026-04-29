import * as React from "react"
import Magnetic from "../Magnetic/MagneticWrapper"

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "default"
  size?: "default"
}

const variants = {
  default: "bg-[#333B3B] hover:bg-accent cursor-pointer hover:text-black  text-primary",
}

const sizes = {
  default: "h-9 w-9 px-2 py-2 tracking-wide text-lg font-normal",
}

function SecondaryButton({
  className = "",
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <Magnetic>
        <button
        className={`flex relative items-center group shadow-[0_0_0px_var(--color-accent)] hover:shadow-[0_0_80px_var(--color-accent)] [&>*]:pointer-events-none justify-center gap-2 rounded-full font-medium transition-all disabled:opacity-50 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
    />
    </Magnetic>
    
  )
}

export { SecondaryButton }