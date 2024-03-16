import express from 'express';
import Todo from '../models/Data.mjs';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.send({ data: todos });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.post('/add', async (req, res) => {
  try {
    await Todo.create(req.body);
    res.send({ message: "Todo created successfully" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).send({ message: "Todo not found" });
    }
    res.send({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.put('/:id' ,async (req ,res)=>{
  try {
     const { id } = req.params
     const {  Title } =  req.body
  
     if (!Title) {
      res.status(400).send({message : "Title is required"})
     }
     const updatedTodo = await Todo.findByIdAndUpdate(id, { Title }, { new: true });

     if (!updatedTodo) {
      res.status(404).send({message : "todo not found"})
     }

      res.send({message : "todo successfully updated"})
    } catch (error) {
     console.error(error)
    res.status(500).send({message : "server error"})
  }
});

export default router;
