class LivroDao{

    constructor(db){
        this._db = db;
    }

    list(){
        return new Promise((resolve, reject) => {
            this._db.all(
                'select * from livros',
                (err, result) => {
                    if(err) return reject('Não foi possível listar os livros');
                    return resolve(result);
                }
            )
        });
    }

}

module.exports = LivroDao;