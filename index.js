function findMinAndRemove(array){
    let index = array.indexOf(Math.min(...array))
    return array.splice(index, 1)
}

function insertionSort(array){
    let sorted = []
    while (array.length > 0){
        sorted.push(parseInt(findMinAndRemove(array).join('')))
    }
    return sorted
}
