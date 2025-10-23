const books = [
    // Shelf 1 - Cerita & Dongeng
    { 
        title: "Si Kancil", 
        category: "cerita", 
        color: "#ff6b6b", 
        author: "Cerita Rakyat Malaysia",
        description: "Cerita klasik tentang Si Kancil yang bijak dan penuh akal. Belajar tentang kebijaksanaan melalui petualangan yang menarik!",
        pages: [
            {
                text: "Dahulu kala, di dalam hutan yang lebat, hiduplah seekor kancil yang sangat bijak dan pandai. Si Kancil terkenal dengan akalnya yang cerdik dan selalu dapat menyelesaikan masalah dengan cara yang unik.",
                illustration: "🦌",
                decorative: true,
                quote: "Kecerdikan lebih berharga daripada kekuatan!"
            },
            {
                text: "Pada suatu hari, Si Kancil merasa sangat dahaga. Dia berjalan mencari sungai untuk minum. Setelah berjalan jauh, akhirnya dia menemukan sebuah sungai yang jernih dan sejuk.",
                illustration: "🏞️",
                character: "Si Kancil: Kancil kecil yang bijak dan cerdik"
            },
            {
                text: "Namun, di tepi sungai itu terdapat seekor buaya besar yang ganas. Buaya itu menghalang Si Kancil untuk minum air.",
                illustration: "🐊",
                quote: "'Hai Kancil kecil, jika kamu mahu minum air di sungaiku, kamu mesti membayar!' - Buaya Ganas"
            },
            {
                text: "Si Kancil tidak takut. Dengan akalnya yang bijak, dia berkata, 'Wahai Buaya, aku mempunyai hadiah istimewa untukmu. Tetapi aku perlu minum air dahulu untuk memberitahu rahsia ini.' Buaya itu menjadi penasaran dan membenarkan Si Kancil minum.",
                illustration: "💡",
                moral: "Kecerdikan dan kebijaksanaan dapat mengatasi masalah yang sukar!"
            }
        ]
    },
    { 
        title: "Puteri Gunung Ledang", 
        category: "cerita", 
        color: "#4ecdc4", 
        author: "Legenda Johor",
        description: "Legenda indah tentang puteri yang cantik dari Gunung Ledang. Kisah cinta dan keajaiban dari tanah Melayu.",
        pages: [
            {
                text: "Di puncak Gunung Ledang yang tinggi dan megah, tinggallah seorang puteri yang sangat cantik. Kecantikannya terkenal ke seluruh Nusantara, sehingga banyak raja dan pangeran yang ingin meminangnya.",
                illustration: "👸",
                decorative: true,
                character: "Puteri Gunung Ledang: Puteri ajaib yang cantik dan bijaksana"
            },
            {
                text: "Puteri Gunung Ledang mempunyai kuasa ajaib. Dia dapat mengawal cuaca, menyembuhkan penyakit, dan melindungi rakyat dari bahaya. Semua orang menghormati dan mengagumi kebijaksanaannya.",
                illustration: "✨",
                quote: "Kuasa yang sebenar datang dari kebijaksanaan dan belas kasihan."
            },
            {
                text: "Sultan Mahmud Shah dari Melaka mendengar tentang kecantikan puteri ini. Dia menghantar utusan untuk meminang puteri tersebut. Namun, puteri memberikan syarat-syarat yang mustahil untuk dipenuhi.",
                illustration: "👑",
                character: "Sultan Mahmud Shah: Raja Melaka yang berkuasa"
            },
            {
                text: "Antara syarat-syarat itu ialah tujuh dulang hati nyamuk, tujuh dulang hati kuman, sebatang jambatan emas dari Melaka ke Gunung Ledang, dan sebak air mata dara.",
                illustration: "🌉",
                moral: "Kadang-kadang 'tidak' adalah jawapan yang paling bijaksana."
            }
        ]
    },
    { 
        title: "Bawang Putih Bawang Merah", 
        category: "cerita", 
        color: "#45b7d1", 
        author: "Dongeng Tradisional",
        description: "Dongeng moral tentang kebaikan hati dan kesabaran. Pelajari nilai-nilai murni melalui cerita yang mengharukan.",
        pages: [
            "Bawang Putih adalah seorang gadis yang baik hati dan rajin. Dia tinggal bersama ibu tirinya dan kakak tirinya, Bawang Merah. Walaupun sering diperlakukan tidak adil, Bawang Putih tetap sabar dan pemurah.",
            "Setiap hari, Bawang Putih melakukan semua kerja rumah. Dia memasak, membersihkan rumah, dan mencuci pakaian. Bawang Merah pula hanya bermalas-malasan dan memerintah Bawang Putih.",
            "Pada suatu hari, ketika Bawang Putih sedang mencuci pakaian di sungai, sehelai kain terbang dibawa angin. Dia mengikuti kain itu dan tiba di sebuah rumah nenek yang baik hati.",
            "Nenek itu sebenarnya adalah bidadari yang menyamar. Kerana kebaikan hati Bawang Putih, nenek memberikan labu ajaib yang penuh dengan emas dan permata. Ini mengajar kita bahawa kebaikan akan dibalas dengan kebaikan."
        ]
    },
    { title: "Sang Kancil & Buaya", category: "cerita", color: "#96ceb4", author: "Cerita Rakyat", description: "Petualangan Si Kancil yang cerdik menghadapi buaya-buaya lapar. Cerita penuh aksi dan kecerdikan!", pages: ["Cerita dimulakan...", "Halaman kedua...", "Halaman ketiga...", "Tamat"] },
    { title: "Raja Bersiong", category: "cerita", color: "#feca57", author: "Legenda Kedah", description: "Legenda misteri tentang raja yang mempunyai taring. Kisah yang mengajar tentang keadilan dan kebenaran.", pages: ["Cerita dimulakan...", "Halaman kedua...", "Halaman ketiga...", "Tamat"] },
    { title: "Cerita Rakyat Malaysia", category: "cerita", color: "#ff9ff3", author: "Koleksi Tradisional", description: "Koleksi cerita rakyat dari seluruh Malaysia. Warisan budaya yang kaya untuk generasi muda.", pages: ["Cerita dimulakan...", "Halaman kedua...", "Halaman ketiga...", "Tamat"] },
    
    // Shelf 2 - Sains & Matematik
    { 
        title: "Sains Mudah", 
        category: "sains", 
        color: "#54a0ff", 
        author: "Dr. Ahmad", 
        description: "Buku sains yang mudah difahami untuk pelajar sekolah rendah. Eksperimen mudah dan fakta menarik!", 
        pages: [
            {
                text: "Sains adalah kajian tentang alam semesta di sekeliling kita. Dari tumbuhan yang tumbuh di taman hingga bintang-bintang di langit, semuanya adalah sebahagian daripada sains yang menakjubkan!",
                illustration: "🔬",
                decorative: true,
                quote: "Sains membantu kita memahami dunia dengan lebih baik!"
            },
            {
                text: "Mari kita mulakan dengan eksperimen mudah! Ambil segelas air dan masukkan garam. Aduk perlahan-lahan. Ke mana perginya garam itu? Garam telah larut dalam air!",
                illustration: "🧪",
                character: "Eksperimen: Pelarutan Garam dalam Air"
            },
            {
                text: "Tahukah kamu bahawa tumbuhan memerlukan cahaya matahari untuk membuat makanan mereka sendiri? Proses ini dipanggil fotosintesis. Daun hijau menyerap cahaya matahari dan menghasilkan oksigen.",
                illustration: "🌱",
                quote: "Tumbuhan adalah 'chef' alam yang membuat makanan dari cahaya matahari!"
            },
            {
                text: "Eksperimen seterusnya: Letakkan sebiji telur dalam gelas berisi air. Telur akan tenggelam. Sekarang tambah garam banyak-banyak dan aduk. Telur akan terapung!",
                illustration: "🥚",
                moral: "Sains penuh dengan kejutan yang menakjubkan!"
            }
        ]
    },
    { title: "Matematik Fun", category: "matematik", color: "#5f27cd", author: "Cikgu Siti", description: "Belajar matematik dengan cara yang menyeronokkan! Permainan nombor dan teka-teki yang mencabar minda.", pages: ["Matematik adalah mudah!", "Permainan nombor...", "Teka-teki...", "Tamat"] },
    { title: "Alam Sekitar", category: "sains", color: "#00d2d3", author: "Prof. Hijau", description: "Mengenal flora dan fauna Malaysia. Belajar tentang kepentingan menjaga alam sekitar kita.", pages: ["Alam sekitar kita...", "Flora Malaysia...", "Fauna Malaysia...", "Tamat"] },
    { title: "Angkasa Lepas", category: "sains", color: "#ff6348", author: "Dr. Astronomi", description: "Jelajahi misteri angkasa lepas! Planet, bintang, dan astronaut menanti untuk ditemui.", pages: ["Angkasa lepas...", "Planet-planet...", "Bintang-bintang...", "Tamat"] },
    { title: "Nombor Ajaib", category: "matematik", color: "#2ed573", author: "Cikgu Matematik", description: "Dunia ajaib matematik dengan nombor-nombor yang menakjubkan. Belajar sambil bermain!", pages: ["Nombor ajaib...", "Permainan matematik...", "Teka-teki nombor...", "Tamat"] },
    { title: "Tubuh Manusia", category: "sains", color: "#ffa502", author: "Dr. Biologi", description: "Mengenal sistem dalam tubuh manusia. Bagaimana jantung, paru-paru, dan otak berfungsi.", pages: ["Tubuh manusia...", "Sistem badan...", "Organ penting...", "Tamat"] },
    
    // Shelf 3 - Sejarah & Bahasa
    { title: "Sejarah Malaysia", category: "sejarah", color: "#3742fa", author: "Prof. Sejarah", description: "Perjalanan sejarah Malaysia dari zaman purba hingga merdeka. Kenali wira-wira bangsa kita.", pages: ["Sejarah Malaysia...", "Zaman purba...", "Kemerdekaan...", "Tamat"] },
    { title: "Bahasa Melayu", category: "bahasa", color: "#2f3542", author: "Cikgu Bahasa", description: "Panduan lengkap Bahasa Melayu untuk pelajar. Tatabahasa, karangan, dan puisi yang indah.", pages: ["Bahasa Melayu...", "Tatabahasa...", "Karangan...", "Tamat"] },
    { title: "Hang Tuah", category: "sejarah", color: "#ff4757", author: "Sejarawan", description: "Kisah kepahlawanan Hang Tuah dan sahabat-sahabatnya. Semangat patriotik yang menginspirasi.", pages: ["Hang Tuah...", "Lima sahabat...", "Kepahlawanan...", "Tamat"] },
    { title: "English Fun", category: "bahasa", color: "#7bed9f", author: "Teacher Mary", description: "Learn English in a fun way! Games, songs, and activities to improve your English skills.", pages: ["Learning English...", "Fun activities...", "Games and songs...", "The End"] },
    { title: "Kesultanan Melaka", category: "sejarah", color: "#70a1ff", author: "Ahli Sejarah", description: "Zaman kegemilangan Kesultanan Melaka sebagai pusat perdagangan dunia. Sejarah yang membanggakan.", pages: ["Kesultanan Melaka...", "Pusat perdagangan...", "Zaman kegemilangan...", "Tamat"] },
    { title: "Pantun & Peribahasa", category: "bahasa", color: "#dda0dd", author: "Penyair", description: "Koleksi pantun dan peribahasa Melayu yang indah. Warisan sastera untuk dihayati.", pages: ["Pantun Melayu...", "Peribahasa...", "Warisan sastera...", "Tamat"] }
];

