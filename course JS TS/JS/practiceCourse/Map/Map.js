const shops = [
    { rise: 500 },
    { oil: 200 },
    { BERAD: 50 },
];

const budget = [500, 1500, 25000];
const map = new Map([
    [{ paper: 400 }, 8000]
]);

budget.forEach((v, i) => {
    map.set(shops[i], v);
});
console.log(map);

// map.set(shops[0], 5000);  
// map.set(shops[1], 52000);
// map.set(shops[2], 15000);

console.log(map.get(shops[1]));
console.log(map.has(shops[0]));
// map.delete(key);
// map.clear();
// map.size;


map.keys(); // -> array from keys
const goods = [];

for (let shop of map.keys()) {
    goods.push(Object.keys(shop)[0]);
}

console.log(goods);


for (let price of map.values()) {
    console.log(price);
}

for (let [shop, price] of map.entries()) {
    console.log(`${shop}: ${price}`);
}

map.forEach((value, key, map) => {
    console.log(key, value);
    // console.log(...map);
})