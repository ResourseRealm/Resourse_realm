// Sample JavaScript to fetch and display book data
document.addEventListener('DOMContentLoaded', function () {
    // Fetch book data from an API
    fetch('https://api.example.com/books')
        .then(response => response.json())
        .then(data => {
            const bookList = document.getElementById('bookList');
            // Loop through the data and create HTML elements for each book
            data.forEach(book => {
                const bookItem = document.createElement('div');
                bookItem.classList.add('book');
                bookItem.innerHTML = `
                    <h3>${book.title}</h3>
                    <p>Author: ${book.author}</p>
                    <p>Price: $${book.price}</p>
                    <button>Add to Cart</button>
                `;
                bookList.appendChild(bookItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});