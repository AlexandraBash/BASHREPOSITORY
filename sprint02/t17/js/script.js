
let name1 = prompt(`Please, write your first name!`);
let name2 = prompt(`Please, write your last name!`);
let reg = /^[a-я, a-z]*$/;
let reg2 = /^[A-Я, A-Z]*$/;


if(name1 && reg.test(name1) && name2 && reg.test(name2)){
name1 = name1.charAt(0).toUpperCase() + name1.slice(1);
name2 = name2.charAt(0).toUpperCase() + name2.slice(1);

alert(`Hello ${name1} ${name2}!\n Nice to see you!`);
console.log (`Hello ${name1} ${name2}!\n Nice to see you!`);


}else if(name1 && reg2.test(name1) && name2 && reg2.test(name2)){
    name1 = name1.charAt(0).toUpperCase() + name1.slice(1).toLowerCase()
     name2 = name2.charAt(0).toUpperCase() + name2.slice(1).toLowerCase()

    alert(`Hello ${name1} ${name2}!\n Nice to see you!`);
    console.log (`Hello ${name1} ${name2}!\n Nice to see you!`);
}else {
alert(`Wrong input!`);
 console.log (`Wrong input!`);
}

