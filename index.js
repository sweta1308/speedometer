const rangeContainer = document.getElementById("range-container");
const knob = document.getElementById("knob");
let currentSpeed = 0;

const setSpeed = (value) => {
  currentSpeed = value;
  const needle = document.getElementById('needle');
  const angle = 270 * value/180 - 135;
  if (angle >= -135 && angle <= 135) {
    needle.style.transform = `translateX(-50%) rotate(${angle}deg)`;
  }
}

const handleDrag = (e) => {
  const knobPosition = rangeContainer.getBoundingClientRect().bottom - e.clientY;
  const speedValue = Math.round(knobPosition);
  setSpeed(speedValue);
  knob.style.bottom = `${knobPosition <= 180 && knobPosition}px`;
}

knob.addEventListener("mousedown", (e) => {
  knob.style.cursor = "grabbing";
  rangeContainer.addEventListener("mousemove", handleDrag);
});

knob.addEventListener("mouseup", (e) => {
  knob.style.cursor = "pointer";
  rangeContainer.removeEventListener("mousemove", handleDrag);
});

window.addEventListener("mouseup", (e) => {
  if (e.target !== knob) {
    knob.style.cursor = "pointer";
    rangeContainer.removeEventListener("mousemove", handleDrag);
  }
});

const setNumbers = () => {
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

window.addEventListener("load", () => setNumbers());