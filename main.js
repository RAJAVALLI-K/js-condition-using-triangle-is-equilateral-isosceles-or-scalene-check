// 3.Write a program to check whether a triangle is Equilateral, Isosceles or Scalene

let x = parseInt(prompt('Enter a number:')),
y = parseInt(prompt('Enter a number:')),
z = parseInt(prompt('Enter a number:'));

if (x == y && y == z){
    console.log("Equilateral Triangle");
}
else if (x == y || y == z || z == x){
    console.log("Isosceles Triangle");
}
else{
    console.log("Scalene Triangle");
}