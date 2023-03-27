//window.onload = function() {
//or:
$(document).ready(function () {
    loadTasksFromStorage();
    showTasks();
})

var tasks = [];
var count = 0;

function submit() {
    var validated = validate();
    if(validated) {
        var ul = document.getElementById("tasksList");
        tasks.push(document.taskForm.task.value);
        storeTasksIntoCache();
    }
    return true;
}

function reset() {
    document.taskForm.task.value = "";
}

function showTasks() {
    var ul = document.getElementById("tasksList");
    ul.innerHTML = "";
    for(var t in tasks) {
        var li = document.createElement("li");
        li.innerHTML = tasks[t];
        ul.appendChild(li);
    }
}

function displayErrorMsg(display) {
    document.getElementById("errorMsg").setAttribute("class", (display ? "red" : "hidden"));
}

function validate() {
    var valid = document.taskForm.task.value && document.taskForm.task.value.length >= 3;
    displayErrorMsg(!valid);
    return true;
}

function storeTasksIntoCache() {
    console.log(">>> store");
    localStorage['tasks'] = JSON.stringify(tasks);
}

function loadTasksFromStorage() {
    console.log(">>> load");
    var stored = localStorage['tasks'];
    if (stored) tasks = JSON.parse(stored);
    else tasks = ["tu budu tasky"];
    console.log(tasks);
}