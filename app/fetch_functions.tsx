fetch('https://669872b22069c438cd6ec955.mockapi.io/ToDo', {
    method: 'GET',
    headers: {'content-type':'application/json'},
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(tasks => {
    console.log(tasks);
  }).catch(error => {
    // handle error
  })