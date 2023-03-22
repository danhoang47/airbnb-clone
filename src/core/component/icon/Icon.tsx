import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

import clsx from "@utils/clsx";

function Icon({
	icon,
	className = "",
}: {
	icon: IconProp;
	className?: string;
}) {
	return (
		<>
			<FontAwesomeIcon icon={icon} className={clsx(className)} />
		</>
	);
}

export default Icon;
