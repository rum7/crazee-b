import type { ReactElement } from "react"
import './button.css'

type ButtonProps = {
    label: string,
    Icon?: ReactElement
    variant: string,
    size: string
}

export function Button({
    label,
    Icon,
    variant,
    size,
} : ButtonProps) {
  return (
    <button 
        type="submit" 
        className={`button ${variant} ${size}`}
    >
        {label}
        {Icon}
    </button>
  )
}
