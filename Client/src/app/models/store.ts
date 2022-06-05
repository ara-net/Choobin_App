type DateModel = shared.userControl.persianDatePicker.dateModel;
export class Good {
    constructor() {
        this.name =
            this.unit =
            this.code = '---';
        this.ammount =
            this.orderPoint =
            this.price = 0;
        this.exist = true;
    }
    _id: string;
    name: string;
    unit: string;
    code: string;
    ammount: number;
    orderPoint: number;
    price: number;
    byList: [ByItem];
    exist: boolean;
}

export class ByItem {
    constructor() {
        this.date = { garegorianDate: '1989/08/06', persianDate: '1368/05/15' }
        this.ammount = 1;
        this.price = 1000
    }
    date: DateModel;
    ammount: number;
    price: number;
}