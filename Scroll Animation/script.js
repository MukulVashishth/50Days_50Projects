const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkboxes);

checkboxes();

function checkboxes() {
  const triggerBottom = window.innerHeight * 0.9;

  boxes.forEach((box) => {
    // Here basically getBoundingClientRect return karta h kee rectangle viewport k relative konsi position p h
    const boxTop = box.getBoundingClientRect().top;

    //Iska matlab kee window uss rectangle ko paar krr chuki h to abb vo show hona chahiye screen p
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
