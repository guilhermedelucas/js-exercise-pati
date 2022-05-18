function generateRandomRgbColor() {
	return Math.floor(Math.random() * 255);
}

function reloadColors() {
	var boxes = document.querySelectorAll('.box');

	for (var index = 0; index < boxes.length; index++) {
		const element = boxes[index];

		const colorR = generateRandomRgbColor();
		const colorB = generateRandomRgbColor();
		const colorG = generateRandomRgbColor();

		element.style.backgroundColor = `rgb(${colorR},${colorB}, ${colorG})`;
		// ou
		// element.style.backgroundColor = `rgb(${generateRandomRgbColor()},${generateRandomRgbColor()}, ${generateRandomRgbColor()})`;
	}
}
