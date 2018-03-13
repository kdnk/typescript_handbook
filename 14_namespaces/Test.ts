/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

let stringList = ["Hello", "98052", "101"];

let validators: { [s: string]: Validation.StringValidator } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

for (let s of stringList) {
  for (let name in validators) {
    let isMatch = validators[name].isAcceptable(s);
    console.log(`'${s}' ${isMatch ? "matches" : "does not match"} '${name}'.`);
  }
}
