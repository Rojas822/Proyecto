const controllerD = {};

controllerD.listD = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM DOCENTE', (err, docente) => {
     if (err) {
      res.json(err);
     }
     res.render('docente', {
        data: docente
     });
    });
  });
};

controllerD.saveD = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO DOCENTE set ?', data, (err, docente) => {
      console.log(docente)
      res.redirect('/docente');
    })
  })
};

controllerD.editD = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM DOCENTE WHERE idDocente = ?", [id], (err, rows) => {
      res.render('docente_edit', {
        data: rows[0]
      })
    });
  });
};

controllerD.updateD = (req, res) => {
  const { id } = req.params;
  const newDocente = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE DOCENTE set ? where idDocente = ?', [newDocente, id], (err, rows) => {
    res.redirect('/docente');
  });
  });
};

controllerD.deleteD = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM DOCENTE WHERE idDocente = ?', [id], (err, rows) => {
      res.redirect('/docente');
    });
  });
}

module.exports = controllerD;
