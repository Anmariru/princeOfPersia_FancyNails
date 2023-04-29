function getStairsMovementDirection(stairNumberm, isClimbingStairs)
{
  // return left, right, up, down based on star number % something === 0 i guess

  /*
    Implement the function required to go up and down the stairs.

    Create a getStairsMovementDirection() function to return "left", "right", "up", and "down" as strings based on the received values of the stairNumber and isClimbingStairs parameters to make the prince go up and down the stairs.

    You can avoid writing a lot of if else statements by checking if the stair number can be divided by a certain number.

    When the node start.js level6 command is executed and the http://127.0.0.1:9000/?level=6 link is opened in a browser, the prince automatically goes up and down the stairs.

  */

} // needs level6 to check

function getZigZagMovementDirection(step)
{
  /*
    Implement the function required to move in a zig-zag pattern.

    Create a getZigZagMovementDirection() function to return "left", "right", "up", or "down" based on the values of the "step" parameter to allow the prince to reach the keyboard symbol on the map. The function receives a step parameter with the number of the necessary steps as its value.

    You can avoid writing a lot of if else statements by checking if the step can be divided by a certain number for "up" and another number for "down".

    When the node start.js level6 command is executed and the http://127.0.0.1:9000/?level=6 link is opened in a browser, the prince automatically moves in a zig-zag pattern up and down and reaches the first symbol on the map.

  */
}

function manuallyControl(inputKeyName)
{
  // Something with key pressing

  /*
    Implement the function to move the prince using the keyboard.

    Create a manuallyControl() function which receives the name of the pressed key as a string (for example, "KeyA" is the A key and "ArrowUp" is the Up key).

    When moving the prince using the keyboard you can call the moveDirection() function using "left", "right", "up", and "down" strings as arguments.

    The prince can be moved using the left arrow, right arrow, up arrow, and down arrow keys.

    The prince can be moved using the w, a, s, d keys.

    The prince can only be moved using either the arrow keys or the w,a,s,d keys. You can switch between the input methods by pressing the q key.

  */
}

function level7Move()
{
  /*
    Implement the function level7Move() so that the prince can reach his beloved princess. The level7Move() is called until passing to the next level. Write any movement code in this function. The function receives the elementLeftOfPrince, elementRightOfPrince, elementUpOfPrince, and elementDownOfPrince parameters in this order.

You can move the prince using the following parameters:

    moveDirection('left')
    moveDirection('up')
    moveDirection('right')
    moveDirection('down')

Implement a hasMovedToTile() function which receives the direction and tileToCheck parameters. You can call this function from the level7Move() function.

    When the node start.js level7 command is run and the http://127.0.0.1:9000/?level=7 link is opened in a browser, the prince moves towards the princess.

  */
}

function hasMovedToTile()
{

}

function level8Move()
{
  /*
    Implement the function level8Move() to allow the prince to reach his beloved princess.

The level8Move()function must return an array with a mixture of the strings "left", "right", "up", or "down". These strings must then be passed as parameters to the moveDirection() function (you do not have access to this function in this level).

The map changes from level to level but you get the map by the received parameter gameMap.

    When the node start.js level8 command is run and the http://127.0.0.1:9000/?level=8 link is opened in a browser, the prince moves towards the princess.

  */
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