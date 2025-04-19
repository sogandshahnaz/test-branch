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