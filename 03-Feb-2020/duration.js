const tahunDetik = (input=0) =>{
    var tahun = Math.floor(input/(365*24*3600))
    var sisa_tahun = input % (365*24*3600)
    var hari = Math.floor(sisa_tahun/(24*3600))
    var sisa_hari = sisa_tahun % (24*3600)
    var jam = Math.floor((sisa_hari / 3600))
    var sisa_jam = sisa_hari % 3600
    var menit = Math.floor(sisa_jam / 60)
    var detik = sisa_jam % 60

    return `${input} = ${tahun} Tahun, ${hari} Hari, ${jam} Jam, ${menit} Menit, ${detik} Detik.`

}

console.log(tahunDetik(62))

