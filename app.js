const $togglePopup = document.querySelector('.toggle-popup');
const $popupModal = document.querySelector('.popup-modal');
const $modalForm = document.querySelector('.modal-form');
const $modalInput = document.querySelector('.modal-input');
const $popupMessage = document.querySelector('.popup-message');

$togglePopup.addEventListener('click', e => e.target.previousElementSibling.classList.add('open'));

$popupModal.addEventListener('click', e => {
  if (e.target.matches('.popup-modal *')) return;
  $popupModal.classList.remove('open');
});

$modalForm.addEventListener('submit', e => {
  e.preventDefault();
  $popupMessage.innerHTML = `from popup : ${$modalInput.value}`;
  $modalInput.value = '';
  $popupModal.classList.remove('open');
});

$modalForm.addEventListener('click', e => {
  if (!e.target.matches('.cancel-btn') && !e.target.matches('.bx-x')) return;
  $modalInput.value = '';
  $popupModal.classList.remove('open');
});
