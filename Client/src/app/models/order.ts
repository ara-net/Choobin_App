import { Customer } from './customer';
import { OrderItem } from './order-item';
type OrderStatus = shared.util.customTypes.OrderStatus;

export class Order {
    constructor() {
        this.orderNumber = '---'
        this.status = 'pend';
        this.customer = new Customer();
        this.customer.gender = 'male';
        this.createDate = new Date().toISOString();
        this.items = new Array();
        this.items.push(new OrderItem())
        this.totalPrice = this.price || 0 - this.discount;
        this.creator = 'admin';
    }
    _id: string;
    price: number;
    discount: number;
    totalPrice: number;
    orderNumber: string;
    customer: Customer;
    createDate: string;
    status: OrderStatus;
    items: OrderItem[];
    totalQty: number;
    sendData: { date: Date; trackingCode: string; };
    payment: { date: Date; trackingCode: string; }
    creator: String;
    public get _price(): number {
        this.price = this.items.reduce((a, b) => a + (b.grossPrice), 0);
        return this.price;
    }
    public get _discount(): number {
        this.discount = this.items.reduce((a, b) => a + (b.totalDiscount), 0);
        return this.discount;
    }
    public get _totalPrice(): number {
        this.totalPrice = this.items.reduce((a, b) => a + (b.netPrice), 0);
        return this.totalPrice;
    }

    public set _price(v: number) {
        this.price = v;
    }
    public set _discount(v: number) {
        this.discount = v;
    }
    public set _totalPrice(v: number) {
        this.totalPrice = v;
    }



}

