// 1. Using for loops, write a Javascript program to output the following
// pattern -
// 1
// 2 3
// 4 5 6
// 7 8 9 10
let count = 1;
for(i=1; i<=4; i++) {
    let bag = "";
    for(j=1; j<=i; j++) {
        bag += count++ +  " ";
    }
    console.log(bag);
}


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


// 3. Write a program to find whether a given number is special number or
// not