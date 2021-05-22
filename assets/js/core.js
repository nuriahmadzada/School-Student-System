$(document).ready(function () {
  //#region MenuJs
  $.sidebarMenu($(".vertical-menu"));
  $(function () {
    for (
      var a = window.location,
        abc = $(".vertical-menu a")
          .filter(function () {
            return this.href == a;
          })
          .addClass("active")
          .parent()
          .addClass("active");
      ;

    ) {
      if (!abc.is("li")) break;
      abc = abc.parent().addClass("in").parent().addClass("active");
    }
  });
  /* -- Infobar Setting Sidebar -- */
  $("#infobar-settings-open").on("click", function (e) {
    e.preventDefault();
    $(".infobar-settings-sidebar-overlay").css({
      background: "rgba(0,0,0,0.4)",
      position: "fixed",
    });
    $("#infobar-settings-sidebar").addClass("sidebarshow");
  });
  $("#infobar-settings-close").on("click", function (e) {
    e.preventDefault();
    $(".infobar-settings-sidebar-overlay").css({
      background: "transparent",
      position: "initial",
    });
    $("#infobar-settings-sidebar").removeClass("sidebarshow");
  });
  /* -- Menu Hamburger -- */
  $(".menu-hamburger").on("click", function (e) {
    e.preventDefault();
    $("body").toggleClass("toggle-menu");
    $(".menu-hamburger img").toggle();
  });
  /* -- Menu Topbar Hamburger -- */
  $(".topbar-toggle-hamburger").on("click", function (e) {
    e.preventDefault();
    $("body").toggleClass("topbar-toggle-menu");
    $(".topbar-toggle-hamburger img").toggle();
  });
  /* -- Media Size -- */
  function mediaSize() {
    if (window.matchMedia("(max-width: 767px)").matches) {
      $("body").removeClass("toggle-menu");
      $(".menu-hamburger img.menu-hamburger-close").hide();
      $(".menu-hamburger img.menu-hamburger-collapse").show();
    }
  }
  mediaSize();
  window.addEventListener("resize", mediaSize, false);
  /* -- Bootstrap Popover -- */
  $('[data-toggle="popover"]').popover();
  /* -- Bootstrap Tooltip -- */
  $('[data-toggle="tooltip"]').tooltip();
  //#endregion MenuJS

  let error = document.querySelector(".error-msg");
  $(error).hide();

  let data = JSON.parse(localStorage.getItem("studentList"));
  function getStudentList() {
    let table = document.querySelector(".table-student");
    var content = "<tbody>";
    data.forEach((element) => {
      content +=
        "<tr>" +
        "<td>" +
        element.id +
        "</td>" +
        "<td>" +
        element.name +
        "</td>" +
        "<td>" +
        element.surname +
        "</td>" +
        "<td>" +
        element.classNumber +
        "</td>" +
        "<td>" +
        element.inputAddress +
        "</td>" +
        "<td>" +
        element.inputmaskPhone +
        "</td>" +
        "<td>" +
        '<div class="button-list">' +
        `<button class="btn btn-danger-rgba" id="deleteBtn" data-id="${element.id}" data-toggle="modal" data-target="#deleteModal">` +
        '<i class="feather icon-trash"></i>' +
        "</button>" +
        "</div>";
      ("</td>");
      ("</tr>");
    });

    content += "</table>";

    $(table).append(content);
  }
  getStudentList();

  // EDIT
  //   let selectedData;
  //   $(document).on("click", "#editBtn", function (e) {
  //     let dataId = $(this).data("id");
  //     selectedData = data.filter((e) => e.id == dataId);

  //     let inputEditName = document.querySelector("#inputEditName");
  //     $(inputEditName).val(selectedData[0].name);

  //     let inputEditSurName = document.querySelector("#inputEditSurName");
  //     $(inputEditSurName).val(selectedData[0].surname);

  //     let classEditNumber = document.querySelector("#classEditNumber");
  //     $(classEditNumber).val(selectedData[0].classNumber);

  //     let inputEditmaskPhone = document.querySelector("#inputEditmask-phone");
  //     $(inputEditmaskPhone).val(selectedData[0].inputmaskPhone);

  //     let inputEditAddress = document.querySelector("#inputEditAddress");
  //     $(inputEditAddress).val(selectedData[0].inputAddress);
  //   });

  //   let saveBtn = document.querySelector("#saveEditedData");
  //   saveBtn.addEventListener("click", function () {
  //     selectedData[0].name = $(inputEditName).val();
  //     selectedData[0].surname = $(inputEditSurName).val();
  //     selectedData[0].classNumber = $(classEditNumber).val();
  //     selectedData[0].inputAddress = $(inputEditAddress).val();
  //     let dat = data.findIndex((e) => e.id == selectedData[0].id);
  //     data.splice(dat, 1);
  //     console.log(data);
  //     data.push(selectedData[0]);
  //     console.log(data);
  //     // window.location.reload();
  //   });

  // DELETE
  let index;
  $(document).on("click", "#deleteBtn", function (e) {
    let dataId = $(this).data("id");
    index = data.findIndex((e) => e.id == dataId);
    console.log(index);
  });

  let confirmDel = document.querySelector("#confirmDel");

  confirmDel.addEventListener("click", function () {
    data.splice(index, 1);
    localStorage.removeItem("studentList");
    localStorage.setItem("studentList", JSON.stringify(data));
    window.location.reload();
  });
});
