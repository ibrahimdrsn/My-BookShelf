Book Review Web Application

This is a simple web application for managing your book reviews. You can add new books to your shelf, write reviews for them, and delete books as needed. The application fetches book information from the Open Library API using ISBN numbers.

Features
Add new books to your shelf by providing their ISBN number.
Automatically fetch book details including title and cover image from the Open Library API.
Write reviews for books you've added.
Delete books from your shelf when no longer needed.

Technologies Used
Express: Backend server framework for handling HTTP requests and responses.
EJS: Templating engine for generating dynamic HTML content.
Node.js: JavaScript runtime environment.
PostgreSQL: Database management system for storing book information.
node-fetch: Fetch API for making HTTP requests to external APIs.
body-parser: Middleware for parsing incoming request bodies.
HTML/CSS: Frontend design and structure.

Installation
Clone the repository to your local machine.
Install dependencies using npm install.
Set up a PostgreSQL database and configure the connection details in index.js.
Run the server using npm start.

Usage
Access the application through your web browser at http://localhost:3000.
Click on the "Add a new book" button to add a new book to your shelf.
Enter the ISBN number of the book and submit the form.
Once added, the book details will be displayed along with an option to write a review or delete the book.

Contributing
Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.


![Screenshot 2024-03-18 214414](https://github.com/ibrahimdrsn/My-BookShelf/assets/155435456/90a29561-61a1-4af5-ac70-a997bd5beeb6)

![Screenshot 2024-03-18 214519](https://github.com/ibrahimdrsn/My-BookShelf/assets/155435456/152d320a-36e3-4427-a475-7acb9008aa71)

![Screenshot 2024-03-18 220002](https://github.com/ibrahimdrsn/My-BookShelf/assets/155435456/8c7b2509-44d5-4464-9b88-acdf57a10ef4)

![Screenshot 2024-03-18 215943](https://github.com/ibrahimdrsn/My-BookShelf/assets/155435456/7471d9bd-0467-4152-8c8b-f0bb91cedf52)
