const logoutBtn = document.getElementById('logout');

// Sample data
const totalDonations = 5000;
const totalVolunteers = 25;
const totalInventory = 120;
const upcomingEvents = 3;

// Update summary cards
document.getElementById('total-donations').textContent = `$${totalDonations}`;
document.getElementById('total-volunteers').textContent = totalVolunteers;
document.getElementById('total-inventory').textContent = totalInventory;
document.getElementById('upcoming-events').textContent = upcomingEvents;

// Logout
logoutBtn.addEventListener('click', () => {
  window.location.href = "login.html";
});

// Charts
const donationCtx = document.getElementById('donationChart').getContext('2d');
const volunteerCtx = document.getElementById('volunteerChart').getContext('2d');
const inventoryCtx = document.getElementById('inventoryChart').getContext('2d');

// Donation chart
new Chart(donationCtx, {
  type: 'pie',
  data: {
    labels: ['Cash', 'Food', 'Clothes', 'Supplies'],
    datasets: [{
      label: 'Donations',
      data: [2000, 1500, 1000, 500],
      backgroundColor: ['#6a5acd','#8470ff','#a395ff','#b3a0ff']
    }]
  },
  options: { responsive: true }
});

// Volunteer hours chart
new Chart(volunteerCtx, {
  type: 'bar',
  data: {
    labels: ['Food Drive', 'Clothes Distribution', 'Community Cleanups'],
    datasets: [{
      label: 'Volunteer Hours',
      data: [10, 8, 7],
      backgroundColor: '#6a5acd'
    }]
  },
  options: { responsive: true }
});

// Inventory chart
new Chart(inventoryCtx, {
  type: 'doughnut',
  data: {
    labels: ['OK', 'Low'],
    datasets: [{
      label: 'Inventory Status',
      data: [100, 20],
      backgroundColor: ['#6a5acd','#ff6a6a']
    }]
  },
  options: { responsive: true }
});
