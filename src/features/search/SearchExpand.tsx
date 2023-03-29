import { useEffect, useRef, useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Button from "@component/button";
import Icon from "@component/icon";
import clsx from "@utils/clsx";
import useClickOutside from "@hooks/use-click-outside";

import "./SearchExpand.style.scss";

const tabLabels = [
	{
		id: 1,
		label: "Địa điểm",
		subLabel: "Tìm kiếm địa điểm",
		classNames: "location-search-tablabel",
		tabLabelIndex: 0,
	},
	[
		{
			id: 2,
			label: "Nhận phòng",
			subLabel: "Thêm ngày",
			classNames: "location-search-tablabel",
			tabLabelIndex: 1,
		},
		{
			id: 3,
			label: "Trả phòng",
			subLabel: "Thêm ngày",
			classNames: "location-search-tablabel",
			tabLabelIndex: 2,
		},
	],
	{
		id: 4,
		label: "Khách",
		subLabel: "Thêm khách",
		classNames: "location-search-tablabel",
		tabLabelIndex: 3,
	},
];

function SearchExpand() {
	const [tabPanelIndex, setTabPanelIndex] = useState<number>(0);
	const tabPanelContainerRef = useRef<HTMLDivElement>(null);

	const onTabLabelClick = (clickedTabPanelIndex: number) => {
		setTabPanelIndex(clickedTabPanelIndex);
	};

	useEffect(() => {
		if (tabPanelContainerRef.current) {
			tabPanelContainerRef.current.focus();
		}
	}, [tabPanelContainerRef]);

	return (
		<div className="search-expand">
			<div className="search-tablist">
				<div>Chỗ ở</div>
				<div>Trải nghiệm</div>
				<div>Trải nghiệm trực tuyến</div>
			</div>
			<div className="search-tabpanel">
				<div
					ref={tabPanelContainerRef}
					tabIndex={0}
					onBlur={() => {
						setTabPanelIndex(-1);
					}}
					className={clsx(
						{
							focused: tabPanelIndex !== -1,
						},
						"search-tabpanel-container"
					)}
				>
					{tabLabels.map((tabLabel, index) => {
						if (tabLabel instanceof Array) {
							return (
								<div
									className={
										"search-tablabel search-tablabel-container"
									}
									key={index}
								>
									{tabLabel.map((subtabLabel) => (
										<div
											className={clsx(
												{
													[subtabLabel.classNames]:
														true,
													selected:
														tabPanelIndex ===
														subtabLabel.tabLabelIndex,
												},
												"sub-search-tablabel"
											)}
											key={subtabLabel.id}
											onClick={() => {
												onTabLabelClick(
													subtabLabel.tabLabelIndex
												);
											}}
										>
											<label className="sub-tablabel">
												{subtabLabel.label}
											</label>
											<p className="sub-label">
												{subtabLabel.subLabel}
											</p>
										</div>
									))}
								</div>
							);
						} else {
							return (
								<div
									className={clsx(
										{
											[tabLabel.classNames]: true,
											selected:
												tabPanelIndex ===
												tabLabel.tabLabelIndex,
										},
										"search-tablabel"
									)}
									key={tabLabel.id}
									onClick={() => {
										onTabLabelClick(tabLabel.tabLabelIndex);
									}}
								>
									<label className="tablabel">
										{tabLabel.label}
									</label>
									<p className="sub-label">
										{tabLabel.subLabel}
									</p>
								</div>
							);
						}
					})}
					<Button classNames={"search-button"}>
						<Icon icon={faMagnifyingGlass} />
						<p className="search-button-label">Tìm kiếm</p>
					</Button>
				</div>
			</div>
		</div>
	);
}

export default SearchExpand;
