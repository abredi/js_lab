let input = [
    `In computer science, functional programming is a programming paradigm`,
    `where programs are constructed by applying and composing functions.`,
    `It is a declarative programming paradigm in which function definitions`,
    `are trees of expressions that map values to other values, rather than`,
    `a sequence of imperative statements which update the running state of the program.` 
];

let groupby = (wordArray) => {
    return unique(wordArray).map(word => [word, wordArray.filter(w => w == word).length]).sort((x, y) => y[1] - x[1]);
}

const unique = (wordArray) => [...new Set(wordArray)];
// console.log(groupby(input.map(line =>  line.split(' ')).flat()));
let ary = groupby(input.map(line =>  line.split(' ')).flat());

for (let i = 0; i < ary.length; i++) {
    console.log(ary[i]);
}

let add = (x, y) => x + y;

console.log(add(1, 1) == 2);

//-------------------------------------------------------------------

let f1 = function (x) { return x * 2; };
let f2 = function (x) { return x * x; };

let fs = function (f) {
    return function (s) {
        return s.map(f);
    }
};

let fsf1 = fs(f1);
let fsf2 = fs(f2);

// Test
// console.log(
//     [
//         fsf1([0, 1, 2, 3]),
//         fsf2([0, 1, 2, 3]),

//         fsf1([2, 4, 6, 8]),
//         fsf2([2, 4, 6, 8])
//     ]
// );

// Closure

let fx = fs(x => x * 2);
let fy = fs(x => x * x);

console.log(
    [
        fx([0, 1, 2, 3]),
        fy([0, 1, 2, 3]),

        fx([2, 4, 6, 8]),
        fy([2, 4, 6, 8])
    ]
);
