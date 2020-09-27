// Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length; //This is purely the selector which actually outputs the NodeList, which is a sort of array of all the button elements.

// We use button.length to iterate through the NodeList.

// This for loop iterates through all 7 buttons starting with 0, 1, 2, 3 ,4 ,5 ,6. Also, handleClick is only passed into the function since we don't wanto to actually call it yet. Omitting the parentheses allows us to only call the function once we click the buttons/ eventlistener.

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });

  // this identifies the button that is clicked using the eventlistener.
}

// Detecting Keyboard Press

document.addEventListener("keydown", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector(`.${currentKey}`);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
// setTimeout adds the timeout to the activeButton we press. the 100 is 100 milliseconds delay.
// the remove removes the pressed class from the activeButton after a 100ms delay.
