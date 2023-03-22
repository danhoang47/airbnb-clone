import { ReactNode } from "react"

export type ContainerProps = {
    children?: ReactNode,
    classNames?: string | string[]
}

export type ButtonProps = ContainerProps & Clickable

export interface Clickable {
    onClick?: (args: any) => void;
}