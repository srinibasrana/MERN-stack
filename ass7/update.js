const prompt=require('prompt-sync')();
const fs=require('fs');   

function User(name,quantity,price){
    this.name=name;
    this.quantity=quantity;
    this.price=price;
}
exports.updateUser=(name)=>{
    let userarr=JSON.parse(fs.readFileSync("user.json"));
    userarr=userarr.filter(user=>user.name!=name)
        const quantity=prompt('Enter the new quantity of the said item ');
        const price=prompt('Enter the price for updated quantity (Original Price) ');
        const userObj=new User(name,quantity,price);
        userarr= [...userarr,userObj];
        fs.writeFile("user.json",JSON.stringify(userarr),(err)=>{
            if(err)
            console.log('An error has occured ');
            else
            console.log(" The item number updated is", quantity);
        })
        let sum=0;
        for(let k=0;k<userarr.length;k++){
            sum=sum+(Number(userarr[k].quantity) * Number(userarr[k].price));
        }
        console.log('The total price of all items in the cart is :: ',sum);
           
}