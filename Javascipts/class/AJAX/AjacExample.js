function fetchData() {
    // fetch('data.json')
    fetch("https://64145bef36020cecfda6550f.mockapi.io/person/1")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('result').innerHTML = `
                <p>User ID: ${data['id']}</p>
                <p>Title: ${data.name}</p>
               <p>Completed: ${data.completed ? 'Yes' : 'No'}</p>
                <img src=${data.avatar} alt="">
            `;
            // dcume
            //     <p>User ID: ${data.id}</p>
            //     <p>Title: ${data.name}</p>
            //     <img src=${data.avatar} alt="">
            //     <p>Completed: ${data.completed ? 'Yes' : 'No'}</p>
            // `;
        })
        .catch(error => console.error('Error:', error));
}

