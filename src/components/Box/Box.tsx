import { CSSProperties, ReactNode } from "react";
import { cx } from "@shared/utils";
import './Box.scss'

type BoxProps = {
    sx?: CSSProperties,
    children?: ReactNode,
    classNames?: string[]
}

function Box({ sx, children, classNames = []}: BoxProps) {

    return (  
        <div style={sx} className={cx(['box', ...classNames])}>
            {children}
        </div>
    );
}

export default Box;