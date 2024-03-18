import express from "express";
import bodyParser from "body-parser";
import pg from "pg";


const app = express();
const port = 3000;


const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "bookshelf",
  password: "Ibodev2023",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let books = [
    { id: 1, name: "Harry Potter 1", review: "this is the first review", rate:"first rate" , isbn: "5555"},
    { id: 2, name: "Harry Potter 2", review: "this is the second review", rate:"second rate", isbn: "55556" },
];
  
  
app.get("/", async (req, res) => {
    try {
      const result = await db.query("SELECT * FROM books ORDER BY id ASC");
      books = result.rows;
  
  
      res.render("index.ejs", {
        listItems: books,
      });
    } catch (err) {
      console.log(err);
    }
});


app.get('/add', (req, res) => {
    res.render('add.ejs');
});

app.post("/add", async (req, res) => {
    const isbnInput = req.body["isbn"];
    const reviewInput = req.body["review"];
    const rateInput = req.body["rate"];
  
    try {
        const response = await fetch(`https://openlibrary.org/isbn/${isbnInput}.json`);
        const bookData = await response.json();
        const bookTitle = bookData.title;
        const result = await db.query("INSERT INTO books (name, review, rate, isbn) VALUES ($1,$2,$3,$4)", [bookTitle, reviewInput, rateInput, isbnInput]);
        books = result.rows;
    
    
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
});
app.get("/edit/:id", async (req, res) => {
  const bookId = req.params.id;

  try {
    const result = await db.query("SELECT * FROM books WHERE id = $1", [bookId]);
    const book = result.rows[0];
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.render("edit.ejs", { book });
  } catch (err) {
    console.error("Error fetching book:", err);
    res.status(500).json({ message: "Failed to fetch book" });
  }
});

app.post("/edit/:id", async (req, res) => {
  const bookId = req.params.id;
  const { name, review, rate } = req.body;

  try {
    await db.query("UPDATE books SET name = $1, review = $2, rate = $3 WHERE id = $4", [name, review, rate, bookId]);
    res.redirect("/");
  } catch (err) {
    console.error("Error updating book:", err);
    res.status(500).json({ message: "Failed to update book" });
  }
});
app.delete("/delete/:id", async (req, res) => {
  const bookId = req.params.id;

  try {
    await db.query("DELETE FROM books WHERE id = $1", [bookId]);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    console.error("Error deleting book:", err);
    res.status(500).json({ message: "Failed to delete book" });
  }
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
