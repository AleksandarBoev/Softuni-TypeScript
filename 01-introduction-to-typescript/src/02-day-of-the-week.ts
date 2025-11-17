function getDayOfTheWeek(num: number): string {
    enum WeekDay {
        Monday = 1,
        Tuesday, //since Monday has "= 1", all other days start incrementing and this one is now "2".
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    return WeekDay[num] ? WeekDay[num] : 'error';
}

console.log(getDayOfTheWeek(1));
console.log(getDayOfTheWeek(2));
console.log(getDayOfTheWeek(3));
console.log(getDayOfTheWeek(4));
console.log(getDayOfTheWeek(5));
console.log(getDayOfTheWeek(6));
console.log(getDayOfTheWeek(7));
console.log(getDayOfTheWeek(-1));