const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
            text: {
                type: String,
            },
        }
    ],
    dueDate: {
        type: Date,
    },
    status: {
        type: String,
        default: 'Pending',
    },
});

module.exports = mongoose.model('Task', TaskSchema);
