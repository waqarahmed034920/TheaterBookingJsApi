const conn = require('./dbConnection');

const movie = {

    insertmovie: (req, res) => {
        const movie = req.body;
        const sql = `insert into movies(title ,cover_img ,description ,duration ,date_showing ,end_date)
         VALUES('${movie.title}', '${movie.cover_img}', '${movie.description}', '${movie.duration}', '${movie.date_showing}', '${movie.end_date}' ) `;
         conn.query(sql, function (error, results, fields) {
             
            if (error) {
                console.log(error);
                res.send(error);
            };
            res.send(results);
        });
    },

    updatemovie: (req, res) => {
        const movie = req.body;
        const sql = `update movies set title ='${movie.title}', cover_img = '${movie.cover_img}', description = '${movie.description}', date_showing = '${movie.date_showing}', end_date = '${movie.end_date}'
        where id = ${req.params.id}`;
        conn.query(sql, function (error, results, fields) {
            
            if (error) {
                console.log(error);
                res.send(error);
            };
            res.send(results);
        });
    },

    deletemovie: (req, res) => {
        const sql = `delete from movies where id = ${req.params.id}`;
        conn.query(sql, function (error, results, fields) {
            
            if (error) {
                console.log(error);
                res.send(error);
            };
            res.send(results);
        });
    },

    getmovieById: (req, res) => {
        const sql = `select * from movies where id = ${req.params.id}`;
        conn.query(sql, function (error, results, fields) {
            
            if (error) {
                console.log(error);
                res.send(error);
            };
            res.send(results);
        });

    }

}

module.exports = movie;