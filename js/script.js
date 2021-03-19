let post=document.getElementById("ButtonPost");
let clear=document.getElementById("ButtonClear");
let mark=document.getElementById("ButtonMark");
let del=document.getElementById("ButtonDelete");

post.addEventListener("click",ToDoPost);
clear.addEventListener("click",ToDoClear);
mark.addEventListener("click",ToDoMark);
del.addEventListener("click",ToDoDelete);

function ToDoPost(e)
{
	e.preventDefault();
	var toDo=document.getElementById("todoText").value;
	var list=document.getElementById("todoList");
	var currentListHTML=list.innerHTML;
	list.innerHTML=currentListHTML + `<input type="checkbox" name="todo"/> ${toDo} <br>`;
}

function ToDoClear()
{
	var todos=document.getElementsByName("todo");
	for (var i=0; i<todos.length; i++)
	{
		todos[i].checked=false;
	}	
}

function ToDoDelete()
{
	var list=document.getElementById("todoList");
	list.innerHTML="";
}

function ToDoMark(e)
{
	var todos=document.getElementsByName("todo");
	for (var i=0; i<todos.length; i++)
	{
		todos[i].checked=true;
	}
}