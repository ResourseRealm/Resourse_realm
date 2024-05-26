document.addEventListener("DOMContentLoaded", function() {
    const bookList = document.getElementById("bookList");
    const searchInput = document.getElementById("searchInput");

    const books = [
        [
            { title: "Introduction to Engineering: Modeling and Problem Solving", author: "Jay Brockman", pdfUrl: "https://www.hofstracsr.org/wp-content/uploads/2017/04/Intro-to-Engineering-Design-and-Problem-Solving.pdf", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" },
            { title: "Engineering Mechanics: Dynamics", author: "J. L. Meriam and L. G. Kraige", pdfUrl: "book2.pdf", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" },
            { title: "Materials Science and Engineering: An Introduction", author: "William D. Callister Jr.", pdfUrl: "book3.pdf", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" },
            { title: "Engineering Electromagnetics", author: "William H. Hayt Jr. and John A. Buck", pdfUrl: "book4.pdf", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" },
            { title: "Fluid Mechanics", author: "Frank M. White", pdfUrl: "book5.pdf", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" },
            { title: "Thermodynamics: An Engineering Approach", author: "Yunus A. Çengel and Michael A. Boles", pdfUrl: "book6.pdf", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" },
            { title: "Mechanical Engineering Design", author: "Joseph E. Shigley and Charles R. Mischke", pdfUrl: "book7.pdf", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" },
            { title: "Fundamentals of Electrical Engineering", author: "Giorgio Rizzoni", pdfUrl: "book8.pdf", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" },
            { title: "Control Systems Engineering", author: "Norman S. Nise", pdfUrl: "book9.pdf", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" },
            { title: "Introduction to Chemical Engineering: Tools for Today and Tomorrow", author: "Kenneth A. Solen and John Harb", pdfUrl: "book10.pdf", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" },
            { title: "Structural Analysis", author: "Russell C. Hibbeler", pdfUrl: "book11.pdf", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" },
            { title: "Engineering Economy", author: "William G. Sullivan, Elin M. Wicks, and C. Patrick Koelling", pdfUrl: "book12.pdf", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" },
            { title: "Computer Networks: A Systems Approach", author: "Larry L. Peterson and Bruce S. Davie", pdfUrl: "book13.pdf", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" },
            { title: "Digital Signal Processing: Principles, Algorithms, and Applications", author: "John G. Proakis and Dimitris G. Manolakis", pdfUrl: "book14.pdf", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" },
            { title: "Bioprocess Engineering: Basic Concepts", author: "Michael L. Shuler and Fikret Kargi", pdfUrl: "book15.pdf", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" },
            { title: "Introduction to Robotics: Mechanics and Control", author: "John J. Craig", pdfUrl: "book16.pdf", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" },
            { title: "Geotechnical Engineering: Principles and Practices", author: "Donald P. Coduto, Man-chu Ronald Yeung, and William A. Kitch", pdfUrl: "book17.pdf", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" },
            { title: "Introduction to Aerospace Engineering with a Flight Test Perspective", author: "Stephen Corda", pdfUrl: "book18.pdf", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" },
            { title: "Fundamentals of Environmental Engineering", author: "James R. Mihelcic and Julie B. Zimmerman", pdfUrl: "book19.pdf", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" },
            { title: "Process Dynamics and Control", author: "Dale E. Seborg, Thomas F. Edgar, and Duncan A. Mellichamp", pdfUrl: "book20.pdf", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" },
            { title: "Engineering Mathematics", author: "K.A. Stroud", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png"  },
            { title: "Chemical Engineering Thermodynamics", author: "J.M. Smith", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png"  },
            { title: "Introduction to Probability and Statistics for Engineers and Scientists", author: "Sheldon M. Ross", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png"  },
            { title: "Engineering Ethics: Concepts and Cases", author: "Charles E. Harris Jr. and Michael S. Pritchard", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png"  },
        ]
    ];

    function displayBooks(booksToShow) {
        bookList.innerHTML = "";
        booksToShow.forEach(row => {
            row.forEach(book => {
                const bookItem = document.createElement("div");
                bookItem.classList.add("book");
                bookItem.innerHTML = `
                    <div class="book-image">
                        <img src="${book.imageUrl}" alt="${book.title}">
                    </div>
                    <div class="book-details">
                        <h3>${book.title}</h3>
                        <p>Author: ${book.author}</p>
                        <a href="${book.pdfUrl}" target="_blank">PDF</a>
                    </div>
                `;
                bookList.appendChild(bookItem);
            });
        });
    }

    displayBooks(books);

    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredBooks = books.map(row =>
            row.filter(book => book.title.toLowerCase().includes(searchTerm))
        );
        displayBooks(filteredBooks);
    });
});