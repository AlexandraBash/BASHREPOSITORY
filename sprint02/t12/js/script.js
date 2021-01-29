function triangle(length) {
    let line = "";
    for (let i = 1; i <= length; i++){
        for (let q = 1; q<= i; q++){
            line += "*";
        }
        line += "\n";
    }   alert(line);
} triangle(6);