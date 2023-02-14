import { Box } from "@/components";
import { DatePickerProps } from "@shared/types";
import './DatePicker.scss'
import Table from "./Table";

function DatePicker({ 
    defaultMonth = new Date().getMonth(),  
    onSelect,
    disabledDates = [],
    selectedDates,
    mode = 'range'
}: DatePickerProps) {
    const options = {
        year: 'numeric',
        month: 'long'
    } as Intl.DateTimeFormatOptions;

    return (  
        <Box classNames={['date-picker']}>
            <Table></Table>
        </Box>
    );
}

export default DatePicker;