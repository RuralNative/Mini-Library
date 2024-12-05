// Array to store all Book objects
let dynamicIndex = 3; // Tracks the next available index for new books
let library_storage = [
    // Sample Data
    {index: 1, title: "Noli Me Tangere", author: "Jose Rizal", pages: 480, read_status: "YES"},
    {index: 2, title: "El Filibusterismo", author: "Jose Rizal", pages: 500, read_status: "YES"}
];

// Global Components
const bookGallery = document.querySelector("#book-section"); // Container for displaying book cards
const addBookButton = document.querySelector("#show-form-button"); // Button to show the add book form
const addBookDialog = document.querySelector(".add-book-modal"); // Modal dialog for adding a new book
const addBookForm = document.querySelector("#add-book-form"); // Form element for adding a new book

/**
 * Initializes and renders the book cards in the gallery.
 * Clears existing cards and creates new ones based on the current library_storage array.
 */
function initializeBooks() {
    bookGallery.innerHTML = ''; // Clear existing cards
    library_storage.forEach(book => {
        const bookCard = document.createElement('div'); // Create a new card element
        bookCard.className = 'book-card'; // Set class for styling
        bookCard.innerHTML = `
            <p>
                <strong>ID: </strong> 
                <span>${book.index}</span>
            </p>
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
                <span>${book.read_status}</span>
            </p>
        `;

        // Create the delete button
        const deleteButton = document.createElement('button'); // Create a button element
        deleteButton.textContent = 'Delete'; // Set button text
        deleteButton.className = 'delete-button'; // Set class for styling
        
        // Attach an event listener to handle deletion when clicked
        deleteButton.addEventListener('click', () => {
            deleteCard(book.index); // Call deleteCard with the book's index
        });

        bookCard.appendChild(deleteButton); // Append the button to the card
        bookGallery.appendChild(bookCard); // Append the card to the gallery
    });
}

// Initial rendering of books when the script runs
initializeBooks();

/**
 * Constructor function to create a Book object.
 * @param {number} index - The unique identifier for the book.
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @param {number} pages - The number of pages in the book.
 * @param {string} read_status - Indicates if the book has been read (YES/NO).
 */
function Book(index, title, author, pages, read_status) {
    this.index = index; // Set unique index for the book
    this.title = title; // Set title of the book
    this.author = author; // Set author of the book
    this.pages = pages; // Set number of pages in the book
    this.read_status = read_status; // Set read status of the book
}

/**
 * Adds a new book to the library_storage array based on user input from the form.
 */
function addBook() {
    const formData = new FormData(addBookForm); // Create FormData object from form inputs

    // Create a new Book object with values from form inputs and incrementing dynamicIndex
    const newBook = new Book(
        dynamicIndex++, // Increment index for next new book
        formData.get('book-title'), // Get title from form input
        formData.get('book-author'), // Get author from form input
        formData.get('book-pages'), // Get number of pages from form input
        formData.get('book-read-status') // Get read status from form input
    );

    console.log(newBook); // Log new book object for debugging purposes

    library_storage.push(newBook); // Add new Book object to library_storage array
}

// Handle Add Button click to show Form modal dialog
addBookButton.addEventListener("click", () => {
    addBookDialog.showModal(); // Show modal dialog for adding a new book
});

// Handle Form submission to add a new book and update UI accordingly
addBookForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission behavior (page reload)
    addBook(); // Call function to add a new book based on form data
    addBookDialog.close(); // Close modal dialog after submission
    initializeBooks(); // Re-render books to include newly added one(s)
});

/**
 * Deletes a specific book from library_storage by its unique index.
 * @param {number} id - The unique identifier of the book to be deleted.
 */
function deleteCard(id) {
    library_storage = library_storage.filter((book) => book.index !== id); // Filter out the deleted book by index
    initializeBooks(); // Re-render books after deletion to reflect changes in UI
}