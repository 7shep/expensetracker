// JavaScript Backend For the 'Expense.HTML' page of this project!!!
// Function to add incurred amount to total
function addToTotal(buttonElement) {
    // Find the closest 'tr' parent element
    var row = buttonElement.closest('tr');
    
    // Get the value from the budget and incurred input elements in this row
    var budgetInput = row.querySelector('input[type="number"].budget-input1').value;
    var incurredInput = row.querySelector('input[type="number"].incurred-input1').value;
    
    var budget = parseFloat(budgetInput);
    var incurred = parseFloat(incurredInput);
    
    // Check if the numbers are valid
    if(isNaN(budget) || isNaN(incurred)) {
        alert('Please enter valid numbers');
        return;
    }
    
    // Calculate remaining amount
    var remaining = budget - incurred;
    
    // Update the 'Remaining' cell
    var remainingCell = row.querySelector('.remaining');
    remainingCell.textContent = '$' + remaining.toFixed(2);
    
    // Optionally, clear the incurred input field
    row.querySelector('input[type="number"].incurred-input').value = '';
}

// Ensure all class names for budget and incurred inputs match this pattern (i.e., 'budget-input' and 'incurred-input' without numbers)
