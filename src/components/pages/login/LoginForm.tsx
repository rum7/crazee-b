import { useRef } from 'react'
import { useNavigate } from 'react-router'
import { TextInput } from '../../ui/textInput/TextInput'
import { Button } from '../../ui/button/Button'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { FaChevronRight } from 'react-icons/fa'

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
				<TextInput
					name="prenom"
					placeholder="Entrez votre prénom"
					required
                    Icon={<IoPersonCircleOutline className="input_icon" />}
				/>

                <Button 
                    label="Accéder à mon espace" 
                    Icon={<FaChevronRight />}
                    variant='primary_burger'
                    size='font-P0'
                />
			</div>
		</form>
	)
}
