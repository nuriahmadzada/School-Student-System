$(document).ready(function () {
    let lessonList = [];
    let error = document.querySelector(".error-msg");
    let form = document.querySelector("#lesson-add");
    let inputLessonName = document.querySelector("#inputLessonName");
    let inputClassName = document.querySelector("#inputClassName");
    let inputTeacherName = document.querySelector("#inputTeacherName");
    let inputTeacherSurname = document.querySelector("#inputTeacherSurname");
    let addLessonBtn = document.querySelector("#addLessonBtn");
    var count = 0;
    $(error).hide();
  
    function createLesson() {
        addLessonBtn.addEventListener("click", function (e) {
        e.preventDefault();
        if (
          $(inputLessonName).val() != "" &&
          $(inputClassName).val() != "" &&
          $(inputTeacherName).val() != "" &&
          $(inputTeacherSurname).val() != ""
        ) {
          count++;
          $(error).hide();
          lessonList.push({
            id: count,
            lessonName: $(inputLessonName).val(),
            className: $(inputClassName).val(),
            teacherName: $(inputTeacherName).val(),
            teacherSurname: $(inputTeacherSurname).val()
          });
          console.log(lessonList);
          localStorage.setItem("lessonList", JSON.stringify(lessonList));
  
          $(form).trigger("reset");
          swal("Uğurlu Əməliyyat", "Məlumatlar Əlavə edildi", "success");
        } else {
          $(error).show();
        }
      });
    }
    createLesson();
  });
  