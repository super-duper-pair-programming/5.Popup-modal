const $togglePopup = document.querySelector('.toggle-popup');
const $popupModal = document.querySelector('.popup-modal');
const $modalForm = document.querySelector('.modal-form');
const $modalInput = document.querySelector('.modal-input');
const $popupMessage = document.querySelector('.popup-message');

const openModal = () => $popupModal.classList.add('open');

const closeModal = () => {
  $modalForm.reset();
  $popupModal.classList.remove('open');
};

const renderPopupMsg = input => {
  $popupMessage.textContent = `from popup : ${input}`;
};

$togglePopup.addEventListener('click', openModal);

$popupModal.addEventListener('click', e => {
  if (e.target.matches(':not(.popup-modal *), .cancel-btn, .bx-x')) closeModal();
});

$modalForm.addEventListener('submit', e => {
  e.preventDefault();
  renderPopupMsg($modalInput.value);
  closeModal();
});

// [변경사항]
// - opemModal, closeModal, renderPopupMsg 함수를 생성하여 관련 코드를 event listener에서 분리함
// - $modalInput.value = '' 대신 $modalForm.reset()을 사용하여 form을 초기화한다는 것을 명시적으로 표현
// - event listener 내에서 CSS selector를 활용하여 코드 간소화
