// 1. Write a program to find whether a given year is a leap year or not.

function isLeapYear(year){
    if(year%4 == 0) {
        console.log(`${year} is a leap year`);
    }
    else{
        console.log(`this year ${year} is not a leap year`);
    }
}

// isLeapYear(2012);



// 2. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

function convertTemperature(temp){

    //   C/5 =(F-32)/9 
    let fahrenheit = (temp*9/5)+32;
    console.log(`${temp}.C is ${fahrenheit}.F`);


    let celcius = (temp-32)*5/9;
    console.log(`${temp}.F is ${celcius}.C`);
}
// convertTemperature(60);
convertTemperature(45);




// 3. Write a program to find the factorial of a number.