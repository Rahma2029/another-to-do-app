export async function fetchTodos() {
  try {
    const response = await fetch('https://669872b22069c438cd6ec955.mockapi.io/ToDo');
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function addTodo(todo: any) {
  try {
    const response = await fetch('https://669872b22069c438cd6ec955.mockapi.io/ToDo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    });
    return await response.json();
  } catch (error) {
    console.error("Error adding todo:", error);
  }
}

export async function updateTodo(id: number, todo: any) {
  try {
    const response = await fetch(`https://669872b22069c438cd6ec955.mockapi.io/ToDo`, {
      method: 'POST', // I just changed this from PUT to POST
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    });
    return await response.json();
  } catch (error) {
    console.error("Error updating todo:", error);
  }
}

export async function deleteTodo(id: any) {
  try {
    await fetch(`https://669872b22069c438cd6ec955.mockapi.io/ToDo/${id}`, {
      method: 'DELETE'
    });
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
}
