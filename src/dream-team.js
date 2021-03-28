const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    const timeName = [];

    if (!Array.isArray(members)) {
        return false;
    }

    for (let name of members) {
        if (typeof name !== 'string') continue;
        timeName.push(name.trim().charAt().toUpperCase());
    }

    return timeName.sort().join('');
};