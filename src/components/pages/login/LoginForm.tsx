import { useRef } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { useNavigate } from 'react-router'
import { Input } from '../../ui/input/Input'
import { IoPersonCircleOutline } from 'react-icons/io5'

export function LoginForm() {
	// state (état, données)
	const formRef = useRef<HTMLFormElement>(null)
	const navigate = useNavigate()

	// comportements
	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault()

		const formData: FormData = new FormData(e.target as HTMLFormElement)
		const prenom = formData.get('prenom')
		formRef.current?.reset()

		navigate(`/order/${prenom}`)
	}

	// affichage (render)
	return (
		<form
			ref={formRef}
			onSubmit={handleLogin}
			className="auth_form"
        >
			<h1>Bienvenue chez nous !</h1>

			<div className="auth_container">
				<h2>Connectez-vous</h2>
				<Input
					name="prenom"
					placeholder="Entrez votre prénom"
					required
                    Icon={<IoPersonCircleOutline className="input_icon" />}
				/>

				<button type="submit">
					Accéder à mon espace
					<FaChevronRight />
				</button>
			</div>
		</form>
	)
}
