// encapsulation

// const salary = 4000;
// const extraHour = 20;
// const extraHourPrice = 10;

// const calculateSalary = function () {
//   return salary + extraHour * extraHourPrice;
// };

// console.log(calculateSalary());

const employee1 = {
  salary: 2000,
  extraHour: 20,
  extraHourPrice: 15,
  salaryCalculator: function () {
    return this.salary + this.extraHour * this.extraHourPrice;
  },
};

console.log(employee1.salaryCalculator());
