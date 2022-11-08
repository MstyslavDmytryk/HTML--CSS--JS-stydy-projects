const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const progress = document.querySelector("#progress");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

prev.addEventListener("click", () => {
  currentActive--;
  console.log(currentActive);
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

next.addEventListener("click", () => {
  if (currentActive >= circles.length) {
    return
  }

  currentActive++;
  console.log(currentActive);

  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
      console.log("circle index:" + index)
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  switch (actives.length) {
    case 1:
      progress.style.width = "0%";
      break;
    case 2:
      progress.style.width = "33%";
      break;
    case 3:
      progress.style.width = "66%";
      break;
    case 4:
      progress.style.width = "100%";
      break;
  }

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === 4) {
    next.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}
