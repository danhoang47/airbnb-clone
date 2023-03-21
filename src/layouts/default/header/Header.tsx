import type { ContainerProps } from "_types/props";
import clsx from "@utils/clsx";

function Header({ children, classNames = "" }: ContainerProps) {
	return <header className={clsx(classNames)}>{children}</header>;
}

export default Header;
