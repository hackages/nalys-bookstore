import { books } from './mocks/books';
import { computers } from './mocks/computers';
import * as cors from 'cors';
import * as express from 'express';

const app = express();
const port = 5000;
app.use(cors());

app.get('/books', (req, res) => {
  const query = req.query;
  if (query.title === '') {
    res.send({ books }).status(200);
  } else {
    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(query.title.toLowerCase())
    );
    res.send({ books: filteredBooks }).status(200);
  }
});

app.get('/books/:bookID', (req, res) => {
  if (req.params) {
    const filteredBooks = books.filter(
      book => book.id === parseInt(req.params['bookID'])
    );
    if (filteredBooks.length === 1) {
      res.send({ book: filteredBooks[0] }).status(200);
    } else {
      res.send({}).status(404);
    }
  } else {
    res.send({}).status(404);
  }
});

app.get('/computers', (req, res) => {
  const query = req.query;
  if (query.name === '') {
    res.send({ computers });
  } else {
    const filteredComputers = computers.filter(book =>
      book.name.toLowerCase().includes(query.name.toLowerCase())
    );
    res.send({ books: filteredComputers });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
