let startNumber = 0;

function manageState(req, res, next) {

  next();

  startNumber += 1;

  console.log(`Number is ${startNumber}`);
};

module.exports = manageState;