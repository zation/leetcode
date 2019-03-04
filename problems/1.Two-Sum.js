// eslint-disable-next-line
const twoSum = function(nums, target) {
    const map = new Map();
    for(let i=0; i<nums.length; i++) {
        const number = nums[i];
        if (map.has(number)) {
            return [map.get(number), i];
        }
        map.set(target - number, i);
    }
};
