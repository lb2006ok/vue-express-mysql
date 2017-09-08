//CRUD映射
var user = {
    insert: 'INSERT INTO lo_user(id, username, age) VALUES(0, ?, ?)',
    update: 'update lo_user set username=?, age=? where id=?',
    delete: 'delete form lo_user where id=?',
    queryById: 'select * from lo_user where id=?',
    queryAll: 'select * from lo_user',
}

module.exports = user;