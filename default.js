function add(num1, num2){
    if(num2 == undefined){
        num2 = 20;
    }
    return num1 + num2;
}
const total = add(18, 1);
console.log(total);