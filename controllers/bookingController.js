const conn = require('./dbConnection');

const booking = {
    insertBooking: (req, res) => {
        const books = req.body;
        const sql = `insert into books(id, movie_id ,ts_id ,lastname ,firstname ,contact_no ,qty,date,time)
         VALUES  (movie_id = '${books.movie_id}', ts_id = '${books.ts_id}', lastname = '${books.lastname}', firstname = '${books.firstname}', contact_no = '${books.contact_no}',qty = '${books.qty}', date = '${books.date}', time = '${books.time}'  ) `;
        conn.query(sql, function (error, results, fields) {
            if (error) throw error;
            conn.end();
            res.send(results);
        });
    },

    updateBooking: (req, res) => {
        
        const books = req.body;
        const sql = `update books set movie_id ='${books.movie_id}', ts_id = '${books.ts_id}', lastname = '${books.lastname}', firstname = '${books.firstname}', contact_no = '${books.contact_no}', qty = '${books.qty}',date = '${books.date}',time = '${books.time}'
        where id = ${req.params.id}`;
        conn.query(sql, function (error, results, fields) {
            if (error) throw error;
            conn.end();
            res.send(results);
        });
    },

    deleteBooking: (req, res) => {
        const sql = `delete from books where id = ${req.params.id}`;
        conn.query(sql, function (error, results, fields) {
            if (error) throw error;
            conn.end();
            res.send(results);
        });
    },

    getBookingById: (req, res) => {
        const sql = `select * from books where id = ${req.params.id}`;
        conn.query(sql, function (error, results, fields) {
            if (error) throw error;
            conn.end();
            res.send(results);
        });
    },

    getBookingByUserId: (req, res) => {
        res.send('get booking by user id method called from booking api');
    }

}

module.exports = booking;
