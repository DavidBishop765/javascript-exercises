const sumAll = function(first, last) {
    let sum = 0;
    if (first < 0 || last < 0 || typeof first !== "number" || typeof last !== "number") {
        return "ERROR"
    } else {
        if (first < last) {
            for(i = first - 1; i < last; i++) {
            sum += first + i;
            }
            return sum;
        } else {
            for(i = last - 1; i < first; i++) {
                sum += last + i;
            }
            return sum;
        }
    }
}

// Do not edit below this line
module.exports = sumAll;
