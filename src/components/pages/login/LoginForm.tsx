import { useRef } from "react"
import { FaChevronRight } from "react-icons/fa"
import { IoPersonCircleOutline } from "react-icons/io5"
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
            
            <div className="auth_container">
                <h2>Connectez-vous</h2>
                <div className="auth_input_wrapper">
                    <IoPersonCircleOutline color="#747B91" size={24} />
                    <input
                        type="text"
                        name="prenom"
                        placeholder="Entrez votre prénom"
                        required
                    />
                </div>
                <button type="submit">Accéder à mon espace<FaChevronRight /></button>
            </div>
        </form>
    )    
}
