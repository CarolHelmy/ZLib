export class Products {
    constructor(public id:number, public name:string, public quantity:number, public price: number, public imgUrl: string, public catId: number){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.imgUrl = imgUrl;
        this.catId = catId;
    }
}
