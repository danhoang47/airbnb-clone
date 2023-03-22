import Logo from "@component/logo";
import { Link } from "react-router-dom";

import "./styles.scss";

function LogoWithBrandName() {
	return (
		<div className="logo-with-brand-name">
			<Link to="/">
				<Logo />
				<span className="brand-name">airbnb</span>
			</Link>
		</div>
	);
}

export default LogoWithBrandName;
