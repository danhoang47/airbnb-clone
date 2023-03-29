import { useEffect, useRef, useState, useCallback } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Button from "@component/button";
import Icon from "@component/icon";
import clsx from "@utils/clsx";
import tabLabels from "./tab-labels";
import type { TabLabel } from "./tab-labels";

import "./SearchExpand.style.scss";

export type TabPanelProps = TabLabel & {
	tabPanelIndex: number;
	onTabLabelClick: (tabLabelIndex: number) => void;
};

function TabPanel({
	id,
	label,
	subLabel,
	classNames,
	tabLabelIndex,
	tabPanelIndex,
	onTabLabelClick,
}: TabPanelProps) {
	return (
		<div
			className={clsx(
				{
					[classNames]: true,
					selected: tabPanelIndex === tabLabelIndex,
				},
				"search-tablabel"
			)}
			onClick={() => {
				onTabLabelClick(tabLabelIndex);
			}}
		>
			<label className="tablabel">{label}</label>
			<p className="sub-label">{subLabel}</p>
		</div>
	);
}

function SearchExpand({
	tabPanelIndex,
	onTabLabelClick,
}: {
	tabPanelIndex: number;
	onTabLabelClick: (tabIndex: number) => void;
}) {
	const tabPanelContainerRef = useRef<HTMLDivElement>(null);

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
						onTabLabelClick(-1);
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
										<TabPanel
											{...subtabLabel}
											key={subtabLabel.id}
											tabPanelIndex={tabPanelIndex}
											onTabLabelClick={onTabLabelClick}
										/>
									))}
								</div>
							);
						} else {
							return (
								<TabPanel
									{...tabLabel}
									key={tabLabel.id}
									tabPanelIndex={tabPanelIndex}
									onTabLabelClick={onTabLabelClick}
								/>
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
