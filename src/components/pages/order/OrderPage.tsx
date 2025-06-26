import { useParams } from "react-router"

export function OrderPage() {
    const { prenom } = useParams()
    return (
        <div>
            <h1>Bonjour {prenom}</h1>
            <a href="/">Déconnexion</a>
        </div>
    )
}
