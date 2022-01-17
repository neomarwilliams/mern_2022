// what is an anonymous function?
//      a function without a name-- now why would we use this?

var sayHello = function(name) {
    console.log('Hello ' + name);
};

const sayHello = (name) => {
    console.log(`Hello ${name}`);
};

// may be rewritten as :
const sayHello = name => console.log(`Hello ${name}`);
// a single parameter does not require parenthesis
// you can omit the cury braces because the function is a single statement

// benefits of arrow functions / AKA fat arrow functions
//      More concise-- NB multiple parameters DO require parenthesis and more complex function bodies require {}
//      implicit returns

// traditional function/return vs arrowFunction/return!
var square = function(n) {
    return n * n;
}

// becomes:
const square = n => n * n;

// longhand notation to return an object
// NOTE: first set of brackets are defining the function body
// and the second set of brackets are to create the object literal
const returnObjLonghand = () => {
        return { 
            firstName: 'John',
            lastName: 'Wick'
        }
    }
    /**
      * The example below wouldn't work because the 
      * brackets are interpreted as opening the body of the 
      * function rather than brackets to create an object literal 
      */
    const returnObj = () => { firstName: 'John', lastName: 'Wick' }
    // surrounding the implicit return with parenthesis solves the problem
    const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });

    // context
    class Deck{
        constructor() {
            const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
            const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
            const deck = [];
            suits.forEach(suit => {
                faces.forEach(face => {
                    deck.push(this.createCard(suit, face));
                });
            });
        } 
        createCard(suit, face) {
            return face + " of " + suit;
        }
    }