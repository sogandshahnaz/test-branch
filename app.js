let port = null;
let developingPort = port ?? 3000;

console.log(developingPort);

const user = {
    name: 'celine',
    age: 19,
    address: {
        city: 'LA'
    }
};

let userStreet = user.address.city?.street;

console.log(userStreet);


const obj = {
    name: 'iphone',
    brand: 'apple'
};

const entries = Object.entries(obj);

console.log(entries);

let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(1);

console.log(mySet);