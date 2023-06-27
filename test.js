function twoSum(nums, target) {
    let numMap = new Map();
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (numMap.has(complement)) {
            result.push([nums[i], complement]);
        }

        numMap.set(nums[i], true);
    }

    return result;
}

function mergeArray(arr) {
    arr.sort((a, b) => a - b);
    return arr;
}

function doubleTargetCombinations(nums, target) {
    let doubleTarget = target * 2;
    let combinations = twoSum(nums, doubleTarget);

    return combinations;
}

let nums = [1, 3, 2, 2, -4, -6, -2, 8];
let target = 4;

// Find combinations for the target
let firstCombinations = twoSum(nums, target);
console.log("First Combination for", target + ":", firstCombinations);

// Merge the array into a single sorted array
let mergedArray = mergeArray(nums);
console.log("Merge into a single array:", mergedArray);

// Find combinations for double the target
let secondCombinations = doubleTargetCombinations(mergedArray, target);
console.log("Second Combination for", target * 2 + ":", secondCombinations);
