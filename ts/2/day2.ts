export function cube(inputs: string[]) {
    const totalBalls = {
        'red': 12,
        'green': 13,
        'blue': 14
    };
    let output = 0;

    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        const val = input.split(':')[1];
        const ballCollection = val.split(';');
        let isPossible = true;
        for (const collection of ballCollection) {
            const balls = collection.split(',');
            for (const ball of balls) {
                const [_, val, color] = ball.split(' ');
                if (totalBalls[color] < val) {
                    isPossible = false;
                    break;
                }
            }
        }
        if(isPossible) output += (i+1);
    }
    return output;
}

export function cube2(inputs: string[]) {
    let output = 0;
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        const vala = input.split(':')[1];
        const ballCollection = vala.split(';');
        const maxBalls = {
            'red': 0,
            'green': 0,
            'blue': 0
        }
        for (const collection of ballCollection) {
            const balls = collection.split(',');
            for (const ball of balls) {
                const [_, valStr, color] = ball.split(' ');
                const val = Number(valStr);
                if(val > maxBalls[color]) maxBalls[color] = val;
            }
        }
        output += (maxBalls['red'] * maxBalls['green'] * maxBalls['blue']);
    }
    return output;
}