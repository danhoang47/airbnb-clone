import {
	SearchContextType,
	FunctionPropertyName,
	DateRangeType,
	GuestType,
	GuestKeyType,
} from "_types/props";

export type TabLabel = {
	id: number;
	label: string;
	subLabel: string;
	classNames: string;
	tabLabelIndex: number;
	hasInputable: boolean;
	extraKey?: string;
	inputKey: keyof Omit<
		SearchContextType,
		FunctionPropertyName<SearchContextType>
	>;
	onValueChangeKey: FunctionPropertyName<SearchContextType>;
	selector?: (arg: string | DateRangeType | GuestType) => any;
};

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
			inputKey: "dateRange",
			hasInputable: false,
			extraKey: "from",
			selector: (dateRange) => {
				if (isDateRangeType(dateRange)) {
					return dateRange.from ? formatDate(dateRange.from) : "";
				}

				return undefined;
			},
			onValueChangeKey: "onDateRangeChange",
		},
		{
			id: 3414,
			label: "Trả phòng",
			subLabel: "Thêm ngày",
			classNames: "sub-search-tablabel",
			tabLabelIndex: 2,
			inputKey: "dateRange",
			hasInputable: false,
			selector: (dateRange) => {
				if (isDateRangeType(dateRange)) {
					return dateRange.from ? formatDate(dateRange.from) : "";
				}

				return undefined;
			},
			onValueChangeKey: "onDateRangeChange",
		},
	],
	{
		id: 4123,
		label: "Khách",
		subLabel: "Thêm khách",
		classNames: "guest-search-tablabel",
		tabLabelIndex: 3,
		hasInputable: false,
		inputKey: "guests",
		selector: (guests) => {
			if (isGuestType(guests)) {
				const total = Object.keys(guests).reduce<number>(
					(acc, key) => {
						if (key !== "_type") {
							return acc + guests[key as GuestKeyType]
						}
						 
						return acc;
					},
					0
				);
				return total ? total : undefined
			}
		},
		onValueChangeKey: "onGuestsChange",
	},
];

function isGuestType(input: Object): input is GuestType {
	return (<GuestType>input)._type === "guest";
}

function isDateRangeType(input: Object): input is DateRangeType {
	return (<DateRangeType>input)._type === "dateRange";
}

function formatDate(date: Date) {
	const options: Intl.DateTimeFormatOptions = {
		day: "numeric",
		month: "long",
	};

	return Intl.DateTimeFormat("en-US", options).format(date);
}

export default tabLabels;
