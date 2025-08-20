 let tasks = [];

        // Función para agregar una tarea
        function addTask() {
            const taskInput = document.getElementById("taskInput").value;
            const errorDiv = document.getElementById("error");

            // Manejo de excepciones: Si el campo está vacío, no agregar la tarea
            try {
                if (!taskInput.trim()) {
                    throw new Error("Por favor ingresa una tarea válida.");
                }
                
                const task = {
                    text: taskInput,
                    completed: false
                };
                tasks.push(task);
                displayTasks();
                document.getElementById("taskInput").value = ''; // Limpiar input
                errorDiv.innerHTML = ''; // Limpiar mensajes de error
            } catch (error) {
                errorDiv.innerHTML = error.message;
            }
        }

        // Función para mostrar las tareas en la lista
        function displayTasks() {
            const taskList = document.getElementById("taskList");
            taskList.innerHTML = '';

            // Recorremos el arreglo de tareas con un ciclo for
            for (let i = 0; i < tasks.length; i++) {
                const li = document.createElement("li");
                li.textContent = tasks[i].text;
                
                // Si la tarea está marcada como completada, aplicar estilo
                if (tasks[i].completed) {
                    li.classList.add("completed");
                }

                // Crear botón para marcar tarea como completada
                const markBtn = document.createElement("button");
                markBtn.textContent = tasks[i].completed ? "Desmarcar" : "Completada";
                markBtn.className = "mark-completed";
                markBtn.onclick = function() {
                    tasks[i].completed = !tasks[i].completed;
                    displayTasks(); // Volver a mostrar la lista
                };
                
                // Crear botón para eliminar tarea
                const deleteBtn = document.createElement("button");
                deleteBtn.textContent = "Eliminar";
                deleteBtn.className = "delete";
                deleteBtn.onclick = function() {
                    tasks.splice(i, 1); // Eliminar tarea del arreglo
                    displayTasks(); // Volver a mostrar la lista
                };
                
                li.appendChild(markBtn); // Añadir botón de marcar como completada
                li.appendChild(deleteBtn); // Añadir botón de eliminar
                taskList.appendChild(li);
            }
        }