
nums = [1,2,3,4,5];

function main() {
    const hashmap = {}
    for (let i=0; i<nums.length; i++) {
        if (hashmap[nums[i]]) {
            return console.log(true)
        }
        hashmap[nums[i]] = true
    }
    return console.log(false)
}


main();