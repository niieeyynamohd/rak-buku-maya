
const books = [
    // BUKU KISAH YANG SEDIH - 25 GAMBAR
    { 
        title: "Kisah Yang Sedih", 
        category: "cerita", 
        color: "#6c5ce7", 
        author: "Julia Zamri",
        description: "Sebuah kisah yang menyentuh hati tentang kehidupan dan perasaan.",
        coverImage: "😢",
        isImageBook: true,
        pages: [
            // Cover
            "src/image/KisahSedih/images-0.jpg",
            // Halaman 1-2
            "src/kisahsedih/images-1.jpg",
            "src/kisahsedih/images-2.jpg",
            // Halaman 3-4
            "src/kisahsedih/images-3.jpg",
            "src/kisahsedih/images-4.jpg",
            // Halaman 5-6
            "src/kisahsedih/images-5.jpg",
            "src/kisahsedih/images-6.jpg",
            // Halaman 7-8
            "src/kisahsedih/images-7.jpg",
            "src/kisahsedih/images-8.jpg",
            // Halaman 9-10
            "src/kisahsedih/images-9.jpg",
            "src/kisahsedih/images-10.jpg",
            // Halaman 11-12
            "src/kisahsedih/images-11.jpg",
            "src/kisahsedih/images-12.jpg",
            // Halaman 13-14
            "src/kisahsedih/images-13.jpg",
            "src/kisahsedih/images-14.jpg",
            // Halaman 15-16
            "src/kisahsedih/images-15.jpg",
            "src/kisahsedih/images-16.jpg",
            // Halaman 17-18
            "src/kisahsedih/images-17.jpg",
            "src/kisahsedih/images-18.jpg",
            // Halaman 19-20
            "src/kisahsedih/images-19.jpg",
            "src/kisahsedih/images-20.jpg",
            // Halaman 21-22
            "src/kisahsedih/images-21.jpg",
            "src/kisahsedih/images-22.jpg",
            // Halaman 23-24
            "src/kisahsedih/images-23.jpg",
            "src/kisahsedih/images-24.jpg",
            // Halaman 25
            "src/kisahsedih/images-25.jpg"
           
        ]
    },
    
    // BUKU CERITA GAMBAR - SI KANCIL
    { 
        title: "Si Kancil Bergambar", 
        category: "cerita", 
        color: "#ff6b6b", 
        author: "Cerita Rakyat Malaysia",
        description: "Kisah Si Kancil dalam bentuk komik bergambar yang menarik!",
        coverImage: "🦌",
        isImageBook: true,
        pages: [
            // Cover
            "https://picsum.photos/seed/sikancil-cover/400/600",
            // Halaman 1-2
            "https://picsum.photos/seed/sikancil1/400/600",
            "https://picsum.photos/seed/sikancil2/400/600",
            // Halaman 3-4
            "https://picsum.photos/seed/sikancil3/400/600",
            "https://picsum.photos/seed/sikancil4/400/600",
            // Halaman 5-6
            "https://picsum.photos/seed/sikancil5/400/600",
            "https://picsum.photos/seed/sikancil6/400/600",
            // Halaman 7-8
            "https://picsum.photos/seed/sikancil7/400/600",
            "https://picsum.photos/seed/sikancil8/400/600",
            // Halaman 9-10
            "https://picsum.photos/seed/sikancil9/400/600",
            "https://picsum.photos/seed/sikancil10/400/600",
            // Halaman 11-12
            "https://picsum.photos/seed/sikancil11/400/600",
            "https://picsum.photos/seed/sikancil12/400/600"
        ]
    },
    
    // BUKU ALAM SEKITAR
    { 
        title: "Alam Sekitar Indah", 
        category: "sains", 
        color: "#00b894", 
        author: "Dr. Alam",
        description: "Koleksi gambar-gambar indah alam sekitar Malaysia.",
        coverImage: "🌿",
        isImageBook: true,
        pages: [
            // Cover
            "https://picsum.photos/seed/alam-cover/400/600",
            // Halaman 1-2
            "https://picsum.photos/seed/alam1/400/600",
            "https://picsum.photos/seed/alam2/400/600",
            // Halaman 3-4
            "https://picsum.photos/seed/alam3/400/600",
            "https://picsum.photos/seed/alam4/400/600",
            // Halaman 5-6
            "https://picsum.photos/seed/alam5/400/600",
            "https://picsum.photos/seed/alam6/400/600",
            // Halaman 7-8
            "https://picsum.photos/seed/alam7/400/600",
            "https://picsum.photos/seed/alam8/400/600",
            // Halaman 9-10
            "https://picsum.photos/seed/alam9/400/600",
            "https://picsum.photos/seed/alam10/400/600"
        ]
    },
    
    // BUKU ANGKASA
    { 
        title: "Misteri Angkasa", 
        category: "sains", 
        color: "#6c5ce7", 
        author: "Prof. Bintang",
        description: "Jelajahi keindahan angkasa lepas melalui gambar-gambar menakjubkan!",
        coverImage: "🚀",
        isImageBook: true,
        pages: [
            // Cover
            "https://picsum.photos/seed/angkasa-cover/400/600",
            // Halaman 1-2
            "https://picsum.photos/seed/angkasa1/400/600",
            "https://picsum.photos/seed/angkasa2/400/600",
            // Halaman 3-4
            "https://picsum.photos/seed/angkasa3/400/600",
            "https://picsum.photos/seed/angkasa4/400/600",
            // Halaman 5-6
            "https://picsum.photos/seed/angkasa5/400/600",
            "https://picsum.photos/seed/angkasa6/400/600",
            // Halaman 7-8
            "https://picsum.photos/seed/angkasa7/400/600",
            "https://picsum.photos/seed/angkasa8/400/600",
            // Halaman 9-10
            "https://picsum.photos/seed/angkasa9/400/600",
            "https://picsum.photos/seed/angkasa10/400/600",
            // Halaman 11-12
            "https://picsum.photos/seed/angkasa11/400/600",
            "https://picsum.photos/seed/angkasa12/400/600"
        ]
    },
    
    // BUKU DUNIA HEWAN
    { 
        title: "Dunia Haiwan", 
        category: "sains", 
        color: "#fdcb6e", 
        author: "Dr. Haiwan",
        description: "Kenali pelbagai jenis haiwan melalui gambar-gambar menarik!",
        coverImage: "🦁",
        isImageBook: true,
        pages: [
            // Cover
            "https://picsum.photos/seed/haiwan-cover/400/600",
            // Halaman 1-2
            "https://picsum.photos/seed/haiwan1/400/600",
            "https://picsum.photos/seed/haiwan2/400/600",
            // Halaman 3-4
            "https://picsum.photos/seed/haiwan3/400/600",
            "https://picsum.photos/seed/haiwan4/400/600",
            // Halaman 5-6
            "https://picsum.photos/seed/haiwan5/400/600",
            "https://picsum.photos/seed/haiwan6/400/600",
            // Halaman 7-8
            "https://picsum.photos/seed/haiwan7/400/600",
            "https://picsum.photos/seed/haiwan8/400/600",
            // Halaman 9-10
            "https://picsum.photos/seed/haiwan9/400/600",
            "https://picsum.photos/seed/haiwan10/400/600"
        ]
    },
    
    // Buku-buku lain (bukan buku gambar)
    { 
        title: "Puteri Gunung Ledang", 
        category: "cerita", 
        color: "#4ecdc4", 
        author: "Legenda Johor",
        description: "Legenda indah tentang puteri yang cantik dari Gunung Ledang.",
        coverImage: "👸",
        isImageBook: false,
        pages: ["Buku teks biasa..."]
    },
    { 
        title: "Bawang Putih Bawang Merah", 
        category: "cerita", 
        color: "#45b7d1", 
        author: "Dongeng Tradisional",
        description: "Dongeng moral tentang kebaikan hati dan kesabaran.",
        coverImage: "👧",
        isImageBook: false,
        pages: ["Buku teks biasa..."]
    },
    { title: "Sains Mudah", category: "sains", color: "#54a0ff", author: "Dr. Ahmad", description: "Buku sains yang mudah difahami.", coverImage: "🔬", isImageBook: false, pages: ["Buku teks biasa..."] },
    { title: "Matematik Fun", category: "matematik", color: "#5f27cd", author: "Cikgu Siti", description: "Belajar matematik dengan cara yang menyeronokkan!", coverImage: "🔢", isImageBook: false, pages: ["Buku teks biasa..."] },
    { title: "Sejarah Malaysia", category: "sejarah", color: "#3742fa", author: "Prof. Sejarah", description: "Perjalanan sejarah Malaysia.", coverImage: "🇲🇾", isImageBook: false, pages: ["Buku teks biasa..."] },
    { title: "Bahasa Melayu", category: "bahasa", color: "#2f3542", author: "Cikgu Bahasa", description: "Panduan lengkap Bahasa Melayu.", coverImage: "📝", isImageBook: false, pages: ["Buku teks biasa..."] },
    { title: "Hang Tuah", category: "sejarah", color: "#ff4757", author: "Sejarawan", description: "Kisah kepahlawanan Hang Tuah.", coverImage: "⚔️", isImageBook: false, pages: ["Buku teks biasa..."] },
    { title: "English Fun", category: "bahasa", color: "#7bed9f", author: "Teacher Mary", description: "Learn English in a fun way!", coverImage: "🇬🇧", isImageBook: false, pages: ["Buku teks biasa..."] },
    { title: "Kesultanan Melaka", category: "sejarah", color: "#70a1ff", author: "Ahli Sejarah", description: "Zaman kegemilangan Kesultanan Melaka.", coverImage: "🏰", isImageBook: false, pages: ["Buku teks biasa..."] },
    { title: "Pantun & Peribahasa", category: "bahasa", color: "#dda0dd", author: "Penyair", description: "Koleksi pantun dan peribahasa Melayu.", coverImage: "🎭", isImageBook: false, pages: ["Buku teks biasa..."] }
];

