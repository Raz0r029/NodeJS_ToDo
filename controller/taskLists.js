const List = require('../models/list');

exports.getList = (req, res, next) => {
    res.render('lists', {
        pageTitle: 'To Do List',
        path: 'lists'
    });
}

//exports.postCreateUser = (req, res, next) => {
  //  const account = new Account(req.body.username,req.body.password);
    //account.save();
    //res.redirect('/');

//}