let express = require('express');
let app = express();

app.use(express.json());// to use req.body
let posts = [
    {id: 1, title: 'Post 1', content: 'Content 1'},
    {id: 2, title: 'Post 2', content: 'Content 2'},
] 
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/home', (req, res) => {
    res.send('home page');
});

app.get('/about', (req, res) => {
    res.send('about');
});
app.get('/posts', (req, res) => {
    res.send(posts);
});
app.get('/posts/:id', (req, res) => {
    console.log(req.params);
    let post = posts.find(post => post.id === +req.params.id);
    res.send(post);
});

app.post('/posts', (req, res) => {
    let post = req.body;
    let id = posts.length + 1;
    post.id = id;   
    posts.push(post);
    res.send(req.body);
});


app.listen(3000);