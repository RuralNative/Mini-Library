// Array to store all Book objects
const library_storage = [
    {title: "Noli Me Tangere", author: "Jose Rizal", pages: 480, read_status: "YES"}, // Sample Data 
    {title: "Noli Me Tangere", author: "Jose Rizal", pages: 480, read_status: "YES"}, // Sample Data 
    {title: "Noli Me Tangere", author: "Jose Rizal", pages: 480, read_status: "YES"}, // Sample Data 
    {title: "Noli Me Tangere", author: "Jose Rizal", pages: 480, read_status: "YES"}  // Sample Data 
];

// Initialize Cards from Book[] objects
function initializeBooks() {
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
};

initializeBooks();

// Global Components
const bookGallery = document.querySelector("#book-section");
const addBookButton = document.querySelector("#show-form-button");
const addBookDialog = document.querySelector(".add-book-modal");
const addBookForm = document.querySelector(".add-book-form");

function Book(title, author, pages, read_status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read_status = read_status;
}

function addBook() {
    // Associate FormData with HTML Form
    // Fetch each value from FormData and assign it to Book() args
    // Create new Book object based from the previous steps
};

// Handle Add Button to show Form modal
addBookButton.addEventListener("click", () => {
    addBookDialog.showModal();
});

// Handle Form submission
