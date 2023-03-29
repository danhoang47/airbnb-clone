import { useMemo, MouseEvent } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Button from "@component/button";
import Divider from "@component/divider";
import Icon from "@component/icon";

import "./SearchLabel.styles.scss"

export type SeachLabelProps = {
	onSearchTabClick: (tabIndex: number) => void;
	onSeachLabelButtonClick: () => void;
};

function SearchLabel({
	onSearchTabClick,
	onSeachLabelButtonClick,
}: SeachLabelProps) {
	const labels = useMemo(
		() => [
			{
				id: 0,
				label: "Địa điểm bất kỳ",
				dataIndex: 0,
			},
			{
				id: 1,
				label: "Tuần bất kỳ",
				dataIndex: 1,
			},
			{
				id: 2,
				label: "Thêm khách",
				dataIndex: 3,
			},
		],
		[]
	);

	return (
		<div className="search-label">
			{labels.map(({ dataIndex, label }, index) => {
				return (
					<>
						<Button
							key={label}
							classNames={"search-label-item"}
							onClick={() => {
								onSearchTabClick(dataIndex)
							}}
						>
							{label}
						</Button>
						{index + 1 !== labels.length ? (
							<Divider direction="vertical" key={index}/>
						) : (
							<Button
								key={index}
								classNames={"rounded"}
								onClick={onSeachLabelButtonClick}
							>
								<span>
									<Icon icon={faMagnifyingGlass} />
								</span>
							</Button>
						)}
					</>
				);
			})}
		</div>
	);
}

export default SearchLabel;
