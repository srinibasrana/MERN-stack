const prompt=require('prompt-sync')();
const fs=require('fs');   

function User(name,quantity,price){
    this.name=name;
    this.quantity=quantity;
    this.price=price;

}

exports.addUser = ()=>{       
    const n=prompt('Enter the number of items');
    let userarr=[];
    for(let i=0;i<n;i++){
        const name=prompt('Item name: ');
        const quantity=Number(prompt('No. of items to be purchased: '));
        const price=Number(prompt('Price of each item: '));
        const user=new User(name,quantity,price);
        userarr= [...userarr,user];
    }
    fs.writeFile("user.json",JSON.stringify(userarr),(err)=>{
        if(err)
        console.log("Item couldn't be added successfully");
        else
        console.log('Items are added succesfully');
    })

}   