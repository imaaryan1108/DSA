// Pattern Recognition
// Given Array and to have a target, need to iterate multiple times, using mapp
// Allows to check in O(n) time
// If I’m repeatedly searching → use hashmap.

var twoSum = function (nums, target) {
    const map = new Map()

    for(let i=0;i<= nums.length - 1;i++){
        const targetKey = target-nums[i]
        if(map.has(targetKey)){
            return [map.get(targetKey), i]
        }
        map.set(nums[i], i)
    }
};

