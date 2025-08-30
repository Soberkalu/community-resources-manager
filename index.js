// Sample data for demo
const totalDonations = 5000;
const totalVolunteers = 25;
const totalInventory = 120;
const upcomingEvents = 3;

// Update cards
document.getElementById('total-donations').textContent = `$${totalDonations}`;
document.getElementById('total-volunteers').textContent = totalVolunteers;
document.getElementById('total-inventory').textContent = totalInventory;
document.getElementById('upcoming-events').textContent = upcomingEvents;

// Logout functionality
document.getElementById('logout').addEventListener('click', () => {
  window.location.href = "login.html";
});
document.getElementById('Donation').addEventListener('click', () => {
  window.location.href = "donations.html";
});
document.getElementById('Volunteers').addEventListener('click', () => {
  window.location.href = "volunteers.html";
});
document.getElementById('Inventory').addEventListener('click', () => {
  window.location.href = "inventory.html";
});
document.getElementById('Events').addEventListener('click', () => {
  window.location.href = "events.html";
});
document.getElementById('Reports').addEventListener('click', () => {
  window.location.href = "reports.html";
});

// Chart.js examples
const donationCtx = document.getElementById('donationChart').getContext('2d');
const volunteerCtx = document.getElementById('volunteerChart').getContext('2d');

// Donation chart
new Chart(donationCtx, {
  type: 'bar',
  data: {
    labels: ['Cash', 'Food', 'Clothes', 'Supplies'],
    datasets: [{
      label: 'Donations',
      data: [2000, 1500, 1000, 500],
      backgroundColor: '#6a5acd'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }
});

// Volunteer chart
new Chart(volunteerCtx, {
  type: 'pie',
  data: {
    labels: ['Food Drive', 'Clothes Distribution', 'Community Cleanups'],
    datasets: [{
      label: 'Volunteer Hours',
      data: [10, 8, 7],
      backgroundColor: ['#6a5acd', '#8470ff', '#a395ff']
    }]
  },
  options: { responsive: true }
});
