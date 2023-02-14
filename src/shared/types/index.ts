
export type BoxStyleSize = 'sm' | 'md' | 'lg';

export type Hotel = {
    hotelName: string,
    hasLiked: boolean,
    images: string[],
    ratingPoint: number,
    hotelType: number,
    price: number
}

export type DateRange = {
    from: Date,
    to: Date
}

export type DatePickerProps = {
    defaultMonth?: number,
    onSelect: (date: Date) => void,
    disabledDates?: (string | Date)[],
    selectedDates: DateRange;
    mode?: 'single' | 'range'
}