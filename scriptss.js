/* Center the content on the page */
body {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   flex-direction: column;
   font-family: Arial, sans-serif;
   background-image: url('https://i.postimg.cc/ryQBY5mN/background.jpg');
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
}

h1 {
   font-size: 24px;
   margin-bottom: 10px;
}

p {
   font-size: 18px;
}

#visitorCount {
   font-weight: bold;
   font-size: 24px;
   color: #FF5722; /* Change the color to your liking */
   animation: countAnimation 1s ease-in-out;
}

@keyframes countAnimation {
   0% {
      transform: scale(1);
   }
   50% {
      transform: scale(1.2);
   }
   100% {
      transform: scale(1);
   }
}