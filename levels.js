function getStairsMovementDirection(stairNumber, isClimbingStairs)
{
    if(stairNumber % 2 === 0 && isClimbingStairs === false)
    {
      return "down";
    }
    else if(stairNumber % 2 !== 0 && isClimbingStairs === false)
    {
      return "right";
    }
    else if(stairNumber % 2 === 0 && isClimbingStairs)
    {
      return "up";
    }
    else
    {
      return "right";
    }
} // needs level6 to check

function getZigZagMovementDirection(step)
{
  if (step % 6 === 0)
  {
    return "up";
  }
  else if(step % 3 === 0)
  {
    return "down";
  }
  else
  {
    return "right";
  }
}

function manuallyControl(inputKeyName)
{
  if(inputKeyName === "ArrowUp" || inputKeyName === "KeyW") 
  {
    moveDirection("up");
  }
  else if (inputKeyName === "ArrowDown" || inputKeyName === "KeyS")
  {
    moveDirection("down");
  }
  else if (inputKeyName === "ArrowLeft" || inputKeyName === "KeyA")
  {
    moveDirection("left");
  }
  else if (inputKeyName === "ArrowRight" || inputKeyName === "KeyD")
  {
    moveDirection("right");
  }
}

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

function givePotion3Answer(list) // find Max in Array
{
  let max = list[0];
  for(let i = 0; i < list.length; ++i)
  {
    if(max < list[i])
    {
      max = list[i];
    }
  }
  return max;
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

function givePotion6Answer(input) // Sum all numbers from input string (*3*5*8*1*4*2)
{
  let arrayConversion = input.split('*');
  let sum = 0;
  for(let i = 1; i < arrayConversion.length; ++i)
  {    
    sum += Number(arrayConversion[i]);    
  }
  return sum;
}

function givePotion7Answer(input) // make sum of all numbers in string -> need to extract numbers -> sum -> return sum
{
  let sum = 0;
  let numArray = input.match(/\d/g) // using .match(/\d+/g) for 2+ diget numbers only!
  console.log(numArray);
  for(let i = 0; i < numArray.length; ++i)
  {
    sum += Number(numArray[i]);    
  }
  return sum;
}

function givePotion8Answer(number) // return a boolean for "number is prime?"
{
  let isPrime = number === 1 ? false : true;
  for(let i = 2; i < number; ++i)
  {
    number % i === 0 ? isPrime *= false : isPrime *= true;
  }
  if(isPrime === 1)
  {
    isPrime = true;
  }
  else if(isPrime === 0)
  {
    isPrime = false;
  }
  return isPrime;
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

function givePotion10Answer(letterToFind, input) // return the position of aLetter within a String
{
  let arrayOfLetters = input.split("");
  let index = -1;
  for(let i = 0; i < arrayOfLetters.length; ++i)
  {
    if(letterToFind === arrayOfLetters[i])
    {
      index = i;
      return index;
    }
  }
  return index;
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

function givePotion12Answer(numbers) // return sum of all numbers in the array, make them pos if they are negative
{
let sum = 0;
  for(let i = 0; i < numbers.length; ++i)
  {
    if(numbers[i] < 0)
    {
      numbers[i] *= -1;
    }
    sum += numbers[i];
  }
  return sum;
}

function hasMovedToTile(direction, tileToCheck)
{
  moveDirection(direction);   
}

let lastMove = "down";
function level7Move(elementLeftOfPrince, elementRightOfPrince, elementUpOfPrince, elementDownOfPrince)
{  
  //  10 - player / 11 - free-space / 99 - princess / 13 - fire
  
  if(elementLeftOfPrince % 11 === 0 && lastMove !== "right")
  {
    lastMove = "left";
    hasMovedToTile('left');
  }
  else if(elementRightOfPrince % 11 === 0 && lastMove !== "left")
  {
    lastMove = "right";
    hasMovedToTile('right');
  }
  else if(elementDownOfPrince % 11 === 0 && lastMove !== "up")
  {
    lastMove = "down";
    hasMovedToTile('down');
  }
  else if(elementUpOfPrince % 11 === 0 && lastMove !== "down")
  {
    lastMove = "up";
    hasMovedToTile('up');
  }
}

function level8Move(gameMap)
{
  let result = [];
  let flameFields = 0;
  let lengthOfaColumn = 0;
  let lengthOfSubarray = 0;
  console.log(gameMap);
  // going back up after the first L Shape
  for(let i = 1; i < gameMap.length; ++i)
  {
    lengthOfaColumn = gameMap.length;
    lengthOfSubarray = gameMap[0].length;
    if(gameMap[i][lengthOfSubarray-2] === 13)
    {
      ++flameFields;
    }
  }
  let firstUp = lengthOfaColumn - (flameFields+1);
  // zigzag

  // add to output
  for(let a = 2; a < (gameMap.length - 1); ++a)
  {
    result.push("down");
  }
  for(let b = 2; b < (gameMap[gameMap.length - 1].length - 1); ++b)
  {
    result.push("right");
  }
  for(let a = 2; a <= firstUp; ++a)
  {
    result.push("up");
  }
  /*
    array element 1 -> array[X elemente] aller positionen der ersten zeile
    array element 2 -> array[X elemente] aller positionen der zweiten zeile
    etc...
  */
  return result;
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