// Global variables
let viewedBooks = 0;
let currentFilter = 'all';
let currentBook = null;
let currentPageIndex = 0;
let isFlipping = false;
let isBookOpen = false;

// Function to create book element
function createBook(book, index) {
    const bookElement = document.createElement('div');
    bookElement.className = 'book';
    bookElement.style.backgroundColor = book.color;
    bookElement.textContent = book.title;
    bookElement.dataset.category = book.category;
    bookElement.onclick = () => openModal(book);
    return bookElement;
}

// Function to render books on shelves
function renderBooks() {
    const shelves = [
        document.getElementById('shelf1'),
        document.getElementById('shelf2'),
        document.getElementById('shelf3')
    ];
    
    // Clear shelves
    shelves.forEach(shelf => shelf.innerHTML = '');
    
    // Filter books
    const filteredBooks = currentFilter === 'all' 
        ? books 
        : books.filter(book => book.category === currentFilter);
    
    // Distribute books across shelves
    filteredBooks.forEach((book, index) => {
        const shelfIndex = Math.floor(index / 6);
        if (shelfIndex < shelves.length) {
            shelves[shelfIndex].appendChild(createBook(book, index));
        }
    });
    
    updateStats();
}

// Function to open book modal
function openModal(book) {
    currentBook = book;
    currentPageIndex = 0;
    isBookOpen = false;
    isFlipping = false;
    
    // Show modal
    document.getElementById('bookModal').style.display = 'flex';
    
    // Set book cover
    document.getElementById('coverTitle').textContent = book.title;
    document.getElementById('coverImage').textContent = book.coverImage || '📖';
    document.getElementById('coverAuthor').textContent = book.author;
    document.getElementById('bookSpine').textContent = book.title;
    
    // Set book color
    document.getElementById('bookCover').style.setProperty('--book-color', book.color);
    
    // Reset book state
    const book3d = document.getElementById('book3d');
    const bookCover = document.getElementById('bookCover');
    const leftPage = document.getElementById('leftPage');
    const rightPage = document.getElementById('rightPage');
    
    book3d.style.transform = 'rotateY(0deg)';
    bookCover.style.transform = 'rotateY(0deg)';
    leftPage.style.transform = 'rotateY(0deg)';
    rightPage.style.transform = 'rotateY(0deg)';
    
    // Initially show cover
    bookCover.style.display = 'flex';
    leftPage.style.display = 'none';
    rightPage.style.display = 'none';
    
    // Update navigation buttons
    updateNavigation();
    
    viewedBooks++;
    updateStats();
}

