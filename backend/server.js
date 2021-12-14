const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 8080;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var whiskyRoutes = require('./routes/whisky');

app.use(cors());

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/whisky', whiskyRoutes);

app.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}.`);
});