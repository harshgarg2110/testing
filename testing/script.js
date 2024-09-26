// Get the modal and contact form elements
const modal = document.getElementById('contact-page');
const contactForm = document.getElementById('contact-form');
const contactBtn = document.getElementById('contact-btn');

// Add event listener to contact button to open modal
contactBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Add event listener to close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Add event listener to submit form
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  // Send form data to server or handle it as needed
  console.log(formData);
  modal.style.display = 'none';
});