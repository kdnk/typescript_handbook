function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected string or number, got " + padding + ".");
}
padLeft("Hello world", 4);
console.log(padLeft("Hello world", true));
