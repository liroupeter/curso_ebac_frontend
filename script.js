$(document).ready(function () {
    $("#taskForm").on("submit", function (e) {
    e.preventDefault();


    const taskText = $("#taskInput").val().trim();


    if (taskText === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }


    const newTask = $("<li>").text(taskText);


    $("#taskList").append(newTask);


    $("#taskInput").val("");
    });


    $("#taskList").on("click", "li", function () {
    $(this).toggleClass("completed");
    });
});