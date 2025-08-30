// Elements
const inventoryModal = document.getElementById('inventoryModal');
const addInventoryBtn = document.getElementById('addInventoryBtn');
const closeBtn = document.querySelector('.close');
const inventoryForm = document.getElementById('inventoryForm');
const inventoryTable = document.querySelector('#inventoryTable tbody');
const logoutBtn = document.getElementById('logout');

// Sample inventory array
let inventory = [];

// Open modal
addInventoryBtn.addEventListener('click', () => {
  inventoryModal.style.display = 'block';
});

// Close modal
closeBtn.addEventListener('click', () => {
  inventoryModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  if(e.target === inventoryModal) {
    inventoryModal.style.display = 'none';
  }
});

// Add inventory item
inventoryForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const item = {
    name: document.getElementById('itemName').value,
    category: document.getElementById('itemCategory').value,
    quantity: Number(document.getElementById('itemQuantity').value),
    threshold: Number(document.getElementById('itemThreshold').value),
    status: Number(document.getElementById('itemQuantity').value) <= Number(document.getElementById('itemThreshold').value) ? "Low" : "OK"
  };

  inventory.push(item);
  inventoryForm.reset();
  inventoryModal.style.display = 'none';
  renderInventory();
});

// Render inventory in table
function renderInventory() {
  inventoryTable.innerHTML = '';
  inventory.forEach(i => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${i.name}</td>
      <td>${i.category}</td>
      <td>${i.quantity}</td>
      <td>${i.status}</td>
    `;
    inventoryTable.appendChild(row);
  });
}

// Logout
logoutBtn.addEventListener('click', () => {
  window.location.href = "login.html";
});
