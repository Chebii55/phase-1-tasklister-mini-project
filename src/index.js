document.addEventListener("DOMContentLoaded", () => {
let form=document.querySelector('form');
form=addEventListener('submit',(e)=>{
e.preventDefault();
toDoo(e.target.new_task_description.value)
//form.reset()->made to clear after entering the data,it giving errors tho;

})
 })

function toDoo(toDo){
let lis=document.createElement('li');
lis.textContent=`${toDo}`;
document.querySelector('#list').appendChild(lis)
let del=document.createElement('button');
del.textContent='X';
lis.appendChild(del);
del.addEventListener('click',handleDelete)

}
function handleDelete(e){
  e.target.parentNode.remove();
}