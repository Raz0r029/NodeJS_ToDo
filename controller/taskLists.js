const List = require('../models/modelList');

exports.getTodoList = (req, res, next) => {
  Todolist.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('lists', {
        todo: rows,
        pageTitle: 'All Todo List',
        path: '/'
      });
    })
    .catch(err => console.log(err));
};