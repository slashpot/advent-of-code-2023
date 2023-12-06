const al = {
    'one': '1',
    'two': '2',
    'three':'3',
    'four':'4',
    'five':'5',
    'six':'6',
    'seven':'7',
    'eight':'8',
    'nine':'9'
}

const map = new Map<string, string[]>([
        ['o', ['one']],
        ['t', ['two', 'three', 'ten']],
        ['f', ['four', 'five']],
        ['s', ['six', 'seven']],
        ['e', ['eight']],
        ['n', ['nine']]
    ]
)

export function trebuchet(inputs: string[]) {
    let sum = 0;
    for (const input of inputs) {
        let index = 0;
        const nums=[];

        while (index<input.length) {
            const val=input[index];
            if(isNumber(val)) {
                nums.push(val)
            } else if(map.has(val)) {
                const words = map.get(val);
                for (const word of words) {
                    let wordIndex = 1;
                    let index2 = index+1;
                    while (wordIndex < word.length){
                        if (input[index2] === word[wordIndex]) {
                            if(wordIndex === word.length-1){
                                nums.push(al[word]);
                                break;
                            }else {
                                index2++;
                                wordIndex++;
                            }
                        } else {
                            break;
                        }
                    }
                }
            }
            index++;
        }
        sum+=Number(nums[0]+nums[nums.length-1])
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
