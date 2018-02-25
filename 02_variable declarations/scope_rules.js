function f(shouldInitialize) {
    if (shouldInitialize) {
        var x = 10;
    }
    console.log(x);
    console.log(y);
    return x;
}
console.log(f(true));
console.log(f(false));
