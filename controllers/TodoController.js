const TodoModel = require("../models/TodoModel");

module.exports.getTodo = async (req, res) => {
    const toDo = await TodoModel.find()
    res.send(toDo)
}

module.exports.saveToDo = async (req, res) => {

    const {text} = req.body;

    TodoModel.create({text}).then((data) => {
        console.log("Added Successfully...");
        res.send(data)
    })
};

module.exports.updateToDo = async (req, res) => {
    const {_id, text} = req.body;
    TodoModel
    .findByIdAndUpdate(_id, {text})
    .then(() => {
        res.send("Updated Successfully...")
    }).catch((err) => {
        console.log(err)
    })
}

module.exports.deleteTodo = async (req, res) => {
    const {_id} = req.body;
    TodoModel
    .findByIdAndDelete(_id)
    .then(() => {
        res.send("Deleted Successfully...")
    }).catch((err) => {
        console.log(err)
    })
}