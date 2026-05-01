/**
 * 239. Sliding Window Maximum

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

 

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
1 <= k <= nums.length
 */

function maxSlidingWindow(nums, k) {
  const deque = []; // store indexes
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    // remove out-of-window indexes
    if (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    // remove smaller elements from back
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    // add current index
    deque.push(i);

    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

const result = maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
// const result = maxSlidingWindow([1, -1], 1);
// const result = maxSlidingWindow([7, 2, 4], 2);
// const result = maxSlidingWindow([1, 3, 1, 2, 0, 5], 3);
console.log("result :: ", result);
