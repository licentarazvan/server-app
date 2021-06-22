const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema;

const taskSchema = new TaskSchema({
    name: String
})

module.exports = mongoose.model('TaskSchema', taskSchema);


