// typeとの違いは？
interface labelledValue {
  label: string;
}

function printLabel(labelledObj: labelledValue) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
