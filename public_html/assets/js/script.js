document.querySelectorAll('.blog-img').forEach(function (img) {
    img.style.cursor = 'zoom-in';
    img.onclick = function () {
        document.getElementById('modalImg').src = img.src;
        document.getElementById('imgModal').style.display = 'flex';
    };
});
document.getElementById('closeModal').onclick = function () {
    document.getElementById('imgModal').style.display = 'none';
};
document.getElementById('imgModal').onclick = function (e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
};

(function () {
    var imgs = document.querySelectorAll('.blog-img');
    var modal = document.getElementById('imgModal');
    var modalImg = document.getElementById('modalImg');
    var modalVideo = document.getElementById('modalVideoLocal');
    imgs.forEach(function (img) {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function () {
            var videoSrc = img.getAttribute('data-video');
            // reset
            modalImg.style.display = 'none';
            modalVideo.style.display = 'none';
            try { modalVideo.pause(); } catch (e) { }
            modalVideo.src = '';
            if (videoSrc && videoSrc.toLowerCase().indexOf('.mp4') !== -1) {
                modalVideo.src = videoSrc;
                modalVideo.style.display = 'block';
                // play (may be blocked until user interacts)
                modalVideo.play().catch(function () { });
            } else {
                modalImg.src = img.src;
                modalImg.style.display = 'block';
            }
            modal.style.display = 'flex';
        });
    });

    document.getElementById('closeModal').addEventListener('click', function () {
        modal.style.display = 'none';
        try { modalVideo.pause(); } catch (e) { }
        modalVideo.src = '';
    });

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            try { modalVideo.pause(); } catch (e) { }
            modalVideo.src = '';
        }
    });
})();

// Carousel autoplay for any .carousel elements
(function () {
    var carousels = document.querySelectorAll('.carousel');
    carousels.forEach(function (carousel) {
        var track = carousel.querySelector('.carousel-track');
        var slides = carousel.querySelectorAll('.carousel-slide');
        if (!track || slides.length <= 1) return;
        var current = 0;
        var interval = parseInt(carousel.getAttribute('data-interval')) || 3000;
        var timer = null;

        function goTo(index) {
            current = (index + slides.length) % slides.length;
            track.style.transform = 'translateX(' + (-current * 100) + '%)';
        }

        function start() {
            stop();
            timer = setInterval(function () { goTo(current + 1); }, interval);
        }

        function stop() {
            if (timer) { clearInterval(timer); timer = null; }
        }

        // pause on hover, resume on leave
        carousel.addEventListener('mouseenter', stop);
        carousel.addEventListener('mouseleave', start);

        // init
        goTo(0);
        start();
    });
})();
const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
    header.addEventListener("click", () => {
        const body = header.nextElementSibling;
        const isActive = header.classList.contains("active");

        // Fecha todos
        document.querySelectorAll(".accordion-header").forEach(h => h.classList.remove("active"));
        document.querySelectorAll(".accordion-body").forEach(b => (b.style.display = "none"));

        // Abre o clicado
        if (!isActive) {
            header.classList.add("active");
            body.style.display = "block";
        }
    });
});

document.getElementById("cta-button").addEventListener("click", function () {
    alert("🎉 Parabéns! Você garantiu sua vaga na promoção. Entraremos em contato pelo WhatsApp!");
    window.open("https://wa.me/5517997529375?text=Olá!%20Vi%20sua%20promoção%20de%20criação%20de%20site%20e%20Google%20Ads!", "_blank");
});


// Banner promocional inferior automático
setTimeout(() => {
  const promo = document.createElement('div');
  promo.className = 'footer-promo';
  promo.innerHTML = '🎁 Oferta ativa: Sites + Anúncios + Google Meu Negócio com <span class="promo-span">50% OFF</span> — <a href="https://wa.me/5517997529375" target="_blank">Fale conosco</a>';
  document.body.appendChild(promo);
}, 2000);
