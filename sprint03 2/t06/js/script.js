
    let lab = document.getElementById('lab');
    let hero = document.getElementById('hero');

function transformation(){
    if(hero.innerHTML === 'Bruce Banner'){
        lab.style.background = '#70964b';
         hero.style.letterSpacing = '6px';
        hero.style.fontSize = '130px';
        hero.innerHTML = 'Hulk';
    }else{
        lab.style.background = '#ffb300';
        hero.style.letterSpacing = '2px';
       hero.style.fontSize = '60px';
       hero.innerHTML = 'Bruce Banner';
    }
}


