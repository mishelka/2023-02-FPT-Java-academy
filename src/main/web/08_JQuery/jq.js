//$(document).ready(function () {
$(function(){
    $("#task").blur(function() {displayErrorMsg(!validate())});
    $('#task').focus();
    loadTasksFromStorage();
    showTasks();
});

var tasks = [];
var count = 0;

function doSubmit() {
    var validated = validate();
    if(validated) {
        //var ul = document.getElementById("tasksList");
        var ul = $("#tasksList");
        tasks.push(document.taskForm.task.value);
        storeTasksIntoCache();
    }
    return false;
}

function reset() {
    document.taskForm.task.value = "";
}

function showTasks() {
    //var ul = document.getElementById("tasksList");
    //ul.innerHTML = "";
    $("#tasksList").html("");
    for(var t in tasks) {
        //var li = document.createElement("li");
        //li.innerHTML = tasks[t];
        //$("#tasksList").appendChild(li);
        $("#tasksList").prepend($("<li>").html(tasks[t]));
    }
}

function displayErrorMsg(display) {
    //document.getElementById("errorMsg").setAttribute("class", (display ? "red" : "hidden"));
    //$("#errorMsg").attr("class", (display ? "red" : "hidden"));
    if(display) $("#errorMsg").show(); else $("#errorMsg").hide();
}

function validate() {
    var valid = document.taskForm.task.value && document.taskForm.task.value.length >= 3;
    return valid;
}

function storeTasksIntoCache() {
    localStorage['tasks'] = JSON.stringify(tasks);
}

function loadTasksFromStorage() {
    var stored = localStorage['tasks'];
    if (stored) tasks = JSON.parse(stored);
    else tasks = [];
}

//used only for testing / can be used to delete all tasks
function emptyCache() {
    localStorage['tasks'] = "";
}