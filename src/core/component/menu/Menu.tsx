import { useState, useMemo, ReactNode, FC } from "react";

import type { ContainerProps } from "_types/props";
import clsx from "@utils/clsx";
import MenuContext from "./MenuContext";

export type MenuProps = ContainerProps & {
	render?: (state: boolean) => ReactNode;
};

const Menu: FC<MenuProps> = ({ children, classNames = "", render }) => {
	const [isOpen, setOpen] = useState<boolean>(false);

	const onMenuButtonClick = () => {
		setOpen((prev) => !prev);
	};

	const menuContextValue = useMemo(
		() => ({
			isOpen,
			onMenuButtonClick,
		}),
		[isOpen]
	);

	const className = useMemo(() => {
		if (typeof classNames === "string") {
			return clsx([classNames, "menu"]);
		} else {
			return clsx([...classNames, "menu"]);
		}
	}, [classNames]);

	return (
		<MenuContext.Provider value={menuContextValue}>
			<div className={className}>{children}</div>
		</MenuContext.Provider>
	);
};

export default Menu;
