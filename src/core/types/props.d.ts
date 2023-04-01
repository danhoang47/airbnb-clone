import { ReactNode } from "react";

export type ContainerProps = {
	children?: ReactNode;
	classNames?: string | string[];
};

export type ButtonProps = ContainerProps & Clickable;

export interface Clickable {
	onClick?: (args?: any) => void;
}

export type Hotel = {
	name: string;
	address: string;
	price: number;
	ratingPoint: number;
	images: Image[];
};

export type Image = {
	id: number;
	path: string;
};

export type DateRangeType = {
	from?: Date;
	to?: Date;
};

export type GuestKeyType = "adult" | "child" | "infant" | "pet";

export type GuestType = Record<GuestKeyType, number>;

export type LocationType = string;

export type SearchContextType = {
	guests: GuestType;
	dateRange: DateRangeType;
	location: LocationType;
	onLocationChange: (newLocation: string) => void;
	onDateRangeChange: (newDateRange: DateRangeType) => void;
	onGuestsChange: (key: keyof GuestType, value: number) => void;
};

export type FunctionPropertyName<T> = {
	[K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

export type Handler<T> = {
    [K in keyof T]: T[K] extends Function ? T[K] : never;
}[keyof T]