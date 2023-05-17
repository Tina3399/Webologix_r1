const express = require("express");
const { UserModel } = require("../models/User.model");

const userRouter = express.Router();

// get request

userRouter.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.send(users);
  } catch (error) {
    res.send({
      msg: "Something went wrong",
      error: error.message,
    });
  }
});

// post request

userRouter.post("/", async (req, res) => {
  try {
    const { name, age, email } = req.body;

    const userDetails = new UserModel({ name, age, email });

    await userDetails.save();

    res.send({ msg: "New has been successfully registered." });
  } catch (error) {
    res.send({ msg: "Something went wrong", error: error.message });
  }
});

module.exports = { userRouter };
