enum TravelVacation {
    Abroad = 'Abroad',
    InCountry = 'InCountry'
}

enum MountainVacation {
    Ski = 'Ski',
    Hiking = 'Hiking'
}

enum BeachVacation {
    Pool = 'Pool', Sea = 'Sea',
    ScubaDiving = 'ScubaDiving'
}

interface Holiday {
    set start(val: Date);

    set end(val: Date);

    getInfo(): string;
}

interface VacationManager<T, V> {
    reserveVacation(holiday: T, vacationType: V): void;

    listReservations(): string;
}

class PlannedHoliday implements Holiday {
    private _start: Date;
    private _end: Date;


    constructor(start: Date, end: Date) {
        this.validateStartDate(start, end);
        this.validateEndDate(end, start);

        this._start = start;
        this._end = end;
    }

    set start(val: Date) {
        this.validateStartDate(val, this._end);

        this._start = new Date(val); //creating new date object, just in case someone afterwards calls "val.setDate()"
    }

    set end(val: Date) {
        this.validateEndDate(val, this._start);

        this._end = new Date(val);
    }

    getInfo(): string {
        return `Holiday: ${this.getDateInWantedFormat(this._start)} - ${this.getDateInWantedFormat(this._end)}`;
    }

    private validateStartDate(startDate: Date, endDate: Date) {
        if (startDate === undefined || endDate.getTime() <= startDate.getTime()) {
            throw new Error('Invalid start date!');
        }
    }

    private validateEndDate(endDate: Date, startDate: Date) {
        if (endDate === undefined || startDate.getTime() >= endDate.getTime()) {
            throw new Error('Invalid end date!');
        }
    }

    private getDateInWantedFormat(date: Date) {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }
}

class HolidayManager<H extends Holiday, V extends BeachVacation | MountainVacation | TravelVacation>
    implements VacationManager<H, V> {

    private holidayToVacationType: Map<H, V> = new Map();

    reserveVacation(holiday: H, vacationType: V): void {
        this.holidayToVacationType.set(holiday, vacationType);
    }

    listReservations(): string {
        let result = "";

        for (const [key, value] of this.holidayToVacationType) {
            result += `${key.getInfo()} => ${value}\n`
        }

        return result;
    }
}

// let holiday = new PlannedHoliday(new Date(2024, 1, 1), new Date(2024, 1, 4));
// let holiday2 = new PlannedHoliday(new Date(2025, 3, 14), new Date(2025, 3, 17));
// let holidayManager = new HolidayManager<Holiday, TravelVacation>();
// holidayManager.reserveVacation(holiday, TravelVacation.Abroad);
// holidayManager.reserveVacation(holiday2, TravelVacation.InCountry);
// console.log(holidayManager.listReservations())

// let holiday = new PlannedHoliday(new Date(2022, 10, 11), new Date(2022, 10, 18));
// let holiday2 = new PlannedHoliday(new Date(2024, 5, 18), new Date(2024, 5, 22));
// let holidayManager = new HolidayManager<Holiday, BeachVacation>();
// holidayManager.reserveVacation(holiday, BeachVacation.ScubaDiving);
// holidayManager.reserveVacation(holiday2, BeachVacation.Sea);
// console.log(holidayManager.listReservations())


let holiday3 = new PlannedHoliday(new Date(2021, 3, 14), new Date(2020, 3, 17));
let holiday4 = new PlannedHoliday(new Date(2024, 2, 1), new Date(2024, 1, 4));

// let holiday = new PlannedHoliday(new Date(2024, 1, 1), new Date(2024, 1, 4));
// let holiday2 = new PlannedHoliday(new Date(2025, 3, 14), new Date(2024, 3, 17));
// let holidayManager = new HolidayManager<Holiday, MountainVacation>();
// holidayManager.reserveVacation(holiday, BeachVacation.ScubaDiving);
// holidayManager.reserveVacation(holiday2, TravelVacation.InCountry);
// console.log(holidayManager.listReservations());