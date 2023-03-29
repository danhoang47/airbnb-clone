import { ReactNode } from "react";

import Container from "@component/container";
import type { ContainerProps } from "_types/props";
import clsx from "@utils/clsx";

import "./styles.scss";

export type HeaderProps = ContainerProps & {
	rightContent?: ReactNode;
	middleContent?: ReactNode;
	leftContent?: ReactNode;
};

function Header({
	rightContent,
	middleContent,
	leftContent,
	children,
	classNames = "",
}: HeaderProps) {
	return (
		<Container id="header" classNames={clsx(classNames)} type="header">
			<div className="left-content">{leftContent}</div>
			<div className="middle-content">{middleContent}</div>
			<div className="right-content">{rightContent}</div>
		</Container>
	);
}

export default Header;
