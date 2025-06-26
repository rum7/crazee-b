import { Link, useParams } from "react-router"

export function OrderPage() {
    const { prenom } = useParams()
    return (
        <div>
            <h1>Bonjour {prenom}</h1>
            <Link to="/">
                <button>Déconnexion</button>
            </Link>
        </div>
    )
}
