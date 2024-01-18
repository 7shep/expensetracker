const budgetPercentages = {
    'Fixed Expenses': 0.40,
    'Investments': 0.15,
    'Food': 0.20,
    'Gambling': 0.25
};


document.addEventListener("DOMContentLoaded", () => {
    const sendButton = document.getElementById('send');
    sendButton.addEventListener("click", () => {
        const fixedIncurred = document.getElementById('fixed').value;
        const investmentIncurred = document.getElementById('investment').value;
        const foodIncurred = document.getElementById('food').value;
        const gamblingIncurred = document.getElementById('gambling').value;
        console.log(fixedIncurred, investmentIncurred, foodIncurred, gamblingIncurred);
        sendTotals(fixedIncurred, investmentIncurred, foodIncurred, gamblingIncurred);
        console.log("totals sent");
    })
})

function updateBudget() {
    let monthlyIncome = parseFloat(document.getElementById('monthly-pay').value) || 0;
    Object.keys(budgetPercentages).forEach((category, index) => {
        let budget = monthlyIncome * budgetPercentages[category];
        document.getElementsByClassName('budget-amount')[index].textContent = `$${budget.toFixed(2)}`;
        document.getElementsByClassName('remaining')[index].textContent = `$${budget.toFixed(2)}`;
    });
    // Update totals after calculating budget
    updateTotals();
}


function addToTotal(button) {
    let row = button.parentNode.parentNode;
    let incurredInput = row.getElementsByClassName('incurred-input')[0];
    let budgetAmount = parseFloat(row.getElementsByClassName('budget-amount')[0].textContent.replace('$', ''));
    let incurred = parseFloat(incurredInput.value) || 0;
    
    let remaining = budgetAmount - incurred;
    row.getElementsByClassName('remaining')[0].textContent = `$${remaining.toFixed(2)}`;

    updateTotals();
}

function sendTotals(fixedIncurred, foodIncurred, gamblingIncurred, investmentIncurred) {
    fetch('/budget', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // This line is necessary
        },
        body: JSON.stringify({
            Fixed: fixedIncurred,
            Investment: investmentIncurred,
            Food: foodIncurred,
            Gambling: gamblingIncurred 
        })
    });
}



function updateTotals() {
    let totalBudget = 0;
    let totalIncurred = 0;

    // Sum up all budget amounts
    Array.from(document.getElementsByClassName('budget-amount')).forEach((budgetCell) => {
        totalBudget += parseFloat(budgetCell.textContent.replace('$', ''));
    });

    // Sum up all incurred amounts
    Array.from(document.getElementsByClassName('incurred-input')).forEach((incurredInput) => {
        totalIncurred += parseFloat(incurredInput.value) || 0;
    });

    // Calculate the total remaining amount
    let totalRemaining = totalBudget - totalIncurred;

    // Update the totals in the DOM
    document.getElementById('total-budget').textContent = `$${totalBudget.toFixed(2)}`;
    document.getElementById('total-incurred').textContent = `$${totalIncurred.toFixed(2)}`;
    document.getElementById('total-remaining').textContent = `$${totalRemaining.toFixed(2)}`;
}
