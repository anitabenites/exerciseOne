

var quantity = prompt('Please enter quantity');
console.log(quantity);
var price = 100;
var totalPrice = quantity*price;

function calculator(quantity){
  if(quantity == "" || isNaN(quantity)) {
    console.log('this is an error');
    throw 'this is an error'; //where I can see this error? not in the console!!
  } else {
    console.log('the total price to pay: ', quantity*price);
    return(quantity*price);
  }
}
console.log(calculator(quantity));

function discount(totalPrice) {
  if(totalPrice >= 1000 && totalPrice<5000) {
    return totalPrice*0.97;
  } else if (totalPrice>=5000 && totalPrice<7000) {
    return totalPrice*0.95;
  } else if(totalPrice>=7000 && totalPrice<10000) {
    return totalPrice*0.93;
  } else if(totalPrice>=10000 && totalPrice<50000) {
    return totalPrice*0.90;
  } else if(totalPrice>=50000){
    return totalPrice*0.85;
  } else {
    return("there is no discount");
  }
}
console.log(discount(totalPrice))

//<=================== tax rates ==================================>
var stateName = prompt('Please enter your state');
let states = {'UT':0.0685, 'NV': 0.08, 'TX': 0.0625, 'AL': 0.04, 'CA': 0.0825}
console.log('this are the states', states);

function totalPriceAfterTax(newTotalPrice) {

  // console.log('this are the items: ', items);
  // for(let items in states) {
    newTotalPrice = newTotalPrice*(1 + states[stateName]);
  // }
  return newTotalPrice;
}

console.log(totalPriceAfterTax(discount(totalPrice)));
