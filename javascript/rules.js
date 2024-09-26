const rulesBtn = document.getElementById('rules-btn');
const popupContainer = document.getElementById('popup-container-rules');
const closeIconRules = document.getElementById('close-icon-rules-game');
const okBtn = document.getElementById('ok-btn');

rulesBtn.addEventListener('click', () => {
  popupContainer.style.display = 'flex';
});

closeIconRules.addEventListener('click', () => {
  popupContainer.style.display = 'none';
});

okBtn.addEventListener('click', () => {
  popupContainer.style.display = 'none';
});