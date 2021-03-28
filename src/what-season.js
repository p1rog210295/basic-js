const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (!date) {
        return "Unable to determine the time of year!";
    }

    if (isNaN(date.getTime())) {
        throw new Error("Wrong date format passed!");
    }

    let month = date.getMonth() + 1;

    if (month >= 12 || month < 3) {
        return "winter";
    } else if (month < 6) {
        return "spring";
    } else if (month < 9) {
        return "summer";
    } else if (month < 12) {
        return "fall";
    }
};