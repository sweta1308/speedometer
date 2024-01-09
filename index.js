function setSpeed() {
    const speedInput = document.getElementById('speedInput');
    const speed = parseInt(speedInput.value);

    if (speed >= 0 && speed <= 180) {
      const needle = document.getElementById('needle');
      const angle = 270 * speed/180 - 135;
      needle.style.transform = `translateX(-50%) rotate(${angle}deg)`;
      speedInput.value = 0
    } else {
      alert('Please enter a valid speed between 0 and 180 km/h.');
    }
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

  window.addEventListener("load", () => setNumbers())