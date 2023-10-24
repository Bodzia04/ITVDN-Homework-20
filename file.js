
        /*
        Задание 1:
        Добавьте обработку статус кодов ошибок на стороне сервера и на стороне клиента
        для сетевого запроса, который выполняется при нажатии на кнопку "Запрос" 
        */
        // let button1 = document.querySelector("#button1");
        // let output = document.querySelector("#output");
        // let messageError = document.querySelector("#messageError");
        // let url = "https://jsonplaceholder.typicode.com/todos/10000";

        // button1.addEventListener("click", function () {
        //     fetch(url)
        //         .then(response => {
        //             if(!response.ok){
        //                 throw new Error(response.status)
        //             } 
        //             return response.json()
        //         })            
        //         .then(json => {
        //                 output.innerHTML = "";
        //                 output.innerHTML += "<br>id: " + json.id;
        //                 output.innerHTML += "<br>user id: " + json.userId;
        //                 output.innerHTML += "<br>title: " + json.title;
        //                 output.innerHTML += "<br>completed: " + json.completed;
        //         })
        //         .catch(error => {
        //             messageError.innerHTML = error.message;
        //             button1.style.display = 'none'
        //         })
        // });
//////////////////////////////////////////////   

        /*
        Задание 2:
        Напишите сценарий, который будет обновлять сущность post со свойствами
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,

        Создайте форму с полем ввода для значения свойства title и полем ввода для значения свойства body

        Значения для свойств title и body получите от пользователя
        Значения id и userId должны остаться равными 1 и выводить их в форме не нужно.
        При загрузке сценария заполните форму данными получеными при обработке GET запроса на https://jsonplaceholder.typicode.com/posts/1

        адрес для отправки запроса
        https://jsonplaceholder.typicode.com/posts/1

        для обновления сущности воспользуйтесь PUT запросом https://jsonplaceholder.typicode.com/posts/1. Обработайте ответ
        и выведите информацию о ошибке или об успешно завершенной операции.
        */

        // let form = document.forms[0];
        // let url = 'https://jsonplaceholder.typicode.com/posts/1';
        // let button = document.querySelector('#formButton');

        // fetch(url)
        // .then(response => response.json())
        // .then(json => {
        //         form.inputTitle.value = json.title;
        //         form.body.value = json.body
        // })

        // button.addEventListener('click', function(){
        //         let bodyObj = {
        //                 id: 1,
        //                 userId: 1,
        //                 title: form.inputTitle.value,
        //                 body: form.body.value
        //         }

        //         fetch(url, {
        //                 method: 'PUT',
        //                 body: JSON.stringify(bodyObj),
        //         })
        //         .then(response => {
        //                 if(response.ok){
        //                         // console.log(response.json());
        //                         alert('Corrected')
        //                         getData()
        //                 } else {
        //                         alert('Uncorrected data (status code ' + response.status + ')')
        //                 }
        //         })
        // })

        //         function getData(){
        //             fetch(url, {
        //                 method: 'GET',
        //                 // headers: myHeaders,
        //                 mode: "cors",
        //                 cache: "default",
        //             })
        //             .then(response => {
        //                 return response.json();
        //             })
        //             .then(data => {
        //                 console.log(data);
        //             })
        //         }
//////////////////////////////////////////////       


        /*
        Задание 3:
        Напишите сценарий, который при загрузке страницы выполнит GET запрос на https://jsonplaceholder.typicode.com/photos
        и выведет на странице все изображения в виде <img>, которые будут получены в ответе.
        */

        // let url = 'https://jsonplaceholder.typicode.com/photos';
        
        // fetch(url)
        // .then(response => {
        //         if(response.ok){
        //                 return response.json();
        //         } else {
        //                 throw Error('Error (status code ' + response.status + ')');
        //         }
        // })
        // .then(json => {
        //         renderImageLibrary(json);
        // })
        // .catch(error => {
        //         alert(error.message);
        // });

        // function renderImageLibrary(photos){
        //     let docFragment = document.createDocumentFragment();
        //             photos.forEach(photo => {
        //             let img = document.createElement('img');
        //             img.src = photo.thumbnailUrl;
        //             docFragment.append(img);
        //         })
        //         document.body.append(docFragment);
        // }

///////////////////////////////////////////////        

        /*
        Задание 4:
        Напишите сценарий, который выполняет GET запрос по адресу https://jsonplaceholder.typicode.com/todos
        И выводит содержимое ответа в виде таблицы.
        */

        // const url = 'https://jsonplaceholder.typicode.com/todos';
        // const promise = fetch(url);

        // promise
        // .then(response => response.json())
        // .then(json => createTable(json))
        // .catch(error => console.log(error.name));

        // function createTable(data){
        //         const table = document.querySelector('table');
        //         const tbody = creatTableTitle(data);
        //         table.append(tbody);
        //         data.forEach(item => {
        //             const tr = createTableRow(item);
        //                 table.append(tr);
        //         })
                
        // }

        // function creatTableTitle(data){
        //     const tbody = document.createElement('tbody');
        //     const trTbody = document.createElement('tr');
        //     const firstItemData = data[0];
        //     for(let key in firstItemData){
        //         const th = document.createElement('th');
        //         th.textContent = key;
        //         trTbody.append(th);
        //     }
        //     tbody.append(trTbody);
        //     return tbody;
        // }

        // function createTableRow(item){
        //     const tr = document.createElement('tr');
        //     for(let key in item){
        //             const td = document.createElement('td');
        //             console.log(item[key]);
        //             td.textContent = item[key]
        //             tr.append(td);
        //     }
        //     return tr
        // }

