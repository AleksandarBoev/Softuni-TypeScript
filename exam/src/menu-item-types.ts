import {MenuItem, MenuItemType, WithId} from "./models";
import {ConvertToEuro} from "./decorators";

export abstract class BaseMenuItem implements MenuItem {

    protected constructor(
        private readonly _type: MenuItemType,
        private readonly _id: number,
        private readonly _name: string,
        private readonly _weightGrams: number,
        private readonly _basePrice?: number) {
    }

    public abstract getCalories(): number;

    public get id() {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public get type(): MenuItemType {
        return this._type;
    }

    public get weightGrams(): number {
        return this._weightGrams;
    }

    public get basePrice(): number | undefined {
        return this._basePrice;
    }

    @ConvertToEuro
    public get finalPrice(): number | undefined {
        return this._basePrice;
    }
}

export class WelcomeSnack extends BaseMenuItem {

    constructor(id: number, name: string, weightGrams: number, private readonly hasCream: boolean) {
        super(MenuItemType.WelcomeSnack, id, name, weightGrams, undefined);
        this.hasCream = hasCream;
    }

    public getCalories(): number {
        return this.weightGrams * 1.2 + (this.hasCream ? 20 : 0);
    }
}

export class MainCourse extends BaseMenuItem {

    constructor(id: number, name: string, weightGrams: number, private readonly fatGrams: number, basePrice: number) {
        super(MenuItemType.MainCourse, id, name, weightGrams, basePrice);
        this.fatGrams = fatGrams;
    }

    public getCalories(): number {
        return (this.weightGrams * 2.0) + (this.fatGrams * 3);
    }
}

export class Dessert extends BaseMenuItem {
    constructor(id: number, name: string, weightGrams: number, private readonly hasSugar: boolean, basePrice: number) {
        super(MenuItemType.Dessert, id, name, weightGrams, basePrice);
    }

    public getCalories(): number {
        return (this.weightGrams * 2.5) + (this.hasSugar ? 100 : 0);
    }
}

export function findItemById<T extends WithId>(items: T[], id: number): T | undefined {
    return items.find(item => item.id === id);
}