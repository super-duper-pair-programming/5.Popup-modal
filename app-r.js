const $popupModal = document.querySelector('.popup-modal');

document.querySelector('.toggle-popup').addEventListener('click', () => $popupModal.classList.add('open'));

const $modalInput = document.querySelector('.modal-input');

const closeModal = () => {
  $modalInput.value = '';
  $popupModal.classList.remove('open');
};

$popupModal.addEventListener('click', e => {
  if (e.target.matches(':not(.popup-modal *), .cancel-btn, .bx-x')) closeModal();
});

document.querySelector('.modal-form').addEventListener('submit', e => {
  e.preventDefault();
  document.querySelector('.popup-message').textContent = `from popup : ${$modalInput.value}`;
  closeModal();
});
