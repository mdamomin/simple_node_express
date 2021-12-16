const express = require('express');
const cors = require('cors');
const { json } = require('express/lib/response');
const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

const users = [
  { id: 0, name: 'Soniya', email: 'Soniya@gmail.com', mobile: '01711082677' },
  { id: 1, name: 'Susmita', email: 'Susmita@gmail.com', mobile: '01711082677' },
  {
    id: 2,
    name: 'Suchorita',
    email: 'Suchorita@gmail.com',
    mobile: '01711082677',
  },
  { id: 3, name: 'Sabana', email: 'Sabana@gmail.com', mobile: '01711082677' },
  { id: 4, name: 'Sabnur', email: 'Sabnur@gmail.com', mobile: '01711082677' },
  {
    id: 5,
    name: 'Srabonti',
    email: 'Srabonti@gmail.com',
    mobile: '01711082677',
  },
];
app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  res.send(JSON.stringify(newUser));
  // res.json(newUser);
});
app.get('/users', (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log(`listening port`, port);
});
