import { MouseEvent, useContext } from "react";

import { ButtonProps } from "_types/props";
import clsx from "@utils/clsx";
import MenuContext from "./MenuContext";

function MenuItem({ children, classNames = "", onClick = undefined }: ButtonProps) {
	const { isOpen, onMenuClick } = useContext(MenuContext);

	const onMenuItemClick = (event: MouseEvent) => {
		if (onClick) {
			onClick();
			onMenuClick(false);
		} 
	}

	return (
		<div className={clsx(classNames, "menu-item")} onClick={onMenuItemClick}>
			{children}
		</div>
	);
}

export default MenuItem;
