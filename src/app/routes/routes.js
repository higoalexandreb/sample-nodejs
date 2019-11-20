const LivroDao = require('../infra/livro-dao')
const db = require('../../config/database');


module.exports = (app) => {
    app.get('/', function(req, res){
        res.send('Tá rodando, Jr.');
    });

    app.get('/livros', function(req, res){

        const livroDao = new LivroDao(db);
        
        livroDao.list()
            .then(livros => res.marko(
                        require('../views/livros/lista/list.marko'),
                        {
                             livros: livros
                         })
            )
            .catch(err => console.log(err));

    });

    app.get('/livros/new', function(req, res){
        res.marko(require('../views/livros/cadastro/register.marko'));
    });

    app.post('/livros', function(req, res){
        
        const livroDao = new LivroDao(db);
        livroDao.add(req.body)
            .then(res.redirect('/livros'))
            .catch(err => console.log(err))

    });

}