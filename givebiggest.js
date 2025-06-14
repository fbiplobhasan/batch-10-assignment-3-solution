function giveBiggestNumber(array) {

    if (!Array.isArray(array)) {
        return 'This is not an array'
    };


    let biggest = array[0]

    for (let i = 1; i < array.length; i++) {
        if (array[i] > biggest) {
            biggest = array[i]
        }
    }

    return biggest
}

const numbers = [2, 4, 21, 5, 6, 25, 20, 9]
// const numbers = true

const result = giveBiggestNumber(numbers)
console.log(result);