
/*This code was cobbled together until it worked using Code Pen, Stack Over Flow and Chat GBT*/

/*The Images*/
const images = [
  'charmer.png',
  'dead.png',
  'world.png',
    'virus.png',
    'frazz.png',
    'energy.png',
    'inter.png',
    'link.png',
    'moon.png',
    'social.png',
    

];

const imageText = [
    {
        url: 'charmer.png',
        heading:'THE CHARMER',
        text: 'It is time to get networking. Email your heros. Meet for a coffee. Untold wisdom can be found if you make the  first step.',
          button: 'Try Again',
        
    },
    {
        url: 'dead.png',
        heading:'DEATH',
        text: 'I sense many bugs in your code. Expect maddening frustration and tears of dispair. Solutions include pouring oveer stackoverflow and desperate texts to Abhishek.',
        button: 'Try Again',
    },
     {
        url: 'world.png',
        heading:'THE INTERNATIONAL',
        text: 'The semester is nearing its end. It is time to file your OPT',
           button: 'Try Again',
    },
      {
        url: 'virus.png',
        heading:'THE VIRUS',
        text: 'Covid outbreak in MPS CD. Classes will be online for the foreseeable.',
            button: 'Try Again',
    },
    
       {
        url: 'frazz.png',
        heading:'THE FRAZZLED',
        text: 'Elevator traffic. Expect uncomfortable silence and personal space invasion. Most likely to occur when you are running late. Furthermore the elevator will stop on every. single. floor. ',
             button: 'Try Again',
    },
       {
        url: 'energy.png',
        heading:'THE ENERGY',
        text: 'Make sure to sit near an outlet next class. The combination of Figma, Spotify, VS Code, Github, and the Adobe suite will lead to a battery life of 4 minutes. ',
             button: 'Try Again',
    },
           {
        url: 'inter.png',
        heading:'THE INTERVIEWER',
        text: 'WARNING! Your system map does not make any sense to anyone else but you! Time to conduct some user interviews and fix this tangled mess. (Do not forget to synthesise)',
                 button: 'Try Again',
    },
    
           {
        url: 'link.png',
        heading:'THE LINKED IN',
        text: 'You are DELIGHTED to announce that you have participated in a workshop in the top 10 ways to never sleep again! You have a sprawling network of people you met one time at a career fair. You get to feel inadequate on YET ANOTHER social media platform. Lucky you.',
                 button: 'Try Again',
    },
    
           {
        url: 'moon.png',
        heading:'THE NOCTURNAL',
        text: 'Deadlines getting on top of you? I sense an all nighter in your future. ',
                 button: 'Try Again',
    },
    
          {
        url: 'social.png',
        heading:'THE SOCIALITE',
        text: 'Its time for another MPS CD class drinks don"t you think?',
                button: 'Try Again',
    },
]



/*Finding the image*/

function getRandomImage() {
  return imageText[Math.floor(Math.random() * imageText.length)];
   
}




/*/Update the image every time you click*/
function updateImage() {
  const randomImage = document.getElementById('randomImage');
  const randomImageSrc = getRandomImage();
  randomImage.src = randomImageSrc.url;
    
     const randomImageHeading = document.getElementById('imageHeading');
  randomImageHeading.innerText = randomImageSrc.heading;
    
    
 const randomImageText = document.getElementById('imageText');
    randomImageText.innerText = randomImageSrc.text
    
     const randomImageButton = document.getElementById('imageButton');
  randomImageButton.innerText = randomImageSrc.button;
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

//Button when its mobile 
const randomImageBtnsm = document.getElementById('randomImageBtnsm');
randomImageBtnsm.addEventListener('click', updateImage);


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
    
/*Slide to the right motion thingy*/
document.getElementById("myDiv").addEventListener("click", function() {
  var button = document.getElementById("randomImageBtn");
  var leftPos = window.innerWidth * 0.4; 
    
  
   
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


/*Calling card when its at mobile*/
document.getElementById("randomImageBtnsm").addEventListener("click", function() {
  var button = document.getElementById("imageContainer");
  var leftPos = window.innerWidth * 0.43; 
    
  
    // Calculate 80% of the window width
  button.style.transition = "transform 1s ease"; // Set transition property
  button.style.transform = "translateX(-90%) translateX(" + leftPos + "px)"; // Set target transform value
});




/*MAking welcome text disappear*/
document.getElementById("myDiv").addEventListener("click", function() {
  var button = document.getElementById("welcomeText");
  
  button.style.transition = "opacity .5s ease"; 
  button.style.opacity = "0"; 
});


/*/*MAking welcome text disappear MOBILE*/
document.getElementById("randomImageBtnsm").addEventListener("click", function() {
  var button = document.getElementById("welcomeText2");
  
  button.style.transition = "opacity .0s ease"; 
  button.style.opacity = "0"; 
});


/*
MAking another one button appeear 
document.getElementById("myDiv").addEventListener("click", function() {
  var button = document.getElementById("anotherButton");
  
  button.style.transition = "opacity .5s ease"; 
  button.style.opacity = "1"; 
});
*/



