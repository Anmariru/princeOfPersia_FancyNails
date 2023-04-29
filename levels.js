//level 6: go up and down the stairs
const getStairsMovementDirection = function(stairNumber, isClimbingStairs){
  if (isClimbingStairs === false){
    return (stairNumber %2 === 1? "right": "down");
  }
  else if (isClimbingStairs === true){
    return (stairNumber %2 === 1? "right": "up");
  }
};

//level 6: Zig Zag fun
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

//level 6: Controlling my puppet
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

const givePotion2Answer = function(list){
  let sum = 0;
  for (let i = 0; i < list.length; i++){
    if (list[i] % 2 === 0){
      sum += list[i];
    }
  }
  return sum;
};

const givePotion3Answer = function(){
  
};

const givePotion4Answer = function(){

};

const givePotion5Answer = function(){

};

const givePotion6Answer = function(){

};

const givePotion7Answer = function(){

};

const givePotion8Answer = function(){

};

const givePotion9Answer = function(){

};

const givePotion10Answer = function(){

};

const givePotion11Answer = function(){

};

const givePotion12Answer = function(){

};

const level7Move = function(){

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