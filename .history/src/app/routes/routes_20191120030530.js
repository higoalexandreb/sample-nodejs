module.exports = (app) => {
    app.get('/', function(req, res){
        res.send('Tá ok, Jr.');
    });

    app.get('/books', function(req, res){
        res.marko(
            require('../views/books/list.marko')
        );
    });
}