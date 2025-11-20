export {};

type CarBody = { material: string, state: string }
type Tires = { airPressure: number, condition: string }
type Engine = { horsepower: number, oilDensity: number }
type Part = { partName: string, runDiagnostics(): string}

const getPartName = function runDiagnostics(this: Part): string {
    return this.partName;
}

type CarBodyPart = CarBody & Part;
type TiresPart = Tires & Part;
type EnginePart = Engine & Part;

const carBodyPart: CarBodyPart = {
    material: 'aluminum',
    state: 'scratched',
    partName: 'Car Body',
    runDiagnostics: getPartName
};

const tiresPart: TiresPart = {
    airPressure: 30,
    condition: 'needs change',
    partName: 'Tires',
    runDiagnostics: getPartName
}

const getPartNameInStyle = function runDiagnostics(this: Part): string {
    return `And the super cool name of the part is... ${this.partName}!`;
}

const enginePart: EnginePart = {
    horsepower: 300,
    oilDensity: 780,
    partName: 'Engine',
    runDiagnostics: getPartNameInStyle
}

function carDiagnostics(carBodyPart: CarBodyPart, tiresPart: TiresPart, enginePart: EnginePart): void {
    console.log(carBodyPart.runDiagnostics())
    console.log(tiresPart.runDiagnostics())
    console.log(enginePart.runDiagnostics())
}

carDiagnostics(carBodyPart, tiresPart, enginePart)



