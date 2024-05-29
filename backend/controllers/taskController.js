const Task = require('../models/Task');

// Create task
exports.createTask = async (req, res) => {
    const { title, description, assignedTo, dueDate } = req.body;

    try {
        const task = new Task({
            title,
            description,
            assignedTo,
            dueDate
        });

        await task.save();
        res.json(task);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Get all tasks
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().populate('assignedTo', 'name email');
        res.json(tasks);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Update task
exports.updateTask = async (req, res) => {
    const { title, description, assignedTo, dueDate, status } = req.body;

    try {
        let task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ msg: 'Task not found' });
        }

        task.title = title || task.title;
        task.description = description || task.description;
        task.assignedTo = assignedTo || task.assignedTo;
        task.dueDate = dueDate || task.dueDate;
        task.status = status || task.status;

        await task.save();
        res.json(task);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Delete task
exports.deleteTask = async (req, res) => {
    try {
        let task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ msg: 'Task not found' });
        }

        await task.remove();
        res.json({ msg: 'Task removed' });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Add comment to task
exports.addComment = async (req, res) => {
    const { text } = req.body;

    try {
        let task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ msg: 'Task not found' });
        }

        const newComment = {
            user: req.user.id,
            text
        };

        task.comments.unshift(newComment);
        await task.save();
        res.json(task.comments);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
