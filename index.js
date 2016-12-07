var app = require('./config/custom-express')();

app.listen(8888, function() {
  console.log('teste');
});

// https://cursos.alura.com.br/course/nodejs-avancado/task/20094 Persistindo o pagamento no banco
