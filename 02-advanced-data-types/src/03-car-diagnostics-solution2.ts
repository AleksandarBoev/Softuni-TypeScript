export {};

class Part {
    constructor(partName: string) {
        this.partName = partName;
    }

    protected partName: string;

    runDiagnostics(): string {
        return this.partName;
    }
}

class CarBody extends Part {
    constructor(private material: string, private state: string, partName: string) {
        super(partName);
        this.material = material;
        this.state = state;
    }
}

class Tires extends Part {
    constructor(private airPressure: number, private condition: string, partName: string) {
        super(partName);
        this.airPressure = airPressure;
        this.condition = condition;
    }
}

class Engine extends Part {
    constructor(private horsepower: number, private oilDensity: number, partName: string) {
        super(partName);
        this.horsepower = horsepower;
        this.oilDensity = oilDensity;
    }
}

const carBody: CarBody = new CarBody('aluminum', 'scratched', 'Car Body');
const tires: Tires = new Tires(30, 'needs change', 'Tires');
const engine: Engine = new Engine(300, 780, 'Engine');

