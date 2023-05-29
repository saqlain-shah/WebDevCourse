const bcrypt = require("bcryptjs");
const User = require("../models/user");
const { createError } = require("../utils/err.js");

const signUp = async (req, res, next) => {
  try {
    console.log(req.body);
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(200).send("User has been created.");
    console.log("User has been created.");
  } catch (err) {
    next(err);
    console.log("error.");
  }
};

const signIn = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found!"));
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    // Rest of the code for sign-in functionality

  } catch (error) {
    // Handle error
  }
};

module.exports = { signUp, signIn };
