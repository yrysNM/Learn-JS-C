function myFunc() {
    if (myFunc.caller == null) {
        console.log("The function was called from the top!");
    } else {
        console.log("This functions caller was " + myFunc.caller);
    }
}

myFunc()();