let viewedBooks = 0;
let currentFilter = 'all';
let currentBook = null;
let currentPageIndex = 0;

function createBook(book, index) {
    const bookElement = document.createElement('div');
    bookElement.className = 'book';
    bookElement.style.backgroundColor = book.color;
    bookElement.textContent = book.title;
    bookElement.dataset.category = book.category;
    bookElement.onclick = () => openModal(book);
    return bookElement;
}

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

function openModal(book) {
    currentBook = book;
    currentPageIndex = 0;
    
    // Show modal with animation
    document.getElementById('bookModal').style.display = 'flex';
    
    // Reset page positions
    document.getElementById('leftPage').classList.remove('page-flip-left');
    document.getElementById('rightPage').classList.remove('page-flip-right');
    
    // Update page content
    updatePages();
    
    viewedBooks++;
    updateStats();
}

function updatePages() {
    if (!currentBook || !currentBook.pages) return;
    
    const leftPageIndex = currentPageIndex;
    const rightPageIndex = currentPageIndex + 1;
    
    // Update left page
    if (leftPageIndex < currentBook.pages.length) {
        const leftPageData = currentBook.pages[leftPageIndex];
        document.getElementById('leftPageTitle').textContent = currentBook.title;
        document.getElementById('leftPageSubtitle').textContent = `Oleh: ${currentBook.author}`;
        
        if (typeof leftPageData === 'string') {
            document.getElementById('leftPageText').innerHTML = leftPageData;
        } else {
            document.getElementById('leftPageText').innerHTML = createRichPageContent(leftPageData);
        }
        document.getElementById('leftPageNumber').textContent = `${leftPageIndex + 1}`;
    } else {
        document.getElementById('leftPageText').innerHTML = '<div class="moral-lesson">Tamat</div>';
        document.getElementById('leftPageNumber').textContent = '';
    }
    
    // Update right page
    if (rightPageIndex < currentBook.pages.length) {
        const rightPageData = currentBook.pages[rightPageIndex];
        document.getElementById('rightPageTitle').textContent = currentBook.title;
        document.getElementById('rightPageSubtitle').textContent = `Oleh: ${currentBook.author}`;
        
        if (typeof rightPageData === 'string') {
            document.getElementById('rightPageText').innerHTML = rightPageData;
        } else {
            document.getElementById('rightPageText').innerHTML = createRichPageContent(rightPageData);
        }
        document.getElementById('rightPageNumber').textContent = `${rightPageIndex + 1}`;
    } else {
        document.getElementById('rightPageText').innerHTML = '<div class="moral-lesson">Terima kasih kerana membaca! 📚✨</div>';
        document.getElementById('rightPageNumber').textContent = '';
    }
    
    // Show/hide page corners based on available pages
    const leftCorner = document.querySelector('.left-page .page-corner');
    const rightCorner = document.querySelector('.right-page .page-corner');
    
    leftCorner.style.display = currentPageIndex > 0 ? 'block' : 'none';
    rightCorner.style.display = (currentPageIndex + 2) < currentBook.pages.length ? 'block' : 'none';
}

