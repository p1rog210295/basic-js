const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (
        typeof sampleActivity !== "string" ||
        !Number(sampleActivity) ||
        sampleActivity < 0 ||
        sampleActivity > 15
    ) {
        return false;
    }
    let k = Math.LN2 / HALF_LIFE_PERIOD;
    let ACTIVITY = Math.log(MODERN_ACTIVITY / sampleActivity);
    let time = Math.ceil(ACTIVITY / k);

    return time;
};