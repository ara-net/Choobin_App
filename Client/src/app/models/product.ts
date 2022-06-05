export class Product {
    id: string;
    name: string;
    code: string;
    category: string;
    hardness: number;
    resinAmmount: number;
    price: number;

    constructor() {
        this.name = this.code = this.category = '---';
        this.hardness = this.resinAmmount = this.price = 0;
    }
}