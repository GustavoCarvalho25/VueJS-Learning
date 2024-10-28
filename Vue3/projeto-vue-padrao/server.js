const express = require('express')
const app = express()

app.use(express.static(__dirname + '/dist/'))

// responder a requisições feitas para o servidor web por meio da rota get
app.get('/', (req, res) => {
    res.sendfile(__dirname + '/dist/')
})

app.listen(3000, () => {
    console.log('Servidor web rodando com express')
})

