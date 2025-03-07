const input = document.getElementById("notes-content");
const listContainer = document.getElementById("list-container");

function addtask(){
  const content = input.value;
  if(content.trim()!==""){
    const note = document.createElement("li");
    note.className="items";
    note.textContent=content;
    listContainer.appendChild(note);
    let span = document.createElement("span");
    span.textContent="\u00d7";
    note.appendChild(span);
  }
  else{
    alert("enter a note");
  }
  input.value="";
  saveData();
}

listContainer.addEventListener("click",event=>{
  console.log(event.target.tagName);
  if(event.target.tagName === "LI"){
    event.target.classList.toggle("checked");
    saveData();
  }
  else if(event.target.tagName === "SPAN"){
    console.log(event.target.parentElement);
    event.target.parentElement.remove();
    saveData();
  }
});

function saveData(){
  localStorage.setItem("data",listContainer.innerHTML);
}
function showData(){
  listContainer.innerHTML=localStorage.getItem("data");
}
showData();
