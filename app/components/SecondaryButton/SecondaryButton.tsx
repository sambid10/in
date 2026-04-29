import * as React from "react"

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "default" 
  size?: "default"
}

const variants = {
  default: "bg-[#333B3B] hover:bg-transparent text-primary hover:bg-primary/90",
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
    <button
      className={`inline-flex    items-center justify-center gap-2 rounded-full text-large font-medium transition-all disabled:opacity-50 cursor-pointer ${variants[variant]} ${sizes[size]} ${className} rounded-full`}
      {...props}
    />
  )
}

export { SecondaryButton}