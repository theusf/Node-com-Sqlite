
var db = require('../../config/sqlitedatabase');

module.exports = (app) => {

 // Evitar problema com o CORS
 app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', "http://localhost");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

let sql = `SELECT * FROM Produtos`;

app.get('/', 
function(req,res) {

    db.all(sql, [],(err, resultados) => {
        if (err) {
            res.send("Deu erro em" + resultados.length);
        }
        res.marko(
            require('../views/produtos/Produtos.marko'),{
            produtos: resultados
            });    
    })


}
 
); 

}

