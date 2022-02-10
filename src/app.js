import express from "express";
import {create} from 'express-handlebars'
import indexRoutes from './routes/index.routes'
import path from 'path'
import morgan from 'morgan';

const app=express();

//console.log("dirname es", __dirname)



app.set('views', path.join(__dirname, 'views'));

//console.log(app.get('views'))
const exphbs=create({
    extname:".hbs",
    partialsDir: path.join(app.get('views'), 'partials'),
    layoutsDir: path.join(app.get('views'),'layouts'),
    defaultLayout: 'main',

})

app.engine(".hbs", exphbs.engine)
app.set('view engine', ".hbs")

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));


//Routes
app.use(indexRoutes);
export default app

//Staticfiles
app.use(express.static(path.join(__dirname, 'public')));