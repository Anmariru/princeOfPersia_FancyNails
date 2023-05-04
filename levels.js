//----------------------level 6----------------------
//go up and down the stairs
const getStairsMovementDirection = function(stairNumber, isClimbingStairs){
  if (isClimbingStairs === false){
    return (stairNumber %2 === 1? "right": "down");
  }
  else if (isClimbingStairs === true){
    return (stairNumber %2 === 1? "right": "up");
  }
};

//Zig Zag fun
const getZigZagMovementDirection = function(step){
  if (step % 6 === 0){
    return "up";
  }
  else if (step % 3 === 0){
    return "down";
  }
  else {
    return "right";
  }
};

//Controlling my puppet
const manuallyControl = function(key){
  //need to add if else for q
  switch (key){
    case "ArrowLeft":
    case "KeyA":
      moveDirection ("left");
      break;
    case "ArrowRight":
    case "KeyD":
      moveDirection ("right");
      break;
    case "ArrowUp":
    case "KeyW":
      moveDirection ("up");
      break;
    case "ArrowDown":
    case "KeyS":
      moveDirection ("down");
      break;
  }
};

//sum numbers of an array
const givePotion2Answer = function(list){
  let sum = 0;
  for (let i = 0; i < list.length; i++){
    if (list[i] % 2 === 0){
      sum += list[i];
    }
  }
  return sum;
};

//return highest number of array
const givePotion3Answer = function(list){
  let highest = list[0];
  for (let i = 0; i < list.length; i++){
    if (highest < list[i]){
      highest = list[i];
    }
  }
  return highest;
};

//?
const givePotion4Answer = function(){

};

//return new time
const givePotion5Answer = function(hours, minutes, seconds, secondsToAdd){
  //whaaaaaaaaaaat
};

//sum numbers from string
const givePotion6Answer = function(input){
  let sum = 0;
  let numbers = input.match(/\d/g).map(Number);

  for (let i = 0; i<numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
  
};

//sum numbers of string
const givePotion7Answer = function(input){
  let sum = 0;
  let numbers = input.match(/\d/g).map(Number);

  for (let i = 0; i<numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
};

//true if number is prime number
const givePotion8Answer = function(number){
  if ((number/number === 1)||(number/1 === number)){
    return true;
  }
  else {
    return false;
  }
};

//?
const givePotion9Answer = function(){

};

//index of string bUT not with index OF
const givePotion10Answer = function(letterToFind, input){
  //return input.indexOf(letterToFind);
  /*if (input.includes(letterToFind)){
    return position of letterToFind - but HOW
  }
  else {
    return -1;
  }
  */
  return input.lastIndexOf(letterToFind);
};

//replace sth with sth BuT not with replace function xD
const givePotion11Answer = function(input, letterToReplace, letterToPutInstead){
  return input.replace (letterToReplace, letterToPutInstead);
};

//sum numbers, if negative turn into positive
const givePotion12Answer = function(numbers){
  let sum = 0;
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] < 0){
      sum += numbers[i]*-1;
    }
    else {
      sum += numbers[i];
    }
  }
  return sum;
};

//----------------------level 7----------------------
const hasMovedTile = function (direction, tileToCheck){ //tileToCheck --> if I was there, don't go there
  if (tileToCheck === false){
    moveDirection(direction);
  }
  else if (tileToCheck === true){
    moveDirection(direction); //--> do what?
    
  }
};

//element--OfPrince is an array with arrays as items
const level7Move = function(elementLeftOfPrince, elementRightOfPrince, elementUpOfPrince, elementDownOfPrince){
  const FIRE = 13;
  const FREE = 11;
  let TILE = false; // false --> can still go there
  
  
    if (elementLeftOfPrince === FREE && elementLeftOfPrince !== FIRE){
      hasMovedTile("left", false);
      
    }
    else if (elementRightOfPrince === FREE && elementRightOfPrince !== FIRE){
      hasMovedTile("right", false);
      
      
    }
    else if (elementUpOfPrince === FREE && elementUpOfPrince !== FIRE){
      hasMovedTile("up", false);
      
      
    }
    else if (elementDownOfPrince === FREE && elementDownOfPrince !== FIRE){
      hasMovedTile("down",false);
      TILE = false;
      if (elementDownOfPrince === FIRE){
        hasMovedTile("left", true);
        TILE = true;
      }
    }
};


const level8Move = function(){

};
// DON'T MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
  toExport = [
    { name: "getStairsMovementDirection", content: getStairsMovementDirection, type: "function" },
    { name: "getZigZagMovementDirection", content: getZigZagMovementDirection, type: "function" },
    { name: "manuallyControl", content: manuallyControl, type: "function" },
    { name: "givePotion2Answer", content: givePotion2Answer, type: "function" },
    { name: "givePotion3Answer", content: givePotion3Answer, type: "function" },
    { name: "givePotion4Answer", content: givePotion4Answer, type: "function" },
    { name: "givePotion5Answer", content: givePotion5Answer, type: "function" },
    { name: "givePotion6Answer", content: givePotion6Answer, type: "function" },
    { name: "givePotion7Answer", content: givePotion7Answer, type: "function" },
    { name: "givePotion8Answer", content: givePotion8Answer, type: "function" },
    { name: "givePotion9Answer", content: givePotion9Answer, type: "function" },
    { name: "givePotion10Answer", content: givePotion10Answer, type: "function" },
    { name: "givePotion11Answer", content: givePotion11Answer, type: "function" },
    { name: "givePotion12Answer", content: givePotion12Answer, type: "function" },
    { name: "level7Move", content: level7Move, type: "function" },
    { name: "level8Move", content: level8Move, type: "function" },
  ]

} catch (error) {
  toExport = { error: error.message }
}

export { toExport };