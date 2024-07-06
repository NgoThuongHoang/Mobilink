// Slider tự động thay đổi hình ảnh
let currentSlide = 0;
const slides = document.querySelectorAll('#home .slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Thay đổi hình ảnh mỗi 3 giây

// Tìm kiếm
document.querySelector('.search-box button').addEventListener('click', () => {
    const query = document.querySelector('.search-box input').value;
    alert('Bạn đã tìm kiếm: ' + query);
});

// Hiển thị thông tin nhanh khi di chuột vào sản phẩm
document.querySelectorAll('#products .product-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const info = item.querySelector('.product-info');
        info.style.display = 'block';
    });

    item.addEventListener('mouseleave', () => {
        const info = item.querySelector('.product-info');
        info.style.display = 'none';
    });
});

// Hiển thị hoặc ẩn nút khi cuộn trang
window.onscroll = function() {
    toggleScrollToTopBtn();
};

function toggleScrollToTopBtn() {
    const btn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.classList.add('visible');
    } else {
        btn.classList.remove('visible');
    }
}

// Di chuyển lên đầu trang khi nhấp vào nút
document.getElementById('scrollToTopBtn').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

