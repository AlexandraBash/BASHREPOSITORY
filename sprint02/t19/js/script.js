function checkBrackets(str) {
    let left = /(\()/g;
    let right = /(\))/g;

    if (typeof(str) != 'string' || (str.match(left) == null && str.match(right) == null)) {
        return -1;
    }

    if (str.match(left) == null) {
        return str.match(right).length;
    }
    if (str.match(right) == null) {
        return str.match(left).length;
    }

    let leftMatch = str.match(left).length;
    let rightMatch = str.match(right).length;

    if (leftMatch - rightMatch < 0) {
        return rightMatch - leftMatch;
    } else if (leftMatch - rightMatch > 0) {
        return leftMatch - rightMatch;
    } else {
        return "ok";
    }
}

let str1 = ("(((((((((");
console.log(checkBrackets("dfsh789"));