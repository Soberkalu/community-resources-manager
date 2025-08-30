// Elements
const eventModal = document.getElementById('eventModal');
const addEventBtn = document.getElementById('addEventBtn');
const closeBtn = document.querySelector('.close');
const eventForm = document.getElementById('eventForm');
const eventsTable = document.querySelector('#eventsTable tbody');
const logoutBtn = document.getElementById('logout');

// Sample events array
let events = [];

// Open modal
addEventBtn.addEventListener('click', () => {
  eventModal.style.display = 'block';
});

// Close modal
closeBtn.addEventListener('click', () => {
  eventModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  if(e.target === eventModal) {
    eventModal.style.display = 'none';
  }
});

// Add event
eventForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const event = {
    name: document.getElementById('eventName').value,
    date: document.getElementById('eventDate').value,
    volunteers: document.getElementById('eventVolunteers').value,
    resources: document.getElementById('eventResources').value
  };

  events.push(event);
  eventForm.reset();
  eventModal.style.display = 'none';
  renderEvents();
});

// Render events in table
function renderEvents() {
  eventsTable.innerHTML = '';
  events.forEach(ev => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${ev.name}</td>
      <td>${ev.date}</td>
      <td>${ev.volunteers}</td>
      <td>${ev.resources}</td>
    `;
    eventsTable.appendChild(row);
  });
}

// Logout
document.getElementById('logout').addEventListener('click', () => {
  window.location.href = "login.html";
});
