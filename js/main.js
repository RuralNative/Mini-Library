// Array to store all Book objects
const library_storage = [
    {title: "Noli Me Tangere", author: "Jose Rizal", pages: 480, read_status: "YES"},
    {title: "Noli Me Tangere", author: "Jose Rizal", pages: 480, read_status: "YES"},
    {title: "Noli Me Tangere", author: "Jose Rizal", pages: 480, read_status: "YES"},
    {title: "Noli Me Tangere", author: "Jose Rizal", pages: 480, read_status: "YES"}
];

function Book(title, author, pages, read_status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read_status = read_status;
}

function addBook() {
    // Fetch info from HTML Form
    // Use info for Book() arguments and create a Book() object
    // Store new Book object in library_storage
}

// Initialize Cards from Book[] objects
function initializeBooks() {
    const bookGallery = document.querySelector("#book-section");
    bookGallery.innerHTML = '';
    library_storage.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <p>
                <strong>Title: </strong> 
                <span>${book.title}</span>
            </p>
            <p>
                <strong>Author: </strong> 
                <span>${book.author}</span>
            </p>
            <p>
                <strong>Pages: </strong> 
                <span>${book.pages}</span>
            </p>
            <p>
                <strong>Has Read?: </strong> 
                <span>${book.readStatus}</span>
            </p>
        `;
        bookGallery.appendChild(bookCard);
    });
}

initializeBooks();