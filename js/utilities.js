function setSectionValue (id){
    document.getElementById('history-tab').classList.remove('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600',);
    document.getElementById('assistant-tab').classList.remove('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600',);
    
    // remove id 
    document.getElementById(id).classList.add('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600',);
}

function setSectionClass (id){
    document.getElementById('history-section').classList.add('hidden')
    document.getElementById('expense-form').classList.add('hidden');
    
    // remove id
    document.getElementById(id).classList.remove('hidden');
}