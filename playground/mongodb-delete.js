// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to mongodb sever');
    }
    console.log('Connected to mongodb sever');

    // db.collection('Todos').deleteMany({text: 'Eat lunch'})
    //     .then((result) => {
    //         console.log(result);
    //     });

    // db.collection('Todos').deleteOne({text: 'Eat lunch'})
    //     .then((result) => {
    //         console.log(result);
    //     });

    // db.collection('Todos').findOneAndDelete({completed: false})
    //     .then((result) => {
    //         console.log(result);
    //     });
    
    // db.collection('Users').find().toArray()
    //     .then((result) => {
    //         for(var i = 0; i < result.length; i++) {
    //             db.collection('Users').find({name: result[i].name}).toArray()
    //                 .then((filtered) => {
    //                     if(filtered.length > 1) {
    //                         db.collection('Users').deleteOne({name: filtered[0].name});
    //                     }
    //                 });
    //         }
    //     });

    db.collection('Users').deleteOne({_id: new ObjectID('5981aaa0aa74fb32d6319297')});

    // db.close();
});