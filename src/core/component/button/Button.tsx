import type { ButtonProps } from "_types/props";
import clsx from "@utils/clsx";

function Button({ children, classNames = "", onClick }: ButtonProps) {

	return (
		<button onClick={onClick} className={clsx(classNames)}>
			{children}
		</button>
	);
}

export default Button;
