const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    let result = [];

    if (!Array.isArray(arr)) {
        throw new Error("");
    }

    if (arr.length == 0) {
        return result;
    }

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "--discard-next":
                if (i < arr.length) {
                    i++;
                    if (arr[i + 1] == "--discard-prev" || arr[i + 1] == "--double-prev") {
                        i++;
                    }
                }
                break;
            case "--discard-prev":
                if (i != 0) {
                    result.pop();
                }
                break;
            case "--double-next":
                if (i < arr.length - 1) {
                    result.push(arr[i + 1]);
                }
                break;
            case "--double-prev":
                if (i != 0) {
                    result.push(arr[i - 1]);
                }
                break;
            default:
                result.push(arr[i]);
                break;
        }
    }

    return result;
};