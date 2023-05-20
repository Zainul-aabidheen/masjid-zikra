document.getElementById('update-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the prayer time values from the form
  const fajrTime = document.getElementById('fajr').value;
  const dhuhrTime = document.getElementById('dhuhr').value;
  const asrTime = document.getElementById('asr').value;
  const maghribTime = document.getElementById('maghrib').value;
  const ishaTime = document.getElementById('isha').value;

  // Update the prayer times on the main website
  const prayerTimeElements = document.querySelectorAll('.table__row td:nth-child(1)');
  prayerTimeElements[0].textContent = fajrTime;
  prayerTimeElements[1].textContent = dhuhrTime;
  prayerTimeElements[2].textContent = asrTime;
  prayerTimeElements[3].textContent = maghribTime;
  prayerTimeElements[4].textContent = ishaTime;

  // Display success message
  alert('Prayer times updated successfully!');
});