function createRichPageContent(pageData) {
    let content = '';
    
    // Add illustration
    if (pageData.illustration) {
        content += `<div class="page-illustration">${pageData.illustration}</div>`;
    }
    
    // Add decorative border if specified
    if (pageData.decorative) {
        content += '<div class="decorative-border"></div>';
    }
    
    // Add main text
    content += `<div>${pageData.text}</div>`;
    
    // Add quote if present
    if (pageData.quote) {
        content += `<div class="story-quote">${pageData.quote}</div>`;
    }
    
    // Add character box if present
    if (pageData.character) {
        content += `<div class="character-box"><strong>Watak:</strong><br>${pageData.character}</div>`;
    }
    
    // Add moral lesson if present
    if (pageData.moral) {
        content += `<div class="moral-lesson"><strong>Pengajaran:</strong><br>${pageData.moral}</div>`;
    }
    
    return content;
}

function nextPage() {
    if (!currentBook) return;
    
    if (currentPageIndex + 2 < currentBook.pages.length) {
        // Animate right page flip
        const rightPage = document.getElementById('rightPage');
        rightPage.classList.add('page-flip-right');
        
        setTimeout(() => {
            currentPageIndex += 2;
            updatePages();
            rightPage.classList.remove('page-flip-right');
        }, 300);
    }
}

function previousPage() {
    if (!currentBook) return;
    
    if (currentPageIndex > 0) {
        // Animate left page flip
        const leftPage = document.getElementById('leftPage');
        leftPage.classList.add('page-flip-left');
        
        setTimeout(() => {
            currentPageIndex -= 2;
            if (currentPageIndex < 0) currentPageIndex = 0;
            updatePages();
            leftPage.classList.remove('page-flip-left');
        }, 300);
    }
}

function closeModal() {
    document.getElementById('bookModal').style.display = 'none';
    currentBook = null;
    currentPageIndex = 0;
}

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

// Initialize the bookshelf
renderBooks();