// Function to open book (flip cover)
function openBook() {
    if (isFlipping || isBookOpen) return;
    
    isFlipping = true;
    
    const bookCover = document.getElementById('bookCover');
    const leftPage = document.getElementById('leftPage');
    const rightPage = document.getElementById('rightPage');
    
    // Flip cover to open book
    bookCover.classList.add('page-flip');
    
    setTimeout(() => {
        bookCover.style.display = 'none';
        leftPage.style.display = 'flex';
        rightPage.style.display = 'flex';
        
        // Update page content
        updatePageContent();
        
        bookCover.classList.remove('page-flip');
        isBookOpen = true;
        isFlipping = false;
    }, 800);
}

// Function to update page content
function updatePageContent() {
    if (!currentBook || !isBookOpen) return;
    
    const leftPageIndex = currentPageIndex * 2;
    const rightPageIndex = currentPageIndex * 2 + 1;
    
    // Update left page
    if (leftPageIndex < currentBook.pages.length) {
        const leftPageImage = document.getElementById('leftPageImage');
        leftPageImage.src = currentBook.pages[leftPageIndex];
        leftPageImage.style.display = 'block';
        document.getElementById('leftPageNumber').textContent = `${leftPageIndex + 1}`;
    } else {
        document.getElementById('leftPageImage').style.display = 'none';
        document.getElementById('leftPageNumber').textContent = '';
    }
    
    // Update right page
    if (rightPageIndex < currentBook.pages.length) {
        const rightPageImage = document.getElementById('rightPageImage');
        rightPageImage.src = currentBook.pages[rightPageIndex];
        rightPageImage.style.display = 'block';
        document.getElementById('rightPageNumber').textContent = `${rightPageIndex + 1}`;
    } else {
        document.getElementById('rightPageImage').style.display = 'none';
        document.getElementById('rightPageNumber').textContent = '';
    }
    
    updateNavigation();
}

