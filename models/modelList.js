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

    static deleteById(id) {}

    static fetchAll() {
        return db.execute('SELECT * FROM list');
    }
}