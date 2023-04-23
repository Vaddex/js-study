const rawArray1 = [1, 'lol', 3, undefined, 5, 6, null]
const rawArray2 = [3,4]
const rawArray3 = [14, 228, 'NaN']

export function getSum(value) {
    if (typeof value !== 'number') {
        return false
    }
    return value 
}
let filteredArray = rawArray1.filter(getSum)
let sum = 0
filteredArray.map((item) => sum += item)
console.log(sum) // return 15

try {
    console.log(getSum(rawArray1), "should return 15")
    console.log(getSum(rawArray2), "should return 7")
    console.log(getSum(rawArray3), "should return 242")
} catch (e) {
    console.log(e)
}
