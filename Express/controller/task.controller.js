const users = require("../public/user.json");

exports.adduser = (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json({ message: " user added successfully" });
};

exports.getAllusers = (req, res) => {
  res.status(200).json(users);
};

exports.getuser = (req, res) => {
  const id = +req.query.id;
  let user = users.find((item) => item.id === id);
  res.status(200).json(user);
};

exports.repalceuser = (req, res) => {
  const id = +req.query.id;
  let userIndex = users.findIndex((item) => item.id === id);
  let user = users[userIndex];
  users.splice(userIndex, 1, { ...req.body });
  res.status(200).json({ message: "user replace successfully...." });
};

exports.updateuser = (req, res) => {
  const id = +req.query.id;
  let userIndex = users.findIndex((item) => item.id === id);
  let user = users[userIndex];
  let item = users.splice(userIndex, 1, { ...user, ...req.body });
  res.status(200).json({ message: "user update successfully...." });
};

exports.deleteuser = (req, res) => {
  const id = +req.query.id;
  let userIndex = users.findIndex((item) => item.id === id);
  let user = users[userIndex];
  let item = users.splice(userIndex, 1);
  res.status(200).json({ message: "user delete successfully...." });
};
