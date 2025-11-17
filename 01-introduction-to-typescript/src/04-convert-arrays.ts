function getJoinedStringAndLength(inputStrings: string[]): [string, number] {
    const joinedString = inputStrings.join("");
    return [joinedString, joinedString.length];
}

console.log(getJoinedStringAndLength(['How', 'are', 'you?']));
console.log(getJoinedStringAndLength(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']));