//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

isTyler = (name) => {
  return name == "Tyler"
}

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


getName = () => {
  var name = prompt("Please enter your name.")
  return name
}


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

welcome = () => {
  var name = getName()
  alert(`Welcome, ${name}`)
}


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

// Parameters are part of declaring what arguments the function will require when it is called.

// i.e. function printName(name) {

  //}

  // printName("Aaron")

  // name is the parameter and "Aaron" is an argument.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


// 0, "", NaN, undefined, false, null
// Using a conditional statement.



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

myName = () => "Aaron"
  


//Now save the function definition of myName into a new variable called newMyName

let newMyName = myName

//Now alert the result of invoking newMyName

alert(newMyName)

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

outerFn = () => function() {
  return "Aaron"
}


//Now save the result of invoking outerFn into a variable called innerFn.

let innerFn = outerFn()

//Now invoke innerFn.
innerFn()