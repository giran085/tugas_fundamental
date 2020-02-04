// SOAL Node.3

const countCharacter = (sentence = '') => {
    var arrHuruf = [] // [nama,saya,adalah]
    var arrJumlahHuruf =[] // [1,1,1]
    var arrSentence = sentence.split('') // ['Nama' , "saya" , 'adalah','nama']
    // console.log(arrSentence)

    for(var i = 0 ; i< arrSentence.length ; i ++){
        // 
        if(arrHuruf.includes(arrSentence[i].toLowerCase())){
            var index_ke =  arrHuruf.indexOf(arrSentence[i].toLowerCase())
            arrJumlahHuruf[index_ke] ++
        }else{
            arrHuruf.push(arrSentence[i].toLowerCase())
            arrJumlahHuruf.push(1)
        }
    }

    // console.log(arrHuruf)
    // console.log(arrJumlahHuruf)
    hasil=Math.max(...arrJumlahHuruf)
    var hurufTerbanyak=arrHuruf[arrJumlahHuruf.indexOf(hasil)]
    return `Huruf terbanyak adalah: ${hurufTerbanyak}`
    // var text = ''
    // for(var i = 0 ;i < arrHuruf.length ; i++){
    //     text += "Jumlah Huruf '" + arrHuruf[i].charAt(0).toLocaleLowerCase() + arrHuruf[i].slice(1,arrHuruf[i].length) + "' adalah " + arrJumlahHuruf[i] + '\n'
    // }
    // console.log(text)
}


console.log (countCharacter('xlphaaaaaa'))