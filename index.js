
let set = new Set();
for (let i = 0; i <= 10; i++) {
    set.add(i);
}
console.log(set);
set.delete(5);
console.log(set)
set.clear();

let names = ["victor", "fred", "ryan", "femi", "badejo"]
let namesSet = new Set();
names.forEach(name => {
    set.add(name)
})
console.log(set)

let countries = ["nigeria","turkiye", "U.S.A", "germany", "england", "italya"]
let countriesLength = new Set();
for (let i = 0; i < countries.length; i++){
        countriesLength.add(countries[i])
        countriesLength.add(countries[i].length);
}
console.log(countriesLength);


const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];//lets union a and b


let union=[...a,...b];// iki diziyi birleştirir
console.log(union);
let A = new Set(a);
let B = new Set(b);
let intersect=a.filter(num=>{
  return b.has(num);
})
