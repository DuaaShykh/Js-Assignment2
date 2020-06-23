//Chapter#21-25

//Question#1
var firstName=prompt("Enter your firstname");
var lastName=prompt("Enter your lastname");
var fullname;
fullName=firstName+lastName;
alert("Greetings" + " " + fullName );

// //Question#2
var mobileModel = prompt("Enter your favorite mobile model");
document.write("My favorite phone is: " + " " + mobileModel + "<br>");
var count=mobileModel.length;
document.write("Length Of String: "+ " " + count + "<br>");

// //Question#3
var letter = "Pakistani";
document.write("String: "+ " " + letter + "<br>" );
document.write("Index of Letter 'n' is:" + " "+ letter.indexOf("n") + "<br>");

// //Question#4
var letter = "Hello World";
document.write("String: "+ " " + letter + "<br>" );
document.write("Last Index of Letter 'L' is:" + " "+ letter.lastIndexOf("l") + "<br>");


// //Question#5
var letter = "Pakistani";
var thirdIndex=letter.charAt(3);
document.write("String: "+ " " + letter + "<br>" );
document.write("3rd Index of Character is:" + " "+ thirdIndex+ "<br>");


// //Question#6
var firstName=prompt("Enter your firstname");
var lastName=prompt("Enter your lastname");
var fullName=firstName.concat(lastName);
document.write("Full Name is: "+ " "+ fullName);


// //Question#7
var str1="Hyderabad";
document.write("City:" + " " + str1 + "<br>");
var str2=str1.replace("Hyderabad","Islamabad" );
document.write("After replacement:" + " " + str2+ "<br>");


// //Question#8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var message2= message.replace(/and/g, "&")
document.write("After replacement : " + " " + message2+ "<br>");


// //Question#9
var value=472;
var str=value.toString()
document.write("Value: " + " "+str +"<br>");
document.write("Type: "+ " " + typeof str +"<br>");
document.write("Value: " + " "+value +"<br>");
document.write("Type: "+ " " + typeof value +"<br>");


// //Question#10
var a=prompt("Enter your input");
var b=a.toUpperCase();
document.write("User input: " +" " + a + "<br>");
document.write("Upper Case: " +" " + b + "<br>");


// //Question#11
var a=prompt("Enter your input");
var b=a.charAt(0).toUpperCase() + a.slice(1);
document.write("User input: " +" " + a + "<br>");
document.write("Title Case: " +" " + b + "<br>");


// Question#12
var a=35.36;
var b= a*100;
var c=b.toString();
document.write("Number :" + " " + a+ "<br>");
document.write("Result :" + " " + c+ "<br>");

//Question#13
var userName= prompt("Enter Your Username");
for(var a=0; a<=userName.length; a++){
if(userName.charAt(a) === '!' || userName.charAt(a)  === '@' || userName.charAt(a)  === '.' || userName.charAt(a)  === ',' ) {
    alert("Please Enter a Valid Username")
}
}

//Question#14
var bakeryItems =["cake", "apple pie", "cookie", "chips", "patties"];
var search =prompt("Welcome to 'ABC' Bakery. <br> What do youwant to order sir/ma'am?");
var a=search.toLowerCase();
for(var i=0; i<bakeryItems.length; i++)
if (bakeryItems[i] === a){
    document.write(bakeryItems[i] + "  "+ "is available at index" + " " + i + " " + "in our bakery <br>");
break;
} 
else if(bakeryItems[i]!== a){
    document.write("We are sorry" + " " + a +" "+ "is not available in our bakery <br>");
    break;
}

//Question#15
var x = 0;
var password = prompt("Enter your password");
document.write("Entered Password is: "+password+"<br>");
    
//VALIDATIONS
if( password.charAt(0) >= '0' && password.charAt(0) <='9')
      { document.write("Password can not begin with a number<br>"); }
if(password.length <6 )
      { document.write("Password must be atleast 6 characters long<br>"); }
else{ 
    for(var i=0; i<password.length; i++){
    {
if( password.charAt(i) >= 'A' && password.charAt(i) <= 'Z')
   { x++; }
 if(password.charAt(i) >= 'a' && password.charAt(i) <= 'z') 
   { x++;}
if (password.charAt(i) >= '0' && password.charAt(i) <= '9')
  {x++;}
     }
  }
  if(x == password.length)
  document.write("Your password satisfies all the validations!<br>");
}




// //Question#16
var uni = "University of karachi";
var b = uni.split("");
for(var a=0; a< b.length; a++){
document.write(b[a] +" <br>");
}

// //Question#17
var input = prompt("Enter your input");
var b = input.charAt(input.length-1)
document.write("User input: " + "" + input + "<br>");
document.write("Last character of input is : " + " " + b + "<br>");


