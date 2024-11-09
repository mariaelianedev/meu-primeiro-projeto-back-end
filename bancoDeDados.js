const mongoose = require('mongoose')

async function conectaBancoDeDados() {
    try {
        console.log('Conexão com o banco de dados iniciou')

        await mongoose.connect('mongodb+srv://elianesantosribeiro:AV3ZCOLgArluAb5c@clustermulheres.trupq.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMulheres')

        console.log('conexão com o banco de dados feita com sucesso!')
    } catch (erro) {
        console.log(erro)
    }

}
module.exports = conectaBancoDeDados