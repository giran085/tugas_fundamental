// TUGAS DAY 12
// GIRAN


// NO.1
sumTwoSmallest = (arr=[]) => {
    let new_arr = arr.sort(function(a,b) {return a-b})
    var pertama = new_arr.slice(0,1)
    var kedua = new_arr.slice(1,2)
    var hasil = Number(pertama) + Number(kedua)

    // console.log(pertama)
    // console.log(kedua)
    console.log(hasil)
}

sumTwoSmallest([3,4,2,4,2,3,4])

// NO.2


removeDuplicates = (huruf='') => {
    var new_huruf = huruf.split(' ')
    var hasil = []
    for (let i = 0; i < new_huruf.length; i++) {
        if (hasil.indexOf(new_huruf[i]) !== -1) {
                     
        }else {
            hasil.push(new_huruf[i]) 
        }
        
    }

    console.log(hasil)

}

removeDuplicates('alpha beta beta gamma gamma')

