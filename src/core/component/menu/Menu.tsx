import { useState, useMemo, ReactNode, FC } from "react";

import type { ContainerProps } from "_types/props";
import MenuContext from "./MenuContext";
import clsx from "@utils/clsx";
import useClickOutside from "@hooks/use-click-outside";

import "./styles.scss";

export type MenuProps = ContainerProps & {
	render?: (state: boolean) => ReactNode;
};

const Menu: FC<MenuProps> = ({ children, classNames = "", render }) => {
	const [isOpen, setOpen] = useState<boolean>(false);
	const ref = useClickOutside<HTMLDivElement>(() => {
		setOpen(false);
	});

	const onMenuClick = (state: boolean) => {
		setOpen(state);
	};

	const menuContextValue = useMemo(
		() => ({
			isOpen,
			onMenuClick,
		}),
		[isOpen]
	);

	return (
		<MenuContext.Provider value={menuContextValue}>
			<div ref={ref} className={clsx(classNames, "menu")}>
				{children}
			</div>
		</MenuContext.Provider>
	);
};

export default Menu;
