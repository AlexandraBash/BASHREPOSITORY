
const obj ={
    words: 'newspapers newspapers  books magazines'
};
console.log(obj);

function addWords(obj, wrds){
    let a = obj.words.split(' ');
    let b = wrds.split(' ');
a.splice(1, 2);
obj.words = a.concat(b[0]);
obj.words = obj.words.join(' '); 
}
addWords(obj, 'radio newspapers   ');
 console.log(obj);

function removeWords(obj, wrds){
    let a = obj.words.split(' ');
    let b = wrds.split(' ');
    obj.words = a.concat(b);
    let c = obj.words.splice(1, 2);
    obj.words = c.join(' ');
}
removeWords(obj, 'newspapers  radio');
console.log(obj);

function changeWords(obj, oldWrds, newWrds){
    let a = obj.words.split(' ');
    let b = oldWrds.split(' ');
    let newC = newWrds.split(' ');
    obj.words = a.concat(b);
   obj.words = newC.join(' ');
}
changeWords(obj, 'books radio  magazines', 'tv internet');

console.log(obj);