
function fetchUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const userInfo = `
                <img src="${user.picture.large}" alt="profile picture">
                <p><strong>Name:</strong> ${user.name.first}</p>
                <p><strong>Last name:</strong> ${user.name.last}</p>
                <p><strong>Gender:</strong> ${user.gender}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
            `;
            document.getElementById('userInfo').innerHTML = userInfo;
        })
        .catch(error => console.error('Error fetching user:', error));
}

