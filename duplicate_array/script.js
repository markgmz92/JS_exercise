let a = [1, 2, 5, 2, 1, 8];

// Solution 1 (brute force)

let b = [];

let len = a.length;

for( let i=0; i < len; i++) {
    if(b.indexOf(a[i]) === -1){
        b.push(a[i]);
    }
}

console.log(b);

//console.log(bSet)

// obj = {};

// for(let i of a){
//     obj[i] = true;
// }

// let b = Object.keys(obj);
// console.log(b);

// Solution 3
// console.log([... new Set(a) ]);
