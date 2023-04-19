
/*This code was cobbled together until it worked using Code Pen, Stack Over Flow and Chat GBT*/

/*The Images*/
const images = [
  'charmer.png',
  'dead.png',
  'internation.png',
    'virus.png',

];



/*Finding the image*/

function getRandomImage() {
  return images[Math.floor(Math.random() * images.length)];
}

/*/Update the image every time you click*/
function updateImage() {
  const randomImage = document.getElementById('randomImage');
  const randomImageSrc = getRandomImage();
  randomImage.src = randomImageSrc;
}

//The button 
const randomImageBtn = document.getElementById('randomImageBtn');
randomImageBtn.addEventListener('click', updateImage);



//The button 1
const randomImageBtn1 = document.getElementById('randomImageBtn1');
randomImageBtn1.addEventListener('click', updateImage);

//The button 2
const randomImageBtn2 = document.getElementById('randomImageBtn2');
randomImageBtn2.addEventListener('click', updateImage);




/*Learned from https://javascript.info/js-animation*/ 
/*
motion.onclick = function() {
      let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        randomImageBtn.style.left = timePassed / .7+ 'px';
          
           randomImageBtn1.style.left = timePassed / 1.15 + 'px';
          randomImageBtn2.style.left = timePassed / 2.9+ 'px';
          imageContainer.style.left = timePassed / .8 + 'px';
          
          
        if (timePassed > 600) clearInterval(timer);

      }, 20);
}
*/


/* function moveDiv() {
      const movingDiv = document.getElementById('myDiv');
      const screenWidth = window.innerWidth * 0.4; // 80% of screen width
      let left = 1; // Initial left position
      const increment = 5; // Adjust increment for slower/faster animation

      // Function to update left position and check for completion
      function updateLeft() {
        left += increment;
        movingDiv.style.left = left + 'px';

        if (left >= screenWidth) {
          // Animation complete
          return;
        }

        // Continue animation
        requestAnimationFrame(updateLeft);
      }

      // Start animation
      updateLeft();
    }*/
    
document.getElementById("myDiv").addEventListener("click", function() {
  var button = document.getElementById("randomImageBtn");
  var leftPos = window.innerWidth * 0.4; 
    
  
    // Calculate 80% of the window width
  button.style.transition = "transform 1s ease"; // Set transition property
  button.style.transform = "translateX(-50%) translateX(" + leftPos + "px)"; // Set target transform value
});

document.getElementById("myDiv").addEventListener("click", function() {
  var button = document.getElementById("randomImageBtn1");
  var leftPos = window.innerWidth * 0.3; 
    
  
    // Calculate 80% of the window width
  button.style.transition = "transform 1s ease"; // Set transition property
  button.style.transform = "translateX(-50%) translateX(" + leftPos + "px)"; // Set target transform value
});

document.getElementById("myDiv").addEventListener("click", function() {
  var button = document.getElementById("randomImageBtn2");
  var leftPos = window.innerWidth * 0.2; 
    
  
    // Calculate 80% of the window width
  button.style.transition = "transform 1s ease"; // Set transition property
  button.style.transform = "translateX(-50%) translateX(" + leftPos + "px)"; // Set target transform value
});

document.getElementById("myDiv").addEventListener("click", function() {
  var button = document.getElementById("imageContainer");
  var leftPos = window.innerWidth * 0.5; 
    
  
    // Calculate 80% of the window width
  button.style.transition = "transform 1s ease"; // Set transition property
  button.style.transform = "translateX(-50%) translateX(" + leftPos + "px)"; // Set target transform value
});