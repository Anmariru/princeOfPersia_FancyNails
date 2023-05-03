
function getStairsMovementDirection (stairNumber, isClimbingStairs){
 

// kann man noch kürzer schreiben
  
  // if (stairNumber === 1 && isClimbingStairs === false) {
  //   return "down"  
  // } else if (stairNumber === 2 && isClimbingStairs === false) {
  //   return "right"
  // } else if (stairNumber === 3 && isClimbingStairs === false) {
  //   return "down"
  // } else if (stairNumber === 4 && isClimbingStairs === false) {
  //   return "right"
  // } else if (stairNumber === 5 && isClimbingStairs === false) {
  //   return "down"
  // } else if (stairNumber === 6 && isClimbingStairs === false) {
  //   return "right"
  // } else if (stairNumber === 7 && isClimbingStairs === false) {
  //   return "down"
  // }

  if (stairNumber % 2 === 0 && isClimbingStairs === false) {
    return "down"
  } else if (stairNumber % 2 !== 0 && isClimbingStairs === false) {
    return "right"
  } else if (stairNumber % 2 === 0 && isClimbingStairs === true) {
    return "up"
  } else if (stairNumber % 2 !== 0 && isClimbingStairs === true) {
    return "right"
  }
}


//stairnumber ist die anzahl ans stufen!
//isclimbingstairs ist erst ab dem moment wo er literally beginnt die stairs zu climben




function getZigZagMovementDirection (step) {
  if (step === 0) {
    return "up"
  } else if (step === 1) {
    return "right"
  } else if (step === 2) {
    return "right"
  } else if (step === 3) {
    return "down"
  } else if (step === 4) {
    return "right"
  } else if (step === 5) {
    return "right"
  } else if (step === 6) {
    return "up"
  } else if (step === 7) {
    return "right"
  } else if (step === 8) {
    return "right"
  } else if (step === 9) {
    return "down"
  } 
  
  //kann man noch verkürzen bei up and down, floor
}

function manuallyControl (key) {
  if ("ArrowRight" === key) {
    return moveDirection("right")
  } else if ("ArrowLeft" === key) {
    return moveDirection("left")
  } else if ("ArrowUp" === key) {
    return moveDirection("up")
  } else if ("ArrowDown" === key) {
    return moveDirection("down")
  }
}


//POTIONS functions

//sum of all even numbers
function givePotion2Answer (list) {
  let sum = 0;

  for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 === 0) {
      sum += list[i]
    } else {
      console.log("no even number in list")
    }
  }
  return sum 
}

//what is the highest number
function givePotion3Answer (list) {
  let highest = list[0];

  for (let i = 0; i < list.length; i++) {
    console.log(list)
    if (list[i] > highest) { //why do i not iterate through list. I missed the [i] in line 103 by list [i]
      highest = list[i];
    }
  }
  console.log(`This is the highest number ${highest}`);
  return highest
}

function givePotion4Answer (input, toCapitalize) {

  
}


//if you add |47| seconds to |5|:|59|:|52| what time will it be ?
//script.js:70 Function |givePotion5Answer| returned |undefined|, but |6:0:39| was expected

function givePotion5Answer (hours, minutes, seconds, secondsToAdd) {
  
  


}

//Sum all the numbers from the following input: |*9*5*1*3*0*9|
function givePotion6Answer (input) { // mybe use sort to sort out the **
  
  let sum = 0;
  
  console.log(`this is input: ${input}.`);

  for (let number of input) { 
    if (!isNaN(number)) {
      //console.log("nothing")
     sum += parseInt(number)

    }
  }
  return sum
}



function givePotion7Answer () {
  
}


function givePotion8Answer () {
  
}

//Make the sum of the 2 smallest numbers in the list |8,19,12,6,17|
//script.js:70 Function |givePotion9Answer| returned |undefined|, but |14| was expected :
function givePotion9Answer (list) {
  let lowest = Infinity; // es ging nicht anders-ohne infinity ging es nicht
  let secLowest = Infinity;
  let sum = 0;

  for (let i = 0; i < list.length; i++) {
    if (list[i] < lowest) {
      secLowest = lowest;
      lowest = list[i];
      
      console.log(lowest)
    } else if (list[i] < secLowest && list[i] !== lowest) {
      secLowest = list[i]
    }
  }
  sum = lowest + secLowest;
  return sum
}



// Find the first position where the letter |r| first appears in the string |ieqassqea| and -1 if not found.
// script.js:70 Function |givePotion10Answer| returned |undefined|, but |-1| was expected 

//magic door does not allow IndexOf

function givePotion10Answer (letter, list) {
  console.log(`This is list: ${list}, and this is letter: ${letter}.`);

  for (let i = 0; i < list.length; i++) {
    if (list[i] === letter) {
      //console.log(letter);
      return i
    }
  }
  return -1
  /*
You can put the return -1 statement inside an if-else statement, but you need to make sure that it is only executed if the loop completes without finding a match. In the original code you provided, the return -1 statement was inside the for loop, which causes it to return -1 immediately after checking the first letter of the list, regardless of whether it matches the target letter or not.*/
}





function givePotion11Answer (input, letterToReplace, letterToPutInstead) {
  
  for (let i = 0; i < input.length; i++) {
    if (input[i] === letterToReplace) {
      letterToReplace === letterToPutInstead
    }
  }
  return input
}


















function givePotion12Answer () {
  
}



//Level 7 Dungeon
function level7Move () {

}

//level 8 Dungeon
function level8Move () {

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