$(document).ready(function () {
  setDataToTable();
  let examList = [];
  let form = document.querySelector("#exam");
  let student = JSON.parse(localStorage.getItem("studentList"));
  let lesson = JSON.parse(localStorage.getItem("lessonList"));

  let group = document.querySelector(".student-select");
  var content = "<select id='inputStateStudent' class='form-control'>";
  student.forEach((element) => {
    content += "<option>" + element.name + "</option>";
  });
  content += "</select>";
  $(group).append(content);

  let groupLesson = document.querySelector(".lesson-select");
  var content = "<select id='inputStateLesson' class='form-control'>";
  lesson.forEach((element) => {
    content += "<option>" + element.lessonName + "</option>";
  });
  content += "</select>";
  $(groupLesson).append(content);

  let examDone = document.querySelector("#submitExam");
  var count = 0;
  examDone.addEventListener("click", function (e) {
    e.preventDefault();
    count++;
    let date = document.querySelector("#autoclose-date");
    let point = document.querySelector("#examPoint");
    let studentName = document.querySelector("#inputStateStudent");
    let lessonName = document.querySelector("#inputStateLesson");

    examList.push({
      id: count,
      student: $(studentName).val(),
      lesson: $(lessonName).val(),
      examDate: $(date).val(),
      point: $(point).val(),
    });

    localStorage.setItem("examList", JSON.stringify(examList));
    $(form).trigger("reset");
    window.location.reload();
  });

  function setDataToTable() {
    let exams = JSON.parse(localStorage.getItem("examList"));
    let table = document.querySelector(".table-exam");
    var content = "<tbody>";
    exams.forEach((element) => {
      content +=
        "<tr>" +
        "<td>" +
        element.id +
        "</td>" +
        "<td>" +
        element.student +
        "</td>" +
        "<td>" +
        element.lesson +
        "</td>" +
        "<td>" +
        element.examDate +
        "</td>" +
        "<td>" +
        element.point +
        "</td>";
      ("</tr>");
    });
    content += "</table>";

    $(table).append(content);
  }

  let exportExcel = document.querySelector("#exportExcel");
  let table = document.querySelector("#exportTable");
  exportExcel.addEventListener("click", function (e) {
    e.preventDefault();
    $("#exportTable").table2excel({
      exclude: ".noExl",
      name: "Worksheet Name",
      filename: "SomeFile", //do not include extension
      fileext: ".xls", // file extension
    });
  });
});
