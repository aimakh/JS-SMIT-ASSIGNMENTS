Q1

function addNum(num) {
    return function (newNum) {
        return num + newNum
    }
}
let addedNum = addNum(7);
console.log(addedNum(5));

Q2 
let array = [1, 5, 8, 9];
function arr1(array, value){
    if (array.length === 0){
        return false
    } else if (array[0] === value){
        return true
    }
    else {
        return arr1(array.slice(1) , value)
    }
}
console.log(arr1(array,1));

Q6

let details = { name: "Aaima", age: 20 , rollno: 123 , Classname: "JavaScript" };
function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
save("saveDetails" , details);
// console.log("saveDetails" , details);
let myStoredDetails = JSON.parse(localStorage.getItem("saveDetails"));
console.log(myStoredDetails);
Q7
function savedDetails(key) {
  let value = localStorage.getItem("saveDetails");
  if (value) {
    return JSON.parse(value);
  } else {
    return null;
  }
}
let StoredDetails = savedDetails("key");
console.log(StoredDetails);

Q8
function saveAndRetrieve(object) {
    for (let obj in object) {
      localStorage.setItem(prop, JSON.stringify(object[obj]));
    }
  
    
    let newObj = {};
    for (let obj in object) {
      let value = localStorage.getItem(obj);
      newObj[obj] = JSON.parse(value);
    }
    return newObj;
  }
   let myObject = { name: "Aaima", age: 20 , rollno: 123 , Classname: "JavaScript" };
  let newObject = saveAndRetrieve(myObject);
  console.log(newObject); 
