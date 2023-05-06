const getStairsMovementDirection = function(stairNumber, isClimbingStairs){
  if (isClimbingStairs === false){
    return (stairNumber %2 === 1? "right": "down");
  }
  else if (isClimbingStairs === true){
    return (stairNumber %2 === 1? "right": "up");
  }
};

function getZigZagMovementDirection(step) {
  if (step % 6 === 0) {
    return "up";
  } else if (step % 3 === 0) {
    return "down";
  } else {
    return "right";
  }
}

//Controlling my puppet
const manuallyControl = function(key){
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

// Potion Crafting

function givePotion2Answer(list) // Sum all even numbers from array
{
  let sum = 0;

  for(let i = 0; i < list.length; ++i)
  {
    if(list[i] % 2 === 0)
    {
      sum += list[i];
    }
  }  
    return sum;
}

//what is the highest number
function givePotion3Answer (list) {
  let highest = list[0];

  for (let i = 0; i < list.length; i++) {
    console.log(list)
    if (list[i] > highest) 
    {
      highest = list[i];
    }
  }
  return highest
}

function givePotion4Answer(input, toCapitalize) // Capitalize spezific letters from string, return string
{
  let capitalizedString = input.split("");
  for(let i = 0; i < capitalizedString.length; ++i)
  {
    for(let j = 0; j < toCapitalize.length; ++j)
    {
      if(capitalizedString[i] === toCapitalize[j])
      {
        capitalizedString[i] = capitalizedString[i].toUpperCase();
      }
    }
  }
  return capitalizedString.join("");
}

function givePotion5Answer(hours, minutes, seconds, secondsToAdd) // adding some seconds to a given time (17:59:54) return same type string
{
  let timeReturn = 0;
  let stringyfyTime = "";
  seconds += secondsToAdd;
  timeReturn = Math.floor(seconds / 60);
  seconds %= 60;
  minutes += timeReturn;
  timeReturn = Math.floor(minutes / 60);
  minutes %= 60;
  hours += timeReturn;
  stringyfyTime = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();
  return stringyfyTime;
}

//Sum all the numbers from the following input: |*9*5*1*3*0*9|
function givePotion6Answer (input) { 
  let sum = 0;
  
  for (let number of input) { 
    if (!isNaN(number)) {      
     sum += parseInt(number)
    }
  }
  return sum
}

//sum numbers of string
const givePotion7Answer = function(input){
  let sum = 0;
  let numbers = input.match(/\d/g).map(Number);

  for (let i = 0; i<numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
};

// is Primenumber or not
function givePotion8Answer (number) {
  if (number <= 1) {
    return false; //all numbers below 1 are not prime
  }
  for (let i = 2; i <= Math.sqrt(number); i ++) {
    if (number % i === 0) {
      return false; //the number is divisible by a number other than 1 and itself
    }
  }
  return true; // the number is a prime
}

function givePotion9Answer(list) // make sum of 2 smallest numbers of array, return sum
{
  let numArray = list;
  let sum = 0;
  numArray.sort((a,b) => a-b)
  for(let i = 0; i < 2; ++i)
  {
    sum += numArray[i];
  }
  return sum;
}

function givePotion10Answer (letter, list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === letter) {
      return i
    }
  }
  return -1
}

function givePotion11Answer(input, letterToReplace, letterToPutInstead) // replace specific letters in a string
{
  let arrayOfLetters = input.split("");
  for(let i = 0; i < arrayOfLetters.length; ++i)
  {
    if(arrayOfLetters[i] === letterToReplace)
    {
      arrayOfLetters[i] = letterToPutInstead;
    }
  }
  return arrayOfLetters.join("");
}
//geht auch: return input.replace (letterToReplace, letterToPutInstead);

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

function level7Move()
{

}

function level8Move(gameMap) 
{
  let map = gameMap;
  let route = [];
  let princePosUD = 1; // Up-Down Pos
  let princePosLR = 1; // Left-Right Pos
  let leftOfPrince = 0;
  let rightOfPrince = 0;
  let upOfPrince = 0;
  let downOfPrince = 0;
  let reachedPrincess = false;
  let gotPos = false;

  console.log(map);

  do {
      // Reset gotPos
      gotPos = false;
      // get prince position
      for (let i = 1; i < map.length; ++i) 
      {
          if (gotPos) 
          {
              break;
          }
          for (let j = 1; j < map[i].length; ++j) 
          {
              if (map[i][j] === 10)
              {
                princePosUD = i;
                princePosLR = j;
                gotPos = true;
                break;
              }
          }
      }

      console.log("Prince Position [", princePosUD, "][", princePosLR, "]");

      // Create knowledge about surroundings
      leftOfPrince = map[princePosUD][princePosLR - 1];
      rightOfPrince = map[princePosUD][princePosLR + 1];
      upOfPrince = map[princePosUD - 1][princePosLR];
      downOfPrince = map[princePosUD + 1][princePosLR];

      // Once we are close to the princess, escape the loop
      if (downOfPrince === 99) 
      {
          route.push("down");
          reachedPrincess = true;
      }
      // else check for the direction to move to and set everything up for the next iteration
      else if (leftOfPrince === 11) 
      {
          route.push("left");
          map[princePosUD][princePosLR - 1] = 10;
          map[princePosUD][princePosLR] = 13;
          console.log("pushed left");
      }
      else if (rightOfPrince === 11) 
      {
          route.push("right");
          map[princePosUD][princePosLR + 1] = 10;
          map[princePosUD][princePosLR] = 13;
          console.log("pushed right");
      }
      else if (upOfPrince === 11) 
      {
          route.push("up");
          map[princePosUD - 1][princePosLR] = 10;
          map[princePosUD][princePosLR] = 13;
          console.log("pushed up");
      }
      else if (downOfPrince === 11) 
      {
          route.push("down");
          map[princePosUD + 1][princePosLR] = 10;
          map[princePosUD][princePosLR] = 13;
          console.log("pushed down");
      }

  } while (!reachedPrincess);

  console.log(route);
  return route;
}

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
