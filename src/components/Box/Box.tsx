import { CSSProperties, ReactNode } from "react";

type BoxProps = {
    sx?: CSSProperties,
    children?: ReactNode,
    className: string
}

function Box({ sx, children, className }: BoxProps) {
    return (  
        <div style={sx} className={className}>
            {children}
        </div>
    );
}

export default Box;