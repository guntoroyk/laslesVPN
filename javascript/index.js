console.log("connected!!");

const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", function () {
  const items = document.querySelectorAll(".item");

  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains("active")) {
      items[i].classList.remove("active");
      this.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
      items[i].classList.add("active");
      this.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
  }
});
