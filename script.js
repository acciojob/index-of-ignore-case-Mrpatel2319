function indexOfIgnoreCase(s1, s2) {
    // Handle edge cases
    if (s1 === null || s2 === null) return -1;
    if (s2 === '') return 0; // Empty substring is found at index 0
    if (s1 === '') return -1; // Empty string cannot contain any substring

    // Convert both strings to lower case for case-insensitive comparison
    const lowerS1 = s1.toLowerCase();
    const lowerS2 = s2.toLowerCase();

    // Use indexOf to find the index of the first occurrence
    return lowerS1.indexOf(lowerS2);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
