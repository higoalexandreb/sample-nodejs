module.exports = (app) => {
    app.get('/', function(req, res){
        res.send('Gota Serena!');
    });

    app.post('/', function(req, res){
        res.send('Post ok!');
    });
}