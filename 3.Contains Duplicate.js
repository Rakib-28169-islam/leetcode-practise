/**
 * @param {number[]} nums
 * @return {boolean}
   https://leetcode.com/problems/contains-duplicate/
 */
   var containsDuplicate = function(nums) {
    let set = {}

    for(let i=0;i<nums.length;i++)
    {
        if(set[nums[i]] === undefined)
        {
            set[nums[i]] = 1;
        }
        else
        {
            return true;
        }
    }
    return false;
};