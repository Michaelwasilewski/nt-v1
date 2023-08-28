const express = require('express');
const router = express.Router();
const Task = require('../models/Task.js');

// @route   GET api/tasks
// @desc    Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/tasks/:id
// @desc    Get a single task by its ID
router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ msg: 'Task not found' });
        res.json(task);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});
// @route   POST api/tasks
// @desc    Create a post
router.post('/', async (req, res) => {
    try {
        const newTask = new Task(req.body);
        console.log(req.body);
        const task = await newTask.save();
        res.json(task);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT api/tasks/:id
// @desc    Update a task
router.put('/:id', async (req, res) => {
    try {
        let task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ msg: 'Task not found' });

        task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(task);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/tasks/:id
// @desc    Delete a task
router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ msg: 'Task not found' });

        await task.remove();
        res.json({ msg: 'Task removed' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;