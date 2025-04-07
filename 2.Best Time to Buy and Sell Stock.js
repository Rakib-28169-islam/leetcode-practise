/**
 * @param {number[]} prices
 * @return {number}
 * 
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */
var maxProfit = function(prices) {
    let mx = 0;
    let l =0;
    let r = 1;
    
    while(r<prices.length)
    {
        if(prices[l] > prices[r])
        {
            l = r;
            
        }
        else if(prices[l] < prices[r])
        {
            mx = Math.max(mx , ( prices[r] - prices[l]));
           
        }
        r++;
    }
    return mx;
    
};