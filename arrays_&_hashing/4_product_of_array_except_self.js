/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
 */

function productExceptSelfBruteForce(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i != j) {
        product *= nums[j];
      }
    }
    result.push(product);
  }
  return result;
}

// Brute force approach takes O(n2) time complexity

function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);

  // calculate left bag
  for (let i = 1; i < n; i++) {
    // calculate left bag
    result[i] = result[i - 1] * nums[i - 1];
  }

  // calculate right bag
  let rightBag = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] = rightBag * result[i];
    rightBag *= nums[i];
  }

  return result;
}

const result = productExceptSelf([1, 2, 3, 4]);
console.log("Result :: ", result);
