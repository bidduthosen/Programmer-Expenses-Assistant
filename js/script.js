


// calculate event hanlear 

document.getElementById('calculate').addEventListener('click', function(){

    const incomeField = document.getElementById('income');
    const income = parseFloat(incomeField.value);

    const softwareField = document.getElementById('software');
    const software = parseFloat(softwareField.value);

    const coursesField = document.getElementById('courses');
    const courses = parseFloat(coursesField.value);

    const internetField = document.getElementById('internet');
    const internet = parseFloat(internetField.value);
    
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    // total expenses set inner text--
    document.getElementById('total-expenses').innerText = totalExpenses.toFixed(2);
    document.getElementById('balance').innerText = balance.toFixed(2);
    
    // show results section 
    document.getElementById('results').classList.remove('hidden'); 

    // date
    let date = new Date().toLocaleDateString();

    const historyList = document.getElementById('history-list');
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
        <p class="text-xs text-gray-500">${date} </p>
        <p class="text-xs text-gray-500">Income: ${income}</p>
        <p class="text-xs text-gray-500">Expense: ${totalExpenses}</p>
        <p class="text-xs text-gray-500">Balance: ${balance}</p>
    `;
    newDiv.className = 'bg-white p-3 rounded-md shadow-sm border-l-2 border-yellow-500';
    historyList.appendChild(newDiv);
    // historyList.insertBefore(historyList, newDiv.firstChild)

});

document.getElementById('calculate-savings').addEventListener('click', function(){
    
    const totalBalanceValue =  document.getElementById('balance').innerText;
    const totalBalanceText = parseFloat(totalBalanceValue);
    
    const savingsField = document.getElementById('savings');
    const savings = parseFloat(savingsField.value);
    
    const savingsAmount = (totalBalanceText * savings) / 100;
    const remainingBalance = totalBalanceText - savingsAmount;

    
    document.getElementById('savings-amount').innerText = savingsAmount.toFixed(2);
    document.getElementById('remaining-balance').innerText = remainingBalance.toFixed(2);
});






document.getElementById('assistant-tab').addEventListener('click', function(){
    setSectionValue('assistant-tab');
    setSectionClass('expense-form');
    
})

// history-tab button
document.getElementById('history-tab').addEventListener('click', function(){
    setSectionValue('history-tab');

    // show the history-section 
    setSectionClass('history-section')

})