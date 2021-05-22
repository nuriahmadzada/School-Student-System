$(document).ready(function () {
  let studentList = [];
  let error = document.querySelector(".error-msg");
  let form = document.querySelector("#student-add");
  let inputName = document.querySelector("#inputName");
  let inputSurName = document.querySelector("#inputSurName");
  let classNumber = document.querySelector("#classNumber");
  let inputmaskPhone = document.querySelector("#inputmask-phone");
  let inputAddress = document.querySelector("#inputAddress");
  var count = 0;
  $(error).hide();

  function createStudent() {
    addStudent.addEventListener("click", function (e) {
      e.preventDefault();
      if (
        $(inputName).val() != "" &&
        $(inputSurName).val() != "" &&
        $(classNumber).val() != "" &&
        $(inputmaskPhone).val() != "" &&
        $(inputAddress).val() != ""
      ) {
        count++;
        $(error).hide();
        studentList.push({
          id: count,
          name: $(inputName).val(),
          surname: $(inputSurName).val(),
          classNumber: $(classNumber).val(),
          inputmaskPhone: $(inputmaskPhone).val(),
          inputAddress: $(inputAddress).val(),
        });
        console.log(studentList);
        localStorage.setItem("studentList", JSON.stringify(studentList));

        $(form).trigger("reset");
        swal("Uğurlu Əməliyyat", "Məlumatlar Əlavə edildi", "success");
      } else {
        $(error).show();
      }
    });
  }
  createStudent();
});
