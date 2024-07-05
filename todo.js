
let todolist=[
  {item:'React',date:'30/05/2024'},
{item:'Swift',date:'30/06/2024'}];
displayitems();
function additems() {
  let inputItem=document.querySelector('#inputitems');
  let inputdate=document.querySelector('#inputdate');
  let todoItem = inputItem.value;
  let tododate=inputdate.value;
  if(todoItem && todoItem){
    
  todolist.push({item:todoItem,date:tododate});
    
  
  inputItem.value='';
  inputdate.value='';
  displayitems();
  
  }
  else{
    alert('please enter tesk and date');
  }
}
function displayitems(){
  
  let displayitems=document.querySelector('#displayitems');
  
  let newhtml='';
  for(let i=0;i<todolist.length;i++){
    let {item,date}=todolist[i];
  newhtml+=`<span class="itemsinlist">${item}</span>
  <span class="itemsinlist">${date}</span>
  <div class=" input-group"><button class="btn btn-outline-danger buttonsize mx-5" onclick="todolist.splice(${i},1); displayitems();" >Delete</button>
 </div>
  
  `;
  localStorage.setItem('item',JSON.stringify(todolist.item));
  localStorage.setItem('date',JSON.stringify(todolist.date));
  }

  displayitems.innerHTML=newhtml;
}
