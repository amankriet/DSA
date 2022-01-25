reverseArray = (arr) => {
    return arr.reverse();
};

reverseString = (str) => {
    return [...str].reverse().join("");
}

let reversedArray = reverseArray([1,2,3,4]);

console.log(reversedArray);

let reversedString = reverseString("Test String");
console.log(reversedString);
