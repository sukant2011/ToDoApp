var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var taskSchema = new Schema({
  name: {type :String},
  dueDate:{type :Date},
  priority: { type: Number },
  createdDate:{type:Date, default: Date.now},
  modifiedDate:{type:Date, default: Date.now}
});

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;

