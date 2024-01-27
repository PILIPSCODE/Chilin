 interface Cartitems {
    ProductName:String,
    Price:Number,
    img:String,
    Qty:number,
    id:String,
    stock:number,
    isChecked:Boolean,
}

 interface Cart{
    product:Cartitems[],
    jmlh:Number
}

