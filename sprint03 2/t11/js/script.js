let count = 0;

let cookButton = document.getElementById('add');
cookButton.addEventListener('click', function(){
let a = document.getElementById('msg').value;
if(a === ""){
    alert('It is empty. Try to input something in "Text input"!');
}else(document.getElementById('notes').value += "-->" + a + "\n");

let date = new Date;
date.setMonth(date.getMonth()+ 1);
date = date.toUTCString();
document.cookie = `${count} name = ${a}; expires = ${date}`;
count++;
});

///

let clear = document.getElementById('clear');
clear.addEventListener('click', function(){
    let b = confirm( 'Are you sure?');
    if( b === true){
        document.getElementById('notes').value = '';
        document.getElementById('msg').value = '';
    }  
});


