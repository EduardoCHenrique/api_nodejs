module.exports = function(app) {

  app.get('/pagamentos', function(req, res) {
    console.log('requisição de teste');
    res.send('deu certo ae mano')
  });

  app.post('/pagamentos/pagamento', function(req, res) {
    console.log('requisição de teste');
    var pagamento = req.body;
    console.log('aqui', pagamento);
    pagamento.status = 'CRIADO';
    pagamento.data = new Date();
    res.send(pagamento)
  });

}
