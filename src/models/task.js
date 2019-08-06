const mongoose = require('mongoose')

// // ==> Tasks model
const Task = mongoose.model('Task', {
  description: {
    type: String,
    trim: true,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

module.exports = Task