
export type TabLabel = {
	id: number;
	label: string;
	subLabel: string;
	classNames: string;
	tabLabelIndex: number;
};

const tabLabels: (TabLabel | TabLabel[])[] = [
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
			classNames: "sub-search-tablabel",
			tabLabelIndex: 1,
		},
		{
			id: 3,
			label: "Trả phòng",
			subLabel: "Thêm ngày",
			classNames: "sub-search-tablabel",
			tabLabelIndex: 2,
		},
	],
	{
		id: 4,
		label: "Khách",
		subLabel: "Thêm khách",
		classNames: "guest-search-tablabel",
		tabLabelIndex: 3,
	},
];

export default tabLabels;