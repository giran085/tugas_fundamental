const array = (arr=[]) => {
    var new_arr =[]
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            new_arr.push(arr[i][j])
            
        }
        
    }

    // new_arr.push(arr[0][0])
    // new_arr.push(arr[0][1])
    // new_arr.push(arr[0][2])
    // new_arr.push(arr[1][0])
    // new_arr.push(arr[1][1])
    // new_arr.push(arr[1][2])
    // new_arr.push(arr[2][0])
    // new_arr.push(arr[2][1])
    // new_arr.push(arr[2][2])
    console.log(new_arr.sort())

}

array([[3,2,1],[4,6,5],[],[9,7,8]])