// //Question#18
var str =  "The quick brown foxjumps over the lazy dog";
var str2=str.toLowerCase();
var s= str2.split(" ")
var word = "the";
var count=0;
document.write("Text: " + " "+str +"<br>");
for(var a = 0 ; a<s.length; a++){
if(s[a] === word){
count++;
}
}
document.write("There are " + " " + count + " " + "occurrence(s) of word 'the'  +<br>");



// //Chapter#26-30

// //Question#1
var a = +prompt("Enter a Positive number");
b=Math.round(a);
c=Math.floor(a);
d=Math.ceil(a);

if(a>=1)
{
    document.write("Number: "+ " " + a +"<br>");
    document.write("Round off value: "+ " " + b  +"<br>");
    document.write("Floor value: "+ " " + c +"<br>");
    document.write("Ceil value: "+ " " + d +"<br>");
}
else{
    alert("Please enter valid number");
}


// //Question#2
var a = +prompt("Enter a Negative number");
b=Math.round(a);
c=Math.floor(a)
d=Math.ceil(a)

if(a<1)
{
    document.write("Number: "+ " " + a +"<br>");
    document.write("Round off value: "+ " " + b  +"<br>");
    document.write("Floor value: "+ " " + c +"<br>");
    document.write("Ceil value: "+ " " + d +"<br>");
}
else{
    alert("Please enter valid number");
}


// //Question#3
var i = +prompt("Enter a  number");
var j = Math.abs(i);
document.write("Number: "+ " " + i +"<br>");
document.write("Absolute Number is: "+ " " + j +"<br>");


// //Question#4
var diceRoll = Math.floor( Math.random() * 6 +1);
document.write('Random Dice Value:  ' +" " + diceRoll +"<br>");


// //Question#5
var coin = Math.floor( Math.random() * 2 +1);
if(coin == 1)
{
document.write( coin + "<br>" );
document.write('Random coin value is:   Head <br>');
}
else{
    document.write( coin + "<br>" );
    document.write('Random coin value is:  Tail <br>');
}


// //Question#6
 var RandNum = Math.floor( Math.random() * 100 +1);
 document.write("Random number between 1 and 100 : "+ " " + RandNum + "<br>");

// //Question#7
var userWeight= +prompt("Enter your weight in kgs");
var randWeight =  Math.random() * userWeight;
var n=randWeight.toFixed(1);
document.write("The weight of user is : "+ " " + n+"<br>");



// //Question#8
var a= +prompt ("Enter a number between 1 to 10");
var secretNum= Math.floor(Math.random() * 10 + 1); 
if (a== secretNum){
    alert("Congratulations!!");
}
else{
alert("Try Again");
}


// //Chapter#31-34
//Question#1
document.write("</br></br></br>  Question#1 <br>");
var d = new Date();
document.write(d);

// //Question#2
mlist = [ "January", "February", "March", "April", "May",
 "June", "July", "August", "September", "October", "November", "December" ];
  
var currentMonth = d.getMonth();
alert("Current Month :"+ mlist[currentMonth] );

//Question#3
dlist=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
var day=d.getDay();
alert("Today is "+ dlist[day] );

//Question#4
var day=d.getDay();

    if(day==0 || day==6)
    {
        alert("It’s Fun day");
    }
    else
    {
        alert("It’s not a Fun day");
    }
    

// //Question#5
var todayDate= d.getDate();

for(i=1;i<=15;i++)
{
    if(todayDate==i)
    {
        alert("First fifteen days of the month");
        break;
    }
}
    alert("Last days of the month");


// //Question#6
var milisceconds= d.getTime();
var minutes=milisceconds/1000*60;
document.write("</br></br></br>  Question#6");
document.write(" </br> Current Date: " + d);
document.write(" </br> Elapsed milliseconds since January 1,1970: " + milisceconds);
document.write(" </br> Elapsed minutes since January 1,1970: " + minutes);

//Question#7
var d = new Date();
if((d.getHours() >= 12) )
{
  alert("It's PM");
}
else{
    alert("It's AM");
}

// //Question#8
var de= new Date();
de.setFullYear(2020);
de.setMonth(11);
de.setDate(31);
de.setHours(00);
de.setMinutes(00);
de.setSeconds(00);
document.write("</br></br></br>  Question#8");
document.write("</br>  ",de);

// //Question#9
var ra=new Date("April,25,2020");
var raMili=ra.getTime();
var a=new Date();
var aMili=a.getTime();
var diff=aMili-raMili;
var days=Math.ceil(diff/(1000*60*60*24));
document.write("</br></br></br>  Question#9");
document.write(" </br> first ramazan was on April 25,2020");
document.write(" </br> " + days +"  days has passed since the beginning of 2015");

// //Question#10
var b=new Date("Dec,05,2015 22:50:16");
var bMili=b.getTime();
var a=new Date("Jan,01,2015 00:00:00");
var aMili=a.getTime();
var diff=bMili-aMili;
var seconds=Math.ceil(diff/(1000*60));
document.write("</br></br></br>  Question#10");
document.write(" </br> " + seconds +"  seconds has passed since the beginning of 2015");

