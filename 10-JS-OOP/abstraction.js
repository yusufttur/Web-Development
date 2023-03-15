// abstraction
function runDVDplayer(brand) {
  this.device = brand;
  let powerSupply = {
    // by using variable instad `this` => makes private method
    input: '230V',
    output: '5V',
  };

  this.play = function () {
    console.log(`dvd runs, input: ${powerSupply.input}`);
  };

  //   this.getPowerSupplyInfo = function () {
  //     return console.log(powerSupply);
  //   };

  // Computed Property
  Object.defineProperty(this, 'getPowerSupplyInfo', {
    get: function () {
      return powerSupply;
    },
    set: function (newValue) {
      if (!newValue.input || !newValue.output) {
        return console.error('Something went wrong');
      }
      powerSupply = newValue;
    },
  });
}

const dvd = new runDVDplayer('Sony');

dvd.getPowerSupplyInfo = {
  input: '230V',
  output: '12V',
};

// dvd.getPowerSupplyInfo = () => {
//   console.log('hacked this device');
// };

// dvd.getPowerSupplyInfo();
// dvd.powerSupply = { input: '1000V', outoput: '40V' };
// // dvd.device = 'Philips';
// dvd.play();
