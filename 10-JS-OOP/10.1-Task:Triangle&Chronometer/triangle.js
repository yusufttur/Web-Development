class Dots {
  constructor(a1, a2, b1, b2, c1, c2) {
    this.a1 = a1;
    this.a2 = a2;
    this.b1 = b1;
    this.b2 = b2;
    this.c1 = c1;
    this.c2 = c2;
  }

  calculateLines() {
    const l1 = Math.sqrt(
      Math.pow(this.a2 - this.a1, 2) + Math.pow(this.b2 - this.b1, 2)
    );
    const l2 = Math.sqrt(
      Math.pow(this.a2 - this.a1, 2) + Math.pow(this.c2 - this.c1, 2)
    );
    const l3 = Math.sqrt(
      Math.pow(this.c2 - this.c1, 2) + Math.pow(this.b2 - this.b1, 2)
    );
    return [l1, l2, l3];
  }
}

class Triangle extends Dots {
  constructor(a1, a2, b1, b2, c1, c2) {
    super(a1, a2, b1, b2, c1, c2);
    const [l1, l2, l3] = this.calculateLines();
    this.l1 = l1;
    this.l2 = l2;
    this.l3 = l3;
  }
  calculateArea() {
    const s = this.calculatePerimeter() / 2;
    const area = Math.sqrt(s * (s - this.l1) * (s - this.l2) * (s - this.l3));
    return area;
  }

  calculatePerimeter() {
    const perimeter = this.l1 + this.l2 + this.l3;
    return perimeter;
  }
}

// create an instance
const triangle1 = new Triangle(0, 0, 4, 0, 3, 0);

// display the lines
console.log(`l1 = ${triangle1.calculateLines()[0].toFixed(2)}`); // l1 = 4.00
console.log(`l2 = ${triangle1.calculateLines()[1].toFixed(2)}`); // l2 = 3.00
console.log(`l3 = ${triangle1.calculateLines()[2].toFixed(2)}`); // l3 = 5.00

// calculate the perimeter
const perimeter = triangle1.calculatePerimeter().toFixed(2);
console.log(`Perimeter: ${perimeter}`); // Perimeter: 12.00

// calculate the area
const area = triangle1.calculateArea().toFixed(2);
console.log(`Area: ${area}`); // Area: 6.00
