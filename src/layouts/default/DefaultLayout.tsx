import { ReactNode, useEffect, useMemo, useState } from "react";

import SearchContext, { SeachContextType } from "./contexts";
import { useDateRange, useGuest, useSearchPlace } from "./hooks";
import Header from "@layouts/default/header";
import HeaderGroupItem from "@layouts/ui/header-group-item";
import Footer from "@layouts/default/footer";
import LogoWithBrandName from "@layouts/ui/logo-with-brand-name";
import Search from "@features/search";
import { ContainerProps } from "_types/props";

import "./styles.scss";
import useClickOutside from "@hooks/use-click-outside";

export type DefaultLayoutProps = ContainerProps & {
	subContent?: ReactNode;
};

function DefaultLayout({ children, subContent }: DefaultLayoutProps) {
	const [isSearchOpen, setSearchOpen] = useState<boolean>(false);
	const headerRef = useClickOutside<HTMLDivElement>(() => {
		setSearchOpen(false);
	});
	const { place, setPlace } = useSearchPlace("");
	const { dateRange, setDateRange } = useDateRange({});
	const { guests, setGuests } = useGuest({
		adult: 0,
		child: 0,
		infant: 0,
		pet: 0,
	});

	const searchContextValue: SeachContextType = useMemo(
		() => ({
			guests,
			place,
			dateRange,
			setPlace,
			setDateRange,
			setGuests,
		}),
		[place, dateRange, guests]
	);

	const onSearchNavigate = (state: boolean) => {
		setSearchOpen(state);
	}

	return (
		<SearchContext.Provider value={searchContextValue}>
			<div id="default-layout">
				<Header
					ref={headerRef}
					classNames={"header-section"}
					leftContent={<LogoWithBrandName />}
					middleContent={
						<Search
							isSearchOpen={isSearchOpen}
							onSearchNavigate={onSearchNavigate}
						/>
					}
					rightContent={<HeaderGroupItem />}
				/>
				{subContent}
				<main className="main-section">{children}</main>
				{/* <Footer classNames={"footer-section"}>Footer</Footer> */}
			</div>
		</SearchContext.Provider>
	);
}

export default DefaultLayout;
