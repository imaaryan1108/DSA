var productExceptSelf = function(nums) {
    let leftSuffix = 1
    let rightSuffix = 1
    let resultArrLeft = [1]
    let resultArrRight = [1]
    for(let i=1; i<nums?.length;i++){
        leftSuffix = leftSuffix * nums[i-1]
        resultArrLeft.push(leftSuffix)
    }
    for(let j = nums?.length - 2; j>=0; j--){
        rightSuffix = rightSuffix * nums[j+1]
        resultArrLeft[j] = resultArrLeft[j] * rightSuffix
    }
    return resultArrLeft
};