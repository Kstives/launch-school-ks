// What gets returned by y++ in the second snippet, and why?

// Snippet 1
let x = "5";
x = x + 1; // "51"

// Snippet 2

let y = "5";
y++; // this returns "51" because y++ is short for y + 1, the addition operator
// coerces the 1 into the string "5" to make "51"

// Launch School solution:

/*
The return value is the numeric value 5.

If you apply ++ to a string, JavaScript coerces it into a number. In this case, "5" gets coerced to the number 5. After coercion, it then increments the value to 6. However, the return value is 5 since the post-increment operator (y++) returns the original value of y, not the incremented value.

This shows that x++ is not the same thing as x = x + 1.
*/