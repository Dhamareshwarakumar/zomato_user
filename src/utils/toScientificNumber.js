export default toScientificNumber = (num) => {
    if (num < 1000) {
        return num;
    } else if (num < 10000) {
        return num.toString().slice(0, 1) + ',' + num.toString().slice(1);
    } else if (num < 1000000) {
        if (num % 1000 > 99) {
            return `${(num / 1000).toFixedNoRounding(1)}K`;
        } else {
            return `${(num / 1000).toFixed(0)}K`;
        }
    } else {
        if (num % 1000000 > 99999) {
            return `${(num / 1000000).toFixedNoRounding(1)}M`;
        } else {
            return `${(num / 1000000).toFixed(0)}M`;
        }
    }
};

Number.prototype.toFixedNoRounding = function (n) {
    const reg = new RegExp("^-?\\d+(?:\\.\\d{0," + n + "})?", "g")
    const a = this.toString().match(reg)[0];
    const dot = a.indexOf(".");
    if (dot === -1) { // integer, insert decimal dot and pad up zeros
        return a + "." + "0".repeat(n);
    }
    const b = n - (a.length - dot) + 1;
    return b > 0 ? (a + "0".repeat(b)) : a;
};