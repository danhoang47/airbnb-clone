import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import { SearchLabel, SearchExpand } from "@features/search";

import "./styles.scss";

export type SearchProps = {
	isSearchOpen: boolean;
	onSearchNavigate: (state: boolean) => void;
};

const Search = ({ isSearchOpen, onSearchNavigate }: SearchProps) => {
	const [tabPanelIndex, setTabPanelIndex] = useState<number>(0);
	const nodeRef = useRef<HTMLDivElement>(null);

	const onSearchLabelButtonClick = () => {
		onSearchNavigate(true);
	};

	const onSearchTabClick = (tabIndex: number) => {
		if (!isSearchOpen) {
			onSearchNavigate(true);
		}

		setTabPanelIndex(tabIndex);
	};

	console.log(tabPanelIndex);
	return (
		<CSSTransition
			nodeRef={nodeRef}
			timeout={{ enter: 350, exit: 350 }}
			classNames="scale"
			in={isSearchOpen}
		>
			<div ref={nodeRef} className="search-section">
				{isSearchOpen ? (
					<SearchExpand tabPanelIndex={tabPanelIndex} onTabLabelClick={onSearchTabClick}/>
				) : (
					<SearchLabel
						onSeachLabelButtonClick={onSearchLabelButtonClick}
						onSearchTabClick={onSearchTabClick}
					/>
				)}
			</div>
		</CSSTransition>
	);
};

export default Search;
