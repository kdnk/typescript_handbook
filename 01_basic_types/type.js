// numbers
var list = [1, 2, 3];
var list2 = [1, 2, 3];
// tuple
var x;
x = ["hello", 10];
console.log(x[0].substr(1));
console.log(x[1]);
x[3] = "world";
if (x[5]) {
    console.log(x[5].toString());
}
x[6] = "true";
console.log(x);
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[2];
console.log(c);
console.log(colorName);
