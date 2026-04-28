import * as React from "react"

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "default" 
  size?: "default"
}

const variants = {
  default: "bg-transparent hover:bg-transparent text-accent hover:bg-primary/90",
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
    <button
      className={`inline-flex border-2 border-accent  items-center justify-center gap-2 rounded-full text-large font-medium transition-all disabled:opacity-50 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  )
}

export { Button }