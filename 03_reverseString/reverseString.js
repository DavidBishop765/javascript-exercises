const reverseString = (string) => {
    const letters = string.split('');
    string = '';
    for (i = letters.length - 1; i >= 0; i--) {
        string += letters[i];
    }
    return string;
};

// Do not edit below this line
module.exports = reverseString;


// I did this the hard way. It pays to know your array methods.