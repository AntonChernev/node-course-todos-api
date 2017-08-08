const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = "598302e9734521cd40cd0e1111";

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//      console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//      console.log('Todo', todo);
// }); 

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     } 
//     console.log('Todo by id', todo);
// }).catch((err) => console.log(err));

var id = "5982dcf21ff84f231fc69f66"

User.findById(id).then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log(user);
}).catch((err) => {
    console.log(err);
});