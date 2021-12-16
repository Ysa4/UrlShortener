
const express =require('express');
const connectDb =require('./Model/Db');
const routes = require('./Route/routes');

const app = express();

app.set('port',process.env.PORT || 5000);
const PORT =app.get('port');

connectDb();

app.use(express.json({extended:false}));
app.use(express.urlencoded({extended:false}));
app.use('/',routes);


app.listen(PORT ,()=> console.log("Server runnig ..........."));