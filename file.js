
        /*
        Задание 1:
        Добавьте обработку статус кодов ошибок на стороне сервера и на стороне клиента
        для сетевого запроса, который выполняется при нажатии на кнопку "Запрос" 
        */
        let button1 = document.querySelector("#button1");
        let output = document.querySelector("#output");
        let messageError = document.querySelector("#messageError");
        let url = "https://jsonplaceholder.typicode.com/todos/10000";

        button1.addEventListener("click", function () {
            fetch(url)
                .then(response => {
                    if(!response.ok){
                        throw new Error(response.status)
                    } 
                    return response.json()
                })            
                .then(json => {
                        output.innerHTML = "";
                        output.innerHTML += "<br>id: " + json.id;
                        output.innerHTML += "<br>user id: " + json.userId;
                        output.innerHTML += "<br>title: " + json.title;
                        output.innerHTML += "<br>completed: " + json.completed;
                })
                .catch(error => {
                    messageError.innerHTML = error.message;
                    button1.style.display = 'none'
                })
        });
    