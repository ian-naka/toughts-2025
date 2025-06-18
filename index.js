const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session') //o session é responsável por guardar dados do usuário entre as requisições
const flash = require('express-flash')
const FileStore = require('session-file-store')(session)


const app = express() // inicializacao do express
const conn = require('./db/conn')

const Tought = require('./models/Tought')
const User = require('./models/User')
//definicao de template engine

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())


//session middleware
app.use(
    session({ //implementa que todas as requisições passam por esse middleware de sessão
        name: 'session', //nome do cookie
        secret: 'nosso_secret', //chave para acessar o cookie
        resave: false, // ñ vai salvar a sessão de novo no servidor a cada requisição
        saveUninitialized: false, //só cria a sessão se o usuário colocar informação de valor
        store: new FileStore({ // armazena as sessões em arquivos locais
            logFn: function () {},
            path: require('path').join(require('os').tmpdir(), 'sessions'),
        }),
        cookie: {
            secure: false, //permite que o cookie funcione em http
            maxAge: 360000, //cookie expira em 6 minutos
            expires: new Date(Date.now() + 360000),
            httpOnly: true, //o cookie nao pode ser acessado via navegador, so por servidor
        },
    })
);
// flash messages
app.use(flash())

//public path
app.use(express.static('public'))

//set session to res
app.use((req, res, next) => 
{
    if(req.session.userid){
        res.locals.session = req.session
    }

    next() 
})
conn
    .sync()
   // .sync({force: true})
    .then(() => {
        app.listen(3000)
    })
    .catch((err) => `Erro: ${err}`)