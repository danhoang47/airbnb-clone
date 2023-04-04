import { useContext, useState, useCallback } from "react";

import { DateRangeType, GuestType, LocationType } from "_types/props";
import SearchContext from "./contexts";

export function useSearchContext() {
	return useContext(SearchContext);
}

export function useSearchLocation(initialValue: LocationType) {
	const [location, setLocation] = useState<LocationType>(initialValue);

	const onLocationChange = (newLocation: string) => {
		setLocation(newLocation);
	};

	return { location, onLocationChange };
}

export function useDateRange(initialValue: DateRangeType) {
	const [dateRange, setDateRange] = useState<DateRangeType>(initialValue);

	const onDateRangeChange = useCallback(
		(key: keyof DateRangeType, value: Date) => {
			setDateRange(p => ({
				...p,
				[key]: value
			}));
		},
		[dateRange]
	);

	return { dateRange, onDateRangeChange };
}

export function useGuest(initialValue: GuestType) {
	const [guests, setGuests] = useState<GuestType>(initialValue);

	const onGuestsChange = useCallback(
		(key: keyof GuestType, value: number) => {
			setGuests((p) => ({
				...p,
				[key]: value,
			}));
		},
		[guests]
	);

	return { guests, onGuestsChange };
}
