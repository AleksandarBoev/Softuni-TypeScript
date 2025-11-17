function getFridayTheThirteenthDates(inputDates: unknown[]): string[] {
    function isDate(parameter: unknown): parameter is Date {
        return parameter instanceof Date;
    }

    function dateIsFridayTheThirteenth(date: Date): boolean {
        return date.getDay() === 5 && date.getDate() === 13;
    }

    function getDateInWantedFormat(date: Date): string { //13-June-2025
        enum Month {
            January,
            February,
            March,
            April,
            May,
            June,
            July,
            August,
            Septermber,
            October,
            November,
            December
        }

        return `${date.getDate()}-${Month[date.getMonth()]}-${date.getFullYear()}`
    }

    const result: string[] = [];

    for (const inputDate of inputDates) {
        if (isDate(inputDate) && dateIsFridayTheThirteenth(inputDate)) {
            result.push(getDateInWantedFormat(inputDate));
        }
    }

    return result;
}

const output: string[] = getFridayTheThirteenthDates(
    [
        {},
        new Date(2025, 4, 13), //4 is NOT April. It is May (months start from 0, while days start from 1, so 13 is 13th day)
        null,
        new Date(2025, 5, 13), //5 = June. 13th June is actually a Friday
        '13-09-2023',
        new Date(2025, 6, 13),
        new Date(2024, 0, 13),
        new Date(2024, 1, 13),
        new Date(2024, 2, 13),
        new Date(2024, 3, 13),
        new Date(2024, 4, 13),
        new Date(2024, 5, 13),
        new Date(2024, 6, 13),
        new Date(2024, 7, 13),
        new Date(2024, 8, 13),
        new Date(2024, 9, 13),
        new Date(2024, 10, 13),
        new Date(2024, 11, 13)
    ]
)

console.log(output);