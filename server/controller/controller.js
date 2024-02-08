import models from '../models/models.js';

export const getToDo = async (req, res) => {
  const toDos = await models.find();
  res.send(toDos);
};

export const saveToDo = (req, res) => {
  const { toDo } = req.body;

  models.create({ toDo })
    .then((data) => {
      console.log("Saved Successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

export const updateToDo = (req, res) => {
  const { id } = req.params;
  const { toDo } = req.body;

  models.findByIdAndUpdate(id, { toDo })
    .then(() => {
      res.send("Updated Successfully....");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

export const deleteToDo = (req, res) => {
  const { id } = req.params;

  models.findByIdAndDelete(id)
    .then(() => {
      res.send("Deleted Successfully....");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};
