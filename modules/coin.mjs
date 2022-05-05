/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */
 export {coinFlip, coinFlips, countFlips, flipACoin};
/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

function coinFlip() {
  if(Math.random() < 0.5){
    return "heads"
  } else {
    return "tails"
  }
}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

function coinFlips(flips) {
  let flipsArray = []
  for(let _ = 0; _ < flips; _++){
    flipsArray.push(coinFlip())
  }
  return flipsArray
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

function countFlips(array) {
let headCount = 0
for(let flip in array){
  if(array[flip] == "heads"){
    headCount +=1
  }
}

const data =  {
  "heads":headCount,
  "tails":(array.length - headCount)
}
if(headCount === 0 || array.length - headCount ===0){
  if(data.heads === 0){
    delete data.heads
  }
  if(data.tails === 0){
    delete data.tails
  }
}
return data
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

function flipACoin(call) {
  let flip = coinFlip()
  let result = {
    "call": call,
    "flip": flip,
    "result": "lose"
  }
  if(flip === call){
    result.result = "win"
  }
  return result
}


/** Export 
 * 
 * Export all of your named functions
*/
