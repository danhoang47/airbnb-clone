import { createContext } from 'react';

import { Hotel } from '_types/props';

export type HotelContextType = {
    hotels: Hotel[],
    setHotelsBasedOnState: (args: any) => void
}

const HotelContext = createContext<HotelContextType>({} as HotelContextType);

export default HotelContext;