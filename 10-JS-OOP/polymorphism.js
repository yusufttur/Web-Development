// polymorphism -> dependency inversion, solid principles

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
