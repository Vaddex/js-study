const rawArray1 = [1, 'lol', 3, undefined, 5, 6, null]
const rawArray2 = [3,4]
const rawArray3 = [14, 228, 'NaN']

export const getSum = (arr) => {
    // TODO Make it work with any array
}

try {
    console.log(getSum(rawArray1), "should return 15")
    console.log(getSum(rawArray2), "should return 7")
    console.log(getSum(rawArray3), "should return 242")
} catch (e) {
    console.log(e)
}
