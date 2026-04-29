import * as React from "react"
import Magnetic from "../Magnetic/MagneticWrapper"

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "default"
  size?: "default"
}

const variants = {
  default: "bg-transparent  hover:bg-accent text-accent hover:text-black",
}

const sizes = {
  default: "h-16 px-8 py-2 tracking-wide text-lg font-normal1",
}

function Button({
  className = "",
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <Magnetic>
      <button
        className={`inline-flex border-2 border-accent shadow-[0_0_0px_var(--color-accent)] hover:shadow-[0_0_80px_var(--color-accent)] items-center justify-center gap-2 rounded-full text-large font-medium transition-all duration-500 disabled:opacity-50 cursor-pointer [&>*]:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    </Magnetic>
  )
}
export {Button}