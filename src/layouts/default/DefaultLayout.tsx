import { Outlet, useLocation, Link } from "react-router-dom";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import Header from "@layouts/default/header";
import Footer from "@layouts/default/footer";
import { LogoWithBrandName } from "@layouts/ui";
import Icon from "@component/icon";
import Button from "@component/button";

import "./styles.scss";
import { useEffect } from "react";
import ProfileMenuItem from "@layouts/ui/profile-menu-item";

function DefaultLayout() {
	const { pathname } = useLocation();

	//TODO: Implement SearchContext

	useEffect(() => {
		console.log(location.pathname);
	}, [location]);

	console.log("default-layout re-render");

	return (
		<div id="default-layout">
			<Header
				classNames={"header-section"}
				rightContent={<LogoWithBrandName />}
				middleContent={<div></div>}
				leftContent={
					<>
						<Link to="/">Cho thuê chỗ ở qua Airbnb</Link>
						<Button>
							<Icon icon={faGlobe} />
						</Button>
						<ProfileMenuItem />
					</>
				}
			>
				{pathname === "/" && <div></div>}
			</Header>
			<main className="main-section">
				<Outlet />
			</main>
			<Footer classNames={"footer-section"}>Footer</Footer>
		</div>
	);
}

export default DefaultLayout;
