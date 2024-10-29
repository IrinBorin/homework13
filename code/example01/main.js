//map
const arr123 = [5, 10, 30];
const multiple2 = (x) => {
    return x*2;
}
const arr123modified= arr123.map(multiple2); //we told map what to do with the elements of the array
console.log(arr123modified);

const arrOfPeople = [{name:"John", age: 50 }, {name:"Brad", age: 12}, {name:"Nicole", age: 5}, {name: "Chris", age: 65}];
const addComingOfAge = (human) =>{
    const resultObj = {};
    resultObj.name = human.name;
    resultObj['age'] = human['age'];
    resultObj.ComingOfAge = true;
    let isAdult;
    if(resultObj['age']>=18){
        isAdult=true
    } else {
        isAdult=false
    }
    resultObj.comingOfage = isAdult;
    return resultObj;
}
//or: const isAdult = resultObj.age>18? true:false;  this is тернарный оператор (ternary operation)
const arrOfPeopleModified = arrOfPeople.map(addComingOfAge);
console.log(arrOfPeopleModified);

const agePlusOne = (human) => {
    const resultObj = {...human};
    resultObj['age'] = human['age'] +1;
    return resultObj;
}
const arrOfPeopleModifiedAgePlusOne = arrOfPeople.map(agePlusOne);
console.log(arrOfPeopleModifiedAgePlusOne);