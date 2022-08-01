const prompt=require('prompt-sync')();
const fs=require('fs');  

function User(name,quantity,price){
    this.name=name;
    this.quantity=quantity;
    this.price=price;
}
exports.removeUser=(name)=>{
    let userarr=JSON.parse(fs.readFileSync("user.json"));
    userarr=userarr.filter(user=>user.name!=name)
        // const quantity=Number(prompt('Enter quantity  '));
        // const price=prompt('Enter price  ' );
        fs.writeFileSync("user.json",JSON.stringify(userarr));
        let sum=0;
        let sumarr=JSON.parse(fs.readFileSync("user.json"));
        for(let k=0;k<sumarr.length;k++){
            sum=sum+(Number(sumarr[k].quantity) * Number(sumarr[k].price));
        }
        console.log('The total price of all items in the cart is :: ',sum);
           
}