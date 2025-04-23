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

let arr = [1,2,3];
arr.push(4);
console.log(arr);

const car = {
    name: 'mercedes benz G class',
    brand: 'benz'
}

console.log(car);

car.price = 30000000;

console.log(car);

let str = 'hello';
console.log(str);
str[0] = 'H';

console.log(str);

str = 'Hello';

console.log(str);


function makeCoffee(){
    return new Promise((resolve, reject) => {
        console.log('coffee is being prepared');
        setTimeout(() => {
            let waterIsBoiled = true;
            if(waterIsBoiled){
                resolve('the coffee is ready');
            } else{
                reject('the coffee was not ready!');
            };
        }, 3000);
    })
};

makeCoffee()
.then(message => {
    console.log(message);
})
.catch(error => {
    console.log(error);
});


// function orderingFood(){
//     return new Promise((resolve, reject) =>{
//         console.log('the food is orderd');
//         setTimeout(() => {
//             let isOrdering = false;

//             if(isOrdering){
//                 resolve('the food is served');
//             } else{
//                 reject('the food is not served');
//             }
//         }, 3000);
//     })
// };

// orderingFood()
// .then(message => {
//     console.log(message);
// })
// .catch(error => {
//     console.log(error);
// });

function checkPassword(inputPassword){
    return new Promise((resolve, reject) => {
        const correctPassword = 182060;

        setTimeout(() => {
            if(correctPassword === inputPassword){
                resolve('you logged in');
            } else{
                reject('the password is not correcr');
            };
        },3000);
    })
};

checkPassword(182060)
.then(succses => {
    console.log(succses);
})
.catch(err => {
    console.log(err);
});


new Promise((resolve, reject) => {
    resolve(2);
    reject('not a number');
})
.then(result => {
    console.log(result);
    return result * 2;
})
.then(result => {
    console.log(result);
    return result + 1
})
.then(result => {
    console.log(result);
})
.catch(err => {
    console.log(err);
})


fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(data => {
    console.log(data.title);
})
.catch(err => {
    console.log(err);
})