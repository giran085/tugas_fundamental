
const findMedian = (data=[]) => {
    if(data.length % 2 == 0){
        // (data[2] + data[3]) /2
        return (data[data.length/2-1] + data[data.length/2] /2)
    }else{
       return data[Math.floor(data.length/2)]
    }
}


const removeOutlier = (data=[]) => {
    let dataSorted = data.sort(function(a,b) {return a-b})
    // return dataSorted
    // let

    let middle = Math.floor(data.length/2)
    let setengahPertama = dataSorted.slice(0,middle)

    let setengahKedua;
    if(data.length % 2 == 0){
        setengahKedua = dataSorted.slice(middle,data.length)
    }else{
        setengahKedua = dataSorted.slice(middle+1 , data.length)
    }

    // return data

    let q1 = findMedian(setengahPertama)
    let q3 = findMedian(setengahKedua)

    let iqr = q3 - q1

    let lower = q1 - (1.5 * iqr) // 67,
    let upper = q3 + (1.5 * iqr) // 73

    let dataNotOutlier = []
    let dataOutlier = []

    for (let i = 0; i < data.length; i++) {
        if (dataSorted[i] < lower || dataSorted[i] > upper) {
                dataOutlier.push(dataSorted[i])
        } else {
                dataNotOutlier.push(dataSorted[i])
        }
        
    }

    console.log('data asli = ' + data)
    console.log('data setelah di sort = ' + dataSorted)
    console.log('setengah data pertama = ' + setengahPertama)
    console.log('setengah data kedua = ' + setengahKedua)
    console.log('Q1 = ' + q1)
    console.log('Q3 = ' + q3)
    console.log('Lower Limit ' + lower)
    console.log('Upper Limit ' + upper)
    console.log('Data Tidak Outlier ' + dataNotOutlier)
    console.log('Data yang Outlier ' + dataOutlier)




}


// console.log(removeOutlier([71, 70, 73, 70, 70, 69, 70, 72, 71, 300, 71, 69])) 
removeOutlier([60,63,64,62,69,80,1,60,63,64,60])
