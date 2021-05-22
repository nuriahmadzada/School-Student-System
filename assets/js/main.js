$(document).ready(function () {
    let lessonData = JSON.parse(localStorage.getItem("lessonList"));
    function getLessonList() {
      let table = document.querySelector(".table-lesson");
      var content = "<tbody>";
      lessonData.forEach((element) => {
        content +=
          "<tr>" +
          "<td>" +
          element.id +
          "</td>" +
          "<td>" +
          element.lessonName +
          "</td>" +
          "<td>" +
          element.teacherName +
          "</td>" +
          "<td>" +
          element.teacherSurname +
          "</td>" +
          "<td>" +
          element.className +
          "</td>" +
          "<td>" +
          '<div class="button-list">' +
          `<button class="btn btn-danger-rgba" id="deleteBtnn" data-id="${element.id}" data-toggle="modal" data-target="#deleteModal">` +
          '<i class="feather icon-trash"></i>' +
          "</button>" +
          "</div>";
        ("</td>");
        ("</tr>");
      });
  
      content += "</table>";
  
      $(table).append(content);
    }
    getLessonList();
  
    // DELETE
    let index;
    $(document).on("click", "#deleteBtnn", function (e) {
      let dataId = $(this).data("id");
      index = lessonData.findIndex((e) => e.id == dataId);
      console.log(index);
    });
  
    let confirmDel = document.querySelector("#confirmDell");
  
    confirmDel.addEventListener("click", function () {
      lessonData.splice(index, 1);
      localStorage.removeItem("lessonList");
      localStorage.setItem("lessonList", JSON.stringify(lessonData));
      window.location.reload();
    });
  });
  