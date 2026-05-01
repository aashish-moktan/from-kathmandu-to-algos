/**
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
 

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 */

function maximumSubArrayBruteForce(nums) {
  let start = 0;
  let end = nums.length - 1;

  let arraySum = 0;
  for (let i = 0; i < nums.length; i++) {
    arraySum += nums[i];
  }

  let i = 0;
  let j = end;

  while (i < j) {
    let sumFromStart = nums
      .slice(i + 1, j + 1)
      .reduce((acc, sum) => acc + sum, 0);

    if (sumFromStart >= arraySum) {
      arraySum = sumFromStart;
      start = i + 1;
      end = j + 1;
      i++;
    }

    let sumFromEnd = nums.slice(i, j).reduce((acc, sum) => acc + sum, 0);
    if (sumFromEnd >= arraySum) {
      arraySum = sumFromEnd;
      start = i;
      end = j - 1;
      j--;
      continue;
    }

    i++;
    j--;
  }

  console.log("Nums :: ", nums);
  console.log({ start, end: end + 1 });
  const maximum = nums.slice(start, end + 1).reduce((sum, num) => sum + num);

  console.log({ start, end, sum: maximum });
  console.log(nums.slice(start, end + 1));
}

function maximumSubArray(nums) {
  let maxSum = nums[0];
  let currSum = maxSum;
  let start = 0;
  let end = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > currSum + nums[i]) {
      currSum = nums[i];
      start = i;
      end = i;
    } else {
      currSum += nums[i];
    }

    if (currSum > maxSum) {
      maxSum = currSum;
      end = i;
    }
  }
  return maxSum;
}

maximumSubArray([-2, -3, -1]);
