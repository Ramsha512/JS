             // CHAPTER:21-25

//       1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.


var first_name= prompt("Enter your first name");
var second_name= prompt("Enter your last name");
var fullName = first_name +" "+ second_name;
alert(fullName);


// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser.


var text= ['My favorite mobile phone is: '];
var fav_mob= prompt('Enter your fav mobile phone model');
document.write(text + fav_mob);
var length = " : " + fav_mob.length;
document.write(length);



// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

var name = ["pakistani"];
var ind =name.indexOf('n');
console.log(ind);



// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser

var message = ['Hello, World'];
var last =message.lastIndexOf("l");
document.write(message + last);


// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

var str = 'pakistani';
var res = str.charAt(3);
document.write('String:'+ str + 'character at index: ' + res);



// 6. Repeat Q1 using string concat() method.


var first_name= prompt("Enter your first name");
var second_name= prompt("Enter your last name");
var fullName = first_name.concat(second_name);
document.write(fullName);



// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

var city='hyderabad';
var res = city.replace('hydera','islama');
document.write(res);



// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

var message = "“Ali and Sami are best friends. They play cricket and football together.”";
var change = message.replace(/and/g, "&");
document.write(change);



// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

var strg = "472";
var z = Math.floor(strg);
document.write(z);


// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

var text = "peanut";
var upper =text.toUpperCase();
document.write(upper);


// 11. Write a program that takes user input. Convert and
// show the input in title case.

var inp = prompt('Enter any word');
var tit = inp.charAt(0).toUpperCase(0) + inp.slice(1);
document.write(tit);



// 12. Write a program that converts the variable num to
// string.

var num = 35.36 ;
var str = num.toString();
console.log(str);


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ 


function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.


var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var n = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am");

for (var i = 0 ; i <= a.length; a++){

if (i[a] <= n){

    document.write(n+'is available at index'+ a.indexOf(a)+'in our bakery');
}

else{
    document.write("We are sorry."+ n + "is not available is our bakery");
}
}



// 16. Write a program to convert the following string to an
// array using string split method.
// Display the elements of array in your browser.


var example = "u \n n \n i \n v \n e \n r \n s \n t\n o\n\nf\nk\na\nr\na\nc\nh\ni";
var tokens = example.split(/\s+/g);

console.log(tokens.length);
for(var x = 0; x < tokens.length; x++){
   console.log(tokens[x]);
}

// 17. Write a program to display the last character of a user
// input.

var a = 'pakistani';
var b = a.charAt(8);
document.write(b);


// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.


var temp = "The quick brown fox jumps over the lazy dog";
var count = (temp.match(/the/g) || []).length;
console.log(count);



           // CHAPTER# 26-30




//   1. Write a program that takes a positive integer from user &
//   display the following in your browser.
//   a. number
//   b. round off value of the number
//   c. floor value of the number
//   d. ceil value of the number
                 


var num1 = 3.456;
document.write(num);
var num2 = Math.round(num1);
document.write('number: ' + num2);
var num3 = Math.floor(num1);
document.write('round off value: ' + num3);
var num4 = Math.ceil(num1);
document.write('ceil value:' + num4);


// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number



var num5 = -2.673;
document.write(num);
var num6 = Math.round(num5);
document.write('number: ' + num5);
var num7 = Math.floor(num1);
document.write('round off value: ' + num5);
var num8 = Math.ceil(num1);
document.write('ceil value:' + num5);





// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var value= -4;
var abs =Math.abs(-4);
console.log("abs");


// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

var diceRoll = Math.floor( Math.random() * 6 ) +4;
document.write('You rolled a ' + diceRoll + "<br>");
var diceRoll = Math.floor( Math.random() * 7 ) +6;
document.write('You rolled a ' + diceRoll);


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

var x = Math.floor((Math.random() * 6) + 1);
var y = Math.floor((Math.random() * 6) + 1);
if (x === 2){
    document.write('<br>'+ x +'random coin value: Heads');
}

else if (y === 1){
    document.write('<br>'+ x +'random coin value: tails');

}



