class Counter {
    private static counter: number = 0;

    /**
     * Should not be instantiated. For static method use only.
     */
    private constructor() {
    }

    static increment() {
        this.counter++;
    }

    static getCounter(): number {
        return this.counter;
    }
}

// const counter: Counter = new Counter(); //should not and does not work
Counter.increment();
Counter.increment();
console.log(Counter.getCounter())