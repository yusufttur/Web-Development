const Users = require('../models/Users');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const user = ({ username, password, name, surname } = req.body);
  try {
    const data = await Users.create(user);
    res.status(200).json(data);
  } catch (error) {}
  res.statusCode(400).json({ message: 'User could not be created.' });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const data = await Users.findOne({ username }).exec();
  if (!data) {
    return res.status(404).json({ message: 'User cannot be found..' });
  }

  const isValidated = await data.validatePassword(password);

  if (!isValidated) {
    return res.status(403).json({ message: 'The password is incorrect.' });
  }

  const user = {
    id: data._id,
    username: data.username,
    name: data.name,
    surname: data.username,
  };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN);
  res.status(200).json(user, ...accessToken);
};
const find = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Users.findOne({ _id: id }).exec();
    res.status(200).json(data);
  } catch (error) {
    res.statusCode(404).json({ message: 'User cannot be found.' });
  }
};

const findAll = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Users.find().exec();
    res.status(200).json(data);
  } catch (error) {
    res.statusCode(404).json({ message: 'Users cannot be found.' });
  }
};

const update = async (req, res) => {
  const user = ({ id, username, password, name, surname } = req.body);
  try {
    const data = await Users.updateOne({ _id: user.id }, { $set: user }.exec());
    res.status(200).json(data);
  } catch (error) {}
  res.statusCode(400).json({ message: 'User could not be updated.' });
};
const remove = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Users.deleteOne({ _id: id }).exec();
    res.status(200).json(data);
  } catch (error) {
    res.statusCode(404).json({ message: 'User cannot be deleted.' });
  }
};

module.exports = {
  register,
  login,
  find,
  findAll,
  update,
  remove,
};
