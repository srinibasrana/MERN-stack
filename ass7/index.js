const itemAdd=require('./cart.js');
const itemUpdate=require('./update.js');
const itemRemove=require('./remove.js');
const prompt=require('prompt-sync')();
const choose=prompt('What would you like to do? (Add item, Update item, Remove item)  ');
switch(choose){
    case 'add':
        itemAdd.addUser();   
        break;
    case 'update':
        const quantity=prompt('Enter the name of product whose quantity you want to update ');
        itemUpdate.updateUser(quantity);
        break;  
    case 'delete':
        const remove=prompt('Enter the product name to remove from the cart ');
        itemRemove.removeUser(remove)
          break;
     default: console.log('No operation');
              break;
}
