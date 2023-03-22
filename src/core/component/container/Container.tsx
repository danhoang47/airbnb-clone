import { useMemo } from "react";

import clsx from "@utils/clsx";
import { ContainerProps } from "_types/props";

import "./styles.scss";

export type ContainerExtraProps = {
	type?: "div" | "header" | "footer" | "main";
	id?: string;
};

function Container({
	children,
	type = "div",
	classNames = "",
	id,
}: ContainerProps & ContainerExtraProps) {
	const Component = type;
	const className = useMemo(() => {
		if (typeof classNames === 'string') {
			return clsx([classNames, "container"]);
		} else {
			return clsx([...classNames, "container"]);
		}
	}, [classNames])

	return (
		<Component
			id={id}
			className={className}
		>
			{children}
		</Component>
	);
}

export default Container;
