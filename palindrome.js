// Reverse a string
function reverse(string) {
    return string.split("").reverse().join("");
}

// Returns true for a palindrome, false otherwise
function palindrome(string) {
    let processedContent = string.toLowerCase();
    return processedContent === reverse(processedContent);
}

//Returns array of the email address
function emailParts(email) {
    email = email.toLowerCase().split("@");
    return email;
}