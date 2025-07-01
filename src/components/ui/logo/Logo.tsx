import logo from '../../../assets/logo-crazee-burger.png'
import './logo.css'

export function Logo() {
	return (
		<div className="logo">
			<span>Crazee</span>
			<img src={logo} alt="logo" />
			<span>Burger</span>
		</div>
	)
}
