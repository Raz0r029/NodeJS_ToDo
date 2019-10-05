const List = require('../models/list');

exports.getList = (req, res, next) => {
    res.render('lists', {
        pageTitle: 'To Do List',
        path: 'lists'
    });
}

exports.postList = (req, res, next) => {
    const list = new Product(null, req.body.id, req.body.task);
    product.save().then(() => {
      res.redirect('/');
    }).catch(err => console.log(err));
  }