export enum MenuItemType {
    WelcomeSnack = 'WelcomeSnack',
    MainCourse = 'MainCourse',
    Dessert = 'Dessert'
}

export interface MenuItem {
    id: number;

    name: string;

    /**
     * Weight of the dish
     */
    weightGrams: number;

    type: MenuItemType;
}

export interface Client {
    name: string;

    phone: string;
}

export interface WithId {
    id: number;
}