// function wayFunction(num){
//     return num * 3;
// }

// const wayFunction = function funcName(num){
//     return num * 3;
// }

const wayFunction = num => num * 5; //arrowFunction

const wayFunction2 = (x, y) => x + y; //

const Noparameter = () => 10; //no parametter like x,y

const number = wayFunction2(10, 30);
console.log(number);

const result = Noparameter();
console.log(result);

const doMath = (x, y) => {
    const sum = x + y;
    const minus = x - y;
    const total = sum + minus;
    return total;
}
const result2 = doMath(10, 20);
console.log(result2);
