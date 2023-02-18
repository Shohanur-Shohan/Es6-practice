const ages = [12, 34, 56, 76];
const ages2 = [32, 43, 44];
const userAge = ages.concat(ages2).concat([20]);
const allAge = [...ages, 5, ...ages2];
console.log(allAge);

const shohan = 100;
const dipu = 150;
const rahim = 200;
const mathNum = Math.max(shohan, dipu, rahim);
console.log(mathNum);

const math = [340, 560, 230];
const mathMax = Math.max(...math);
console.log(mathMax);
