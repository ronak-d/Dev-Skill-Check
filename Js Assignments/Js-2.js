// 1. Write a Javascript function to check whether a triangle is equilateral, isosceles or scalene.

function checkTriangle(a,b,c) {
    if(a == b && b == c) {
        return "Triangle is Equilateral";
    }
    else if(a==b || b==c || c==a) {
        return "Triangle is Isoceles";
    }
    else{
        return "Triangle is Scalene";
    }
}

let know = checkTriangle(1,0,1);
// console.log(know);

// 2. Write a function using switch case to find the grade of a student based on marks obtained.
// a. “S grade” if the marks are between 90 and 100.
// b. “A grade” if the marks are between 80 and 90.
// c. “B grade” if the marks are between 70 and 80.
// d. “C grade” if the marks are between 60 and 70.
// e. “D grade” if the marks are between 50 and 60.
// f. “E grade” if the marks are between 40 and 50.
// g. “Student has failed” if the marks are between 0 and 40.
// h. Else output “Invalid marks”

let gradeCheck = (marks) => {

    switch (marks) {

    case [marks > 90 || marks <= 100]:
            console.log("S grade");
        break;

    case [marks > 80 || marks <= 90]:
            console.log("A grade");
        break;

    case (marks > 70 && marks <= 80):
            console.log("B Grade");
        break;

    case (marks > 60 && marks <= 70):
            console.log("D grade")
        break;

    case (marks > 50 && marks <= 60):
            console.log("E grade")
        break;

    case (marks > 0 && marks <= 40):
            console.log("Student has failed")
        break;

    default:
        console.log("Invalid marks", marks);
    }
}

// gradeCheck(82);


// 3. Write a JavaScript program to find the sum of the multiples of 3 and 5
// under 1000

let find = (num1,num2) => {
    let sum = 0;
    for(let i =0; i<1000; i++) {
        if(i % num1 === 0 || i % num2 === 0) {
            // console.log(i);
            sum += i;
        }
    }
    return sum;
}

let checkSum = find(3,5);
// console.log(checkSum);

// 4. Write a program to find the factorial of all prime numbers between a
// given range . Range will be passed as 2 values in the function
// parameters. eg- if it is needed to find the values for numbers 1-100, then
// function declaration can look like - function prime(1,100).

