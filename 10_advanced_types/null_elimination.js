function broken(name) {
    function postfix(epithet) {
        return name.charAt(0) + ". the " + epithet;
    }
    return postfix("great");
}
console.log("broken(null)", broken(null));
