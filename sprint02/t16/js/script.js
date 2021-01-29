
function firstElements(arr, n) {
    let a = [];
    for (i = 0; i < n && i < arr.length; ++i)
     a.push(arr[i]);
    return a
}
let heroes = ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"];


console.log (firstElements(heroes, 5));
// ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"]
console.log (firstElements(heroes, 1));
// ["Captain America"]
console.log (firstElements(heroes, 3));
// ["Captain America", "Hulk", "Thor"]
console.log (firstElements(heroes, 6));
// ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"]
console.log (firstElements(heroes, -1));
// []

