/**
 * 
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map ={}
    for(let i=0;i<nums.length;i++)
    {
        let ans = target - nums[i];
        if( map[ans] !== undefined)
        {
            return [i,map[ans]];
        }
        else{
            map[nums[i]] = i;
        }
    }
    
};