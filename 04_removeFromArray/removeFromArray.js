const removeFromArray = (array, ...element) => {   
    for (const eachElement of element) {
        if (array.includes(eachElement)) {
        let elementIndex = array.indexOf(eachElement);
        array.splice(elementIndex, 1);
        } else continue;
    }
        return array;    
}

// Do not edit below this line
module.exports = removeFromArray;
