class product{

    constructor(product_id,product_name,price,quantity){
        this.product_id=product_id;
        this.product_name=product_name;
        this.price=price;
        this.quantity=quantity;

    }

    total_price = function(){
        return this.price*this.quantity;
    }

    update_quantity=function(new_quantity){
        this.quantity=new_quantity;
    }

    display=function(){
        console.log("product_id: ",this.product_id);
        console.log("Product_name : ",this.product_name);
        console.log("Price: ",this.price);
        console.log("Quantity : ",this.quantity);
        console.log("Total Price : ",this.total_price());
    }
}

let p1 = new product(100,"phone",16000,3);
p1.display();
console.log("Total : ",p1.display());
p1.update_quantity(6);
console.log("After updating the quantity : ");
p1.display();




