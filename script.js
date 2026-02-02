document.addEventListener("DOMContentLoaded", () => {


  document.getElementById("openServices").addEventListener("click", function () {
    const servicesMenu = document.querySelector(".services-dropdown");

    servicesMenu.scrollIntoView({ behavior: "smooth", block: "center" });
    servicesMenu.classList.add("show-services");
  });


  // HERO CAROUSEL
  const carouselElement = document.querySelector('#heroCarousel');
  if (carouselElement) {
    new bootstrap.Carousel(carouselElement, {
      interval: 3000,
      pause: false,
      wrap: true
    });
  }

  // HERO BADGE SCROLL REVEAL
  const badge = document.querySelector(".reveal-badge");
  if (badge) {
    const badgeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        }
      });
    }, { threshold: 0.4 });
    badgeObserver.observe(badge);
  }

  // SERVICE CARDS SCROLL REVEAL (if any)
  const cards = document.querySelectorAll(".service-card");
  if (cards.length > 0) {
    const observerOptions = { threshold: 0.2 };
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("reveal");
          }, index * 100);
        }
      });
    }, observerOptions);
    cards.forEach(card => cardObserver.observe(card));
  }

});


document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".advantage-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("reveal");
          }, index * 120);
        }
      });
    },
    { threshold: 0.15 }
  );

  cards.forEach(card => observer.observe(card));
});

document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.step-item');
  
  steps.forEach(step => {
    step.addEventListener('click', () => {
      steps.forEach(s => s.classList.remove('active'));
      step.classList.add('active');
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll('.testimonial-card').forEach(card => {
    const rating = parseInt(card.dataset.rating) || 0;
    const ratingDiv = card.querySelector('.testimonial-rating');
    const subtitleDiv = card.querySelector('.testimonial-subtitle');

    let stars = '';
    for (let i = 1; i <= 5; i++) {
      stars += i <= rating ? '★' : '☆';
    }
    ratingDiv.innerHTML = stars;
    subtitleDiv.innerText = card.dataset.subtitle || '';
  });

  const carousel = document.querySelector('.testimonials-carousel');
  carousel.innerHTML += carousel.innerHTML;
  carousel.classList.add('animate');
});
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".logo-scroll-track");
  track.innerHTML += track.innerHTML;
});



document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate-up, .animate-right");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach(el => observer.observe(el));
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const company = document.getElementById("company").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;

  const subject = encodeURIComponent("New Contact Form Enquiry");
  const body = encodeURIComponent(
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Mobile: ${mobile}\n` +
    `Company: ${company}\n` +
    `Service: ${service}\n\n` +
    `Message:\n${message}`
  );

  window.location.href = 
    `mailto:tescodigitals26@gmail.com?subject=${subject}&body=${body}`;
});


  const pricingCards = document.querySelectorAll(".pricing-card");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.3 }
  );

  pricingCards.forEach(card => observer.observe(card));



