import { Logo } from "../../ui/Logo";
import { LoginForm } from "./LoginForm";

export function LoginPage() {
    // state (état, données)

    // comportements

    // affichage (render)
    return (
        <main className="auth">
            <Logo />
            <LoginForm />
        </main>
    )    
}