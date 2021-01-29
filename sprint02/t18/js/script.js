
const arr = [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];
arr.sort(function (even, odd){
    return even % 2 - odd % 2 || even - odd
})
console.log(arr);


