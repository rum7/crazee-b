export default function App() {
    // state (état, données)
    
    // comportements
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()

        const formData: FormData = new FormData(e.target as HTMLFormElement)
        const prenom = formData.get('prenom')
        alert(`Bonjour ${prenom}`)

    }

    // affichage (render)
    return (
        <div>
            <h1>Bienvenue chez nous !</h1>
            <h2>Connectez-vous</h2>
            <form
                onSubmit={handleLogin}
            >
                <input 
                    type="text" 
                    name="prenom" 
                    placeholder="Entrez votre prénom..." 
                    required 
                />
                <button type="submit">Accédez à votre espace</button>
            </form>
        </div>
    )    
}