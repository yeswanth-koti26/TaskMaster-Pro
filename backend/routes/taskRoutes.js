const express = require('express');
const router = express.Router();
const { createTask, getTasks, updateTask, deleteTask, addComment } = require('../controllers/taskController');
const auth = require('../middlewares/auth');

// Create task
router.post('/', auth, createTask);

// Get all tasks
router.get('/', auth, getTasks);

// Update task
router.put('/:id', auth, updateTask);

// Delete task
router.delete('/:id', auth, deleteTask);

// Add comment to task
router.post('/comment/:id', auth, addComment);

module.exports = router;
