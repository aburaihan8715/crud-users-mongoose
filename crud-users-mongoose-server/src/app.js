import express from "express";
const app = express();
import cors from "cors";
import UserModel from "./models/userModels.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// post user
app.post("/users", async (req, res) => {
  try {
    const newUser = new UserModel({
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    });
    const data = await newUser.save();
    if (!data) return res.status(404).send({ message: "something went wrong!" });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
// get all user
app.get("/users", async (req, res) => {
  const data = await UserModel.find();
  if (!data) return res.status(404).send({ message: "users not found!" });
  res.status(200).send(data);
});
// get specific user
app.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  const data = await UserModel.findById(id);
  // or
  // const data2 = await UserModel.findOne({_id: id});

  if (!data) return res.status(404).send({ message: "user not found!" });
  res.status(200).send(data);
});
// delete a user
app.delete("/users/:id", async (req, res) => {
  const id = req.params.id;
  const data = await UserModel.findByIdAndDelete(id);
  // or
  // const data2 = await UserModel.deleteOne({_id: id});
  if (!data) return res.status(404).send({ message: "user not found!" });
  res.status(200).send(data);
});
// update a user
app.put("/users/:id", async (req, res) => {
  const id = req.params.id;
  const updateUser = {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  };
  const data = await UserModel.findByIdAndUpdate(id, updateUser);
  // or
  // const data2 = await UserModel.updateOne({ _id: id }, updateUser);
  if (!data) return res.status(404).send({ message: "user not found!" });
  res.status(200).send(data);
});

export default app;
