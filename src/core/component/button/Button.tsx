import { useMemo } from 'react';

import type { ButtonProps } from "_types/props";
import clsx from "@utils/clsx";

function Button({ children, classNames = "", onClick }: ButtonProps) {
	const className = useMemo(() => {
		if (typeof classNames === 'string') {
			return clsx([classNames, "container"]);
		} else {
			return clsx([...classNames, "container"]);
		}
	}, [classNames])

	return (
		<button onClick={onClick} className={clsx(classNames)}>
			{children}
		</button>
	);
}

export default Button;
