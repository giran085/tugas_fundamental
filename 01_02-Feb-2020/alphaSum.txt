// TUGAS WEEKEND 2
// GIRAN
// ALPHASUM

var alphaSum = (huruf = '') => {
    let hasil = 0;
    for (let i = 0; i < huruf.length; i++){
      hasil += huruf.charCodeAt(i) - 96 
    }
    return hasil
}

console.log(alphaSum('abc'))
console.log(alphaSum('babaca'))

// let hasil = 0;
// var huruf = 'abcdefghij'
// for (let i = 0; i < huruf.length; i++){
//     hasil += huruf.charCodeAt(i) + "-"
// }

// console.log(hasil)

