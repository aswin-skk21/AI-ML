const yesButton = document.getElementById('yesButton');
const nawButton = document.getElementById('nawButton');
const happyMusic = new Audio('happy.mp3'); // Initialize the happy audio element
const sadMusic = new Audio('sad.mp3'); // Initialize the sad audio element

// When Yes button is clicked
yesButton.addEventListener('click', () => {
    navigate('love.html'); // Navigate to love page then play happy music
  });
  
  // When Naw button is clicked
  nawButton.addEventListener('click', () => {
    navigate('bum.html'); // Navigate to bum page then play sad music
  });
  
// Function to navigate first, then play the music
function navigate(url) {
  window.location.href = url; // Navigate to the page first
}

