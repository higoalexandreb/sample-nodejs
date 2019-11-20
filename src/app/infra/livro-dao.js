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

    add(livro){
        return new Promise((resolve, reject) => {
            this._db.run(
                'insert into livros(titulo, preco, descricao) values (?, ?, ?)',
                [
                    livro.titulo,
                    livro.preco,
                    livro.descricao
                ],
                (err)=>{
                    if(err) return reject('Não foi possível adicionar livro');
                    return resolve;
                }
            )
        })
    }

}

module.exports = LivroDao;