// Immediately Invoked Function Expressions (IIFE)
//sometimes we make some global variable and funcation as well in a code...now if we dont want the global variable to cause problmes in the function 
// whatever you declare in functions gets polluted by global scope ....for this we use IIFE // functions can acceses the variales of gloabl scope but it it not the same the other way

//iife characteristic - we an our own personal scope and it can also execute immediately

//now as discussed in arrow.js whenever we use parenthesis it makes its own bloack...so in our case we write the funcation definition inside this ()
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//the iife that has been inviked does not know when to stop context....for this make sure to end it uisng ; //interview question write two iife if ; is not used it will throw error 


//Structure
// () ()


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')