import { forwardRef, ReactNode } from "react";

import Container from "@component/container";
import type { ContainerProps } from "_types/props";
import clsx from "@utils/clsx";

import "./styles.scss";

export type HeaderProps = ContainerProps & {
	rightContent?: ReactNode;
	middleContent?: ReactNode;
	leftContent?: ReactNode;
};

const Header = forwardRef<HTMLDivElement, HeaderProps>(
	(
		{ rightContent, middleContent, leftContent, children, classNames = "" },
		ref
	) => {
		return (
			<Container
				id="header"
				classNames={clsx(classNames)}
				type="header"
				ref={ref}
			>
				<div className="left-content">{leftContent}</div>
				<div className="middle-content">{middleContent}</div>
				<div className="right-content">{rightContent}</div>
			</Container>
		);
	}
);

export default Header;
