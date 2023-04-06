import { useContext, useState, useCallback } from "react";

import {
	DateRangeType,
	GuestType,
	LocationType,
	GuestKeyType,
} from "_types/props";
import SearchContext from "./contexts";

export function useSearchContext() {
	return useContext(SearchContext);
}

export function useSearchLocation(initialValue: LocationType) {
	const [location, setLocation] = useState<LocationType>(initialValue);

	const onLocationChange = (newLocation: string | undefined) => {
		setLocation(newLocation ? newLocation : "");
	};

	return { location, onLocationChange };
}

export function useDateRange(initialValue: Omit<DateRangeType, "_type">) {
	const [dateRange, setDateRange] = useState<DateRangeType>({
		_type: "dateRange",
		...initialValue,
	});

	const onDateRangeChange = useCallback(
		({
			key,
			value,
		}: {
			key: keyof Omit<DateRangeType, "_type">;
			value: Date;
		}) => {
			setDateRange((p) => ({
				...p,
				[key]: value,
			}));
		},
		[dateRange]
	);

	return { dateRange, onDateRangeChange };
}

export function useGuest(initialValue: Omit<GuestType, "_type">) {
	const [guests, setGuests] = useState<GuestType>({
		_type: "guest",
		...initialValue,
	});

	const onGuestsChange = useCallback(
		({ key, value }: { key: GuestKeyType; value: number }) => {
			setGuests((p) => ({
				...p,
				[key]: value,
			}));
		},
		[guests]
	);

	return { guests, onGuestsChange };
}
