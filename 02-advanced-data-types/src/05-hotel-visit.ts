//Not 100% what the task requires, but the code becomes terrible if trying to get 100%
type Floor = {
    number: 1 | 2 | 3,
    hallway: 'A' | 'C',
    pass?: 'Guest' //optional + literal type
    train?(): void,
    dine?(): void,
    sleep?(): void
}

function visitFloor(floor: Floor) {
    switch (floor.number) {
        case 1:
            floor.train
                ? floor.train() //if method is present, call it
                : () => console.log('Train is missing'); //if method is missing, call this console log method
            return;
        case 2:
            floor.dine
                ? floor.dine()
                : () => console.log('Dine is missing');
            return;
        case 3:
            floor.sleep
                ? floor.sleep()
                : () => console.log('Sleep is missing');
            return;
    }
}

visitFloor({    train() {}, number: 1, hallway: 'A', pass: 'Guest'});
visitFloor({    dine() {}, number: 2, hallway: 'A'});
visitFloor({    sleep() {}, number: 3, hallway: 'C'});
visitFloor({    train() {}, number: 1, hallway: 'C'});
visitFloor({    train() {}, number: 1, hallway: 'A'});
visitFloor({    dine() {}, number: 2, hallway: 'A', pass: 'Guest'});
visitFloor({    sleep() {}, number: 3, hallway: 'A'});
visitFloor({    dine() {}, number: 2, hallway: 'C'});