// //Question#11
var da= new Date();
document.write("</br></br></br>  Question#11");
document.write("</br> Current Date: ",da);
da.setMinutes(-1);
document.write("</br> 1 hour ago , it was ",da);


// //Question#12
var da= new Date();
document.write("</br></br></br>  Question#12");
document.write("</br> Current Date: ",da);
da.setMonth(-1200);
document.write("</br> 100 years back , it was ",da);

// //Question#13

var age=prompt(parseInt("Enter Your Age:"));
ageMonths=age*12;
var da= new Date();
da.setMonth(-ageMonths);
var year=da.getFullYear();
document.write("</br></br></br>  Question#13");
document.write(" </br> Your Age is " + age);
document.write(" </br> Your birth year is: " + year );

// //Question#14
cName="Duaa Shaikh";
mlist = [ "January", "February", "March", "April", "May",
 "June", "July", "August", "September", "October", "November", "December" ];
  
var currentMonth = d.getMonth();
document.write("</br></br></br>  Question#14");
document.write(" </br> Customer Name: " +cName);
document.write(" </br> Month:"+ mlist[currentMonth] );
var units=410;
var chargePerUnit=16
var lateCharges=350
document.write(" </br> Number Of Units: " +units);
document.write(" </br> Charges per unit: "+chargePerUnit );
netAmount=units*chargePerUnit;
grossAmount=netAmount+lateCharges;
document.write(" </br> Net Amount Payable (within Due Date) : "+netAmount );
document.write(" </br> Late payment surcharge: "+lateCharges );
document.write(" </br> Gross Amount Payable (after Due Date):"+grossAmount );


//chapter#35-38

//Question1
var d = new Date();
function date(d){
alert(d);
}
date(d);

//Question2
function greet(firstName,secondName)
{
    alert("Greetings "+firstName+" "+secondName);
}
    
greet("Duaa","Shaikh");


//Question3
var num1=+prompt("Enter first number");
var num2=+prompt("Enter second number");
function sum(num1,num2)
{return num1+num2;}
var sum=sum(num1,num2);
document.write("The sum of two numbers is "+sum + "<br>");


//Question4
function calculator(num1,num2,opr)
{
    if(opr=='+')
        return num1+num2;
    else if(opr=='-')
        return num1-num2;
    else if(opr=='*')
        return opr1*opr2;
    else if(opr=='/')
        return opr1/opr2;
    else if(opr=='%')
        return opr1%opr2;
}
document.write("The answer is "+calculator(2,3,'+'));

//Question5
function sqr(num)
{
    return num*num;
}
document.write("The square of the number is"+sqr(5));

//Question6
function fact(num)
{
    var fact=1;
    for(i=num;i>0;i--)
        fact*=i;
    document.write("The factorial of a number is "+fact);
}
fact(3);

//Question7
function counting(start,end)
{
    for(i=start;i<=end;i++)
        document.write(i+"<br>");
}
counting(1,10);


//Question8
var base=+prompt("Enter base of a triangle");
var perp=+prompt("Enter perpendicular of a triangle");
function calcHyp(base,perp)
{
    function sqr(x)
    {
        return x*x;
    }
    var hyp=Math.sqrt(sqr(base)+sqr(perp));
    document.write("The hypotenuse of a triangle is "+hyp);
}
calcHyp(base,perp);


//Question9
var width=+prompt("Enter width of a rectangle");
var height=+prompt("Enter height of a rectangle");
function calcArea(width,height)
{
    document.write("The area of rectangle is "+width*height);
}
calcArea(5,2);
calcArea(width,height);

//Question10
function check(text)
{
    if(text===text.split("").reverse().join(""))
        document.write("The text is a palindrome");
    else
         document.write("The text is not a palindrome");
}
check("madam");


//Question11
function convert(text)
{
    var splitStr = text.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++)
   {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   document.write(splitStr.join(' ')); 
}
convert("i m a good girl");


//Question12
function long(text)
{
    var str = text.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++)
    {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
   document.write("STRING: "+text+"<br>OUTPUT: "+word);
}
long("Web Development tutorial");


//Question13
function count(str,letter)
{
    var count=0;
    for(i=0;i<str.length;i++)
        {
           if(str[i]==letter)
               count++;
        }
    document.write("The letter comes in the string "+count+" times");
}
count("Duaa",'d');


//Question14
function calcCircumference(rad)
{
    document.write("The circumference of circle is "+2*(22/7)*rad);
}
function calcArea(rad)
{
    document.write("The area of circle is "+(22/7)*Math.pow(rad,2));
}
var rad=+prompt("enter the radius of circle");
calcCircumference(rad);
calcArea(rad);
