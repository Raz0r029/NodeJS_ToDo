const List = require('../models/modelList');

exports.getList = (req, res, next) => {
  List.fetchAll().then(([rows, fieldData]) => {
      res.render('lists', {
          todo: rows,
          pageTitle: 'To Do List',
          path: '/'
      });
  })
  .catch(err => console.log(err));
}

exports.postList = (req, res, next) => {
  const message = req.body.title;
    const list = new List(message);
    list.save().then(() => {
      res.redirect('/');
    }).catch(err => console.log(err));
  }