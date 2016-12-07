module.exports = function(app) {

  app.get('/pagamentos', function(req, res) {
    console.log('requisição de teste');
    res.send('deu certo ae mano')
  });

  app.post('/pagamentos/pagamento', function(req, res) {
    console.log('req', req);
    var pagamento = req.body;

    // pagamento.status = 'CRIADO';
    // pagamento.data = new Date();

    var connection = app.persistencia.connectionFactory();
    var pagamentoDao = new app.persistencia.PagamentoDao(connection);

    pagamentoDao.salva(pagamento, function(error, result) {
      res.json(pagamento);
    });
  });

}
