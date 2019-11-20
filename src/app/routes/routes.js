const LivroDao = require('../infra/livro-dao')
const db = require('../../config/database');


module.exports = (app) => {
    app.get('/', function(req, res){
        res.send('Tá ok, Jr.');
    });

    app.get('/livros', function(req, res){

        const livroDao = new LivroDao(db);
        
        livroDao.list()
            .then(livros => res.marko(
                        require('../views/livros/list.marko'),
                        {
                             livros: result
                         })
            )
            .catch(erro => console.log(erro));

    });
    
}