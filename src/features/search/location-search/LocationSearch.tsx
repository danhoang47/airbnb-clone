import { useState, useEffect } from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import Icon from "@component/icon";
import getLocations from "@data/get-locations";
import useDebounce from "@hooks/use-debounce";
import { useSearchContext } from "@layouts/default/hooks";

import "./LocationSearch.style.scss";

export type Location = {
	name: {
		common: string;
		official: string;
	};
};

export type LocationSearchItemProps = {
	location: Location;
	onItemClick: (location: string) => void;
};

function LocationSearchItem({
	location,
	onItemClick,
}: LocationSearchItemProps) {
	return (
		<li
			className="location-search-results-item"
			onClick={() => {
				onItemClick(location.name.common);
			}}
		>
			<div className="location-search-icon-wrapper"><Icon icon={faLocationDot} /></div>
			<p className="result-location-name">{location.name.official}</p>
		</li>
	);
}

function LocationSearch() {
	const { location, onLocationChange } = useSearchContext();
	const debouncedLocation = useDebounce(location);
	const [locationResults, setLocationResults] = useState<Location[]>([]);

	useEffect(() => {
		let isStale = false;

		const getSearchLocation = async () => {
			const data = await getLocations(debouncedLocation);
			if (data && !isStale) {
				setLocationResults([...data].slice(0, 4));
			}
		};

		getSearchLocation();

		return () => {
			isStale = true;
		};
	}, [debouncedLocation]);

	return (
		<div className="search-input-field location-search">
			{locationResults.length === 0 && (
				<div className="search-input-field-heading">
					<h3>Tìm kiếm theo địa điểm</h3>
				</div> 
			)}
			<ul className="location-search-results">
				{locationResults.map((result) => (
					<LocationSearchItem
						location={result}
						key={result.name.common}
						onItemClick={onLocationChange}
					/>
				))}
			</ul>
		</div>
	);
}

export default LocationSearch;
