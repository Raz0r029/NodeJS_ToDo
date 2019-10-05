const db = require('../util/database');

module.exports = class List {
    constructor(task) {
        this.task = task;
    }

    save() {
        return db.execute(
            'INSERT INTO products (id, title) VALUES (?, ?)',
            [this.id, this.title, 'SYSTEM']
        );
    }

    static deleteById(id) {}

    static fetchAll() {
        return db.execute('SELECT * FROM list');
    }

    static findById(id) {
        return db.execute('SELECT * FROM list WHERE list.id = ?', [id]);
    }
}