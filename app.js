'use strict';

var username =prompt('What is your name?');
var gender =prompt('please enter your gender');
if (gender.toLocaleLowerCase()=="male" || gender.toLocaleLowerCase()=="female" ){
    alert('accepted vale.');
}

else{alert ('unaccepte value!');
};

var age=prompt('please enter your age');
if (age<=0) {alert('age is less than or equal to zero!')}
else {alert('age is reasonable');
}; 

var conf=confirm('do you want to skip the welcoming message?');




if (gender.toLocaleLowerCase()=="male") {
    alert('welcome Mr' + username);
  } else if(gender.toLocaleLowerCase()=="female"){
    alert('welcome Ms'+"  "   +username);
  }
  else{alert('welcome'+' '+username);
};

function ifCoffee() {
  let coffee = prompt("Do you want some Coffee?").toLowerCase();
  console.log(coffee);
  if (coffee === "yes") {
    alert("Your Coffee In The Way 🎼 ");
  } else if (coffee === "no") {
    alert("ok");
  } else {
    alert("invalid");
  }
  return coffee;
}

function ifHappy() {
  let happy = prompt("Are you happy today?").toLowerCase();
  console.log(happy);
  if (happy === "yes") {
    alert("It's Wonderful Day 🌻 ");
  } else if (happy === "no") {
    alert("ok");
  } else {
    alert("invalid");
  }

  return happy;
}

function ifMeeting() {
  let meeting = prompt("Receiving interviews and meetings?").toLowerCase();
  console.log(meeting);
  if (meeting === "yes") {
    alert("A beautiful day with a beautiful start ✌");
  } else if (meeting === "no") {
    alert("ok");
  } else {
    alert("invalid");
  }
  return meeting;
}

let arr = [];
arr.push(ifCoffee());
arr.push(ifHappy());
arr.push(ifMeeting());
alert(arr);

for (let index = 0; index < arr.length; index++) {
  //  const element = array[index];
  console.log(arr[index]);
}

console.log(arr);