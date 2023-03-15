// polymorphism -> dependency inversion, solid principles

/*
SOLID is an acronym that stands for five object-oriented design principles that aim to make software more maintainable, scalable, and easy to understand. Here's a brief overview of each principle:

Single Responsibility Principle (SRP): A class should have only one reason to change. In other words, a class should have only one responsibility or job to do.

Open-Closed Principle (OCP): A software entity (class, module, function, etc.) should be open for extension but closed for modification. This means that you should be able to add new functionality to a software entity without changing its existing code.

Liskov Substitution Principle (LSP): Objects of a superclass should be replaceable with objects of its subclass without affecting the correctness of the program. In other words, a subclass should be able to replace its parent class without breaking the program's behavior.

Interface Segregation Principle (ISP): A client should not be forced to depend on methods it does not use. This means that a class should have only the methods that are relevant to its clients.

Dependency Inversion Principle (DIP): High-level modules should not depend on low-level modules. Instead, both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions. This means that the code should be written in a way that high-level modules depend on abstractions, not on the details of low-level modules.

These principles were first introduced by Robert C. Martin (also known as "Uncle Bob") in his book "Agile Software Development, Principles, Patterns, and Practices." They are widely used in the software development industry as guidelines for writing clean, maintainable, and scalable code.
*/

class Notify {
  do = (sentClass) => {
    sentClass.send();
    console.log('Something notified to you.');
  };
}

class Message {
  constructor(paraMessage) {
    this.message = paraMessage;
  }
  send = () => {
    console.log(`This is an ${this.message}`);
  };
}

class Email extends Message {
  constructor(paraMessage) {
    super(paraMessage);
  }
}

class SMS extends Message {
  constructor(paraMessage) {
    super(paraMessage);
  }
}

class Fax extends Message {
  constructor(paraMessage) {
    super(paraMessage);
  }
}
const click = () => {
  // const email = new Email('Email message.');
  // const sms = new SMS('SMS message.');
  const notification = new Notify();
  notification.do(new Fax('Fax message.'));
};

click();

// const email = new Email('An email message.');

// email.send();
