
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

function givePotion2Answer (list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    if (highestNum )
  }
  
}

function givePotion3Answer () {
  
}

function givePotion4Answer () {
  
}

function givePotion5Answer () {
  
}


function givePotion6Answer () {
  
}

function givePotion7Answer () {
  
}


function givePotion8Answer () {
  
}


function givePotion9Answer () {
  
}

function givePotion10Answer () {


}

function givePotion11Answer () {
  
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