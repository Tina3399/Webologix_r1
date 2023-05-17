const express = require("express");
const { connection } = require("./config/db");

const { userRouter } = require("./routes/User.Routes");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/api/personal_details", userRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (err) {
    console.log("Connection failed");
    console.log({ error: err.message });
  }

  console.log(`Server is running on PORT ${process.env.PORT}`);
});
