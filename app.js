// let port = null;
// let developingPort = port ?? 3000;

// console.log(developingPort);

// const person = {
//     name: 'celine',
//     age: 19,
//     address: {
//         city: 'LA'
//     }
// };

// let userStreet = person.address.city?.street;

// console.log(userStreet);


// const obj = {
//     name: 'iphone',
//     brand: 'apple'
// };

// const entries = Object.entries(obj);

// console.log(entries);

// let mySet = new Set();
// mySet.add(1);
// mySet.add(2);
// mySet.add(1);

// console.log(mySet);


// const user = {
//     name: 'celine',
//     age: 25,
//     country: 'USA',
//     city: 'Los angeles'
// };

// const proxyUser = new Proxy(user, {
//     get(target, property){
//         console.log(`${property}`);
//         return target[property];
//     },
//     set(target, property, value){
//         console.log(`property: ${property} value: ${value}`);
//         target[property] = value;
//         return true
//     }
// });
// console.log(proxyUser.name);
// proxyUser.job = 'singer and programmer';

const phone = {
    name: 'iPhone',
    brand: 'Apple',
    coutry: 'USA'
};

const proxyPhone = new Proxy(phone, {
    get(target, property){
        console.log(`getting ${property}`);
        return target[property];
    },
    set(target, pro, value){
        console.log(`setting ${pro} with the value of ${value}`);
        target[pro] = value;
        return true;
    }
});

console.log(proxyPhone.name);
proxyPhone.cost = 850000;


const userIdentity = {
    name: 'billie eilish',
    age: 23,
    job: 'singer',
    ig: '@billieeilish',
    password: '1478373'
};

const proxy = new Proxy(userIdentity, {
    deleteProperty(target, prop){
        if(prop === 'password' || prop === 'name'){
            console.log(`${prop} cannot be deleted `);
            return false
        } else {
            console.log(`${prop} deleted`);
            return delete target[prop]
        }
    }
});

delete proxy.age;
delete proxy.name;

const sym1 = Symbol.for('id');

const names = {
    name: 'celine',
    age: 19,
    ['id']: 123
};

console.log(names.id)

console.log(Object.keys(names));

console.log(Symbol.keyFor(sym1));

const userName = 'celine';
const age = 19;
const country = 'USA';

const userObj = {
    userName,
    age,
    country
};

console.log(userObj);