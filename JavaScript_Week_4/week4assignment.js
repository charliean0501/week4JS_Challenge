// VERY EASY: Write a function named min that takes two arguments and returns their minimum.


function min(num1, num2) {
	if (num1 < num2) {
        console.log(num1);
    }
    else {
        console.log(num2);
    }  
}
min(2, 10);


// EASY: Create an array of students holding their last name, first name, and age with 3 students. To validate, please log a greeting with the first name, last name and age of the 2nd student. The output should look like "Hello, my name is John Doe and I'm 19 years old."


var studentInfo = [
    ["Joshua", "Park", 19],
    ["Charlie", "An", 20],
    ["Chris", "Han", 24],
];

console.log(`Hello, my name is ${studentInfo[1][0]} ${studentInfo[1][1]} and I'm ${studentInfo[1][2]} years old.}`);


// MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).


/** UNCOMMENT TO TEST PROMPT!!! */

// var number = prompt("Enter a number 1-12"); 
// var myArray = ["null", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// if (number < 1) {
//     console.log("Invalid Input")
// }

// else if (number > 12) {
//     console.log("Invalid Input")
// }

// else {
//     console.log(`${myArray[number]}`);
// }


// HARD: Given the information below for Tom and Jerry. 
//
//          ●	Tom   - height:  9in   	mass: 8 g
//          ●	Jerry - height: 10in 	mass: 45 g
//
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
//              BMI = mass / height ^2 = mass / (height * height)
//
// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean variable containing information about 
// whether Tom has a higher BMI than Jerry. Print a string to the console with the variable from step 3. 
// ( e.g. Is Tom’s BMI higher than Jerry’s? false).


// used this to make sure formula was right (BMI = kg/m^2)
// var charlieHeight = 1.8034; // 71 inches in meters
// var charlieMass = 77.1107; // 170 pounds to kg
// var charlieBMI = charlieMass / (charlieHeight * charlieHeight);


var tomHeight = 0.2286; // convert to meters
var tomMass = 0.008; // convert to kg
var tomBMI = tomMass / (tomHeight * tomHeight);

var jerryHeight = 0.254;
var jerryMass = 0.045;
var jerryBMI = jerryMass / (jerryHeight * jerryHeight);


var tomBoolean;


if (tomBMI > jerryBMI) {
    tomBoolean = true;
    console.log(`Is Tom's BMI higher than Jerry's?: ${tomBoolean}`);
}
else {
    tomBoolean = false;
    console.log(`Is Tom's BMI higher than Jerry's?: ${tomBoolean}`);
}






