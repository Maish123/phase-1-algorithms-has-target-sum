function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for  (let a = i+1; a <array.length; a++) {
      let num = target - array[i]
      if (num === array[a] ) {
        return true
      
      }
        
      }
       

    }
    return false;
}



/* 
  Write the Big O time complexity of your function here
*/
 // O(n*n)
/* 
  Add your pseudocode here
  function target sum, that takes in an array and target number as variables
  first iterate through this array to check for the values of the array,
  then iterate through it, but this time adding each number to the othr number
  and the other number till we get a value that gives a total of 10
  if the sum is a total of 10, return yes and if not, return false
  then call the function and pass in the arguments
*/

/*
  Add written explanation of your solution here
  let array be equal to a certain array
  take in a function targetSum which takes two arguments, the array and the target number.
  the sum of any two numbers in the array should equal to the target number.
  ideally we should iterate through the array, 
  and then move through the array again while comparing the sum ofone number to the rest.
  this sum of these numbers should equal to 10. 
  if the sum is 10 print true, if not print false;
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
