
// Solution 1
// function reverse(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverse('apple'));


// Solution 2
// function reverse(str) {
//     let reversed = '';

//     for (let character of str) {
//         reversed = character + reversed;
//     }

//     return reversed;
// }
// console.log(reverse('apple'));


// Solution 3

// function reverse(str) {
//     return str.split('').reduce((rev, char) => 
//         char + rev, '');
// }

// console.log(reverse('apple'));
// console.log(reverse('hello'));