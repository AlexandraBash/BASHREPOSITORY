let date = new Date(Date.now());
function getFormattedDate(date){
    let formatter = new Intl.DateTimeFormat("ru",{
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
    return(formatter.format(date) + " ");
}

let cookButton = document.getElementById('add');
cookButton.addEventListener('click', function(){
let a = document.getElementById('msg').value;
if(a === ""){
    alert('It is empty. Try to input something in "Text input"!');
}else(document.getElementById('notes').value += "-->" + a + "[" + getFormattedDate(date)+ "]" + '\n');
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
