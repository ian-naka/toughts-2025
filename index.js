const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const flash = require('express-flash')
const FileStore = require('session-file-store')(session)


const app = express() // inicializacao do express

const conn = require('./db/conn')

conn
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch((err) => `Erro: ${err}`)