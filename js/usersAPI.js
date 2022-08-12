//alert("Funciona")
const listUsers = async () => {
  
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        console.log(users);
    
    let tableBody = ``;
    users.forEach((user, index) => {
        console.log(user);
        tableBody += `<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.adress.city}</td>
        <td>${user.company.name}</td>
        </tr>`;
    });
    document.getElementById("tableUsers").innerHTML = tableBody;
}