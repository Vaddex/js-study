// function numberino (all) {
//     let result = 0
//     for ( let num of all) {
//         result += num
//     }
//     let filtered = anyNum.filter (anyNum (num) {
//         return: num != undefined
//     })
// }
// console.log (result)
// let anyNum = [1, 'lol', 3, undefined, 5, 6, null]
 

// let numbers = [1, 'lol', 3, undefined, 5, 6, null]
// function lucky (all) {
//     numbers.filter(function(number) {
//     return number !== undefined
//     })
// }
// console.log(numbers)


// let numbers = [1, 'lol', 3, undefined, 5, 6, null]
// filteredNumbers =
//     numbers.filter(function(number) {
//     return numbers !== undefined;
    
// })

// console.log(filteredNumbers)

// let numbers1 = [1, 'lol', 3, undefined, 5, 6, null   ]
// let result1 = numbers1 [0] + numbers1 [2] + numbers1 [4] + numbers1 [5]
// console.log(result1)

// function filteredNumbers (value){
//     return value === Number  
// }
// let filtered = [1, 'lol', 3, undefined, 5, 6, null].filter(filteredNumbers)
// console.log(filteredNumbers)

// let arr = [
//     {id: 1},
//     {id:'lol'},
//     {id: 3},
//     {id:undefined},
//     {id:5},
//     {id:6},
//     {id:null}
// ]
// function filterByID(item){
//     if (Number.isFinite(item.id) && item.id !== 0) {
//         return true
//     }   
// }
// arrByID = arr.filter(filterByID)
// let result = 0
//     for ( let num of arrByID) {
//         result += num
// }
// console.log(result)


let arr = [
    {id:1},
    {id:'lol'},
    {id:3},
    {id:undefined},
    {id:5},
    {id:6},
    {id:null}
]
console.log(arr)

function filterByID(item){
    if (Number.isFinite(item.id) && item.id !== 0) {
        return true
    }   
}
arrByID = arr.filter(filterByID)
console.log(arrByID)

// function arrByID (number){
//     this.id = this
//     this.Number = number
//     this[symbol.toprimitive] = (hint) => {
//         if ('number' == hint) {
//             return number
//         }
//     }
// }
console.log(arrByID)

function arraySum(array){
let sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
console.log(sum)
}
arraySum(arrByID)
