/*
input tuple containing this info:
id: number - required

2. firstName: string – required

3. lastName: string – required

4. age: number – required

5. middleName: string – optional

6. hobbies: string[] – optional

7. workInfo: [string, number] - optional
 */
function getPersonInformation(
    id: number, fistName: string, lastName: string, age: number,
    middleName?: string, hobbies?: string[], workInfo?: [string, number]): [number, string, number, string, string] {
    let fullName: string;
    if (middleName) {
        fullName = `${fistName} ${middleName} ${lastName}`;
    } else {
        fullName = `${fistName} ${lastName}`;
    }

    let hobbiesOutput: string;
    if (hobbies && hobbies.length > 0) {
        hobbiesOutput = hobbies.join(", ");
    } else {
        hobbiesOutput = '-';
    }

    let workInfoOutput: string
    if (workInfo) {
        workInfoOutput = `${workInfo[0]} -> ${workInfo[1]}`;
    } else {
        workInfoOutput = '-';
    }

    return [id, fullName, age, hobbiesOutput, workInfoOutput];
}

console.log(getPersonInformation(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]))
console.log(getPersonInformation(20, 'Mary', 'Trent', 25, undefined, ['fitness', 'rowing']))
console.log(getPersonInformation(21, 'Joseph', 'Angler', 28))
console.log(getPersonInformation(21, 'Kristine', 'Neva', 23, ''))