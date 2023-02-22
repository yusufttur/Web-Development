// ITERATION

const students = [
  {
    id: 1,
    first_name: "Abie",
    gender: "Male",
    department: "Product Management",
    age: 26,
    start_date: "2006",
    end_date: "2011",
  },
  {
    id: 2,
    first_name: "Hadleigh",
    gender: "Male",
    department: "Services",
    age: 24,
    start_date: "2009",
    end_date: "2013",
  },
  {
    id: 3,
    first_name: "Grete",
    gender: "Female",
    department: "Legal",
    age: 22,
    start_date: "2010",
    end_date: "2016",
  },
  {
    id: 4,
    first_name: "Ludvig",
    gender: "Male",
    department: "Research and Development",
    age: 28,
    start_date: "2012",
    end_date: "2014",
  },
  {
    id: 5,
    first_name: "Tiertza",
    gender: "Female",
    department: "Accounting",
    age: 24,
    start_date: "2013",
    end_date: "2017",
  },
  {
    id: 6,
    first_name: "Callean",
    gender: "Male",
    department: "Marketing",
    age: 21,
    start_date: "2008",
    end_date: "2011",
  },
];

// FOR EACH

// #1 - One element
//console.log(students[2].first_name); //Grete

// #2 - All elements with for loop
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i].first_name);    
// }

// #3 - All elements with for each loop
// students.forEach(element => {
//     console.log(element.first_name);
// });

// #4 - One element with function
// function printName(student){
//     console.log(student.first_name);
// }
// printName(students[0]);

// #5 - All elements with function
// students.forEach(printName => {
//     console.log(printName.first_name);
// });

// #6 - All elements with variable function and for each loop
// const printNameArrow = (student) => {console.log(student.first_name)};
// students.forEach(printNameArrow);

// #7 - All elements with inline function and for each loop 
// students.forEach((student) => {console.log(student.first_name)});

// mixedArray = [5, 'a']
// mixedArray.forEach((x) => console.log(typeof x));

// FILTER
maleStudents = students.filter((student) => student.gender == 'Male');
// console.log(maleStudents);

// FIND
findStudent3 = students.find((student) => student.id === 3);
// console.log(findStudent3);

// find the first matching element
findStudentOver27 = students.find((student) => student.age > 27);
// console.log(findStudentOver27);

// FINDINDEX
indexStudent = students.findIndex((student) => student.id == 4);
// console.log(indexStudent);

indexNotFoundStudent = students.findIndex((student) => student.id == 7);
// console.log(indexNotFoundStudent); // -1

// EVERY
// returns boolean if all the elements matche the condition
allStudentsOver25 = students.every((student) => student.age > 25);
// console.log(allStudentsOver25); //false

// SOME
// returns boolean if some of the elements matche the condition 
someStudentOver25 = students.some((student) => student.age > 25);
// someStudentOver25 = students.some((student) => {return student.age > 25});
// console.log(someStudentOver25); //true

// #2 with function
//  function studentOver25(student){
//     return student.age > 25
//  }

// isOver25 = students.some(studentOver25);
// console.log(isOver25);

// SORT
// sorts the elements in an array
const cars = ["BMW", "Volvo", "Mini", "Audi", "Mercedes"];
// console.log(cars.sort());

const numbers = [4, 12, 45, 4, 123, 21];
// console.log(numbers.sort()); //[12, 123, 21, 4, 4, 45]

// console.log(numbers.sort((a, b) => a - b)); // [4, 4, 12, 21, 45, 123]
// console.log(numbers); // changes the content of the array
// console.log(numbers.sort((a, b) => b - a)); // [123, 45, 21, 12, 4, 4]
// console.log(numbers); // changes the content of the array

// console.log(students.sort((a, b) => a.age - b.age));
// console.log(students.sort((a, b) => a.start_date - b.start_date));

// INCLUDES
// returns boolean if the element exists in the array
//  console.log(cars.includes('BMW')); // true
//  console.log(cars.includes('bmw')); // false

 // MAP
 // recreates a new array with specified opeartion for each element
mappedStudents = students.map((student) => {
    return {name: student.first_name, id:student.id}
});
// console.log(mappedStudents);

mappedStudyYears = students.map((student) => {
    return {
        name: student.first_name,
        study_year: student.end_date - student.start_date
    }
});
// console.log(mappedStudyYears);

mappedStudentsWithStudyYears = students.map((student) => {
    return {
        ...student,
        study_year: student.end_date - student.start_date
    }
});
// console.log(mappedStudentsWithStudyYears);

// REDUCE

const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
result = numberArr.reduce((rslt, numb) => rslt + numb, 50);
// console.log(result);

studentTotalAge = students.reduce((totalAge, student) => {return totalAge + student.age}, 0);
// console.log(studentTotalAge);

averageAge = studentTotalAge / students.length;
// console.log(Math.ceil(averageAge));

// REDUCE IN GROUPS

departmentNumbers = students.reduce((department, student) =>{
    if (department[student.department]) {
        department[student.department]++;
    } else {
        department[student.department] = 1;
    }
    return department;
}, {});

// console.log(departmentNumbers);

// for loop usage

departments = {};
for (let i = 0; i < students.length; i++) {
   if (departments[students[i].department]) {
    departments[students[i].department]++;
   } else {
    departments[students[i].department] = 1;
   }
}
// console.log(departments);

// #2 example with for loop

let carArr = [ 
    {model:'volkswagen',color:'red'},
    {model:'mercedes',color:'blue'},
    {model:'toyota',color:'black'},
    {model:'skoda',color:'red'},
    {model:'hyundai',color:'red'},
    {model:'hyundai',color:'blue'}
];

colorNumbers = {};
 for (let i = 0; i < carArr.length; i++) {
    if (colorNumbers[carArr[i].color]) {
        colorNumbers[carArr[i].color]++;
    } else {
        colorNumbers[carArr[i].color] = 1;
    }   
 }
//  console.log(colorNumbers);

// #2 example with reduce

carColors = carArr.reduce((colors, car) => {
    (colors[car.color] ? colors[car.color]++ : colors[car.color] = 1);
    return colors;
}, {});
// console.log(carColors);

// ----------------------------------
carColorsWritten = carArr.reduce((color, car) => {
    if (color[car.color]) {
        color[car.color].push(car);
    } else {
        color[car.color] = [car]
    }
    return color;
}, {});

// console.log(carColorsWritten);

// ---------------------------------

carColorsWritten2 = carArr.reduce((colors, car) => {
    (colors[car.color] = colors[car.color] || []).push(car);
    return colors;
}, {});

// console.log(carColorsWritten2);