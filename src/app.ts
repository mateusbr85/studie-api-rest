import "./config/moduleAlias";
import express from 'express';
import hbs from './config/viewHandler'
import bodyParser from 'body-parser';
import config from './config/database';
import router from './routes/web'
import mongononnect from '@bootstrap/connection'
import * as path from 'path';
const files = path.resolve(__dirname);
config
const app = express();
mongononnect()

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(files,'./resource/views'))


app.use('/api/v1/',router);



app.listen(process.env.PORT, () => {
    console.log(`Servidor Rodando na porta ${process.env.PORT}`)
})