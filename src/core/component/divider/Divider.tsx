import clsx from "@utils/clsx";

import "./styles.scss";

export type DividerProps = {
    direction?: 'vertical' | 'horizontal'
}

function Divider({ direction = 'vertical' }: DividerProps) {
    return (  
        <span className={clsx(direction, "divider")}></span>
    );
}

export default Divider;