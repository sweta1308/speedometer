function setSpeed() {
    const speedInput = document.getElementById("speedInput");
    const speedValue = parseFloat(speedInput.value);

    if (isNaN(speedValue) || speedValue < 0 || speedValue > 180) {
        alert("Please enter a valid speed between 0 and 180.");
        return;
    }

    const angle = (speedValue / 180) * Math.PI - Math.PI / 1;

    const x = 100 + 80 * Math.cos(angle);
    const y = 100 + 80 * Math.sin(angle);
    needle.setAttribute("x2", x);
    needle.setAttribute("y2", y);
}

