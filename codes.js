//program 1

var x = prompt ("please enter first number", 0)
var y = prompt ("please enter second number", 0)
var z = parseInt(x) + parseInt(y)
console.log(z)

// program 2

var x1 = parseInt (prompt ("please enter 1st number",0))
var y1 = parseInt (prompt ("please enter 2st number",0))
if (x > y)
{
  alert (x)
}
else
  {
    alert (y)
  }



//program 3

var sum = 0
do 
  {
    var x2 = parseInt(prompt("plese enter number",0))
    sum  = sum + 1
  }

while(x2 != 0)
  alert(sum)


  //Program 4 : take and number and show if positive negative or null
 
  var a = parseInt( prompt ("please enter number",0))
  if (a > 0)
    {
      alert ("positive")
    } 
  if (a == 0)
      {
        alert ("zero")
      }
  if (a < 0)
      {
        alert ("negative")
        
        
        
 //program 5 : choose 2 number a and b, if b is zero, print "not possible to divide by 0", otherwise, print a/b

var a = parseInt (prompt ("Enter a", 0))
var b = parseInt (prompt ("Enter b", 0))

if (b==0)
  {
    alert ("you can't divide by 0")
  }
else 
  {
    alert (a/b)
  }


//program 6 : take  number (supposively positive), print if he has 1,2 or 3 numbers or more

var x = parseInt( prompt ("please enter a positive number",0))

if (x < 10)
  {
    alert ("x has one number")
  }
else if (x < 100)
  {
    alert ( "x has 2 numbers")
  }
else if (x < 1000)
  {
    alert ("x has 3 numbers")
  }
if (x > 1000)
  {
    alert ("x has 4 or more numbers")
  }
