// Elements
const volunteerModal = document.getElementById('volunteerModal');
const addVolunteerBtn = document.getElementById('addVolunteerBtn');
const closeBtn = document.querySelector('.close');
const volunteerForm = document.getElementById('volunteerForm');
const volunteerTable = document.querySelector('#volunteerTable tbody');
const logoutBtn = document.getElementById('logout');

// Sample volunteers array
let volunteers = [];

// Open modal
addVolunteerBtn.addEventListener('click', () => {
  volunteerModal.style.display = 'block';
});

// Close modal
closeBtn.addEventListener('click', () => {
  volunteerModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  if(e.target === volunteerModal) {
    volunteerModal.style.display = 'none';
  }
});

// Add volunteer
volunteerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const volunteer = {
    name: document.getElementById('volunteerName').value,
    contact: document.getElementById('volunteerContact').value,
    role: document.getElementById('volunteerRole').value,
    hours: document.getElementById('volunteerHours').value,
    events: document.getElementById('volunteerEvents').value
  };

  volunteers.push(volunteer);
  volunteerForm.reset();
  volunteerModal.style.display = 'none';
  renderVolunteers();
});

// Render volunteers in table
function renderVolunteers() {
  volunteerTable.innerHTML = '';
  volunteers.forEach(v => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${v.name}</td>
      <td>${v.contact}</td>
      <td>${v.role}</td>
      <td>${v.hours}</td>
      <td>${v.events}</td>
    `;
    volunteerTable.appendChild(row);
  });
}

// Logout
logoutBtn.addEventListener('click', () => {
  window.location.href = "index.html";
});
