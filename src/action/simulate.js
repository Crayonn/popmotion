"use strict";

var Simulate = function () {},
    simulate;

Simulate.prototype = {
    velocity: function (value, duration) {
        return value.velocity - calc.frameSpeed(value.deceleration, duration) + calc.frameSpeed(value.acceleration, duration);
    }
};

module.exports = simulate;