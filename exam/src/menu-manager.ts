import {BaseMenuItem, findItemById} from "./menu-item-types";
import {Client} from "./models";

export class MenuManager {
    private readonly menuItems: BaseMenuItem[];
    private readonly clients: Map<number, Client[]>;

    constructor() {
        this.menuItems = [];
        this.clients = new Map();
    }

    public addMenuItem(item: BaseMenuItem): string {
        this.menuItems.push(item);
        this.clients.set(item.id, []);
        return `Menu item "${item.name}" (ID: ${item.id}) has been added.`;
    }

    public registerClient(itemId: number, client: Client): string {
        if (!this.clients.has(itemId)) {
            return `ERROR: Menu item with ID ${itemId} not found.`;
        } else {
            this.clients.get(itemId)!.push(client);
            return `Client ${client.name} registered for menu item ID ${itemId} successfully.`;
        }
    }

    public listAllItems(): string[] {
        const result: string[] = ['--- List of All Menu Items ---'];
        for (const menuItem of this.menuItems) {
            const menuItemType: string = menuItem.type.toUpperCase();
            const calories: string = menuItem.getCalories().toFixed(2);
            result.push(`[${menuItemType}] ${menuItem.name} (${menuItem.weightGrams}g) - Calories: ${calories}`);
        }

        return result;
    }

    public findMenuItem(itemId: number): BaseMenuItem | undefined {
        return findItemById<BaseMenuItem>(this.menuItems, itemId);
    }
}