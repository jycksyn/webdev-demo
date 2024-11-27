
document.getElementById("submitButton").addEventListener("click", addTask);


function addTask(e){
    var li = document.createElement('li');
    li.innerText = document.querySelector("#taskInput").value;

    const deleteButton = document.createElement("button");
    deleteButton.className="button";
    deleteButton.innerText="x";
    deleteButton.addEventListener("click", () => taskList.removeChild(li));
    li.append(deleteButton)
    document.querySelector("#taskList").append(li);
}