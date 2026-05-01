/**
 * 128. Longest Consecutive Sequence
 * 
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
Example 3:

Input: nums = [1,0,1,2]
Output: 3

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
 */

function longestConsecutiveSequence(nums) {
  const hashSet = new Set(nums);

  let maxSequence = 0;

  for (let num of hashSet) {
    if (!hashSet.has(num - 1)) {
      let current = num;
      let length = 1;

      while (hashSet.has(current + 1)) {
        current++;
        length++;
      }

      maxSequence = Math.max(length, maxSequence);
    }
  }

  return maxSequence;
}

longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);
// longestConsecutiveSequence([1, 0, 1, 2]);
longestConsecutiveSequence([100, 4, 200, 1, 3, 2]);
