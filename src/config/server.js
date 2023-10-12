const express = require('express');
const mongoDB = require('./database/mongosrv');
const {errorHandler} = require('./middleware/error-handler-middleware');
const cors = require('cors');

if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const app = express();

mongoDB.connect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(process.env.API_VERSION_ROUTE, require('./routes/plate-score-routes'));
app.use(process.env.API_VERSION_ROUTE, require('./routes/speech-routes'));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

app.use(errorHandler);
