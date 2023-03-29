import { useContext, useState } from "react";

import { DateRangeType, GuestType, PlaceType } from "_types/props";
import SearchContext from "./contexts";

export function useSearchContext() {
	return useContext(SearchContext);
}

export function useSearchPlace(initialValue: PlaceType) {
	const [place, setPlace] = useState<PlaceType>(initialValue);

	return { place, setPlace };
}

export function useDateRange(initialValue: DateRangeType) {
	const [dateRange, setDateRange] = useState<DateRangeType>(initialValue);

	return { dateRange, setDateRange };
}

export function useGuest(initialValue: GuestType) {
	const [guests, setGuests] = useState<GuestType>(initialValue);

	return { guests, setGuests };
}
