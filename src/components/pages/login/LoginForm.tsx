import { useRef } from "react"

export function LoginForm() {
    // state (état, données)
    const formRef = useRef<HTMLFormElement>(null)

    // comportements
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()

        const formData: FormData = new FormData(e.target as HTMLFormElement)
        const prenom = formData.get('prenom')
        alert(`Bonjour ${prenom}`)

        formRef.current?.reset()

    }

    // affichage (render)
    return (
        <form 
            ref={formRef}
            onSubmit={handleLogin}
        >
            <h1>Bienvenue chez nous !</h1>
            <h2>Connectez-vous</h2>
            <input 
                type="text" 
                name="prenom" 
                placeholder="Entrez votre prénom..." 
                required 
            />
            <button type="submit">Accédez à votre espace</button>
        </form>
    )    
}
