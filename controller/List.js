const List = require('../models/modelList');

exports.getAllList = (req, res, next) => {
  List.fetchAll().then(([rows, fieldData]) => {
      res.render('lists', {
        todoList: rows,
        pageTitle: 'To Do List',
        path: '/'
      });
    })
    .catch(err => console.log(err));
}

exports.postList = (req, res, next) => {
  const {title} = req.body;
  const list = new List(title);
  list.save().then(() => {
    res.redirect('/');
  }).catch(err => console.log(err));
}

exports.getEditList = (req, res) => {
  const {
    id
  } = req.params;

  List.findById(id).
  then(([rows, fieldData]) => {
      res.render('product/edit-product', {
        product: rows[0],
        pageTitle: 'Edit Product',
        path: ''
      });
    })
    .catch(err => console.log(err));
};


exports.deleteList = (req, res) => {
  const {
    id
  } = req.params;

  List.deleteById(id).then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
};