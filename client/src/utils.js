const { Vector } = require("./vector");

// Math round to n digits after the comma
function fix (int,n) {
    n = n || 3;
    return parseFloat(int.toFixed(n));
}

// Basic linear Interpolation, explained https://www.youtube.com/watch?v=HL8JbLDsFxY
function lerp (base, target, t) {
    t = Math.min(1, t);
    t = Math.max(0, t);
    return base + t * (target - base)
}

// linear Interpolation for a 2D vector
function v_lerp(baseVector, targetVector, time) {

    return new Vector(
        lerp(baseVector.x, targetVector.x, time),
        lerp(baseVector.y, targetVector.y, time)
    );
}

function isFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

module.exports = {
    fix: fix,
    v_lerp: v_lerp,
    isFunction: isFunction
};