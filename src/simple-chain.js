const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chainArr: [],
    chainStr: "",
    getLength() {
        return this.chainArr.length;
    },
    addLink(value) {
        if (typeof value == "undefined") {
            value = " ";
        }
        this.chainArr.push(`( ${value} )`);

        return this;
    },
    removeLink(position) {
        if (position > 0 && position < this.chainArr.length) {
            this.chainArr.splice(position - 1, 1);
            return this;
        } else {
            this.chainArr = [];
            throw new Error("Invalid position");
        }
    },
    reverseChain() {
        this.chainArr.reverse();
        return this;
    },
    finishChain() {
        this.chainStr = this.chainArr.join("~~");
        this.chainArr = [];
        return this.chainStr;
    },
};

module.exports = chainMaker;