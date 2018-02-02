let books = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    let newBook = req.body;
    newBook.id = id;
    id++;
    books.push(newBook);
    res.send(books);
  },

  read: (req, res) => {
    res.send(books);
  },

  update: (req, res) => {
    const updateID = req.params.id;
    let index = books.findIndex(book => book.id == updateID);
    console.log(111111111, req.body)
    books[index] = {
      id: books[index].id,
      title: req.body.title || books[index].title,
      author: req.body.author || books[index].author
    };
    res.send(books);
  },

  delete: (req, res) => {
    const deleteID = req.params.id;
    bookID = books.findIndex(book => book.id == deleteID);
    books.splice(bookID, 1);
    res.send(books);
  }
};