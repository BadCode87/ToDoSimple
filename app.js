
const form = document.getElementById('formTask');
const input = document.querySelector('#title');
const descripcion = document.querySelector('#descripcion');

let smallDiv;

// smallDiv.classList.add('w-50');
// smallDiv.classList.add('h-50');
// smallDiv.classList.add('bg-dark');
// smallDiv.classList.add('text-white');


arrClase = ['bg-dark', 'text-white', 'w-100', 'm-2', 'justtify-content-center'];

const divTareas = document.querySelector("#tareas"); 


form.addEventListener('submit', (e) => {

    e.preventDefault();
    //Obteniendo la informacion del input
    const valorInput  = input.value;
    smallDiv = document.createElement('div');
    const h3 = document.createElement('h3');
    h3.append(valorInput);
    agregarClase();

    const valorDescripcion = descripcion.value;
    const p = document.createElement('p');
    p.append(valorDescripcion);
    
    smallDiv.append(h3);
    smallDiv.append(p);
    divTareas.append(smallDiv);

    

    
    
    
});

const agregarClase = (arr) => {
    arrClase.forEach((element) => {
        smallDiv.classList.add(element);
    });
}




console.log(smallDiv);
