export class InvoiceItem {
    private _id: string; 
    private _desc: string; 
    private _qty: number; 
    private _unitPrice: number 

    constructor(id: string, desc: string,  qty: number, unitPrice: number) {
        this._id = id; 
        this._desc = desc;
        this._qty = qty;
        this._unitPrice = unitPrice;
    }

    public get id() {
        return this._id;
    }

    public get desc() {
        return this._desc;
    }

    public get qty() {
        return this._qty;
    }

    public set qty(qty: number) {
        this._qty = qty;
    }

    public get unitPrice() {
        return this._unitPrice;
    }

    public set unitPrice(unitPrice: number) {
        this._unitPrice = unitPrice;
    }

    public get total() {
        return this._unitPrice * this._qty;
    }
}