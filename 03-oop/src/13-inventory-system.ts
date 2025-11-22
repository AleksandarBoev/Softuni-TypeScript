class Product {
    private static productCount: number = 0;

    private readonly id: number;

    constructor(private readonly name: string, private readonly price: number) {
        if (name.length <= 0) {
            throw new Error('Name must have at least 1 character!');
        }

        if (price < 1) {
            throw new Error('Price must be at least 1!');
        }

        this.name = name;
        this.price = price;
        this.id = ++Product.productCount;
    }

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
}

class Inventory {
    private products: Product[] = [];

    addProduct(product: Product) {
        this.products.push(product);
    }

    listProducts(): string {
        let result: string = '';
        for (const product of this.products) {
            result += product.getDetails() + "\n";
        }

        result += 'Total Products Created: ' + this.products.length;
        return result;
    }
}

const inventory = new Inventory();
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);

inventory.addProduct(product1);
inventory.addProduct(product2);
console.log(inventory.listProducts());

// Product.productCount = 10;
// const product3 = new Product("", 800);
// const product4 = new Product("Phone", 0);
// product3.id = 5;