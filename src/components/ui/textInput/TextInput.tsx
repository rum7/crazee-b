import type { ReactElement } from "react";
import './input.css'

type InputProps = {
    name: string,
    placeholder?: string,
    required?: boolean
    Icon?: ReactElement
}

export function TextInput({ 
    name, 
    Icon,
    ...extraProps
} : InputProps) {
	return (
		<div className="input_wrapper">
			{Icon}
			<input
                type="text"
				name={name}
                {...extraProps}
			/>
		</div>
	)
}
