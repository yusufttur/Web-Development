// create objects

const obj = {};

const circle = {
  radius: 5,
  location: {
    x: 1,
    y: 2,
  },
  name: 'circle',
  // method (named function if outside the object)
  draw: function () {
    console.log('circle is drawn');
  },
};

// console.log(circle);

// factory pattern
const createCircle = function (paramRadius) {
  return {
    radius: paramRadius,
    draw: function () {
      console.log('circle is drawn');
    },
  };
};

const firstObject = createCircle(5);
const secondObject = createCircle(8);

// constructor pattern

// this ->window obj in browser
function Circle(paramRadius) {
  // capital case -> object (best practice)
  this.radius = paramRadius; // this means radius of the Circle function equals to paramRadius
  this.draw = function () {
    console.log('Circle is drawn');
  };
}

const circle_3 = new Circle(3);
console.log(circle_3); // has origin too, reference type

circle_3.origin = 0;
console.log(circle_3);

circle_3['base-origin'] = 4; // to create an object incl. '-'
