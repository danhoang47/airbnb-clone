import { createContext, Dispatch, SetStateAction } from 'react';

import { DateRangeType, GuestType, PlaceType } from '_types/props';

export type SeachContextType = {
    guests: GuestType,
    dateRange: DateRangeType,
    place: PlaceType
    setPlace: Dispatch<SetStateAction<PlaceType>>,
    setDateRange: Dispatch<SetStateAction<DateRangeType>>,
    setGuests: Dispatch<SetStateAction<GuestType>>,
} 

const SearchContext = createContext<SeachContextType>({} as SeachContextType);

export default SearchContext;