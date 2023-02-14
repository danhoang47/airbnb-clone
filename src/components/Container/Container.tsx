import { CSSProperties, ReactNode } from "react";
import { BoxStyleSize } from "@shared/types";
import { cx } from "@shared/utils";
import "./Container.scss";

type Container = {
    sx?: CSSProperties;
    size?: BoxStyleSize;
    children?: ReactNode;
    type?: "fixed" | "fluid";
    classNames?: string[];
};

function Container({
    sx = {},
    size = "md",
    children,
    type = "fluid",
    classNames = []
}: Container) {
    return (
        <div className={cx(["container", size, type, ...classNames])} style={sx}>
            {children}
        </div>
    );
}

export default Container;
