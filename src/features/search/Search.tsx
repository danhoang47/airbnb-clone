import { forwardRef, useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import { SearchLabel, SearchExpand } from "@features/search";

import "./styles.scss";

const Search = forwardRef<HTMLFormElement, any>((props, ref) => {
	const [isSearchOpen, setSearchOpen] = useState<boolean>(false);
	const [tabIndex, setTabIndex] = useState<number>(0);
	const nodeRef = useRef<HTMLDivElement>(null);

	const onSearchLabelButtonClick = () => {
		setSearchOpen(true);
	};

	const onSearchTabClick = (tabIndex: number) => {};

	return (
		<CSSTransition
			nodeRef={nodeRef}
			timeout={{ enter: 300, exit: 300 }}
			classNames="scale"
			in={isSearchOpen}
		>
			<div ref={nodeRef} className="search-section">
				{isSearchOpen ? (
					<SearchExpand />
				) : (
					<SearchLabel
						onSeachLabelButtonClick={onSearchLabelButtonClick}
						onSearchTabClick={onSearchTabClick}
					/>
				)}
			</div>
		</CSSTransition>
	);
});

export default Search;
