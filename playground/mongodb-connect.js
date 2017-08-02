// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to mongodb sever');
    }
    console.log('Connected to mongodb sever');

    // db.collection('Todos').insertOne({
    //    text: 'Something to do',
    //    completed: false  
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unalbe to insert todo.', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 4));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Anton Chernev',
    //     age: 20,
    //     location: 'Sofia'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert user.', result);
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});