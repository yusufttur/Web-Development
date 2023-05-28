const logger = (req, res, next) => {
  console.log('I am a middleware');
  next();
};

module.exports = logger;
