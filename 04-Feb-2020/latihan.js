

// const friend = (arr=[]) => {
//     let new_arr = []
//     // for (let i = 0; i < arr.length[i]; i++) {
//     //     new_arr += arr.length[i]
//         new_arr.push(arr.length[1])
//     // }

//     return new_arr

// }

// console.log(friend(["Ryan", "Kiera", "mark"]))


// const friend = (arr=[]) => {
//     let new_arr = []
//     for (let i = 0; i < arr.length; i++) {
//         if ('Ryan'.length==5) {
//             new_arr.push(arr[i])
//         }
        
//     }

//     return new_arr

// }

// console.log(friend(["Ryan", "Kiera", "mark"]))

// const minMax = (arr=[]) => {
//     let new_arr = [...arr].sort(function(a,b) {return a-b})

//     // let max = new_arr.slice(0,-1) untuk menghilangkan nilai akhir
//     let max = new_arr.slice(0,5)
//     let min = new_arr.slice(1)

//     console.log('ini adalah nilai max ' + max)
//     console.log('ini adalah nilai min ' + min)
    
    
    

// }

// minMax([1,2,34,12,5,10])


const ganjilGenap = (arr=[]) => {
    let ganjil = []
    let genap = []
    for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 == 0) {
                    genap.push(arr[i])
                }else{
                    ganjil.push(arr[i])

                }
                
    }

    // console.log('data genap ' + genap)
    // console.log('data ganjil ' + ganjil)

    

}

ganjilGenap([2,3,1,3,4])

