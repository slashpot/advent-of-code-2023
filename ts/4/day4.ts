export function day4(inputs: string[]) {
    const arr: string[][] = [];
    let sum = 0
    for (let i = 0; i < inputs.length; i++) {
        const splited = inputs[i].split('');
        arr.push(splited);
    }
    for (let i = 0; i < arr.length; i++) {
        const input = arr[i];
        let j = 0;

        while (j < input.length) {
            let str = ""
            if (isNumber(input[j])) {
                str += input[j];
                let k = j;
                while (k < input.length) {
                    k++;
                    if (isNumber(input[k])) {
                        str += input[k];
                    } else {
                        break;
                    }
                }
                //check word
                if (hasAdj(i, j, k-1, arr)) {
                    sum += Number(str);
                }
                j = k + 1;
            } else j++;
        console.log(sum)
        }
        console.log(sum)
    }

    return sum;
}

const hasAdj = (i: number, j: number, k: number, arr: string[][]) => {
    let curIndex = j;

    function checkSymbol(i: number, curIndex: number) {
        if(i<0||i>=arr.length)return false;
        if(curIndex<0||curIndex>=arr[0].length)return false;
        return !isNumber(arr[i][curIndex]) && arr[i][curIndex] !== '.';
    }

    while (curIndex <= k) {
        if (curIndex === j) {
            if (checkSymbol(i - 1, curIndex - 1)) return true;
            if (checkSymbol(i, curIndex - 1)) return true
            if (checkSymbol(i + 1, curIndex - 1)) return true
        }
        if (curIndex === k) {
            if (checkSymbol(i - 1, curIndex + 1)) return true
            if (checkSymbol(i, curIndex + 1)) return true
            if (checkSymbol(i + 1, curIndex + 1)) return true;
        }
        if (checkSymbol(i - 1, curIndex)) return true;
        if (checkSymbol(i + 1, curIndex)) return true;
        curIndex++;
    }
    return false;
};

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
