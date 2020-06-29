// Adds `reverse` to all strings.
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}

// Defines a Phrase object
function Phrase(content) {
    this.content = content;

    // Returns content processed for palindrome testing.
    this.processedContent = function processedContent() {
        return this.content.toLowerCase();
    }

    // Returns true if the phrase if palindrome, false otherwise.
    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
    }

    /*
    // Returns all uppercase content
    this.louder = function louder() {
        return this.content.toUpperCase();
    }
    
    this.processor = function(string) {
        return string.toLowerCase();
    }
    this.processedContent = function() {
		return this.processor(this.content);
    }
    */
}

/*
// Defines a TranslartedPhrase object.
function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

    // Returns translation processed for palindrome testing.
    this.processedContent = function processedContent() {
        return this.translation.toLowerCase();
    }
}
TranslatedPhrase.prototype = new Phrase();
*/