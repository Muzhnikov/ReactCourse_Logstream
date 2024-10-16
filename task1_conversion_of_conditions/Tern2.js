let a = Math.floor(Math.random() * 20) + 1;
function manyChecks() {
    console.log(`a = ${a}`);
  
    return (
        a > 10 ? 'a is bigger than 10' : 'a is less than or equal to 10 ' + (a === 5 ? 'an example of a special case' : '')) + 
        (a === 15 ? 'but a is not 15' : '') + 
        (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5 ') + 
        (a % 2 ? ' and a is odd' : ' and a is even ');
}
console.log("Задание 2 (Tern2.js)");
console.log(manyChecks());
// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()

let result1 = "";
console.log("Результат if...else: ");
if(a > 10){
    result1 += 'a is bigger than 10';
}
else{
    result1 += 'a is less than or equal to 10 ';
    if(a === 5){
        result1 += 'an example of a special case';
    }
    else{
        result1 += '';
    }
}

if(a === 15){
    result1 += 'but a is not 15';
}

if(a > 5){
    result1 += 'and a is greater than 5';
}
else{
    result1 += 'and a is less than or equal to 5 ';
}

if(a % 2){
    result1 += ' and a is odd';
}
else{
    result1 += ' and a is even ';
}
console.log(result1);

let result2 = "";
console.log("Результат switch(): ");
switch(true){
    case(a > 10):
        result2 += 'a is bigger than 10';
        break;
    default:
        result2 += 'a is less than or equal to 10 ';
        switch(a){
            case(5):
                result2 += 'an example of a special case';
                break;
            default:
                result2 += '';
                break;
        }
        break;
}

switch(a){
    case(15):
        result2 += 'but a is not 15';
        break;
}

switch(true){
    case(a > 5):
        result2 += 'and a is greater than 5';
        break;
    default:
        result2 += 'and a is less than or equal to 5 ';
        break;
}

switch(a % 2){
    case(1):
        result2 += ' and a is odd';
        break;
    default:
        result2 += ' and a is even ';
        break;
}
console.log(result2);