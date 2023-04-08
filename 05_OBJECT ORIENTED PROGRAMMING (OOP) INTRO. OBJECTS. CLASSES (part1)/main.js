
console.log('%c ---------------Task 1---------------', 'background-color: yellow; font-weight: bold; color:red');

class Circle {
    constructor(x, y, radius) {
      this.x = x;
      this.y = y;
      this.radius = radius;
    }
  
    getLength() {
      return 2 * Math.PI * this.radius;
    }
  
    static getLengthByRadius(radius) {
      return 2 * Math.PI * radius;
    }
  
    getCopy() {
      return new Circle(this.x, this.y, this.radius);
    }
  
    static getCircle(x, y, radius) {
      return new Circle(x, y, radius);
    }
  
    isPointInside(x, y) {
      const distance = Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2);
      return distance <= this.radius;
    }
  
    toString() {
      return `Circle(center: (${this.x}, ${this.y}), radius: ${this.radius})`;
    }
  }

// створення об'єкту Circle
const circle1 = new Circle(0, 0, 8);

// отримання довжини кола
console.log(circle1.getLength());

// отримання довжини кола зі статичного методу
console.log(Circle.getLengthByRadius(8));

// копіювання об'єкту Circle
const circle2 = circle1.getCopy();
console.log(circle2);

// створення нового об'єкту Circle
const circle3 = Circle.getCircle(10, 10, 3);
console.log(circle3);

// перевірка попадання точки до кола
console.log(circle1.isPointInside(4, 4));
console.log(circle1.isPointInside(6, 6));

// перетворення поточного стану об'єкта на символьний рядок
console.log(circle1.toString());



console.log('%c ---------------Task 2---------------', 'background-color: yellow; font-weight: bold; color:red');

const propsCount = currentObject => `В даному об'єкті знаходиться ${Object.keys(currentObject).length} властивостей.`;

const headerContent = {
    adress: '6118 Jefferson St, West New York',
    phone: '+1 (234) 567 89 00',
    logo: 'images/header_logo.svg',
    banner_title: 'BREWERY IN NEW YORK',
    banner_slogan: 'Sharp Taste of History',
    spikelet: 'images/spikelet-yellow.svg',
    banner_text: 'Welcome to one of the oldest breweries of New York. We offer a variety of delicious craft beers, as well as exciting tours, tastings, and master-classes for those who want to learn more about the beer world.',
    normalButton: 'Beer Types',
    hoverButton: 'About Us',
}

console.log(propsCount(headerContent));


console.log('%c ---------------Task 3---------------', 'background-color: yellow; font-weight: bold; color:red');

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        console.log(`${this.surname} ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    showFullName(middleName) {
        console.log(`${this.surname} ${this.name} ${middleName}`);
    }

    showCourse() {
        let today = new Date();
        let currentYear = today.getFullYear();
        let course = currentYear - this.year;
        if (course >= 1 && course <= 6) {
            return `Current course: ${course}`
        } else return 'Курс вже не дійсний.'
    }
}

const student1 = new Student('Petro', 'Pinchuk', 2021);
student1.showFullName('Vasylovych');
console.log(student1.showCourse());


console.log('%c ---------------Task 4A---------------', 'background-color: yellow; font-weight: bold; color:red');

class Marker {
    constructor(color, inkLevel) {
      this.color = color;
      this.inkLevel = inkLevel;
    }
    
    print(text) {
        let inkPerSymbol = 0.5;
        let inkNeeded = text.replace(/\s/g, '').length * inkPerSymbol;
      if (inkNeeded <= this.inkLevel) {
        console.log(`%c${text}`, `color: ${this.color}`);
        this.inkLevel -= inkNeeded;
      } else {
        console.log(`%c${text.slice(0, Math.floor(this.inkLevel / inkPerSymbol))}`, `color: ${this.color}`);
        this.inkLevel = 0;
      }
    }
  }
  
  console.log('%c ---------------Task 4B---------------', 'background-color: yellow; font-weight: bold; color:red');
  
  const redMarker = new Marker('green', 50);
  redMarker.print('Hello, world!');
  console.log(redMarker.inkLevel);
  
  const blueMarker = new Marker('blue', 30);
  blueMarker.print('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  console.log(blueMarker.inkLevel);
  


  
  console.log('%c ---------------Task 5---------------', 'background-color: yellow; font-weight: bold; color:red');
  
class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        this._experience = 1.2;
    }

    showSalary() {
        const salary = this.dayRate * this.workingDays;
        console.log(`${this.fullName}'s salary is ${salary}`);
        return salary;
    }

    showSalaryWithExperience() {
        const salary = this.dayRate * this.workingDays * this._experience;
        console.log(`${this.fullName}'s salary with experience is ${salary}`);
        return salary;
    }

    get showExp() {
        return this._experience;
    }

    set setExp(value) {
        this._experience = value;
    }
}

const worker1 = new Worker('Petro Pinchuk', 20, 23);
const worker2 = new Worker('Bartek Hanek', 48, 22);
const worker3 = new Worker('Mikołaj Kośmider', 29, 23);

// зарплата працівника
worker1.showSalary();

// зарплата з коефіцієнтом experience
worker1.showSalaryWithExperience();

// зміна значення experience
worker1.setExp = 1.5;

// зарплата зі зміненим значенням experience
worker1.showSalaryWithExperience();

const workers = [worker1, worker2, worker3];

// сортування працівників за зарплатою з найбільшим experience
workers.sort((a, b) => b.showSalaryWithExperience() - a.showSalaryWithExperience());

// вивід зарплат працівників з найбільшим experience
workers.forEach(worker => console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`));

// динамічне сортування працівників за зарплатою з найбільшим experience
function sortBySalary(workers) {
    return workers.sort((a, b) => b.showSalaryWithExperience() - a.showSalaryWithExperience());
  }

console.log('%cSorted workers:', 'font-weight: bold;');
let sortedWorkers = sortBySalary(workers);
sortedWorkers.forEach(worker => console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`));