import { memo } from "react";
import {  Link } from 'react-router-dom';
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import ProfileMenuItem from "@layouts/ui/profile-menu-item";
import Icon from "@component/icon";
import Button from "@component/button";

import "./styles.scss";

function HeaderGroupItem() {
	return (
		<>
			<Link to="/">Cho thuê chỗ ở qua Airbnb</Link>
			<Button classNames={"language-setting-button"}>
				<Icon icon={faGlobe} />
			</Button>
			<ProfileMenuItem />
		</>
	);
}

export default memo(HeaderGroupItem);
