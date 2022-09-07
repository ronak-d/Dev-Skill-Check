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
console.log(know);