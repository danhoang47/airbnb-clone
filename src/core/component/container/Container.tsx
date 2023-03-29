import { useMemo, forwardRef } from "react";

import clsx from "@utils/clsx";
import { ContainerProps } from "_types/props";

import "./styles.scss";

export type ContainerExtraProps = {
	type?: "div" | "header" | "footer" | "main";
	id?: string;
};

const Container = forwardRef<
	HTMLDivElement,
	ContainerProps & ContainerExtraProps
>(({ children, type = "div", classNames = "", id }, ref) => {
	const Component = type;

	return (
		<Component id={id} className={clsx(classNames, "container")} ref={ref}>
			{children}
		</Component>
	);
});

export default Container;
