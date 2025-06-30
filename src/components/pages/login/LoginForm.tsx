import { useRef } from "react"
import { useNavigate } from "react-router"

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
            
            <div>
                <h2>Connectez-vous</h2>
                <input
                    type="text"
                    name="prenom"
                    placeholder="Entrez votre prénom..."
                    required
                />
                <button type="submit">Accédez à votre espace</button>
            </div>
        </form>
    )    
}
