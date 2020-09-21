function Cart(){
    let items = [];
    let cost=0;

    //function to add a item in cart
    this.add = function(id,name,price){
        try{
            if(items.length===10){
                throw new Error("Cart is full.");
            }
        } catch(err){
            console.log("Cart is full. you can't add more items");
            return;
        }
        let obj={};
        obj.id=id;
        obj.name=name;
        obj.price=price;
        items.push(obj);
    };
    //function to remove items from cart
    this.remove = function(id){
        try{
            if(items.length===0){
                throw new Error("Cart is empty");
            }
        } catch(err){
            console.log("Cart is empty");
            return;
        }
        let remainingItem=items.filter((items)=> items.id!==id);
        items=remainingItem;
    };
    //function to empty cart
    this.empty=function(){
        items=[];
        cost=0;
    };
    //function for checkout
    this.checkout=function(){
        for(let i=0;i<items.length;i++){
            cost+=items[i].price;
        }
        // console.log(`Total price: ${total}`);
        console.log("Checking out...");
        this.empty();
    };

    Object.defineProperties(this, {
        items: {
            writable:false,
            configurable:false,
            get:function(){
                return items;
            }
        },
        cost: {
            writable:false,
            configurable:false,
            get:function(){
                return cost;
            }
        }
    });
}

// let cart = new Cart();
// cart.add({});
// cart.add({});
// cart.add({});
// cart.add({});
// cart.add({});
// cart.add({});
// cart.add({});
// cart.add({});
// cart.add({});
// cart.add({});
// cart.add({});
