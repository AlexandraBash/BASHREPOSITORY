
let re1 = /^[a-z]{1,20}$/i;
let re2 = /^male|female|\s?$/i;
let re3 = /^[1-9]{1,5}&/;
let name, gender, age;
let description;


 name = prompt("What  animal is the superhero most similar to?");
if(!re1.test(name)){
    alert("Wrong input!");
}else{
       gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");
if(!re2.test(gender)){
    alert("Wrong input!");
}else{
     age = prompt("How old is the superhero?");
    if(re3.test(age)){
        alert("Wrong input!");
    }
}
}
 if(/^male$/i.test(gender)  && age < 18){
            description = "boy";
        }else if(/^male$/i.test(gender) && age >= 18){
            description = "man";
        }else if(/^female$/i.test(gender) && age < 18){
            description = "girl";
        }else if(/^female$/i.test(gender) && age >= 18){
            description = "woman";
        }else if(/\s/i.test(gender) && age < 18){
            description = "kid";
        }else if(/\s/i.test(gender) && age >= 18){
            description = "hero";
        } 
        alert(`The superhero name is:  ${name}-${description}`);    
