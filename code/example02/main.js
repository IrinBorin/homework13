//filter
const arrayOfNumber = [18, 59, 1, 8, 17, 111];
const filter18 = (num) => {
    if (num >= 18) {
        return true;
    } else {
        return false;
    }
};
const arrayOfNumber18Plus = arrayOfNumber.filter(filter18);
console.log(arrayOfNumber18Plus);

const arrOfPeople = [{name:"John", age: 50 }, {name:"Brad", age: 12}, {name:"Nicole", age: 5}, {name: "Chris", age: 65}];

const arrOfPeopleAdults = arrOfPeople.filter (human => human.age >=18);
console.log(arrOfPeopleAdults);