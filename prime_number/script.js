//Solution 1

// function isPrime(num) {
//     for (var i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function display(n) {
//     var arr = [2];
//     for ( var i = 3; i < n; i+=2 ) {
//         if ( isPrime(i) ) {
//             arr.push(i);
//         }
//     }
//     console.log(arr);
// }

// display(50);

// Solution 2
// function isPrime(x) {
//     d = x -1;
//     while (d > 1 ){
//         if ((x % d == 0)) return false;
//         d--;
//     }
//     return true;
// }

// function display(n) {
//     var arr = [2];
//     for ( var i = 3; i < n; i+= 2) {
//         if ( isPrime() ) {
//             arr.push(i);
//         }
//     }
//     console.log(arr);
// }

// display(50);

// Solution 3 (To determine whether a number is a prime)
// function isPrime(x) {
//     d = x -1;
//     while (d > 1 ){
//         if ((x % d == 0)) return false;
//         d--;
//     }
//     return true;
// }

// if (isPrime(41)) {
//     alert('Prime');
// } else {
//     alert('Not Prime');
// }