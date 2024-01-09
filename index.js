function setSpeed() {
    const speedInput = document.getElementById('speedInput');
    const speed = parseInt(speedInput.value);

    if (speed >= 0 && speed <= 180) {
      const needle = document.getElementById('needle');
      const angle = (speed / 180) * 180 - 90;
      needle.style.transform = `translateX(-50%) rotate(${angle}deg)`;
    } else {
      alert('Please enter a valid speed between 0 and 180 km/h.');
    }
  }