function findEven(num) {
    let evens = [];
    for (let i = 2; i <= num; i++) {
        if (i % 2 == 0) {
            evens.push(i);
        }
    }
    return evens;
}

function findLargestEven(ary) {
    let largest = undefined;
    for (const num of ary) {
        if (num % 2 == 0) {
            if (largest == undefined || num > largest) {
                largest = num;
            }
        }
    }
    return largest;
}

module.exports = {findEven, findLargestEven};