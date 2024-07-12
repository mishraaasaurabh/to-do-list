const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

let todoList = [];

app.get('/', (req, res) => {
    res.render('index', { todoList: todoList });
});

app.post('/add', (req, res) => {
    const task = req.body.task;
    todoList.push(task);
    res.redirect('/');
});

app.post('/delete', (req, res) => {
    const taskIndex = req.body.index;
    todoList.splice(taskIndex, 1);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Todo List App listening at http://localhost:${port}`);
});
