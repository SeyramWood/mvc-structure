const welcome = (req, res) => {
  res.send("<h1>Hello World!</h1>");
};

const greet = (req, res) => {
  res.send("<h1>Hello 🖐, Fellow Programmers</h1>");
};

module.exports = { welcome, greet };
