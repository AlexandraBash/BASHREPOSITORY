var str1 = "You're catnip to a girl like me. Handsome, dazed, and to die for...";
var str2 = "Batman: \"I tried to save you.\"";
var str3 = "Selina Kyle: catwoman \"Mmm seemsCatwomanlike everyCatWomanwoman you try to savewindsCatWOMANup dead... or deeply resentful.\"";

alert ("Just string:" + str1 + "\n" + "Lenght:" + str1.length + "\n" + "Character number 2 is:" + str1.charAt(2) + "\n" + "To uppercase:" + str1.toUpperCase() + "\n" + "Concatenation in a phrase:" + str1.concat("", "- Catwoman") + "\n" + "[Batman Returns]" + str2 + "\n" + str3.replace(/Catwoman/gi, ""));