const addForm = document.querySelector('.add'); //polje za dodavanje 
const list = document.querySelector('.todos');  //lista svih zadataka. UL TAG!
const search = document.querySelector('.search input'); // polje za search

const generateTemplate = todo => { 
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    list.innerHTML += html;             
};
                                    
addForm.addEventListener('submit', e => {       
    e.preventDefault();                         
    const todo = addForm.add.value.trim();      

    if(todo.length > 0){                        //logika ako nije prazno polje, da se doda novi zadatak
        generateTemplate(todo); //funkcija koja stvara HTML i prima parameta, a taj parametaj je iznad definisan
        addForm.reset();        
    }
    
    
});

//delete todos
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos = (term) => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'))

    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'))
};
//keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});