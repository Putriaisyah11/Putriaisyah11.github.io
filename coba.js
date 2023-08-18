window.addEventListener("load", function () {
    var skills = document.getElementsByClassName("skill");
  
    for (var i = 0; i < skills.length; i++) {
      var skill = skills[i];
      var percent = skill.getAttribute("data-percent");
      skill.style.width = percent + "%";
    }
  });
  