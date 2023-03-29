import { useContext } from "react";

import { ContainerProps } from "_types/props";
import MenuContext from "./MenuContext";
import Button from "@component/button";
import clsx from "@utils/clsx";

export type MenuButtonProps = ContainerProps & {
	toggle?: string;
};

function MenuButton({ children, classNames, toggle = "" }: MenuButtonProps) {
	const { isOpen, onMenuClick } = useContext(MenuContext);

	return (
		<div className={"menu-button"}>
			<Button
				onClick={() => {
					onMenuClick(!isOpen);
				}}
				classNames={clsx({ [toggle]: isOpen })}
			>
				{children}
			</Button>
		</div>
	);
}

export default MenuButton;
