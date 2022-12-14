// 1. Using for loops, write a Javascript program to output the following
// pattern -
// 1
// 2 3
// 4 5 6
// 7 8 9 10

// let count = 1;
// for(i=1; i<=4; i++) {
//     let bag = "";
//     for(j=1; j<=i; j++) {
//         bag += count++ +  " ";
//     }
//     // console.log(bag);
// }


// 2. Write a program to find whether a given number is armstrong number or
// notThe Armstrong number is a number that is equal to the sum of cubes of
// its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
// numbers. Let's try to understand why 153 is an Armstrong number.

// eg => 153 = (1*1*1)+(5*5*5)+(3*3*3) where:
// (1*1*1)=1
// (5*5*5)=125
// (3*3*3)=27
// So:
// 1+125+27=153

// function findArm(e){
//     let num = e.toString().split('').map(Number);
//     // console.log(typeof num[0]);
//     let sum = 0;
//     let pow = 0;

//     for(i=0; i<num.length; i++){
//         pow = num[i]*num[i]*num[i];
//         sum += pow;
//     }
//     return e == sum ? `${e} is armstrong` : `${e} is not armstrong`;

//     // let sum = num.reduce((ac,cv)=>{
//     //     ac + Math.pow(cv);
//     // },0);
// }
// const armstrong = findArm(370);
// console.log(armstrong);

// 3. Write a program to find whether a given number is special number or not.
// If the sum of the factorial of digits of a number (N) is equal to the number itself, the number (N) is called a special number. eg- 145 is a special number
// Logic- 1! + 4! + 5!= 1+24+120 i.e 145

let special = (n) => {

    let num = n.toString().split("").map(Number);

    let value = [];
    let sum = 0;

    for(let i = 0; i <num.length; i++) {
        let e = num[i];
        console.log(e);
        for(j=e; j>0; j++){
            sum += e*(j-1);
        }
        value.push(sum);
    }
}

let SpecialNum = special(12);
console.log(SpecialNum);