const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM ESTUDIANTE', (err, estudiante) => {
     if (err) {
      res.json(err);
     }
     res.render('estudiante', {
        data: estudiante
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO ESTUDIANTE set ?', data, (err, estudiante) => {
      console.log(estudiante)
      res.redirect('/');
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM ESTUDIANTE WHERE idEstudiante = ?", [id], (err, rows) => {
      res.render('customers_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newEstudiante = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE ESTUDIANTE set ? where idEstudiante = ?', [newEstudiante, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM ESTUDIANTE WHERE idEstudiante = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;
