var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'freedb.tech',
    port: 3306,
    user: 'freedbtech_waqar',
    password: 'Test123!',
    database: 'freedbtech_TheaterDb'
});

connection.connect(function (err) {
    if (err) {
        console.err('err connection:' + err.stack);
        return;
    }
});

module.exports = connection;