let samplecall=()=>{
    const apiUrl = 'https://62e6b82469bd03090f74e19d.mockapi.io/test11';
  
  // Make a GET request to the API endpoint
  axios.get(apiUrl)
    .then(response => {
      setTodos(response.data);
  
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.error('Error fetching data:', error);
    });
   }


   {   todos&&    <div className='todo'>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <h3>{todo.task}</h3>
            <p>{todo.update}</p>
          </li>
        ))}
      </ul>
    </div>
}
