function smallest_difference(array1, array2) {
    array1 = array1.map(value => {
        return {arra: 'A', number: value}
    })
    array2 = array2.map(value => {
        return {arra: 'B', number: value}
    })
    let array3 = [...array1, ...array2]
    array3 = array3.sort((a, b) => (a.value < b.value))

    
    let comparison_array = []
    for (let i = 0; i < array3.length; i++) {
        if (array3[i-1] && array3[i].arra !== array3[i-1].arra) {
            comparison_array.push(Math.abs(array3[i].number - array3[i-1].number))
        }
    }

    if (comparison_array.length > 1) {
    comparison_array = comparison_array((a, b) => a > b)
    }

    return comparison_array[0]    
}

console.log(smallest_difference([10, 20, 14, 16, 18], [30, 23, 54, 33, 96]))