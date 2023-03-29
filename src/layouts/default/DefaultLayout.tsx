import { ReactNode, useMemo } from "react";

import SearchContext, { SeachContextType } from "./contexts";
import { useDateRange, useGuest, useSearchPlace } from "./hooks";
import Header from "@layouts/default/header";
import HeaderGroupItem from "@layouts/ui/header-group-item";
import Footer from "@layouts/default/footer";
import LogoWithBrandName from "@layouts/ui/logo-with-brand-name";
import Search from "@features/search";
import { ContainerProps, Hotel } from "_types/props";

import "./styles.scss";

export type DefaultLayoutProps = ContainerProps & {
	subContent?: ReactNode
}

function DefaultLayout({ children, subContent }: DefaultLayoutProps) {
	const { place, setPlace } = useSearchPlace('');
	const { dateRange, setDateRange } = useDateRange({});
	const { guests, setGuests } = useGuest({
		adult: 0,
		child: 0,
		infant: 0,
		pet: 0
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

	return (
		<SearchContext.Provider value={searchContextValue}>
			<div id="default-layout">
				<Header
					classNames={"header-section"}
					leftContent={<LogoWithBrandName />}
					middleContent={<Search />}
					rightContent={<HeaderGroupItem />}
				/>
				{subContent}
				<main className="main-section">
					{children}
				</main>
				{/* <Footer classNames={"footer-section"}>Footer</Footer> */}
			</div>
		</SearchContext.Provider>
	);
}

export default DefaultLayout;
