document.getElementById('formulario').addEventListener('submit', saveTask);



function saveTask(e) {

    let titulo = document.getElementById('titulo').value;
    let descripcion = document.getElementById('descripcion').value.trim();

    const tarea = {
        titulo,
        descripcion
    };

    if (localStorage.getItem('tareas') === null) {

        let tareas = [];
        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
    } else {
        let tareas = JSON.parse(localStorage.getItem('tareas'));
        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }

    obtenerTarea();
    document.getElementById('formulario').reset();
    e.preventDefault();

    
}

function obtenerTarea() {
    let tareasObtenida = JSON.parse(localStorage.getItem('tareas'));
    let divTareas = document.getElementById("tareas");

    divTareas.innerHTML = " ";

    for (let i = 0; i < tareasObtenida.length; i++) {

        let titulo = tareasObtenida[i].titulo;
        let descripcion = tareasObtenida[i].descripcion;
        divTareas.innerHTML += 
        `<div class="card mb-3">
            <div class="card-body">
                <p>${titulo} - ${descripcion}</p>
                <a class=" btn btn-danger" onclick="eliminarTarea('${titulo}')">Delete</a>
            </div>
        
        </div>`
    }
}

function eliminarTarea(titulo){
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    for (let index = 0; index < tareas.length; index++) {
        
        if(tareas[index].titulo == titulo){
            tareas.splice(index,1);
        }
        
    }

    localStorage.setItem('tareas', JSON.stringify(tareas));
    obtenerTarea();
}