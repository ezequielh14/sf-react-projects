//alert("Funciona")
const listUsers = async () => {
  
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        console.log(users);
    
    let tableBody = ``;
    users.forEach((user, index) => {
        console.log(user);
        tableBody += `<tr>
        <td data-label="#">${user.id}</td>
        <td data-label="Name">${user.name}</td>
        <td data-label="E-mail">${user.email}</td>
        <td data-label="Phone">${user.phone}</td>
        <td data-label="City">${user.address.city}</td>
        <td data-label="Company">${user.company.name}</td>
        </tr>`;
    });
    document.getElementById("tableUsers").innerHTML = tableBody;
}

listUsers();