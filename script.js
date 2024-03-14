// Function to load and display a list from JSON data
function loadList(listName) {
    if (!listName) return; // If no list selected, do nothing
    // Fetch JSON data for the selected list
    fetch(`lists/${listName}.json`)
      .then(response => response.json())
      .then(data => {
        // Build HTML for the list
        let html = data.title + '<br>';
        if (data.description) {
          html += `<p>${data.description}</p>`;
        }
        html += '<table class="table"><thead><tr><th scope="col">#</th><th scope="col">Name</th><th scope="col">Price</th><th scope="col">Quantity</th></tr></thead><tbody>';
        data.products.forEach((product, index) => {
          html += `<tr><th scope="row">${index + 1}</th><td>${product.name}</td><td>${product.price}</td><td>${product.quantity}</td></tr>`;
        });
        html += '</tbody></table>';
        // Display the list in the listContainer div
        document.getElementById('listContainer').innerHTML = html;
      })
      .catch(error => {
        console.error('Error loading list:', error);
      });
  }
  