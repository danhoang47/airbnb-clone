import { useState, useMemo, useEffect } from "react";
import { Hotel } from "_types/props";

import HotelContext from "./context";
import { CategoryContext } from "@features/category";
import DefaultLayout from "@layouts/default";
import HotelList from "./hotel-list";

export default function Home() {
	const [hotels, setHotels] = useState<Hotel[]>([]);

	const setHotelsBasedOnState = () => {};

	const hotelContextValue = useMemo(
		() => ({
			hotels,
			setHotelsBasedOnState,
		}),
		[]
	);

	return (
		<HotelContext.Provider value={hotelContextValue}>
			<CategoryContext.Provider value={undefined}>
				<DefaultLayout subContent={<div></div>}>
					<HotelList>
						
					</HotelList>
				</DefaultLayout>
			</CategoryContext.Provider>
		</HotelContext.Provider>
	);
}

/**
 *  categoryState
 *  filterState
 *
 *  DefaultLayout
 *      Header
 *
 */
