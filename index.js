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

function isPrime(num) {
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

function findLargestPrimeFactor(num) {
    let largest = 0;
    if (num < 2) {
        return largest
    }
    for (let i = 2; i <= num / 2; i++) {
        if (num % i != 0) {
            if (i > largest) {
                largest = i;
            }
        }
    }
    return largest;
}

function findMaxAvg(customer) {
    let max = customer[0];
    let sum = customer[0];
    
    for (let i = 0; i < customer.length; i++) {
        sum+=customer[i];
        if (customer[i] > max) {
            max = customer[i];
        }
    }
    return [sum/customer.length, max];
}

function findMaxAndAverage(customers) {
    let maxNAvg = [];
    for (const customer of customers) {
        /*
        let max = customer[0];
        let sum = customer[0];
        for (let i = 0; i < customer.length; i++) {
            sum+=customer[i];
            if (customer[i] > max) {
                max = customer[i];
            }
        }
        maxNAvg.push([sum/customer.length, max]);
        */
       maxNAvg.push(findMaxAvg(customer));
    }
    return maxNAvg;
}

module.exports = {findMaxAndAverage, findLargestPrimeFactor, isPrime, findEven, findLargestEven};