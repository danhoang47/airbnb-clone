import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import { SearchLabel, SearchExpand, LocationSearch } from "@features/search";

import "./styles.scss";

export type SearchProps = {
	isSearchOpen: boolean;
	onSearchNavigate: (state: boolean) => void;
};

const Search = ({ isSearchOpen, onSearchNavigate }: SearchProps) => {
	const [tabPanelIndex, setTabPanelIndex] = useState<number>(0);
	const nodeRef = useRef<HTMLDivElement>(null);

	const onSearchTabClick = (tabIndex: number) => {
		if (!isSearchOpen) {
			onSearchNavigate(true);
		}

		setTabPanelIndex(tabIndex);
	};

	const renderSearchTabPanel = () => {
		switch (tabPanelIndex) {
			case 0:
				return <LocationSearch />;
				break;
			case 1:
				break;
			case 2:
				break;
			case 3:
				break;
			default:
				return null;
		}
	};

	return (
		<CSSTransition
			nodeRef={nodeRef}
			timeout={150}
			classNames="scale"
			in={isSearchOpen}
		>
			<div ref={nodeRef} className="search-section">
				<SearchLabel onSearchTabClick={onSearchTabClick} />
				<SearchExpand
					tabPanelIndex={tabPanelIndex}
					onTabLabelClick={onSearchTabClick}
					renderSearchTabPanel={renderSearchTabPanel}
				/>
			</div>
		</CSSTransition>
	);
};

export default Search;
