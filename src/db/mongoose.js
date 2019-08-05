const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

// // ==> User model

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number')
      }
    }
  }
})

const me = new User({
  name: '   John   ',
  email: 'john@MAIL.COM'
})

me.save()
  .then(() => {
    console.log(me)
  })
  .catch(error => {
    console.log('Error: ', error)
  })

// // // ==> Tasks model

// const Task = mongoose.model('Task', {
//   description: {
//     type: String
//   },
//   completed: {
//     type: Boolean
//   }
// })

// const task = new Task({
//   description: 'My task in list',
//   completed: true
// })

// task
//   .save()
//   .then(() => {
//     console.log(task)
//   })
//   .catch(() => {
//     console.log('Error: ', error)
//   })
