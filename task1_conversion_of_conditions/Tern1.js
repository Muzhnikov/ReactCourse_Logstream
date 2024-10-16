let a = Math.floor(Math.random() * 100);
let b = (a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);
console.log("Задание 1 (Tern1.js)");
console.log("a = " + a);
console.log("Результат тернарного оператора: " + b);
// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()

console.log("Результат if...else: ");
if(a > 10){
    if(a > 5){
        console.log((2 * a) + 1);
    }
    else{
        if(a < 3){
            if(1 > 4){
                console.log(5);
            }
            else{
                if(a % 2 == 0){
                    console.log(6);
                }
                else{
                    console.log(7);
                }
            }
        }
        else{
            if(2 * (a - 2) > 4){
                console.log(5);
            }
            else{
                if(a % 2 == 0){
                    console.log(6);
                }
                else{
                    console.log(7);
                }
            }
        }
    }
}
else{
    if(a * 2 > 5){
        console.log((2 * a) + 1);
    }
    else{
        if(a < 3){
            if(1 > 4){
                console.log(5);
            }
            else{
                if(a % 2 == 0){
                    console.log(6);
                }
                else{
                    console.log(7);
                }
            }
        }
        else{
            if(2 * (a - 2) > 4){
                console.log(5);
            }
            else{
                if(a % 2 == 0){
                    console.log(6);
                }
                else{
                    console.log(7);
                }
            }
        }
    }
}

console.log("Результат switch(): ");
switch(true){
    case(a > 10):
        switch(true){
            case(a > 5):
                console.log((2 * a) + 1);
                break;
            case a <= 5:
                switch(true){
                    case(a < 3):
                        switch(true){
                            case(1 > 4):
                                console.log(5);
                                break;
                            case(1 <= 4):
                                switch(true){
                                    case a % 2 == 0:
                                        console.log(6);
                                        break;
                                    case a % 2 != 0:
                                        console.log(7);
                                        break;
                                }
                                break;
                        }
                        break;
                    case(a >= 3):
                        switch(true){
                            case(2 * (a - 2) > 4):
                                console.log(5);
                                break;
                            case(2 * (a - 2) <= 4):
                                switch(true){
                                    case a % 2 == 0:
                                        console.log(6);
                                        break;
                                    case a % 2 != 0:
                                        console.log(7);
                                        break;
                                }
                                break;
                        }
                    break;
                }
            break;
        }
        break;
        
    case(a <= 10):
        switch(true){
            case(a * 2 > 5):
                console.log((2 * a) + 1);
                break;
            case a * 2 <= 5:
                switch(true){
                    case(a < 3):
                        switch(true){
                            case(1 > 4):
                                console.log(5);
                                break;
                            case(1 <= 4):
                                switch(true){
                                    case a % 2 == 0:
                                        console.log(6);
                                        break;
                                    case a % 2 != 0:
                                        console.log(7);
                                        break;
                                }
                                break;
                        }
                        break;
                    case(a >= 3):
                        switch(true){
                            case(2 * (a - 2) > 4):
                                console.log(5);
                                break;
                            case(2 * (a - 2) <= 4):
                                switch(true){
                                    case a % 2 == 0:
                                        console.log(6);
                                        break;
                                    case a % 2 != 0:
                                        console.log(7);
                                        break;
                                }
                                break;
                        }
                    break;
                }
            break;
        }
        break;
}