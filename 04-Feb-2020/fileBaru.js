// NO.3

theMost = (input='') => {
    var huruf = []
    var jumlah_huruf = []
    var arr_input = input.split('')

    for (let i = 0; i < arr_input.length; i++) {
        if (huruf.includes(arr_input[i])) {
            var index_ke = huruf.indexOf(arr_input[i])
            jumlah_huruf[index_ke] ++
            
        } else {
            huruf.push(arr_input[i])
            jumlah_huruf.push(1)
            
        }
        
    }

    hasil=Math.max(...jumlah_huruf)
    var hurufMax=huruf[jumlah_huruf.indexOf(hasil)]
    console.log(`Huruf terbanyak adalah: '${hurufMax}'`)
    
    // return `Huruf terbanyak adalah: ${hurufTerbanyak}`
    // console.log(hurufMax)
    // console.log(jumlah_huruf)

}

// theMost('xlppphaaaa')
// NO.4

findUniq = (input=[]) => {
    var huruf = []
    var jumlah_huruf = []
    var arr_input = input
    // console.log(arr_input)

    for (let i = 0; i < arr_input.length; i++) {
        if (huruf.includes(arr_input[i])) {
            var index_ke = huruf.indexOf(arr_input[i])
            jumlah_huruf[index_ke] ++
            
        } else {
            huruf.push(arr_input[i])
            jumlah_huruf.push(1)
            
        }
        
    }

    hasil=Math.min(...jumlah_huruf)
    var hurufMin=huruf[jumlah_huruf.indexOf(hasil)]
    console.log(`Angka Terunik Adalah: ${hurufMin}`)
    
    // return `Huruf terbanyak adalah: ${hurufTerbanyak}`
    // console.log(hurufMax)
    // console.log(jumlah_huruf)

}

findUniq([1,1,1,1,7,1,1])

