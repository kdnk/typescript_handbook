function extend(first, second) {
    var result = {};
    console.log("logging first argument...");
    for (var id in first) {
        console.log(id);
        result[id] = first[id];
    }
    console.log("\nlogging second argument...");
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            console.log(id);
            result[id] = second[id];
        }
    }
    return result;
}

var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    return Person1;
}());

var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
        console.log("\nlogging...");
        for (var i in this) {
            if (this.hasOwnProperty(i)) {
                console.log(i);
            }
        }
    };
    return ConsoleLogger;
}());
var jim = extend(new Person1("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();
