const db = require('../util/database');

module.exports = class ToDoList {
    constructor(task) {
        this.task = task;
    }

    save() {
        return db.execute(
            'INSERT INTO list (task) VALUES (?)',
            [this.task]
        );
    }

    update() {
        return db.execute('UPDATE list SET task = ? WHERE ID = ?',
          [this.task, this.id, ]);
      }

    static deleteById(id) {
        return db.execute(
            'DELETE from list WHERE ID = ?',
            [id]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM list');
    }

    static findById(id) {
        return db.execute('SELECT * FROM list WHERE products.id = ?', [id]);
    }
}