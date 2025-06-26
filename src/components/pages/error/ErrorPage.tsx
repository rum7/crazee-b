import { Link } from "react-router";

export function ErrorPage() {
    return (
        <div>
            <h1>ErrorPage</h1>
            <Link to="/">
                <button>Retourner à la page d'accueil</button>
            </Link>
        </div>
    )
}
