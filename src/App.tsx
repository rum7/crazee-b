export default function App() {
    // state (état, données)
    
    // comportements

    // affichage (render)
    return (
        <div>
            <h1>Bienvenue chez nous !</h1>
            <h2>Connectez-vous</h2>
            <form>
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