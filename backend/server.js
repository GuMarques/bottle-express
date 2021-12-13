const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var whiskyRoutes = require('./routes/whisky');

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/whisky', whiskyRoutes);

app.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}.`);
});