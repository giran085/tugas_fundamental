const countVowel = (sentence='') => {

    var jumlah_vowel = 0
    // var result = 0
    for(var i = 0; i < sentence.length; i ++){
        var char = sentence[i].toLowerCase()
        if(char == 'a' || char == 'i' || char == 'u' || char == 'e' || char == 'o'){
            jumlah_vowel += 1
        }
    }

    return jumlah_vowel

    // sentence.charAt(0) == 'a'
    // kita check huruf satu per satu
    // apabila huruf adalah a i u e o kita jumlahkan jumlah_vowel

}
console.log(countVowel('Budi Pergi Ke Pasar'))