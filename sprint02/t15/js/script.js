    
    let begin = +prompt("Write the numbers for the beginning of a range:", 1);
    let end = +prompt("Write the numbers for the end of a range:", 100);

    function checkDivision(beginRange, endRange){
   for( i = beginRange; i <= endRange; i++){
       if (i % 2 === 0 && i % 3 === 0 && i % 10 === 0 ) {
            console.log (`${i} is even, a multiple of 3, a multiple of 10`);
       }else if ( i % 2 === 0){
           console.log (`${i} is even`);
       }else if (i % 3 === 0){
           console.log (`${i} is a multiple of 3`);
       }else if (i % 10 === 0){
           console.log (`${i} is a multiple of 10`);
       }else (console.log (`${i} - `));
   }
   if ( i > 101){
    confirm(`Wrong input. Please, try again and use numbers max 100`)}
}
checkDivision(begin, end);