// Function to go to next page
function nextPage() {
    if (isFlipping) return;
    
    if (!isBookOpen) {
        openBook();
        return;
    }
    
    const maxPage = Math.ceil(currentBook.pages.length / 2) - 1;
    if (currentPageIndex < maxPage) {
        isFlipping = true;
        
        const rightPage = document.getElementById('rightPage');
        rightPage.classList.add('page-flip-right');
        
        setTimeout(() => {
            currentPageIndex++;
            updatePageContent();
            rightPage.classList.remove('page-flip-right');
            isFlipping = false;
        }, 800);
    }
}

// Function to go to previous page
function previousPage() {
    if (isFlipping || !isBookOpen) return;
    
    if (currentPageIndex > 0) {
        isFlipping = true;
        
        const leftPage = document.getElementById('leftPage');
        leftPage.classList.add('page-flip');
        
        setTimeout(() => {
            currentPageIndex--;
            updatePageContent();
            leftPage.classList.remove('page-flip');
            isFlipping = false;
        }, 800);
    }
}

// Function to update navigation buttons
function updateNavigation() {
    const prevBtn = document.querySelector('.prev-page');
    const nextBtn = document.querySelector('.next-page');
    
    if (!isBookOpen) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'block';
        nextBtn.textContent = '›';
    } else {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
        prevBtn.textContent = '‹';
        nextBtn.textContent = '›';
        
        const maxPage = Math.ceil(currentBook.pages.length / 2) - 1;
        if (currentPageIndex <= 0) {
            prevBtn.style.opacity = '0.3';
            prevBtn.style.cursor = 'default';
        } else {
            prevBtn.style.opacity = '1';
            prevBtn.style.cursor = 'pointer';
        }
        
        if (currentPageIndex >= maxPage) {
            nextBtn.style.opacity = '0.3';
            nextBtn.style.cursor = 'default';
        } else {
            nextBtn.style.opacity = '1';
            nextBtn.style.cursor = 'pointer';
        }
    }
}

// Function to close modal
function closeModal() {
    document.getElementById('bookModal').style.display = 'none';
    currentBook = null;
    currentPageIndex = 0;
    isBookOpen = false;
    isFlipping = false;
}

// Function to update statistics
function updateStats() {
    const filteredBooks = currentFilter === 'all' 
        ? books 
        : books.filter(book => book.category === currentFilter);
    
    document.getElementById('total-books').textContent = filteredBooks.length;
    document.getElementById('viewed-books').textContent = viewedBooks;
    
    // Calculate most popular category
    const categoryCounts = {};
    books.forEach(book => {
        categoryCounts[book.category] = (categoryCounts[book.category] || 0) + 1;
    });
    
    const popularCategory = Object.keys(categoryCounts).reduce((a, b) => 
        categoryCounts[a] > categoryCounts[b] ? a : b
    );
    
    const categoryNames = {
        'cerita': 'Cerita',
        'sains': 'Sains',
        'matematik': 'Matematik',
        'sejarah': 'Sejarah',
        'bahasa': 'Bahasa'
    };
    
    document.getElementById('popular-category').textContent = categoryNames[popularCategory];
}

// Search functionality
document.getElementById('search-input').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const bookElements = document.querySelectorAll('.book');
    
    bookElements.forEach(book => {
        const title = book.textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            book.style.display = 'flex';
        } else {
            book.style.display = 'none';
        }
    });
});

// Filter functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        currentFilter = this.dataset.category;
        renderBooks();
        
        // Clear search
        document.getElementById('search-input').value = '';
    });
});

// Close modal when clicking outside
document.getElementById('bookModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Initialize the bookshelf when page loads
window.addEventListener('DOMContentLoaded', function() {
    renderBooks();
});