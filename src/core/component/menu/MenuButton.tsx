import { useContext } from "react";

import { ContainerProps } from "_types/props";
import MenuContext from "./MenuContext";
import Button from "@component/button";
import clsx from "@utils/clsx";

export type MenuButtonProps = ContainerProps & {
	toggle?: string;
};

function MenuButton({ children, classNames, toggle = '' }: MenuButtonProps) {
	const { isOpen, onMenuButtonClick } = useContext(MenuContext);

	return (
		<div className={clsx({ toggle: isOpen }, "menu-button")}>
			<Button
				onClick={onMenuButtonClick}
			>
	            {children}
	        </Button>
		</div>
	);
}

export default MenuButton;
