/**
 * @param {number[]} nums
 * @return {number[]}
 */

// https://leetcode.com/problems/product-of-array-except-self/
//time complexity: O(n)
//space complexity: O(n)
var productExceptSelf = function (nums) {
  prefixArr = new Array(nums.length).fill(0);
  suffixArr = new Array(nums.length).fill(0);
  prefixArr[0] = nums[0];
  suffixArr[nums.length - 1] = nums[nums.length - 1];
  for (let i = 1; i < nums.length; i++) {
    prefixArr[i] = prefixArr[i - 1] * nums[i];
    suffixArr[nums.length - i - 1] =
      suffixArr[nums.length - i] * nums[nums.length - i - 1];
  }
  newArr = new Array(nums.length).fill(0);
  newArr[0] = suffixArr[1];
  newArr[nums.length - 1] = prefixArr[nums.length - 2];
  for (let i = 1; i < nums.length - 1; i++) {
    newArr[i] = prefixArr[i - 1] * suffixArr[i + 1];
  }
  return newArr;
};
//Can we optimized more?->
//time complexity: O(n)
//space complexity: O(1) ?
var productExceptSelf2 = function (nums) {
  newArr = new Array(nums.length).fill(0);
  newArr[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    newArr[i] = nums[i - 1] * newArr[i - 1];
  }
  let suffix = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    suffix = suffix * nums[i + 1];
    newArr[i] = newArr[i] * suffix;
  }
  return newArr;
}
let nums = [2, 1, 3, 1, 2];
console.log(productExceptSelf2(nums)); // [6,12,4,12,6]
