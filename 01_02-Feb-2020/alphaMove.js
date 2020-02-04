// TUGAS WEEKEND 2
// GIRAN
// ALPHAMOVE

var alphaMove = (huruf = '', jumlahMove = 0) => {
  let hasil = ''
  for (let i = 0; i < huruf.length; i++){
    hasil += String.fromCharCode(huruf.charCodeAt(i) + jumlahMove) 
  }
  return hasil
}

console.log(alphaMove('abc',1))
console.log(alphaMove('abc',2))

// function myFunction() {
//   var res = String.fromCharCode(65);
//   return res
// }

// console.log(myFunction())


