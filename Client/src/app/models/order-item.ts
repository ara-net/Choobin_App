type DiscountType = shared.util.customTypes.DiscountType;
export class OrderItem {
    constructor(code: string = '', name: string = '', price: number = 0) {
        this.discountType = 'percent';
        this.name = name;
        this.code = code;
        this.qty = 1;
        this.price = price;
        this.discount = 0;
        this.SetPriceDiscount();
    }
    private qty: number;
    private discount: number;
    private price: number;
    private discountType: DiscountType;
    name: string;
    code: string;
    netPrice: number;
    grossPrice: number;
    totalDiscount: number;

    public set _discount(value: number) {
        this.discount = value;
        this.SetPriceDiscount();
    }
    public get _discount(): number {
        return this.discount;
    }

    public set _qty(value: number) {
        this.qty = value;
        this.SetPriceDiscount();
    }
    public get _qty(): number {
        return this.qty;
    }

    public set _discountType(value: DiscountType) {
        this.discountType = value;
        this.SetPriceDiscount();
    }

    public get _discountType(): DiscountType {
        return this.discountType;
    }


    public set _price(v: number) {
        this.price = v;
        this.SetPriceDiscount();
    }

    public get _price(): number {
        return this.price;
    }



    private SetPriceDiscount() {
        this.netPrice = this.qty * (this.discountType == 'percent'
            ? this.price * ((100 - this.discount) / 100.0)
            : this.price - this.discount);
        this.grossPrice = this.price * this.qty;
        this.totalDiscount = this.qty * this.discount;
    }
}

