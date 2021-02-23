// let placeholder = document.getElementById('placeholder');
// let notification = document.getElementById('notification');
// let table = document.createElement('table');
// table.className = 'table_sort';
// let thead = document.createElement('thead');
// table.appendChild(thead);  
// let tbody = document.createElement('tbody');
// table.appendChild(tbody);
// document.getElementById('placeholder').appendChild(table); // таблица

// let zag = [{name : 'Name', power : 'Strength', age :  'Age'}]   //заголовок

// let users = [
//     {name :  'Black Panther', power : 66, age : 53},
//     {name : 'Captain America', power : 79, age : 137}, 
//     {name : 'Captain Marvel', power : 97, age : 26}, 
//     {name : 'Hulk', power : 80, age : 49}, 
//     {name : 'Iron Man', power : 88, age : 48}, 
//     {name : 'Spider-man', power : 78, age : 16}, 
//     {name : 'Thanos', power : 99, age : 1000},
//     {name : 'Thor', power : 95, age : 1000}, 
//     {name : 'Yon-Rogg', power : 73, age : 52}
// ]

// for( let user of users){
//     let tr = document.createElement('tr');
//     let td1 = document.createElement('td');
//     td1.innerHTML = user.name;
//     tr.appendChild(td1);
//     let td2 = document.createElement('td');
//     td2.innerHTML = user.power;
//     tr.appendChild(td2);
//     let td3 = document.createElement('td');
//     td3.innerHTML = user.age;
//     tr.appendChild(td3);
//     tbody.appendChild(tr);
// }

// for(let zagolovok of zag){
//     let trow = document.createElement('tr');
//     let th1 = document.createElement('th');
//     th1.innerHTML = zagolovok.name;
//     th1.setAttribute('data-type', 'text');
//     trow.appendChild(th1);
//     let th2 = document.createElement('th');
    
//     th2.innerHTML = zagolovok.power;
//     trow.appendChild(th2);
//     let th3 = document.createElement('th');
//     th3.innerHTML = zagolovok.age;
//     trow.appendChild(th3);
//     thead.appendChild(trow);
// }

// const sortTable = function(index, type){
//     const compare = function(rowA, rowB){
//         const rowDataA =  rowA.cells[index].innerHTML;
//         const rowDataB = rowB.cells[index].innerHTML;
//         switch(type){
//             case 'text':
//                 return rowDataA - rowDataB;
//                 break;
//                 case
//         }
//     }
//     let rows = [].slice.call(tbody.rows);
//     rows.sort(compare);
//     table.removeChild(tbody);
//     for(let i = 0; i < rows.length; i++){
//         tbody.appendChild(rows[i]);
//     }
//     table.appendChild(tbody);
    
// }
// table.addEventListener('click', (e) => {
// let el = e.target;
// if (el.nodeName != 'TH') return;


// const index = el.cellIndex;
// const type = el.getAttribute('data-type');
// sortTable(index, type);
// });


let placeholder = document.getElementById('placeholder');
let notification = document.getElementById('notification');

let thisId = '';

let heroes = [
	{name: 'Black Panther', strenght: 66, age: 53},
	{name: 'Captain America', strenght: 79, age: 137},
	{name: 'Captain Marvel', strenght: 97, age: 26},
	{name: 'Hulk', strenght: 80, age: 49},
	{name: 'Iron Man', strenght: 88, age: 48},
	{name: 'Spider-Man', strenght: 78, age: 16},
	{name: 'Thanos', strenght: 99, age: 1000},
	{name: 'Thor', strenght: 95, age: 1000},
	{name: 'Yon-Rogg', strenght: 73, age: 52},
];

let sorting = {
	name: 'Desc', strenght: 'Asc', age: 'Asc'
}
placeholder.innerHTML = getTable(heroes);

function getTable(heroes) {
	let html = '<table>\n';
	html += '<tr><th id="name" onclick="clickName()">Name</th><th id="strenght" onclick="clickStrenght()">Strenght</th><th id="age" onclick="clickAge()">Age</th></tr>';
	heroes.forEach(function(item, key, array) {
		html += '<tr><td>' + item.name + '</td><td>' + item.strenght + '</td><td>' + item.age + '</td></tr>'
	});
	html += '</table>'
	return html;
}

function clickName() {
	thisId = 'name';
	switchSorting();
}

function clickStrenght() {
	thisId = 'strenght';
	switchSorting();
}

function clickAge() {
	thisId = 'age';
	switchSorting();
}

function compareHeroes (hero1, hero2) {
	if(hero1[thisId] > hero2[thisId]) return 1;
	if(hero1[thisId] === hero2[thisId]) return 0;
	if(hero1[thisId] < hero2[thisId]) return -1;
}

function switchSorting() {
	heroes.sort(compareHeroes);
	if(sorting[thisId] === 'Asc') {
		addNotification();
		sorting = {name: 'Asc', strenght: 'Asc', age: 'Asc'};
		sorting[thisId] = 'Desc';
		
	} else {
		addNotification();
		sorting = {name: 'Asc', strenght: 'Asc', age: 'Asc'};
		heroes.reverse();
		sorting[thisId] = 'Asc';
	}
	placeholder.innerHTML = getTable(heroes);
}

function addNotification() {
	notification.innerHTML = 'Sorting by ' + tocamelCase(thisId) + ', order: ' + sorting[thisId];
}

function tocamelCase(str) {
	let strNew = str[0].toUpperCase() + str.substring(1);
	return strNew;
}