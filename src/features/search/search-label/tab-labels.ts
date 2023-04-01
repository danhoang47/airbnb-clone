import { SearchContextType, FunctionPropertyName } from "_types/props";


export type BaseTabeLabel = {
	id: number;
	label: string;
	subLabel: string;
	classNames: string;
	tabLabelIndex: number;
}

export type InputableTabLabel = BaseTabeLabel & {
	hasInputable: true;
	inputKey: keyof Omit<SearchContextType, FunctionPropertyName<SearchContextType>>;
	onValueChangeKey: FunctionPropertyName<SearchContextType>;
};

export type NormalTabLabel =  BaseTabeLabel & {
	hasInputable: false
}

export type TabLabel = InputableTabLabel | NormalTabLabel

const tabLabels: (TabLabel | TabLabel[])[] = [
	{
		id: 1123,
		label: "Địa điểm",
		subLabel: "Tìm kiếm địa điểm",
		classNames: "location-search-tablabel",
		tabLabelIndex: 0,
		hasInputable: true,
		inputKey: "location",
		onValueChangeKey: "onLocationChange",
	},
	[
		{
			id: 2412,
			label: "Nhận phòng",
			subLabel: "Thêm ngày",
			classNames: "sub-search-tablabel",
			tabLabelIndex: 1,
			hasInputable: false
		},
		{
			id: 3414,
			label: "Trả phòng",
			subLabel: "Thêm ngày",
			classNames: "sub-search-tablabel",
			tabLabelIndex: 2,
			hasInputable: false,
		},
	],
	{
		id: 4123,
		label: "Khách",
		subLabel: "Thêm khách",
		classNames: "guest-search-tablabel",
		tabLabelIndex: 3,
		hasInputable: false,
	},
];

export default tabLabels;
