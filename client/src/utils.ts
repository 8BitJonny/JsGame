import Vector from "./vector";

// Math round to n digits after the comma
function fix (int: number,n?: number) {
    n = n || 3;
    return parseFloat(int.toFixed(n));
}

// Basic linear Interpolation, explained https://www.youtube.com/watch?v=HL8JbLDsFxY
function lerp (base: number, target: number, t: number) {
    t = Math.min(1, t);
    t = Math.max(0, t);
    return base + t * (target - base)
}

// linear Interpolation for a 2D vector
function v_lerp(baseVector: Vector, targetVector: Vector, time: number) {

    return new Vector(
        lerp(baseVector.x, targetVector.x, time),
        lerp(baseVector.y, targetVector.y, time)
    );
}

function isFunction(functionToCheck: () => any) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

function makeId(length: number) {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export {
    fix,
    v_lerp,
    makeId,
    isFunction
};