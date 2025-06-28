import { LoginForm } from "./LoginForm";
import logo from "../../../assets/logo-crazee-burger.png"

export function LoginPage() {
    // state (état, données)

    // comportements

    // affichage (render)
    return (
        <main className="auth">
            <div className="auth_logo">
                <span>Crazee</span>
                <img src={logo} alt="logo" />
                <span>Burger</span>
            </div>
            <LoginForm />
        </main>
    )    
}