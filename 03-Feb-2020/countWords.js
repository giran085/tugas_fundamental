const countWords = (sentence = '') => {
    var arrKata = []
    var arrJumlahKata = []
    var arrSentence = sentence.split(' ')

    for (let i = 0; i < arrSentence.length; i++) {
        // 
        if(arrKata.includes(arrSentence[i].toLowerCase())){
            var index_ke = arrKata.indexOf(arrSentence[i].toLowerCase())
            arrJumlahKata[index_ke]++
            
        }else{
            arrKata.push(arrSentence[i].toLowerCase())
            arrJumlahKata.push(1)
        }
        
    }
    console.log(arrKata)
    console.log(arrJumlahKata)

    var text = ''
    for (let i = 0; i < arrKata.length; i++) {
        text += "Jumlah Kata '" + arrKata[i].charAt(0).toUpperCase() + arrKata[i].slice(1,arrKata[i].length) + "' ada sebanyak " + arrJumlahKata[i] + '\n'
        
    }
    return (text)

    // return ` Jumlah Kata [${arrKata}] ada sebanyak [${arrJumlahKata}]`

}

// console.log(countWords('Nama saya adalah nama'))

console.log(countWords('Nama Nama Nama Saya'))


// var arr = ['nama', 'saya']
// var str = 'nama'

// console.log(arr.includes(str))