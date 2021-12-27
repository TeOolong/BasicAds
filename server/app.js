const PORT = 3000
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended : true}));
app.use('/css', express.static('public/css'));
app.use('/images', express.static('public/images'));
app.use('/js', express.static('public/js'));

app.get('/' ,(req, res) => {
    res.render('index');
    
});

app.listen(PORT , () => {
    console.log(`Servidor funcionando en puerto ${PORT}`)
})