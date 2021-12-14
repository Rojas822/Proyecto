const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM MATERIA', (err, materia) => {
     if (err) {
      res.json(err);
     }
     res.render('materia', {
        data: materia
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO MATERIA set ?', data, (err, docente) => {
      console.log(docente)
      res.redirect('/');
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM MATERIA WHERE idMateria= ?", [id], (err, rows) => {
      res.render('customers_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newDocente = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE MATERIA set ? where idDocente = ?', [newDocente, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM MATERIA WHERE idDocente = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;
