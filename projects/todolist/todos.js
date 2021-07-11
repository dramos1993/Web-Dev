let input = prompt("What would you like to do?");
const todos = ['Collect Eggs', 'Clean Litter box'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('**************')

        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }

        console.log('**************')

    }
    else if (input === "new") {
        const newTodo = prompt("Ok, What is the new todo?")
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    }
    else if (input === "delete") {
        const index = prompt("Enter an index for deletion")
        const deleted = todos.splice(index, 1);
        console.log(`Ok, deleted ${deleted[0]}`);
    }
    input = prompt("What would you like to do?");
}



console.log("ok you quit the app!")