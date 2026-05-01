/**
 * 76. Minimum Window Substring

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
 

Follow up: Could you find an algorithm that runs in O(m + n) time?
 */

function minWindow(s, t) {
  if (t.length > s.length) return "";

  const need = new Map();

  for (let ch of t) {
    need.set(ch, (need.get(ch) || 0) + 1);
  }

  const window = new Map();

  let have = 0;
  let needCount = need.size;

  let left = 0;
  let result = [-1, -1];
  let minLen = Infinity;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];

    window.set(ch, (window.get(ch) || 0) + 1);

    if (need.has(ch) && window.get(ch) === need.get(ch)) {
      have++;
    }

    while (have === needCount) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        result = [left, right];
      }

      // remove item from left
      const leftChar = s[left];
      window.set(leftChar, window.get(leftChar) - 1);

      // if have is equal to need size, if not increase the right
      if (need.has(leftChar) && need.get(leftChar) > window.get(leftChar)) {
        have--;
      }

      left++;
    }
  }

  return minLen === Infinity ? "" : s.slice(result[0], result[1] + 1);
}

const result = minWindow("ADOBECODEBANC", "ABC");

console.log("Result :: ", result);
