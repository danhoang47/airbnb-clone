import { ReactNode } from "react"

export type ContainerProps = {
    children?: ReactNode,
    classNames?: string | string[]
}

export type ButtonProps = ContainerProps & Clickable

export interface Clickable {
    onClick?: (args?: any) => void;
}

export type Hotel = {
    name: string,
    address: string,
    price: number,
    ratingPoint: number
    images: Image[]
}

export type Image = {
    id: number,
    path: string
}

export type DateRangeType = {
    from?: Date,
    to?: Date
}

export type GuestType = {
    adult: number,
    child: number,
    infant: number,
    pet: number
}

export type PlaceType = string
