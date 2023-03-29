export interface CSSProps {
	[key: string]: boolean;
}

export default function clsx(
	className: string | string[] | CSSProps,
	based = ""
) {
	if (className instanceof Array) {
		return arrayStringToString([...className, based]);
	} else if (typeof className === "string") {
		return arrayStringToString([className, based]);
	} else {
		const acc = Object.keys(className)
			.filter((key) => className[key])
		return arrayStringToString([...acc, based]);
	}
}

function arrayStringToString(args: string[]) {
	return args.join(" ").trim();
}
