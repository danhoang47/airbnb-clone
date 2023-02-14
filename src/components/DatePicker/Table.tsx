function Table() {
    const today = new Date();
    const allDaysInMonth = groupDaysByWeek(
        getAllDaysInMonth(today.getMonth(), today.getFullYear())
    );

    console.log(allDaysInMonth);
    
    return <table></table>;
}

export default Table;

const getAllDaysInMonth = (month: number, year: number) => {
    return Array.from(
        { length: new Date(year, month, 0).getDate() },
        (_, i) => new Date(year, month - 1, i + 1)
    );
};

const groupDaysByWeek = (days: Date[]) => {
    // TODO group by day of week
    const DAY_OF_WEEK = 7;
    return days.reduce<Date[][]>(
        (results: Date[][], date: Date, index: number) => {
            const chunkIndex = Math.floor(index / DAY_OF_WEEK);

            if (!results[chunkIndex]) {
                results[chunkIndex] = [];
            }

            results[chunkIndex].push(date);
            return results;
        },
        []
    );
};
