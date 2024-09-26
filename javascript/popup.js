

const playButton = document.getElementById('play-button');
const popupBox = document.getElementById('popup-box');
const progressBar = document.getElementById('progress-bar');
const gameControls = document.getElementById('game-controls');
const usernameInput = document.getElementById('username');
const modeSelect = document.getElementById('mode');
const startButton = document.getElementById('start-button');
const startGameButton = document.getElementById('start-game');
const stopGameButton = document.getElementById('stop-game');
const progressBarInner = document.getElementById('progress-bar-inner');
const loadingSound = document.getElementById('loading-sound');
const closepopup = document.getElementById('close-icon-popup');
const closebar = document.getElementById('close-bar');
const divElement = document.getElementsByClassName('name')[0];
 // Access the first element of the collection

playButton.addEventListener('click', () => {
    popupBox.style.display = 'block';
});

startButton.addEventListener('click', () => {
    var username = usernameInput.value;
    const mode = modeSelect.value;
    // Validate user input here
    if (usernameInput.value === "")
        alert("enter name ");
    else {

        const h2Element = document.createElement('h2');
        const para = document.createElement('p');

        h2Element.innerHTML = "Welcome " + username;
        divElement.appendChild(h2Element);

        localStorage.setItem('username', username);


        para.innerHTML = "Your Game is Loading for " + mode + " mode";
        divElement.appendChild(para);


       
        popupBox.style.display = 'none';
        progressBar.style.display = 'block';
        loadingSound.play();
        progressBarInner.style.width = '0%';
        setTimeout(() => {
            progressBarInner.style.width = '100%';
        }, 2000);
        setTimeout(() => {
            // progressBar.style.display = 'none';
            gameControls.style.display = 'block';
        }, 6000);
    }
});

closepopup.addEventListener('click', () => {
    popupBox.style.display = 'none';
    
  });
  closebar.addEventListener('click', () => {
    
    progressBar.style.display = 'none';
  });


  stopGameButton.addEventListener('click', () => {
    
    progressBar.style.display = 'none';
  });