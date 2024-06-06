document.getElementById('fetchButton').addEventListener('click', () => {
    fetch('http://localhost:3000/password') // Verwenden Sie die korrekte URL
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Assuming data is an object with a "lines" array property
            data.lines.forEach(name => {
                console.log(name);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
