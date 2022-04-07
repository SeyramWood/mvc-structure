const register = (req, res) => {
  res.send("<h1>Register Here</h1>");
};

const login = (req, res) => {
  res.send("<h1>Login successful!</h1>");
};

module.exports = { register, login };
