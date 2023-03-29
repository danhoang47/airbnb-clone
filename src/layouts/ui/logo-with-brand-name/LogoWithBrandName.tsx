import { memo } from 'react';
import { Link } from "react-router-dom";

import Logo from "@component/logo";

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

export default memo(LogoWithBrandName);
