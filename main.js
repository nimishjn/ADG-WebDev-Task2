var expenses = [];

function totalExpense() {
    total = 0;
    for(var i in expenses) {
        total += expenses[i].expense;
    }
    return total;
}

function updateExpense() {
    var expense = totalExpense();
    document.getElementById('total-expense').innerHTML = `Rs ${expense}`;
}

function updateTasks() {
    document.getElementById('all-tasks').innerHTML = "";
    for(var i in expenses) {
        var x = expenses[i];
        const element = document.createElement("div");
        element.classList.add('task-card');
        element.id = i;
        element.innerHTML = `
        <button class="close-button" aria-label="Close">&#215</button>
        <h1>${x.description}</h1>
        <h2>Expenditure: Rs ${x.expense}</h2>
        <h2>Date: ${x.date}</h2>
        `;
        console.log(element);
        document.getElementById('all-tasks').appendChild(element);
    }
}

function formSubmit() {
    desc = document.getElementById('description').value;
    amt = document.getElementById('expense').value;
    dat = document.getElementById('date').value;
    expenses.push({
        description: desc,
        expense: parseInt(amt),
        date: dat
    });
    updateTasks();
    updateExpense();
    document.getElementById("add-expense").reset();
}