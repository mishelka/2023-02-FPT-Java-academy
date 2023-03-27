//var goo = false;
function foo() {
    //Short-circuit evaluation of && and || operators:
    if(true == true || goo) {
        console.log("|| PRESLO!!" + (true == true || goo) + "\n");
        //Passes, no error because goo isn't defined.
    }
    if(false && goo) {
        console.log("&& PRESLO!!\n");
        //Passes, no error because goo isn't defined.
    }

    //no | and & Java-like alternatives -> converts operands to bitwise
    //if(true == true | goo) {
    //    console.log("| PRESLO!!" + (true == true | goo) + "\n"); // 0 because | works only in bitwise mode
    //    //Passes, no error because goo isn't defined.
    //}
    //if(false & goo) {
    //    console.log("& PRESLO!!" + true == true & goo + "\n");
    //    //Passes, no error because goo isn't defined.
    //}
}
