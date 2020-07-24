let callNum = 0;
module.exports = (req, res, next) => {
  callNum++;
  if (callNum === 7) {
    res.status(500);
  } else res.header('X-Hello', 'World');
  next()
};
