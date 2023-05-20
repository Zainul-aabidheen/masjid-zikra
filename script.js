function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const clockElement = document.getElementById('clock');
  clockElement.innerText = timeString;
}

setInterval(updateTime, 1000);

// Get the current date
const today = new Date();

// Format the date as DD/MM/YYYY
const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
const formattedDate = today.toLocaleDateString('en-GB', options);

// Get the date-box element and set its text content to the formatted date
const dateBox = document.getElementById('date-box');
dateBox.textContent = formattedDate;

// Function to get the next prayer time
function getNextPrayer() {
  // Get the current time
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  // Get the next prayer time
  let nextPrayer = '';
  if (currentHour < 4 || (currentHour === 4 && currentMinute < 48)) {
    nextPrayer = 'ފަތިސް - 04:48';
  } else if (currentHour < 12 || (currentHour === 12 && currentMinute < 5)) {
    nextPrayer = 'މެންދުރު - 12:05';
  } else if (currentHour < 15 || (currentHour === 15 && currentMinute < 18)) {
    nextPrayer = 'ޢަޞްރު - 15:18';
  } else if (currentHour < 18 || (currentHour === 18 && currentMinute < 12)) {
    nextPrayer = 'މަޣްރިބް - 18:12';
  } else if (currentHour < 19 || (currentHour === 19 && currentMinute < 18)) {
    nextPrayer = 'ޢިޝާ - 19:18';
  } else {
    nextPrayer = 'ފަތިސް - 04:48';
  }

  return nextPrayer;
}

// Function to update the next prayer time
function updateNextPrayer() {
  // Get the next prayer time
  const nextPrayer = getNextPrayer();

  // Display the next prayer time
  const nextPrayerElement = document.getElementById('next-prayer');
  nextPrayerElement.innerHTML = `ކުރިއަށް: ${nextPrayer}`;

  // Toggle red color if it's prayer time
  if (nextPrayer !== '') {
    const prayerTime = nextPrayer.split(' ')[0];
    const prayerTimeInHours = parseInt(prayerTime.split(':')[0]);

    const now = new Date();
    const currentHour = now.getHours();

    if (currentHour === prayerTimeInHours) {
      nextPrayerElement.classList.add('red-text');
      
      // Play the alarm sound
      const audio = new Audio('file:///C:/Users/Zain/Downloads/double_beep.mp3');
      audio.play();
    } else {
      nextPrayerElement.classList.remove('red-text');
    }
  }
}

// Call the function initially to update the next prayer time
updateNextPrayer();

// Function to update the prayer times
function updatePrayerTimes() {
  // Set the necessary parameters for the API request
  const latitude = 37.7749; // Example latitude
  const longitude = -122.4194; // Example longitude
  const method = 3; // Example calculation method

  // Make the API request
  fetch(`http://api.islamicfinder.us/prayer_times?latitude=${latitude}&longitude=${longitude}&method=${method}&month=current`)
    .then(response => response.json())
    .then(data => {
      // Extract the prayer times from the response
      const fajr = data.fajr;
      const dhuhr = data.dhuhr;
      const asr = data.asr;
      const maghrib = data.maghrib;
      const isha = data.isha;

      // Update the prayer time elements in the HTML
      document.getElementById('fajr-time').textContent = fajr;
      document.getElementById('dhuhr-time').textContent = dhuhr;
      document.getElementById('asr-time').textContent = asr;
      document.getElementById('maghrib-time').textContent = maghrib;
      document.getElementById('isha-time').textContent = isha;
    })
    .catch(error => {
      console.error('Error fetching prayer times:', error);
    });
}

// Call the function initially to update the prayer times
updatePrayerTimes();

// Call the function every day to update the prayer times
setInterval(updatePrayerTimes, 86400000); // 86400000 milliseconds = 1 day

// Call the function every second to check if the next prayer time has changed
setInterval(updateNextPrayer, 1000); // 1000 milliseconds = 1 second

// Function to toggle the menu visibility
function toggleMenu() {
  const menu = document.getElementById('menu');
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
}

// Function to submit the password
function submitPassword() {
  const passwordInput = document.getElementById('password-input');
  const password = passwordInput.value.trim();

  if (password === 'Q1W2E3') {
    window.location.href = 'visitor.html';
  } else {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    popupText.textContent = 'Incorrect Password';
    popup.style.display = 'block';

    setTimeout(function() {
      popup.style.display = 'none';
    }, 5000);
  }
}