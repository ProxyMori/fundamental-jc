//FUNCTION

//declaratice function
function greetings() {
  //block of code
}

//expression function
const messge = function () {
  //block of code
};

//arrow function
const welcome = () => {
  //block of code
};

const fruits = ["mangga", "apel", "anggur"];

function loopingfruits() {
  for (let item of fruits) {
    console.log("nama: ");
    console.log(item);
  }
}

//call function
loopingfruits();
loopingfruits();
loopingfruits();

//======= FUNCTION WITH PARAMETER =======
{
  function greetings(username) {
    console.log(`hello, ${username}!`);
  }

  greetings("user");
  greetings("roll");
  greetings("purwadhika heroes");
}

{
  function generateprofile(name, adress, hobby) {
    console.log(
      `my name is ${name}, my adress is at ${adress}, my hobby is ${hobby}.`,
    );
  }

  generateprofile("daniel", "jakarta", "coding");
  generateprofile("roll", "bandung", "gaming");
}

//======= FUNCTION WITH RETURN =======
function calculator(num1, num2) {
  return num1 + num2;
}

const resultcalculate = calculator(10, 3);
console.log(resultcalculate);
//atau
console.log(calculator(10, 3));

function calculator(num1, num2) {
  return num1 + num2;
}

const resultcalculate = calculator(3, 5);
console.log(resultcalculate);

//========== FUNCTION SCOPE ===========
function welcomemessage() {
  const message = "hello, welcome user!";

  return message;
  console.log("hello"); //code setelah return tidak akan dibaca oleh JS
}

const templating = welcomemessage(); //undefined
console.log(templating); //undefined