/////////////////////////////////////////////// 


        /*
        Задание 5:
        Добавьте логику обработки статус кодов ошибок клиента и серверной стороны.
        Предусмотрите обработку и вывод исключений связанных с другими проблемами при сетевых запросах
        */
        class Task {
            constructor(text) {
                this.text = text;
                this.isDone = false;
            }
        }

        let dataService = {
            url: "https://jsonplaceholder.typicode.com/todos-123123132",

            get allTasks() {
                return fetch(this.url)
                    .then(response => {
                        this.checkResponseStatus(response);
                        return response.json();
                    })
                    .then(json => this.mapArray(json));
            },

            get notCompletedTasks() {
                return fetch(this.url + "?completed=false")
                    .then(response => {
                        this.checkResponseStatus(response);
                        return response.json();
                    })
                    .then(json => this.mapArray(json));
            },

            add(task) {
                return fetch(this.url, {
                    method: "POST",
                    body: JSON.stringify({ title: task.text, completed: task.isDone })
                })
                    .then(response => {
                        this.checkResponseStatus(response);
                        return response.json();
                    });
            },

            update(task) {
                return fetch(this.url + "/" + task.id, {
                    method: "PUT",
                    body: JSON.stringify({ title: task.text, completed: task.isDone })
                })
                    .then(response => {
                        this.checkResponseStatus(response);
                        return response.json();
                    });
            },

            mapArray(array) {
                return array.map(element => {
                    return {
                        id: element.id,
                        text: element.title,
                        isDone: element.completed
                    }
                });
            },

            catchError(error) {
                console.error(error.message);
            },

            checkResponseStatus(response) {
                if (!response.ok) {
                    let message = `Сервер вернул ответ со статус кодом ${response.status}`;
                    throw new Error(message);
                }
            }
        }

        class TasksListView {
            element;
            dataService;
            #errorElement;

            constructor(element) {
                this.element = element;
                dataService = dataService;
                
                this.#errorElement = document.createElement("div");
                this.#errorElement.classList.add("error");
                document.body.prepend(this.#errorElement);
            }

            #drawList(tasksElements) {
                this.element.innerHTML = "";

                tasksElements.forEach(taskElement => {
                    taskElement.createIn(this.element);
                });
            }

            #displayError(error) {
                this.#errorElement.textContent = error.message;
                this.#errorElement.style.display = "block";
            }

            #removeError() {
                this.#errorElement.style.display = "none";
            }

            drawAll() {
                let taskElements = [];
                dataService.allTasks.then(tasks => {
                    this.#removeError();

                    if (tasks.length == 0) return;

                    tasks.forEach(task => {
                        taskElements.push(new TaskView(task))
                    });
                    this.#drawList(taskElements);
                }).catch(error => this.#displayError(error));
            }

            drawNotCompleted() {
                this.#removeError();

                let taskElements = [];
                dataService.notCompletedTasks.then(tasks => {
                    if (tasks.length == 0) return;

                    tasks.forEach(task => {
                        taskElements.push(new TaskView(task))
                    });
                    this.#drawList(taskElements);
                }).catch(error => this.#displayError(error));
            }
        }

        class TaskView {
            constructor(task) {
                this.task = task;
                this.div = null;
            }

            createIn(element) {
                this.div = document.createElement("div");
                this.div.classList.add("task");

                let input = document.createElement("input");
                input.addEventListener("click", this.changeState.bind(this));
                input.type = "checkbox";

                let p = document.createElement("p");
                p.innerText = this.task.text;

                this.div.append(input);
                this.div.append(p);

                if (this.task.isDone) {
                    this.div.classList.add("completed");
                    input.checked = true;
                }
                element.append(this.div);
            }

            changeState(element) {
                this.task.isDone = !this.task.isDone;
                dataService.update(this.task);
                this.div.classList.toggle("completed");
            }
        }

        let taskNameInput = document.querySelector("#task-name-input");
        let addTaskButton = document.querySelector("#add-task-btn");
        let startMessage = document.querySelector("#start-message");
        let showAllButton = document.querySelector("#show-all-btn");
        let showNotCompletedButton = document.querySelector("#show-not-completed-btn");
        let taskList = document.querySelector(".task-list");

        let tasksListView = new TasksListView(taskList);

        addTaskButton.addEventListener("click", addTaskHandler);
        showAllButton.addEventListener("click", showAllHandler);
        showNotCompletedButton.addEventListener("click", showNotCompletedHandler);

        window.addEventListener("load", function () {
            tasksListView.drawAll();
        });

        taskNameInput.addEventListener("keydown", function (e) {
            if (e.code == "Enter") addTaskHandler();
        })

        function addTaskHandler() {
            if (taskNameInput.value) {
                if (!startMessage.hidden) startMessage.hidden = true;

                let newTask = new Task(taskNameInput.value);
                dataService.add(newTask).then(() => tasksListView.drawAll());
                taskNameInput.value = "";
            } else {
                alert("введите имя задачи");
            }
        }

        function showAllHandler() {
            tasksListView.drawAll();
        }

        function showNotCompletedHandler() {
            tasksListView.drawNotCompleted();
        }
    

        