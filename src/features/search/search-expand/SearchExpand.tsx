import { memo, useRef, ReactNode, useId, useCallback } from "react";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

import Divider from "@component/divider";
import Button from "@component/button";
import Icon from "@component/icon";
import clsx from "@utils/clsx";
import tabLabels from "../search-label/tab-labels";
import { useSearchContext } from "@layouts/default/hooks";
import type { TabLabel } from "../search-label/tab-labels";

import "./SearchExpand.style.scss";

export type TabPanelBaseProps = TabLabel & {
	tabPanelIndex: number;
	onTabLabelClick: (tabLabelIndex: number) => void;
};

export type TabPanelWithInputProps = TabPanelBaseProps & {
	hasInputable: true;
	value: string | number;
	onValueChange: (arg1?: any, arg2?: any) => void;
};

export type TabPanelWithoutInputProps = TabPanelBaseProps & {
	hasInputable: false;
};

export type TabPanelProps = TabPanelWithInputProps | TabPanelWithoutInputProps;

const TabPanel = memo((props: TabPanelProps) => {
	const inputId = useId();
	const {
		label,
		subLabel,
		classNames,
		tabLabelIndex,
		tabPanelIndex,
		onTabLabelClick,
		hasInputable,
	} = props;

	const renderSubLabel = () => {
		if (hasInputable) {
			const { value, onValueChange } = props;

			return (
				<>
					<input
						id={inputId}
						className="sub-label"
						placeholder={subLabel}
						value={value}
						onChange={(e) => onValueChange(e.target.value)}
					/>
					{	tabPanelIndex === tabLabelIndex &&
						<Button
							classNames="search-input-clear-btn"
							onClick={() => {
								onValueChange(undefined);
							}}
						>
							<Icon icon={faXmark} />
						</Button>
					}
				</>
			);
		} else {
			return <p className="sub-label">{subLabel}</p>;
		}
	};

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
			<label className="tablabel" htmlFor={inputId}>
				{label}
			</label>
			{renderSubLabel()}
		</div>
	);
});

function SearchExpand({
	tabPanelIndex,
	onTabLabelClick,
	renderSearchTabPanel,
}: {
	tabPanelIndex: number;
	onTabLabelClick: (tabIndex: number) => void;
	renderSearchTabPanel: () => ReactNode;
}) {
	const tabPanelContainerRef = useRef<HTMLDivElement>(null);
	const searchContext = useSearchContext();

	const renderTabLabel = (tabLabel: TabLabel) => {
		if (tabLabel.hasInputable) {
			return (
				<TabPanel
					{...tabLabel}
					key={tabLabel.id}
					tabPanelIndex={tabPanelIndex}
					onTabLabelClick={onTabLabelClick}
					hasInputable={true}
					value={searchContext[tabLabel.inputKey]}
					onValueChange={searchContext[tabLabel.onValueChangeKey]}
				/>
			);
		} else {
			return (
				<TabPanel
					{...tabLabel}
					key={tabLabel.id}
					tabPanelIndex={tabPanelIndex}
					onTabLabelClick={onTabLabelClick}
					hasInputable={false}
				/>
			);
		}
	};

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
					tabIndex={-1}
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
								<>
									<div
										className={
											"search-tablabel search-tablabel-container"
										}
										key={index}
									>
										{tabLabel.map((subtabLabel) =>
											renderTabLabel(subtabLabel)
										)}
									</div>
									<Divider
										direction="vertical"
										key={Math.random()}
									/>
								</>
							);
						} else {
							return (
								<>
									{renderTabLabel(tabLabel)}
									{index + 1 != tabLabels.length && (
										<Divider
											direction="vertical"
											key={Math.random()}
										/>
									)}
								</>
							);
						}
					})}
					<Button classNames={"search-button"}>
						<Icon icon={faMagnifyingGlass} />
						<p className="search-button-label">Tìm kiếm</p>
					</Button>
					{renderSearchTabPanel()}
				</div>
			</div>
		</div>
	);
}

export default SearchExpand;
