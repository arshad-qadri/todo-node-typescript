import { Request, Response } from "express";
import TodoModel from "../models/todoModel";

// ==============> create todo
export const createTodo = async (req: Request, res: Response) => {
  const { todo, isDone } = req.body;
  await TodoModel.create({ todo, isDone })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// ==============> find all todo
export const findTodo = async (req: Request, res: Response) => {
  await TodoModel.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// ==============> find one todo
export const findOneTodo = async (req: Request, res: Response) => {
  await TodoModel.findOne({ _id: req.params.id })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
// ==============> update todo
export const updateOneTodo = async (req: Request, res: Response) => {
  const { todo, isDone } = req.body;
  await TodoModel.findOneAndUpdate(
    { _id: req.body.id },
    { $set: { [todo ? "todo" : "isDone"]: todo ? todo : isDone } }
  )
    .then(() => {
      res.send({ message: "Updated Successfully !" });
    })
    .catch((err) => {
      console.log(err);
    });
};

// ==============> delete one todo
export const deleteOneTodo = async (req: Request, res: Response) => {
  await TodoModel.deleteOne({ _id: req.params.id })
    .then(() => {
      res.send({ message: "Deleted successfully !" });
    })
    .catch((err) => {
      console.log(err);
    });
};
