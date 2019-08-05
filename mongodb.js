// CRUD operations

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)
    const oneTask = {
      description: 'My new task',
      completed: true
    }

    const dataTasks = [
      {
        description: 'My new task',
        completed: true
      },
      {
        description: 'My second task',
        completed: false
      },
      {
        description: 'Last task',
        completed: false
      }
    ]

    // const dataNew = {
    //   name: 'John',
    //   age: 22
    // }

    // db.collection('tasks').insertMany(dataTasks, (error, result) => {
    //   if (error) {
    //     return console.log('Unable to insert user')
    //   }
    //   console.log(result.ops)
    // })

    // ///// ==> INSERT ONE
    // db.collection('tasks').insertOne(oneTask, (error, result) => {
    //   if (error) {
    //     return console.log('Unable to insert user')
    //   }
    //   console.log(result.ops)
    // })
    // db.collection('tasks').findOne(
    //   { _id: new ObjectID('5d48161b1bce85619fd666c0') },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user')
    //     }
    //     console.log(result)
    //   }
    // )

    // db.collection('tasks')
    //   .find({ completed: false })
    //   .toArray((err, tasks) => {
    //     if (err) {
    //       return console.log('All tasks completed')
    //     }
    //     console.log(tasks)
    //   })

    //// ==> UPDATE

    // db.collection('tasks')
    //   .updateMany(
    //     { completed: false },
    //     {
    //       $set: {
    //         completed: true
    //       }
    //     }
    //   )
    //   .then(result => {
    //     console.log(result.modifiedCount)
    //   })
    //   .catch(error => {
    //     console.log('All tasks completed at that time')
    //   })

    // ==> DELETE

    db.collection('tasks')
      .deleteOne(
        {
          description: 'My new task'
        },
      )
      .then(result => {
        console.log(result.deletedCount)
      })
      .catch(error => {
        console.log('All tasks completed at that time')
      })

    client.close()
  }
)
