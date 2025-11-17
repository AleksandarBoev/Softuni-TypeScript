function getDayOfTheWeek(dayName: string): number {
    enum WeekDay {
        Monday = 1,
        Tuesday, //since Monday has "= 1", all other days start incrementing and this one is now "2".
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    /*
    above enum, transpiled into a js file looks like this:

    (function (WeekDay) {
        WeekDay[WeekDay["Monday"] = 1] = "Monday";
        WeekDay[WeekDay["Tuesday"] = 2] = "Tuesday";
        WeekDay[WeekDay["Wednesday"] = 3] = "Wednesday";
        WeekDay[WeekDay["Thursday"] = 4] = "Thursday";
        WeekDay[WeekDay["Friday"] = 5] = "Friday";
        WeekDay[WeekDay["Saturday"] = 6] = "Saturday";
        WeekDay[WeekDay["Sunday"] = 7] = "Sunday";
    })(WeekDay || (WeekDay = {}));
     */

    return WeekDay[dayName as keyof typeof WeekDay];
}

console.log(getDayOfTheWeek('Monday'));
console.log(getDayOfTheWeek('Friday'));
console.log(getDayOfTheWeek('Invalid'));