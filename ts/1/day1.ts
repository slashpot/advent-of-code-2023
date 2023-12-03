const al = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten'
]

const map = new Map<string, string[]>([
        ['o', ['one']],
        ['t', ['two', 'three', 'ten']],
        ['f', ['four', 'five']],
        ['s', ['six', 'seven']],
        ['e', ['eight']],
        ['n', ['nine']]
    ]
)

const mapReverse = new Map<string, string[]>([
    ['e', ['eno, eerht','evif','enin']],
    ['o', ['owt',]],
    ['r', ['ruof',]],
    ['x', ['xis']],
    ['n', ['neves', 'net']],
    ['t', ['thgie']],
])

const map2 = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine':9,
    'ten': 10
}


export function trebuchet(inputs: string[]) {
    let sum = 0;
    for (const input of inputs) {
        const arr = input.split("");
        let cur: string = "";
        let begin = 0,
            end = arr.length - 1;
        while (begin < input.length) {
            const val = input[begin]
            if (map.has(val)) {
                const words = map.get(val)
                begin++;
                let wordIndex = 1;
                for (const word of words) {
                    while (wordIndex < word.length) {
                        if(word[wordIndex] !== input[begin]) break;
                        else {
                            if(wordIndex === word.length-1) {
                                cur = map2[word] + cur;
                                break;
                            } else {
                                wordIndex++;
                                begin++;
                            }
                        }
                    }
                }
            } else if (isNumber(val)) {
                cur = val + cur;
                break;
            }
            begin++;
        }
        while (end >= 0) {
            const val = input[end]
            if (mapReverse.has(val)) {
                const words = mapReverse.get(val)
                end--;
                let wordIndex = 1;
                for (const word of words) {
                    while (word.length - 1 - wordIndex >= 0) {
                        if(word[word.length - 1 -wordIndex] !== input[end]) break;
                        else {
                            if(wordIndex === word.length-1) {
                                cur = cur + map2[word];
                                break;
                            } else {
                                wordIndex++;
                                end--;
                            }
                        }
                    }
                }
            }
            else if (isNumber(val)) {
                cur = cur + val;
                break;
            }
            end--;
        }
        sum += Number(cur);
    }
    return sum;
}


function isNumber(input: string): boolean {
    try {
        const charCodeZero = "0".charCodeAt(0);
        const charCodeNine = "9".charCodeAt(0);
        return (
            input.charCodeAt(0) >= charCodeZero && input.charCodeAt(0) <= charCodeNine
        );
    } catch (e) {
        console.error(e)
    }
}
