// Array to store all Book objects
let dynamicIndex = 5;
const library_storage = [
    {index: 1, title: "Noli Me Tangere", author: "Jose Rizal", pages: 480, read_status: "YES"}, // Sample Data 
    {index: 2, title: "Noli Me Tangere", author: "Jose Rizal", pages: 480, read_status: "YES"}, // Sample Data 
    {index: 3, title: "Noli Me Tangere", author: "Jose Rizal", pages: 480, read_status: "YES"}, // Sample Data 
    {index: 4, title: "Noli Me Tangere", author: "Jose Rizal", pages: 480, read_status: "YES"}  // Sample Data 
];

// Global Components
const bookGallery = document.querySelector("#book-section");
const addBookButton = document.querySelector("#show-form-button");
const addBookDialog = document.querySelector(".add-book-modal");
const addBookForm = document.querySelector("#add-book-form");

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
            <p class="delete-button">
                <button onclick="">Delete</button>
            </p>
        `;
        bookGallery.appendChild(bookCard);
    });
};

initializeBooks();

function Book(index, title, author, pages, read_status) {
    this.index = index;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read_status = read_status;
}

function addBook() {
    // Associate FormData with HTML Form
    const formData = new FormData(addBookForm);
    // Fetch each value from the Form, and set as args for Book()
    const newBook = new Book(
        // Index Setup in this LINE
        dynamicIndex++,
        formData.get('book-title'),
        formData.get('book-author'),
        formData.get('book-pages'),
        formData.get('book-read-status')
    );
    // Test out func
    console.log(newBook);
    // Store object within array
    library_storage.push(newBook);
};

// Handle Add Button to show Form modal
addBookButton.addEventListener("click", () => {
    addBookDialog.showModal();
});

// Handle Form submission
addBookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addBook();
    addBookDialog.close();
    initializeBooks()
  });