// Fundamental Exam Data Science
// GIRAN
// Soal No.1


const array_sorting = (arr=[]) => {
    // Dapat data asli
    data_asli = arr

    // Dapat data soritng
    sort = arr.sort(function(a,b) {return a-b})

    // if(sort.length%2 == 0){
    //     pertama = sort.slice(0,6)
    //     kedua = sort.slice(6,12)

    // }

    // Dapat data pertama
    pertama = []
    for (let i = 0; i < sort.length; i++) {
        pertama = sort.slice(0,sort.length/2)
        
    }

    // Dapat data kedua
    kedua = []
    for (let i = 0; i < sort.length; i++) {
        kedua = sort.slice(sort.length/2)
        
    }

    // Dapat Median
    if (sort.length % 2 === 0) {
        median = (sort[sort.length / 2] + sort[sort.length / 2 - 1]) / 2
      } else {
        median = sort[(sort.length - 1) / 2] 
    }

    // Dapat q1
    if (pertama.length % 2 === 0) {
        q1 = (pertama[pertama.length / 2] + pertama[pertama.length / 2 - 1]) / 2
      } else {
        q1 = pertama[(pertama.length - 1) / 2] 
    }

    // Dapat q3
    if (kedua.length % 2 === 0) {
        q3 = (kedua[kedua.length / 2] + kedua[kedua.length / 2 - 1]) / 2
      } else {
        q3 = kedua[(kedua.length - 1) / 2] 
    }

    let iqr = q3 - q1
    
    let lowerLimit = q1 - 1.5 * iqr
    
    let upperLimit = q3 + 1.5 * iqr

    console.log('data asli ', data_asli)
    console.log('data setelah disort ', sort)
    console.log('q1 adalah', q1)
    console.log('q3 adalah', q3)
    console.log('lower limit ', lowerLimit)
    console.log('upper limit ', upperLimit)

    

    // return 

    // return 'data pertama ' + pertama + 'data kedua ' + kedua
    
    // console.log('data pertama ' + pertama)
    // console.log('data kedua ' + kedua) 

    // return `${pertama}
    
    // ${kedua}`

}
console.log(array_sorting([71, 70, 73, 70, 70, 69, 70, 72, 71, 300, 71, 69]))

// var new_arr = []
// var arr = [71, 70, 73, 70, 70, 69, 70, 72, 71, 300, 71, 69]
// arr = arr.sort(function(a,b) {return a-b})
// arr = arr.toString('')
// // new_arr.push(arr)

// console.log(arr)