let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Kansas -> kansas
// North Dakota -> north-dakota

// Returns a URL-friendly version of a string
// Example: "north Dakota" -> "north-dakota"
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}

function dotComUrlify(element) {
    return 'https://example.com/' + element.toLowerCase().split(/\s+/).join('-');
}

// urls: Imperative version 
function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(function(element) {
        urls.push(urlify(element));
    });
    return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version 
function functionalUrls(elements) {
    return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

function dotComUrls(elements) {
    return elements.map(element => dotComUrlify(element));
}
console.log(dotComUrls(states));



// Singles: Imperative Version
function imperativeSingles(elements) {
    let singles = [];
    elements.forEach(function(element) {
        if (element.split(/\s+/).length === 1) {
            singles.push(element);
        }
    });
    return singles;
}
console.log(imperativeSingles(states));

// Singles: Functional Version
function functionalSingles(elements) {
    return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// Using String#includes to solve exercise problems
function stringIncludes(elements) {
    return elements.filter(element => element.split(/\s+/).includes("Dakota"));
}
console.log(stringIncludes(states));

// Using regex to solve exercise problems
function splitTwo(elements) {
    return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(splitTwo(states));



let numbers = [1,2,3,4,5,6,7,8,9,10];
//sum: Imperative solution
function imperativeSum(elements) {
    let total = 0;
    elements.forEach(function(n) {
        total += n;
    });
    return total;
}
console.log(imperativeSum(numbers));

// sum: Functional solution
function functionalSum(elements) {
    return elements.reduce((total, n) => {return total += n; });
}
console.log(functionalSum(numbers));

//length[state] = state.length;
// lengths: Imperative solution
function imperativeLengths(elements) {
    let lengths = {};
    elements.forEach(function(element) {
      lengths[element] = element.length;
    });
    return lengths;
  }
  console.log(imperativeLengths(states));

// lengths: Functional solution
function functionalLengths(elements) {
    return elements.reduce((lengths, element) => {
                            lengths[element] = element.length;
                            return lengths;
                            }, {});
}
console.log(functionalLengths(states));

// Exercise 7.3.1, using reduce to write a function returns the products of all the elements in an array.
// Imperative way
function imperativeProduct(elements) {
    return elements.reduce((total, element) => { return total *= element;}, 1);
}
console.log(functionalProduct(numbers));

// Functional way
function functionalProduct(elements) {
    return elements.reduce((total, element) => total *= element);
}
console.log(functionalProduct(numbers));