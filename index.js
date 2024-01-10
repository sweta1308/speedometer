const input = document.getElementById("range")

function setSpeed(e) {
  const speed = parseInt(e.target.value);
  const needle = document.getElementById('needle');
  const angle = 270 * speed/180 - 135;
  needle.style.transform = `translateX(-50%) rotate(${angle}deg)`;
}

function setNumbers() {
  const speedometer = document.getElementById("speedometer")
  const numberArr = [0, 30, 60, 90, 120, 150, 180]
  for (let i=0; i<numberArr.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("keys");
    newDiv.style.transform = `translateX(-50%) rotate(${270 * numberArr[i]/180 - 135}deg)`;
    newDiv.innerHTML = `<p>${numberArr[i]}</p>`
    speedometer.appendChild(newDiv)
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    setSpeed()
  }
});

window.addEventListener("load", () => setNumbers());
input.addEventListener("input", (e) => setSpeed(e))