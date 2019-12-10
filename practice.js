const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]


/*
Function to filter out `k` words
(Google 'javascript startswith' to get started)
*/
const wordsWithoutK = (newWords) => {
            let newArray = []
            /*
            Function to build a single string from the array
            (Google 'javascript combine all items in array' to get started)
            */
           for (const word of newWords) {
           if (!word.startsWith("k") ) {
                   newArray.push(word)
               }
           } 
           return newArray
       }
           /*
           Invoke the filtering function and store its return value
 */
/*
    Invoke the string building function, and pass the
    return value of the previous function as an argument
*/
let testingFunction = wordsWithoutK(words);
console.log(testingFunction);

    