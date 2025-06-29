import logo from '../../assets/logo-crazee-burger.png'

export function Logo() {
	return (
		<div className="auth_logo">
			<span>Crazee</span>
			<img src={logo} alt="logo" />
			<span>Burger</span>
		</div>
	)
}
