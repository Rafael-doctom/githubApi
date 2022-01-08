
const handleClickSearch = () => {
    let userName = document.getElementById("userID").value;
    let result = document.getElementById("result");

    var URL = `https://api.github.com/users/${userName}`;

    fetch(URL)
        .then(response => response.json())
        .then(response => {
            return result.innerHTML = `
                    <div>
                        <h1>${response.login}</h1>
                        <h1>${response.html_url}</h1>
                        <h1>${response.name}</h1>
                        <h1>${response.blog}</h1>
                        <h1>${response.location}</h1>
                        <h1>${response.public_repos}</h1>
                        <h1>${response.followers}</h1>
                        <h1>${response.following}</h1>
                    </div>`
        });

};