// 6. Write a program that shows a random number between 1
// and 100 in your browse


var random = Math.floor((Math.random() * 100) + 1);
document.write('random number between 1 and 100: '+random+ '<br>');


// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms



var a = prompt('Enter your weight in kilograms');
var weight1 = 50;
var random1 = Math.floor((Math.random() * 100) + 1);
var weight2 = 50;
var random2= Math.floor((Math.random() * 100) + 1);
var weight3 = 50.2;
var random3 = Math.floor((Math.random() * 100) + 1);
var weight4 = 50.4;
var random4 = Math.floor((Math.random() * 100) + 1);

if (a === weight1){
    document.write('The weight of user is ' + random1 + '<br>');

}
 else if(a === weight2){
    document.write('The weight of user is ' + random2 + '<br>');

 }

 else if(a === weight3){
    document.write('The weight of user is ' + random3 + '<br>');

 }

 else if(a === weight4){
    document.write('The weight of user is ' + random4 + '<br>');

 }



//  8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.




 var y = Math.floor(Math.random() * 10 + 1); 
      
 var guess = 1; 
       
var x = prompt('Enter a number between 1 to 10')
if(x == y) 
{     
    alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
            + guess + " GUESS "); 
} 
else if(x > y) 

{     
    guess++; 
    alert("OOPS SORRY!! TRY A SMALLER NUMBER"); 
} 
else
{ 
    guess++; 
    alert("OOPS SORRY!! TRY A GREATER NUMBER") 
} 






          // CHAPTER# 31-34





  //   1. Write a program that displays current date and time in
 //   your browser.

var a = new Date();
document.write(a);


// 2. Write a program that alerts the current month in words.
// For example December.


var a = new Date();
var b = a.toString();
var c = b.slice(4,8);
document.write('Current month: ' + c);



// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

var a = new Date();
var b = a.toString();
var c = b.slice(0,3);
document.write('Today is ' + c);



// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var nameOfToday = dayNames[dayNames];
var x = 'sun';
var y = 'sat';
if (nameOfToday === x){
    document.write('its fun day')
}
else if(nameOfToday === y){
    document.write('its fun day')
}
else{
    document.write('Its not fun day'+nameOfToday);
}

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.



var d =new Date();
var e =d.getDate();
if (e > 16  ){
    document.write('Last days of the month');
}
else{
    document.write('first fiften days of the month'+ e);
}


// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

var current = new Date();
document.write('Current date: '+ current +'<br>');

var miliSecond = current.getTime();
document.write('Elapsed miliseconds since january 1, 1970: '+" "+ miliSecond);

var new_1 = new Date("July 21, 1970 ");
var min = current.getSeconds();
document.write(min);


// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

var date_new = new Date();
var hour = date_new.getHours();

if (hour >= 12){
    document.write("am")
}
document.write("pm")

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.


var late_date = new Date("dec 31, 2020");
document.write('Later date:'+ " "+ late_date);


// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015



var date_ramdan = new Date( "June 18, 2015");
var change_days = date_ramdan / (1000 * 60 * 60 * 24);
var round_off = Math.floor(change_days);
document.write(round_off + " " + 'days have passed since 1st Ramdan, 2015 ');




// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

var ref = new Date("dec 05, 2015");
document.write('On reference date '+ ref);

var currSecs = ref.getSeconds();
document.write(currSecs + ' ' + 'seconds had passed since beginning of 2015');



// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

var current_date = new Date();
document.write('current date: ' + current_date);

var new_day = new Date("Jun 18 2020 10:41:51");
var diff = current_date - new_day;
document.write(diff + " hours ago, it was sat" + current_date);


// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

var current_date = new Date("dec 05 2015");
document.write('current date: ' + current_date);

var new_day = new Date("dec 05 1915");
var diff = current_date - new_day;
document.write(diff + " years back, it was " + current_date);



// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

var dob = new Date (prompt("Enter your date of birth" , "jan 1 1980"));
var dobmili = dob.getTime();
var today  = new Date();
var todaymili = today.getTime();
var diff = todaymili - dobmili;
var accuage =(diff/ (1000*60*60*24*30*12));
document.write(accuage);

