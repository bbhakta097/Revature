function getAuthorsData(){
    const ul = document.getElementById('authors');
    const list = document.createElement("div");
    const url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url).then((response) => {
        return response.json();
    })
    .then((data) => {
        let authors = data;

        authors.map(function(author){
            let li = document.createElement('li');
            let name = document.createElement('h2');
            let email = document.createElement('span');

            name.innerHTML = `${author.name}`;
            email.innerHTML = `${author.email}`;

            li.append(name);
            li.append(email);
            ul.append(li)
        })
    })
    .catch((error) => console.error('Error fetching data:', error));

}