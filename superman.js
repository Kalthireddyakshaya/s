document.addEventListener('DOMContentLoaded', function() {
    var animalPicture = document.getElementById('animalPicture');
    var scoreDisplay = document.getElementById('score');
    var timeDisplay = document.getElementById('time');
    var end = document.getElementById('end');
    var restartButton = document.getElementById('restartButton');
    var score = 0;
    var timeLeft = 10;
    var countdown;
  
    function startGame() {
      score = 0;
      timeLeft = 10;
      scoreDisplay.textContent = 'Score: ' + score;
      end.textContent = '';
      restartButton.style.display = 'none';
  
      animalPicture.addEventListener('click', incrementScore);
  
      countdown = setInterval(function() {
        timeLeft--;
        timeDisplay.textContent = timeLeft + ' wacky seconds';
        if (timeLeft <= 0) {
          clearInterval(countdown);
          end.textContent = "Enough! I can't be beaten by you";
          restartButton.style.display = 'block';
          animalPicture.removeEventListener('click', incrementScore);
        }
      }, 1000);
    }
  
    function incrementScore() {
      score++;
      scoreDisplay.textContent = 'Score: ' + score;
    }
  
    restartButton.addEventListener('click', startGame);
  
    startGame(); // Start the game initially
  });
  