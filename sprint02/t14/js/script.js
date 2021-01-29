function total(addCount, addPrice, currentTotal = 0){
    let numbers = (addCount * addPrice) + currentTotal;
 numbers = numbers.toFixed(2);
 return Number(numbers);
}

let sum = total(1, 0.1);
sum = total(1, 0.2, sum);
sum = total(1, 0.78, sum);
console.log(sum); //результат 1.08
