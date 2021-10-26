const Containeer = document.querySelector(".List")
var ListDv = Containeer.querySelector(".ListDv");
//////////////////////////////


if (!ListDv) {
    Create(null, {
        class: 'ListDv',
        id: "list"
    },
        "ul",
        (ul) => {
            Containeer.appendChild(ul);
            ListDv = ul;
        })
}



(async function fetchTodos() {
    const FetchData = await fetch("https://jsonplaceholder.typicode.com/todos");
    const DataFrom = await FetchData.json();
    console.log(DataFrom)
    DataFrom.slice(0, 10).forEach((todo) => renderTodo(ListDv, todo));
})();




const InputContain= document.querySelector(".InputContain")
const Input = InputContain.querySelector(".InputContainer")
const InputButton = InputContain.querySelector(".ButtonClass1")

   InputButton.addEventListener("click" , () =>{
    const todo={
        class:" information",
        title:Input.value
    }
    renderTodo(ListDv, todo)

    Input.value=null;
}) 

////////////////Render Function
function renderTodo(list, todo) {
    Create(todo.title, { class: "todo" , id:todo.id }, "li", (li) => {
        Create("X", { class: "btn" }, "button", (button) => {
            button.addEventListener("click" , ()=>{
                list.removeChild(li)
            })

            li.appendChild(button)
            list.appendChild(li)
        })
    })
}
/*function Render(Listt , To){
    Create(
    To.title,
    {class:"To"},
    "li",
    (li)=>{
        Create("X",
         { class:"ButtonClass"},
         "button",
         (button)=>{
             li.appendChild(button)
             Listt.appendChild(li)   }  )} )}*/

//////////////// Creatae Function
function Create(content, class_id, Tag, funct) {
    const CreateEl = document.createElement(Tag);
    const AttrubKey = Object.keys(class_id);

    AttrubKey.forEach(key => {
        CreateEl.setAttribute(key, class_id[key])
    })
    if (content) {
        CreateEl.textContent = content;
    }

    funct(CreateEl)
}
