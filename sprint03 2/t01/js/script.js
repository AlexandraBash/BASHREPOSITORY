const date0 = new Date (1993, 11, 1);
const date1 = new Date (1998, 0, -33);
const date2 = new Date ('42 03:24:00');

function getFormattedDate(dataObject){
    let formatter = new Intl.DateTimeFormat("ru",{
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });
    let abc = new Intl.DateTimeFormat("en-GB",{
        weekday: 'long'
    });
    return(formatter.format(dataObject) + " " + abc.format(dataObject));
}

console.log(getFormattedDate(date0));
console.log(getFormattedDate(date1));
console.log(getFormattedDate(date2));