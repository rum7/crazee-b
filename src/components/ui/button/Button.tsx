import type { ReactElement } from "react"
import './button.css'

type ButtonProps = {
    text: string,
    Icon?: ReactElement
    variant: string,
    size: string
}

export function Button({
    text,
    Icon,
    variant,
    size,
} : ButtonProps) {
  return (
    <button 
        type="submit" 
        className={`${variant} ${size}`}
    >
        {text}
        {Icon}
    </button>
  )
}
