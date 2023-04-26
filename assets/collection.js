
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
        text: 'It is time to get networking. Email your heros. Meet for a coffee. Untold wisdom can be found if you make the first step.',
          button: 'Try Again',
        
    },
    {
        url: 'dead.png',
        heading:'DEATH',
        text: 'I sense many bugs in your code. Expect maddening frustration and tears of despair. Solutions include pouring over stackoverflow and desperate texts to Abhishek.',
        button: 'Try Again',
    },
     {
        url: 'world.png',
        heading:'THE INTERNATIONAL',
        text: 'The semester is nearing its end. It is time to file your OPT.',
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
        text: 'WARNING! Your system map does not make any sense to anyone else but you! Time to conduct some user interviews and fix this tangled mess.',
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

/*NotE: The dont"t isnt a type using ' changed the code*/

/*Getting an image from the list above to show everytime a button (the cards) is clicked 

Tutorial from https://www.w3resource.com/javascript-exercises/javascript-dom-exercise-11.php

This tutorial showed me how to Find the images from my array which is above and then pick a random one when the card is clicked. Eric helped me with this because I couldn't figure out how to attach the paragraph to the random cards. I had to add extra classes of heading and text. I also added a try again button that reloads the page once I figured out how to odo it. 

*/


/*Finding the image*/

function getRandomImage() {
  return imageText[Math.floor(Math.random() * imageText.length)];
   
}




/*/Update the image every time you click
The random image function came from the tutorial. Then when I had created the Heading Text and try again buttons they also went here. */
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






//The First card =button
const randomImageBtn = document.getElementById('randomImageBtn');
randomImageBtn.addEventListener('click', updateImage);



//The second card =button 1
const randomImageBtn1 = document.getElementById('randomImageBtn1');
randomImageBtn1.addEventListener('click', updateImage);

//The Third card = button 2
const randomImageBtn2 = document.getElementById('randomImageBtn2');
randomImageBtn2.addEventListener('click', updateImage);

//Button when its mobile 
const randomImageBtnsm = document.getElementById('randomImageBtnsm');
randomImageBtnsm.addEventListener('click', updateImage);



/*I had to try a ton of tutorials to actually figure it out so I thought I'd leave some of the trial and error here as process? */
/*Learned from https://javascript.info/js-animation*/
/*
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
    

/*Making the cards move accross the screen, had to combine alot of tutorials here cause none of them fully worked by themselves so I just listed all. Also my friend Ali gave me some advice  */

/*Tutorials Consulted */
/*https://www.w3schools.com/cssref/tryit.php?filename=trycss_js_position*/

/*http://jsfiddle.net/1vkuvudz/*/

/*https://stackoverflow.com/questions/58559992/how-to-move-element-from-one-point-to-another-with-animation*/
/*https://stackoverflow.com/questions/4847996/css-animation-onclick*/

/*I also asked chat GBT to help me with the maths on calculating how to make it move a specific distance in this case var leftPos = window.innerWidth * 0.4; and then I messed with the maths til it looked somewhat smooth and they layer on top of eachother */


/*Slide to the right motion thingy*/
/*First card */
document.getElementById("myDiv").addEventListener("click", function() {
  var button = document.getElementById("randomImageBtn");
  var leftPos = window.innerWidth * 0.4; 
  button.style.transition = "transform 1s ease"; 
  button.style.transform = "translateX(-50%) translateX(" + leftPos + "px)"; 
});

 /*middle card */
document.getElementById("myDiv").addEventListener("click", function() {
  var button = document.getElementById("randomImageBtn1");
  var leftPos = window.innerWidth * 0.3; 
  button.style.transition = "transform 1s ease"; 
  button.style.transform = "translateX(-50%) translateX(" + leftPos + "px)"; 
});


/*Third card */
document.getElementById("myDiv").addEventListener("click", function() {
  var button = document.getElementById("randomImageBtn2");
  var leftPos = window.innerWidth * 0.2; 
  button.style.transition = "transform 1s ease"; 
  button.style.transform = "translateX(-50%) translateX(" + leftPos + "px)";
});
 /*The image card */
document.getElementById("myDiv").addEventListener("click", function() {
  var button = document.getElementById("imageContainer");
  var leftPos = window.innerWidth * 0.5; 
  button.style.transition = "transform 1s ease"; 
  button.style.transform = "translateX(-50%) translateX(" + leftPos + "px)"; 
});


/*Calling card when its at mobile*/
document.getElementById("randomImageBtnsm").addEventListener("click", function() {
  var button = document.getElementById("imageContainer");
  var leftPos = window.innerWidth * 0.43; 
  button.style.transition = "transform 1s ease"; 
  button.style.transform = "translateX(-90%) translateX(" + leftPos + "px)"; 
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



