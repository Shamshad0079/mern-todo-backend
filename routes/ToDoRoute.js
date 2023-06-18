const {Router} = require("express");
const { getTodo, saveToDo, updateToDo, deleteTodo } = require("../controllers/TodoController");

const router = Router();

router.get('/', getTodo)
router.post('/save', saveToDo)
router.post('/update', updateToDo)
router.post('/delete', deleteTodo)


module.exports = router;