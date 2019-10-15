"use strict";
exports.__esModule = true;
var books_1 = require("./mocks/books");
var computers_1 = require("./mocks/computers");
var cors = require("cors");
var express = require("express");
var app = express();
var port = 5000;
app.use(cors());
app.get('/books', function (req, res) {
    var query = req.query;
    if (query.title === '') {
        res.send({ books: books_1.books }).status(200);
    }
    else {
        var filteredBooks = books_1.books.filter(function (book) {
            return book.title.toLowerCase().includes(query.title.toLowerCase());
        });
        res.send({ books: filteredBooks }).status(200);
    }
});
app.get('/books/:bookID', function (req, res) {
    if (req.params) {
        var filteredBooks = books_1.books.filter(function (book) { return book.id === parseInt(req.params['bookID']); });
        if (filteredBooks.length === 1) {
            res.send({ book: filteredBooks[0] }).status(200);
        }
        else {
            res.send({}).status(404);
        }
    }
    else {
        res.send({}).status(404);
    }
});
app.get('/computers', function (req, res) {
    var query = req.query;
    if (query.name === '') {
        res.send({ computers: computers_1.computers });
    }
    else {
        var filteredComputers = computers_1.computers.filter(function (book) {
            return book.name.toLowerCase().includes(query.name.toLowerCase());
        });
        res.send({ books: filteredComputers });
    }
});
app.listen(port, function () { return console.log("Example app listening on port " + port + "!"); });