var d = new Date( prompt("enter your age"));
  var n = d.getFullYear(new Date);

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// DATE METHODS | JAVASCRIPT
// Page 5 of 5
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)


var Customer_Name = "ABC Customer";

var d = new Date();
var currentMonth = d.getMonth();
document.write("customer name: " + Customer_Name +"<br>" +"month: " + currentMonth +"<br>");

var unit = "Number of units: ";
var unit_num = 410;
document.write(unit + unit_num +"<br>") ;

var chrg = "Charge per units: ";
var charges_unit = 16;
document.write(chrg + charges_unit+ "<br>");

var net_amount = "Net Amount Payable (within due Date): ";
var sum = unit_num * charges_unit;
document.write(net_amount +' ' + sum + "<br>");

var late = "Late payment surcharge: ";
var late_charges = 350;
document.write(late + late_charges + "<br>");

var gross_amount = "Gross Amount payable(After Dua Date): ";
var amount_payable =sum + late_charges;
document.write(gross_amount + amount_payable);





            // CHAPTER# 35-38




   // 1. Write a function that displays current date & time in your
   // browser.

   var a = new Date()
function date_time(){

  return a;
}
document.write(date_time(a));


// 2. Write a function that takes first & last name and then it
// greets the user using his full name.


var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
function full_name(){

return firstName + lastName;

}

alert(full_name(firstName + lastName));



// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

var firstNum = prompt("Enter first number");
var secondNum = prompt("Enter second number");

function add(){

    return firstNum + secondNum;

}

document.write(add());


// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

function calc(num1, opera, num2){
    if (opera === '+'){
        return num1 + num2
    }
    else if (opera === '='){
        return num1 - num2
    }
    else if (opera === '*'){
      return num1 * num2
    }
    else if (opera === '/'){
      return num1 / num2
    }
else{
    return "incorrect"
}
}
 var result1 = calc(2,"+",9);
 var result2 = calc(8,"-",3);
 var result3 = calc(5,"*",7);
 var result4 = calc(5,"/",10);

 document.write(result1);
 document.write(result2); 
 document.write(result3);
 document.write(result4);
 

//  5. Write a function that squares its argument.


function square(){
var x = 5;
}
var x_squared = Math.pow(x,2);
document.write(x_squared);



// 6. Write a function that computes factorial of a number.


function factorial(x) { 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
console.log(factorial(5));


// 7. Write a function that take start and end number as inputs
// & display counting in your browser.


function count(){
for (i = 0; i < 10; i++) {
    console.count();
  }
}
document.write(count(i));


// 8. Write a nested function that computes hypotenuse of a
// right angle triangle. 

function hypotenuse(a, b) {
    function square(x) { return x*x; }
    return Math.sqrt(square(a) + square(b));
 }
 function secondFunction() {
    var result;
    result = hypotenuse(1,2);
    document.write ( result );
 }


//  9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables


var length = prompt("Enter a whole number for the length of your rectangle.");
        var width = prompt("Enter a whole number for the width of your rectangle.");
        function area(length, width) {
            return length * width;
        }
        function perimeter(length, width) {
            return 2*( length + width);
        }
        
        document.write('The area of your rectangle is ' + area(length, width));         
        document.write('The perimeter of your rectangle is ' + perimeter(length, width));



//         10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?


function palindrome(str) {
    return true;
  }
  palindrome("madam");



//   11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.


function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capital_letter("'the quick brown fox"));



// Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string. 


function longest_string(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(longest_string('Web Development Tutorial'));


// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of 
// function occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

function count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(count('w3resource.com', 'o'));



// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.

function calcCircumference(){
    var circleRadius = parseInt(prompt("Please enter the radius of circle:"));
    var circumferenceOfCircle = 2 * Math.PI * circleRadius;
   document.write("Circumference of circle is: " + circumferenceOfCircle);
    
}

calcCircumference();


function circleArea(radius) {
    let area = Math.PI * (radius * radius);
    console.log(area);
    console.log(Math.round(area*100)/100);
}
 
circleArea(5);
 