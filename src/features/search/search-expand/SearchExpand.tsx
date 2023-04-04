import { memo, ReactNode, useId, useCallback } from "react";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

import Divider from "@component/divider";
import Button from "@component/button";
import Icon from "@component/icon";
import clsx from "@utils/clsx";
import tabLabels from "./tab-labels";
import { useSearchContext } from "@layouts/default/hooks";
import type { TabLabel } from "./tab-labels";

import "./SearchExpand.style.scss";
import useClickOutside from "@hooks/use-click-outside";

export type TabPanelProps = TabLabel & {
	tabPanelIndex: number;
	value: string | number;
	hasInputable: boolean;
	onTabLabelClick: (tabLabelIndex: number) => void;
	onValueChange: (value: Date | string | number | undefined) => void;
};

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
		value,
		onValueChange,
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
						readOnly={!hasInputable}
					/>
					{tabPanelIndex === tabLabelIndex && value && (
						<Button
							classNames="search-input-clear-btn"
							onClick={() => {}}
						>
							<Icon icon={faXmark} />
						</Button>
					)}
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
			<div>
				<label className="tablabel" htmlFor={inputId}>
					{label}
				</label>
				<input
					id={inputId}
					className="sub-label"
					placeholder={subLabel}
					value={value}
					onChange={(e) => onValueChange(e.target.value)}
					readOnly={hasInputable ? false : true}
				/>
				{tabPanelIndex === tabLabelIndex && value && (
					<Button
						classNames="search-input-clear-btn"
						onClick={() => {}}
					>
						<Icon icon={faXmark} />
					</Button>
				)}
			</div>
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
	const tabPanelContainerRef = useClickOutside<HTMLDivElement>(
		(event: Event) => {
			const isSearchLabelClicked = event
				.composedPath()
				.some((eventTarget) => {
					const eventTargetElement = eventTarget as HTMLElement;
					const elementClassList = eventTargetElement.classList;
					return (
						elementClassList &&
						elementClassList.contains("search-label")
					);
				});

			if (isSearchLabelClicked) {
				return;
			}

			onTabLabelClick(-1);
		}
	);
	const searchContext = useSearchContext();

	const renderTabLabel = (tabLabel: TabLabel) => {
		const { inputKey, extraKey, selector, onValueChangeKey } = tabLabel;
		const value = selector
			? selector(searchContext[inputKey])
			: searchContext[inputKey];

		const handleValueChange = (value?: any) => {
			if (extraKey) {
				searchContext[onValueChangeKey](extraKey, value);
			} else {
				searchContext(value);
			}
		};

		return (
			<TabPanel
				{...tabLabel}
				key={tabLabel.id}
				tabPanelIndex={tabPanelIndex}
				onTabLabelClick={onTabLabelClick}
				value={value}
				onValueChange={handleValueChange}
			/>
		);
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
