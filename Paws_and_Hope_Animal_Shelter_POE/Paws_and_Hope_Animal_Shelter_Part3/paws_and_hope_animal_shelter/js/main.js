// Paws & Hope — Part 3 JavaScript functionality

// Responsive mobile navigation
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    menuButton.textContent = isOpen ? '✕' : '☰';
  });
}

// FAQ accordion: one answer open at a time
document.querySelectorAll('.faq-question').forEach((button) => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const willOpen = button.getAttribute('aria-expanded') !== 'true';
    document.querySelectorAll('.faq-question').forEach((other) => {
      other.setAttribute('aria-expanded', 'false');
      other.querySelector('span').textContent = '＋';
      other.nextElementSibling.hidden = true;
    });
    if (willOpen) {
      button.setAttribute('aria-expanded', 'true');
      button.querySelector('span').textContent = '−';
      answer.hidden = false;
    }
  });
});

// Search, filter and sort adoptable animal cards (dynamic DOM updates)
const animalGrid = document.querySelector('.animal-grid');
if (animalGrid) {
  const searchInput = document.querySelector('#animal-search');
  const typeFilter = document.querySelector('#animal-filter');
  const sortSelect = document.querySelector('#animal-sort');
  const count = document.querySelector('#results-count');
  const cards = Array.from(animalGrid.querySelectorAll('.animal-card'));

  function updateAnimals() {
    const term = searchInput.value.trim().toLowerCase();
    const type = typeFilter.value;
    cards.forEach((card) => {
      const matchesText = card.textContent.toLowerCase().includes(term);
      const matchesType = type === 'all' || card.dataset.type === type;
      card.hidden = !(matchesText && matchesType);
    });
    if (sortSelect.value === 'name') {
      cards.sort((a, b) => a.dataset.name.localeCompare(b.dataset.name));
      cards.forEach((card) => animalGrid.appendChild(card));
    } else {
      cards.sort((a, b) => ['Buddy', 'Luna', 'Milo'].indexOf(a.dataset.name) - ['Buddy', 'Luna', 'Milo'].indexOf(b.dataset.name));
      cards.forEach((card) => animalGrid.appendChild(card));
    }
    const visible = cards.filter((card) => !card.hidden).length;
    count.textContent = `Showing ${visible} ${visible === 1 ? 'animal' : 'animals'}`;
  }
  [searchInput, typeFilter, sortSelect].forEach((control) => control.addEventListener('input', updateAnimals));
}

// Accessible image lightbox gallery
const lightbox = document.querySelector('#image-lightbox');
if (lightbox) {
  const lightboxImage = document.querySelector('#lightbox-image');
  const caption = document.querySelector('#lightbox-caption');
  const closeButton = lightbox.querySelector('.lightbox-close');
  document.querySelectorAll('.gallery-image').forEach((image) => {
    const openImage = () => {
      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;
      caption.textContent = image.alt;
      lightbox.showModal();
    };
    image.addEventListener('click', openImage);
    image.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openImage();
      }
    });
  });
  closeButton.addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });
}

// Enquiry form: client-side validation and context-specific response
const enquiryForm = document.querySelector('#enquiry-form');
if (enquiryForm) {
  const typeSelect = document.querySelector('#enq-type');
  const extraField = document.querySelector('#enquiry-extra');
  const animalInput = document.querySelector('#enq-animal');
  const feedback = document.querySelector('#enquiry-feedback');

  typeSelect.addEventListener('change', () => {
    const isAdoption = typeSelect.value === 'adoption';
    extraField.hidden = !isAdoption;
    animalInput.required = isAdoption;
  });

  enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    feedback.textContent = '';
    if (!enquiryForm.checkValidity()) {
      enquiryForm.reportValidity();
      feedback.textContent = 'Please check the highlighted fields and enter valid information.';
      feedback.classList.add('error');
      return;
    }
    const selected = typeSelect.value;
    const responses = {
      adoption: 'Thank you for your adoption enquiry. The next step would be a conversation about the animal, your home and whether the match is suitable. No adoption is confirmed by this demo.',
      volunteer: 'Thank you for offering your time. The next step would be an orientation and a discussion of suitable volunteer tasks and availability.',
      sponsor: 'Thank you for offering support. The next step would be to confirm current supply needs or discuss a suitable sponsorship arrangement. No payment is collected here.'
    };
    feedback.classList.remove('error');
    feedback.textContent = responses[selected];
    enquiryForm.reset();
    extraField.hidden = true;
    animalInput.required = false;
  });
}

// Contact form: validate, then prepare an email in the visitor's email application.
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = contactForm.querySelector('.form-status');
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      status.textContent = 'Please correct the form fields before sending.';
      return;
    }
    const data = new FormData(contactForm);
    const recipient = 'hello@pawsandhope.example'; // Replace with the real shelter email before publishing.
    const subject = encodeURIComponent(`Website enquiry: ${data.get('topic')}`);
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone') || 'Not supplied'}\nTopic: ${data.get('topic')}\n\nMessage:\n${data.get('message')}`
    );
    status.textContent = 'Your email application should open with the message prepared. Replace the example recipient email before publishing.';
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
}


// Interactive Leaflet map. The marker is deliberately a general city-centre
// reference, not a claimed animal shelter address.
const mapElement = document.querySelector('#shelter-map');
if (mapElement && window.L) {
  const map = L.map('shelter-map').setView([-26.2041, 28.0473], 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);
  L.marker([-26.2041, 28.0473]).addTo(map)
    .bindPopup('<strong>Johannesburg city centre</strong><br>Illustrative map position only; not a verified shelter address.')
    .openPopup();
}
