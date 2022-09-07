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