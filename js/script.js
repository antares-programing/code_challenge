const URL = 'https://jsonplaceholder.typicode.com/users';
const container = document.getElementById("container")

document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    var name = document.getElementById('name').value;
    var lastname = document.getElementById('lastname').value;
    var birthdate = document.getElementById('birthdate').value;

    var formData = new FormData();
    formData.append('name', name);
    formData.append('lastname', lastname);
    formData.append('birthdate', birthdate);

    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            lastname: lastname,
            birthdate: birthdate
        })
    })
    
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json();
    })
    .then(data => {
        container.innerHTML = `<p>Nombre: ${data.name}</p><p>Apellido: ${data.lastname}</p><p>Fecha de Nacimiento: ${data.birthdate}</p>`;
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});