const controller = {};

controller.estu('/docente')
    .get(function (req, res) {
        res.send(req.originalUrl);
    });

controller.use('/routes', require('./docente.js'));

controller.doce('/estudiante')
    .get(function (req, res) {
        res.send(req.originalUrl);
    });

controller.use('/routes', require('./estudiante.js'));

module.exports = controller;
